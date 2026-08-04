import { NextResponse } from "next/server";
import { verifyAdminToken } from "@/middleware/authMiddleware";
import { Category } from "@/models";
import { ensureDbSynced } from "@/config/database";

// GET All Categories (Paginated)
export async function GET(request) {
  try {
    const auth = verifyAdminToken(request);

    if (auth.error) {
      return NextResponse.json(
        {
          success: false,
          message: auth.error,
        },
        { status: auth.status }
      );
    }

    await ensureDbSynced();

    // Read query params
    const { searchParams } = new URL(request.url);

    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;

    const offset = (page - 1) * limit;

    // Get total records
    const totalRecords = await Category.count({
      where: {
        isDeleted: false,
      },
    });

    // Get paginated data
    const categories = await Category.findAll({
      where: {
        isDeleted: false,
      },
      order: [["createdAt", "ASC"]],
      limit,
      offset,
    });

    return NextResponse.json(
      {
        success: true,
        categories,

        pagination: {
          page,
          limit,
          totalRecords,
          totalPages: Math.ceil(totalRecords / limit),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Get Categories Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error.",
      },
      { status: 500 }
    );
  }
}

// Create Category
export async function POST(request) {
  try {
    const auth = verifyAdminToken(request);
    if (auth.error) {
      return NextResponse.json(
        { success: false, message: auth.error },
        { status: auth.status }
      );
    }

    await ensureDbSynced();

    const body = await request.json();
    const { name } = body;
    const categoryName = name?.trim();

    if (!categoryName) {
      return NextResponse.json(
        {
          success: false,
          message: "Category name is required.",
        },
        { status: 400 }
      );
    }

    const existingCategory = await Category.findOne({
      where: {
        name: categoryName,
      },
    });

    if (existingCategory) {
      return NextResponse.json(
        {
          success: false,
          message: "Category already exists.",
        },
        { status: 409 }
      );
    }

    const category = await Category.create({
      name: categoryName,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Category created successfully.",
        category,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create Category Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error.",
      },
      { status: 500 }
    );
  }
}

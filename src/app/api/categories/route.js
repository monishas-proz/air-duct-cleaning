import { NextResponse } from "next/server";
import { verifyAdminToken } from "@/middleware/authMiddleware";
import { Category } from "@/models";
import { ensureDbSynced } from "@/config/database";

// GET All Categories
export async function GET(request) {
  try {
    const auth = verifyAdminToken(request);
    if (auth.error) {
      return NextResponse.json(
        { success: false, message: auth.error },
        { status: auth.status }
      );
    }

    await ensureDbSynced();

    const categories = await Category.findAll({
      where: {
        isDeleted: false,
      },
      order: [["createdAt", "ASC"]],
    });

    return NextResponse.json(
      {
        success: true,
        categories,
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

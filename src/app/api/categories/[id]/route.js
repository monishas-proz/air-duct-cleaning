import { NextResponse } from "next/server";
import { verifyAdminToken } from "@/middleware/authMiddleware";
import { Category } from "@/models";
import { ensureDbSynced } from "@/config/database";

// GET Category By ID
export async function GET(request, { params }) {
  try {
    const auth = verifyAdminToken(request);
    if (auth.error) {
      return NextResponse.json(
        { success: false, message: auth.error },
        { status: auth.status }
      );
    }

    await ensureDbSynced();
    const { id } = await params;

    const category = await Category.findOne({
      where: {
        id,
        isDeleted: false,
      },
    });

    if (!category) {
      return NextResponse.json(
        {
          success: false,
          message: "Category not found.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        category,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Get Category By ID Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error.",
      },
      { status: 500 }
    );
  }
}

// Update Category
export async function PUT(request, { params }) {
  try {
    const auth = verifyAdminToken(request);
    if (auth.error) {
      return NextResponse.json(
        { success: false, message: auth.error },
        { status: auth.status }
      );
    }

    await ensureDbSynced();
    const { id } = await params;
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

    const category = await Category.findOne({
      where: {
        id,
        isDeleted: false,
      },
    });

    if (!category) {
      return NextResponse.json(
        {
          success: false,
          message: "Category not found.",
        },
        { status: 404 }
      );
    }

    const existingCategory = await Category.findOne({
      where: {
        name: categoryName,
      },
    });

    if (existingCategory && existingCategory.id !== category.id) {
      return NextResponse.json(
        {
          success: false,
          message: "Category already exists.",
        },
        { status: 409 }
      );
    }

    category.name = categoryName;
    await category.save();

    return NextResponse.json(
      {
        success: true,
        message: "Category updated successfully.",
        category,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Update Category Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error.",
      },
      { status: 500 }
    );
  }
}

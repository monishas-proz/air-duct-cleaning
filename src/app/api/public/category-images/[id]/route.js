import { NextResponse } from "next/server";
import { Category, CategoryImage } from "@/models";
import { ensureDbSynced } from "@/config/database";

export async function GET(request, { params }) {
  try {
    await ensureDbSynced();
    const { id } = await params;
    const categoryId = id;

    let where = {
      isDeleted: false,
    };

    if (categoryId !== "all") {
      const category = await Category.findByPk(categoryId);

      if (!category || category.isDeleted) {
        return NextResponse.json(
          {
            success: false,
            message: "Category not found.",
          },
          { status: 404 }
        );
      }

      where.categoryId = categoryId;
    }

    const images = await CategoryImage.findAll({
      where,
      order: [["createdAt", "ASC"]],
    });

    return NextResponse.json(
      {
        success: true,
        images,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Public Get Category Images Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error.",
      },
      { status: 500 }
    );
  }
}

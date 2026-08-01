import { NextResponse } from "next/server";
import { verifyAdminToken } from "@/middleware/authMiddleware";
import { Category } from "@/models";
import { ensureDbSynced } from "@/config/database";

export async function PATCH(request, { params }) {
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

    category.isDeleted = true;
    await category.save();

    return NextResponse.json(
      {
        success: true,
        message: "Category deleted successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Delete Category Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error.",
      },
      { status: 500 }
    );
  }
}

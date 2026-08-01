import { NextResponse } from "next/server";
import { verifyAdminToken } from "@/middleware/authMiddleware";
import { CategoryImage } from "@/models";
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

    const image = await CategoryImage.findByPk(id);

    if (!image || image.isDeleted) {
      return NextResponse.json(
        {
          success: false,
          message: "Image not found.",
        },
        { status: 404 }
      );
    }

    image.isDeleted = true;
    await image.save();

    return NextResponse.json(
      {
        success: true,
        message: "Image deleted successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Delete Category Image Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete image.",
      },
      { status: 500 }
    );
  }
}

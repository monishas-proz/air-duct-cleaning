import { NextResponse } from "next/server";
import { Category } from "@/models";
import { ensureDbSynced } from "@/config/database";

export async function GET() {
  try {
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
    console.error("Public Get Categories Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error.",
      },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { verifyAdminToken } from "@/middleware/authMiddleware";
import { Category, CategoryImage } from "@/models";
import { ensureDbSynced } from "@/config/database";
import fs from "fs";
import path from "path";

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

    const formData = await request.formData();
    const categoryId = formData.get("categoryId");
    const title = formData.get("title")?.trim();
    const description = formData.get("description")?.trim() || "";
    const file = formData.get("image");

    if (!categoryId) {

      if (!title) {
        return NextResponse.json(
          {
            success: false,
            message: "Title is required.",
          },
          {
            status: 400,
          }
        );
      }
            return NextResponse.json(
        { success: false, message: "Category ID is required." },
        { status: 400 }
      );
    }

    if (!file || typeof file === "string") {
      return NextResponse.json(
        { success: false, message: "Image is required." },
        { status: 400 }
      );
    }

    const category = await Category.findByPk(categoryId);
    if (!category || category.isDeleted) {
      return NextResponse.json(
        { success: false, message: "Category not found." },
        { status: 404 }
      );
    }

    // Validate file type
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { success: false, message: "Only JPG, PNG and WEBP images are allowed." },
        { status: 400 }
      );
    }

    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { success: false, message: "Image size must be less than 5MB." },
        { status: 400 }
      );
    }

    const extension = path.extname(file.name) || ".jpg";
    const filename = `${Date.now()}${extension}`;

    const uploadDir = path.join(process.cwd(), "uploads", "categories", categoryId.toString());
    fs.mkdirSync(uploadDir, { recursive: true });

    const filePath = path.join(uploadDir, filename);
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    fs.writeFileSync(filePath, buffer);

    const image = await CategoryImage.create({
      categoryId,
      title,
      description,
      image: filename,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Image uploaded successfully.",
        image,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Upload Category Image Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error.",
      },
      { status: 500 }
    );
  }
}

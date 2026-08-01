import { NextResponse } from "next/server";
import { verifyAdminToken } from "@/middleware/authMiddleware";
import { Category, CategoryImage } from "@/models";
import { ensureDbSynced } from "@/config/database";

export async function GET(request, { params }) {
  try {
    const auth = verifyAdminToken(request);

    if (auth.error) {
      return NextResponse.json(
        {
          success: false,
          message: auth.error,
        },
        {
          status: auth.status,
        }
      );
    }

    await ensureDbSynced();

    const { id } = await params;

    const where = {
      isDeleted: false,
    };

    // If not "all", filter by category
    if (id !== "all") {
      const category = await Category.findByPk(id);

      if (!category || category.isDeleted) {
        return NextResponse.json(
          {
            success: false,
            message: "Category not found.",
          },
          {
            status: 404,
          }
        );
      }

      where.categoryId = id;
    }

    const images = await CategoryImage.findAll({
      where,

      include: [
        {
          model: Category,
          as: "category",
          attributes: ["id", "name"],
        },
      ],

      order: [["createdAt", "DESC"]],
    });

    return NextResponse.json(
      {
        success: true,
        images,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Get Category Images Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error.",
      },
      {
        status: 500,
      }
    );
  }
}
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

    // Pagination
    const { searchParams } = new URL(request.url);

    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;
    const offset = (page - 1) * limit;

    const { rows: images, count: totalRecords } =
      await CategoryImage.findAndCountAll({
        where,

        include: [
          {
            model: Category,
            as: "category",
            where: {
              isDeleted: false,
            },
            attributes: ["id", "name"],
          },
        ],

        order: [["createdAt", "DESC"]],

        limit,
        offset,
      });

    const totalPages = Math.ceil(totalRecords / limit);

    return NextResponse.json(
      {
        success: true,

        images,

        pagination: {
          page,
          limit,
          totalPages,
          totalRecords,
        },
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
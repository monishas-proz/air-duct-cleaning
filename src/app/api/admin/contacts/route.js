import { NextResponse } from "next/server";
import { verifyAdminToken } from "@/middleware/authMiddleware";
import { ensureDbSynced } from "@/config/database";
import Contact from "@/models/Contact";

// GET All Contacts
export async function GET(request) {
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

    // Pagination
    const { searchParams } = new URL(request.url);

    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;
    const status = searchParams.get("status") || "All";

    const offset = (page - 1) * limit;

    const where = {};

    if (status !== "All") {
      where.status = status;
    }

    const { rows: contacts, count: totalRecords } =
      await Contact.findAndCountAll({
        where,
        order: [["createdAt", "DESC"]],
        limit,
        offset,
      });

    const totalPages = Math.ceil(totalRecords / limit);

    return NextResponse.json(
      {
        success: true,
        contacts,
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
    console.error("Get Contacts Error:", error);

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
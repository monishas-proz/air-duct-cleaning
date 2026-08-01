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

    const contacts = await Contact.findAll({
      order: [["createdAt", "DESC"]],
    });

    return NextResponse.json(
      {
        success: true,
        contacts,
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
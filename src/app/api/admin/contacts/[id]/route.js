import { NextResponse } from "next/server";
import { verifyAdminToken } from "@/middleware/authMiddleware";
import { ensureDbSynced } from "@/config/database";
import Contact from "@/models/Contact";

// GET Contact By ID
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

    const contact = await Contact.findByPk(id);

    if (!contact) {
      return NextResponse.json(
        {
          success: false,
          message: "Contact not found.",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        contact,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);

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

// Update Contact Status / Remarks
export async function PATCH(request, { params }) {
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

    const body = await request.json();

    const {
      status,
      remarks,
    } = body;

    const contact = await Contact.findByPk(id);

    if (!contact) {
      return NextResponse.json(
        {
          success: false,
          message: "Contact not found.",
        },
        {
          status: 404,
        }
      );
    }

    contact.status = status;
    contact.remarks = remarks;

    await contact.save();

    return NextResponse.json(
      {
        success: true,
        message: "Contact updated successfully.",
        contact,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);

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
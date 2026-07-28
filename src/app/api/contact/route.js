import { NextResponse } from "next/server";
import Contact from "@/models/Contact";
import { ensureDbSynced } from "@/config/database";

export async function POST(request) {
  try {
    await ensureDbSynced();

    const body = await request.json();
    const { fullName, organization, email, phone, service, message } = body;

    // Validation
    if (!fullName || !email || !phone || !service || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        { status: 400 }
      );
    }

    const contact = await Contact.create({
      fullName,
      organization,
      email,
      phone,
      service,
      message,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry submitted successfully.",
        data: contact,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact Form Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

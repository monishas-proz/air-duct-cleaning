import { NextResponse } from "next/server";
import Contact from "@/models/Contact";
import { ensureDbSynced } from "@/config/database";
import { validateContact } from "@/utils/validations/contactValidation";
import sendContactEmails from "@/utils/sendContactEmails";

export async function POST(request) {
  try {
    await ensureDbSynced();

    const body = await request.json();

    const validation = validateContact(body);

    if (!validation.isValid) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed.",
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    const contact = await Contact.create({
      fullName: body.fullName.trim(),
      organization: body.organization?.trim() || "",
      email: body.email.trim().toLowerCase(),
      phone: body.phone.trim(),
      service: body.service.trim(),
      message: body.message.trim(),
    });

    await sendContactEmails(contact);

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
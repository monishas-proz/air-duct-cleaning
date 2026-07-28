import { NextResponse } from "next/server";
import Newsletter from "@/models/Newsletter";
import transporter from "@/config/mail";
import { newsletterTemplate } from "@/templates/newsletterTemplate";
import { ensureDbSynced } from "@/config/database";

export async function POST(request) {
  try {
    await ensureDbSynced();

    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email) {
      return NextResponse.json(
        {
          success: false,
          message: "Email is required.",
        },
        { status: 400 }
      );
    }

    // Check if already subscribed
    const existingSubscriber = await Newsletter.findOne({
      where: { email },
    });

    if (existingSubscriber) {
      return NextResponse.json(
        {
          success: false,
          message: "This email is already subscribed.",
        },
        { status: 409 }
      );
    }

    // Save subscriber
    await Newsletter.create({ email });

    // Send welcome email
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: email,
          subject: "Welcome to Air Care Management!",
          html: newsletterTemplate(),
        });
      } catch (mailErr) {
        console.error("Nodemailer send error:", mailErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Subscribed successfully.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Newsletter Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error.",
      },
      { status: 500 }
    );
  }
}

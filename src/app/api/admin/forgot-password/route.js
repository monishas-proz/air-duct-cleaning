import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import Admin from "@/models/Admin";
import { ensureDbSynced } from "@/config/database";
import generateOtp from "@/utils/generateOtp";
import transporter from "@/config/mail";
import otpTemplate from "@/templates/otpTemplate";

export async function POST(request) {
  try {
    await ensureDbSynced();

    const body = await request.json();
    const { username } = body;

    // Validate request
   if (!username) {
    return NextResponse.json(
      {
        success: false,
        message: "Username is required.",
        errors: {
          username: "Username is required.",
        },
      },
      { status: 400 }
    );
  }

    // Find admin
    const admin = await Admin.findOne({
      where: { username },
    });

    if (!admin) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid username.",
          errors: {
            username: "Invalid username.",
          },
        },
        { status: 404 }
      );
    }

    // Generate OTP
    const otp = generateOtp();

    // Hash OTP
    const hashedOtp = await bcrypt.hash(otp, 10);

    // OTP expires in 5 minutes
    const otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000);

    // Save OTP
    admin.otp = hashedOtp;
    admin.otpExpiresAt = otpExpiresAt;

    await admin.save();

    // Send Email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: admin.email,
      subject: "Air Care - Password Reset OTP",
      html: otpTemplate(admin.username, otp),
    });

    return NextResponse.json(
      {
        success: true,
        message: "OTP has been sent to your registered email.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Forgot Password Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
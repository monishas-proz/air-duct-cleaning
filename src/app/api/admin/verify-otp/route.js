import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import Admin from "@/models/Admin";
import { ensureDbSynced } from "@/config/database";

export async function POST(request) {
  try {
    await ensureDbSynced();

    const { username, otp } = await request.json();

    // Validate request
    if (!username || !otp) {
      return NextResponse.json(
        {
          success: false,
          message: "Username and OTP are required.",
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
          message: "Invalid username or OTP.",
        },
        { status: 401 }
      );
    }

    // Check OTP exists
    if (!admin.otp || !admin.otpExpiresAt) {
      return NextResponse.json(
        {
          success: false,
          message: "Please request a new OTP.",
        },
        { status: 400 }
      );
    }

    // Check expiry
    if (new Date() > new Date(admin.otpExpiresAt)) {
      return NextResponse.json(
        {
          success: false,
          message: "OTP has expired. Please request a new OTP.",
        },
        { status: 400 }
      );
    }

    // Compare OTP
    const isOtpValid = await bcrypt.compare(otp, admin.otp);

    if (!isOtpValid) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid username or OTP.",
        },
        { status: 401 }
      );
    }

    // Generate reset token
    const resetToken = jwt.sign(
      {
        id: admin.id,
        username: admin.username,
        purpose: "password-reset",
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "10m",
      }
    );

    return NextResponse.json(
      {
        success: true,
        message: "OTP verified successfully.",
        resetToken,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Verify OTP Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
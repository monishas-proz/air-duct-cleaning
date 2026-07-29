import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import Admin from "@/models/Admin";
import { ensureDbSynced } from "@/config/database";

export async function POST(request) {
  try {
    await ensureDbSynced();

    const authHeader = request.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        {
          success: false,
          message: "Authorization token is required.",
        },
        { status: 401 }
      );
    }

    const resetToken = authHeader.split(" ")[1];

    const { newPassword } = await request.json();

    if (!newPassword) {
    return NextResponse.json(
        {
        success: false,
        message: "New password is required.",
        },
        { status: 400 }
    );
    }

    const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(newPassword)) {
    return NextResponse.json(
        {
        success: false,
        message:
            "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character.",
        },
        { status: 400 }
    );
    }

    let payload;

    try {
      payload = jwt.verify(resetToken, process.env.JWT_SECRET);
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid or expired reset token.",
        },
        { status: 401 }
      );
    }

    if (payload.purpose !== "password-reset") {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid reset token.",
        },
        { status: 401 }
      );
    }

    const admin = await Admin.findByPk(payload.id);

    if (!admin) {
      return NextResponse.json(
        {
          success: false,
          message: "Admin not found.",
        },
        { status: 404 }
      );
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    admin.password = hashedPassword;
    admin.otp = null;
    admin.otpExpiresAt = null;

    await admin.save();

    return NextResponse.json(
      {
        success: true,
        message: "Password reset successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Reset Password Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Admin from "@/models/Admin";
import { ensureDbSynced } from "@/config/database";

export async function POST(request) {
  try {
    await ensureDbSynced();

    const body = await request.json();
    const { username, password } = body;

    // Validate request
    if (!username || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Username and password are required.",
        },
        { status: 400 }
      );
    }

    // Check admin
    const admin = await Admin.findOne({
      where: { username },
    });

    if (!admin) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid username or password.",
        },
        { status: 401 }
      );
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid username or password.",
        },
        { status: 401 }
      );
    }

    // Generate JWT
    const token = jwt.sign(
      {
        id: admin.id,
        username: admin.username,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    return NextResponse.json(
      {
        success: true,
        message: "Login successful.",
        token,
        admin: {
          id: admin.id,
          username: admin.username,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Admin Login Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

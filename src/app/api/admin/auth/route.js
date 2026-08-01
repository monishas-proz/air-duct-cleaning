import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(request) {
  try {
    const token = request.cookies.get("admin_token")?.value;

    if (!token) {
      return NextResponse.json(
        {
          authenticated: false,
        },
        { status: 401 }
      );
    }

    const admin = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    return NextResponse.json(
      {
        authenticated: true,
        admin,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        authenticated: false,
      },
      { status: 401 }
    );
  }
}
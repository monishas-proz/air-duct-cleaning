import { NextResponse } from "next/server";
import { verifyAdminToken } from "@/middleware/authMiddleware";

export async function GET(request) {
  const auth = verifyAdminToken(request);

  if (auth.error) {
    return NextResponse.json(
      {
        success: false,
        message: auth.error,
      },
      { status: auth.status }
    );
  }

  return NextResponse.json(
    {
      success: true,
      message: "Admin profile fetched successfully.",
      admin: auth.admin,
    },
    { status: 200 }
  );
}

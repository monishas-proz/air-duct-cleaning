const jwt = require("jsonwebtoken");

function verifyAdminToken(request) {
  try {
    // Read token from HttpOnly Cookie
    const token = request.cookies.get("admin_token")?.value;

    if (!token) {
      return {
        error: "Access denied. Please login.",
        status: 401,
      };
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    return {
      admin: decoded,
    };
  } catch (error) {
    console.error("JWT ERROR:", error.message);

    return {
      error: "Unauthorized. Invalid or expired token.",
      status: 401,
    };
  }
}

module.exports = {
  verifyAdminToken,
};
const jwt = require("jsonwebtoken");

function verifyAdminToken(request) {
  try {
    const authHeader = request.headers.get("authorization") || request.headers.get("Authorization");

    if (!authHeader) {
      return {
        error: "Access denied. No token provided.",
        status: 401,
      };
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return {
        error: "Access denied. Invalid token format.",
        status: 401,
      };
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

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

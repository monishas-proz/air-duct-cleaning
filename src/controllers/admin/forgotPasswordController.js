const bcrypt = require("bcrypt");
const Admin = require("../../models/Admin");
const generateOtp = require("../../utils/generateOtp");

const forgotPassword = async (req, res) => {
  try {
    const { username } = req.body;

    // Validate request
    if (!username) {
      return res.status(400).json({
        success: false,
        message: "Username is required.",
      });
    }

    // Find admin
    const admin = await Admin.findOne({
      where: { username },
    });

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found.",
      });
    }

    // Generate OTP
    const otp = generateOtp();

    // Hash OTP
    const hashedOtp = await bcrypt.hash(otp, 10);

    // OTP expires in 5 minutes
    const otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000);

    // Save to database
    admin.otp = hashedOtp;
    admin.otpExpiresAt = otpExpiresAt;

    await admin.save();

    // TEMPORARY: Log OTP to console
    console.log("Generated OTP:", otp);

    return res.status(200).json({
      success: true,
      message: "OTP generated successfully.",
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  forgotPassword,
};
const Newsletter = require("../models/Newsletter");
const transporter = require("../config/mail");
const { newsletterTemplate } = require("../templates/newsletterTemplate");

const subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    // Validate email
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required.",
      });
    }

    // Check if already subscribed
    const existingSubscriber = await Newsletter.findOne({
      where: { email },
    });

    if (existingSubscriber) {
      return res.status(409).json({
        success: false,
        message: "This email is already subscribed.",
      });
    }

    // Save subscriber
    await Newsletter.create({ email });

    // Send welcome email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Welcome to Air Care Management!",
      html: newsletterTemplate(),
    });

    return res.status(201).json({
      success: true,
      message: "Subscribed successfully.",
    });

  } catch (error) {
    console.error("Newsletter Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

module.exports = {
  subscribeNewsletter,
};
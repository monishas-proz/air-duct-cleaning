const Contact = require("../models/Contact");

const createContact = async (req, res) => {
  try {
    const {
      fullName,
      organization,
      email,
      phone,
      service,
      message,
    } = req.body;

    // Validation
    if (!fullName || !email || !phone || !service || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    const contact = await Contact.create({
      fullName,
      organization,
      email,
      phone,
      service,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Inquiry submitted successfully.",
      data: contact,
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
  createContact,
};
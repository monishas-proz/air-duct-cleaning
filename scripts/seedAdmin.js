require("dotenv").config({ path: ".env.local" });

const bcrypt = require("bcrypt");
const sequelize = require("../src/config/database");
const Admin = require("../src/models/Admin");

async function seedAdmin() {
  try {
    // Create tables if they don't exist
    await sequelize.sync();

    const username = process.env.ADMIN_USERNAME;
    const password = process.env.ADMIN_PASSWORD;

    if (!username || !password) {
      throw new Error(
        "ADMIN_USERNAME or ADMIN_PASSWORD is missing in .env"
      );
    }

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({
      where: {
        username,
      },
    });

    if (existingAdmin) {
      process.exit(0);
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create admin
    await Admin.create({
      username,
      password: hashedPassword,
    });

    process.exit(0);
  } catch (error) {
    console.error("❌ Error creating admin:", error.message);
    process.exit(1);
  }
}

seedAdmin();
const { Sequelize } = require("sequelize");
const path = require("path");

const dbPath = path.join(process.cwd(), "database.sqlite");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: dbPath,
  logging: false,
});

// Helper to ensure DB is initialized
let isSynced = false;
async function ensureDbSynced() {
  if (!isSynced) {
    try {
      // Import models to register associations before sync
      require("../models");
      await sequelize.sync();
      isSynced = true;
    } catch (err) {
      console.error("Database Sync Error:", err);
    }
  }
}

module.exports = sequelize;
module.exports.ensureDbSynced = ensureDbSynced;
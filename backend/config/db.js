const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Added options for better stability on restricted networks
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
      socketTimeoutMS: 45000,
    });
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message || error);
    console.log("👉 Reminder: Check if 0.0.0.0/0 is whitelisted in Atlas Network Access!");
  }
};

module.exports = connectDB;
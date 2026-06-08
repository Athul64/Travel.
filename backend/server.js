// 1. DNS Fix for SRV Records - MUST be at the very top
const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB Connection
connectDB();

// Routes
app.use("/api/destinations", require("./routes/destinationRoutes"));
app.use("/api/testimonials", require("./routes/testimonialRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));

app.get("/", (req, res) => {
  res.send("Travel Blog API Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
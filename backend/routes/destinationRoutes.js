const express = require("express");
const router = express.Router();
const Destination = require("../models/Destination");

// GET all destinations
router.get("/", async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.status(200).json(destinations);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch destinations" });
  }
});

// POST destination (for testing/admin)
router.post("/", async (req, res) => {
  try {
    const destination = new Destination(req.body);
    await destination.save();
    res.status(201).json(destination);
  } catch (error) {
    res.status(400).json({ message: "Failed to add destination" });
  }
});

module.exports = router;

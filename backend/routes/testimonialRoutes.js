const express = require("express");
const Testimonial = require("../models/Testimonial");

const router = express.Router();

// GET all testimonials
router.get("/", async (req, res) => {
  const testimonials = await Testimonial.find();
  res.json(testimonials);
});

// POST new testimonial
router.post("/", async (req, res) => {
  const testimonial = new Testimonial(req.body);
  await testimonial.save();
  res.status(201).json(testimonial);
});

module.exports = router;

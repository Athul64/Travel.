const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

// GET all contacts (for admin)
router.get("/", async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

// POST new contact message
router.post("/", async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.status(201).json(contact);
});

module.exports = router;

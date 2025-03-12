const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const Recommendation = require("../models/Recommendation"); // ✅ Import model
const SECRET_KEY = "mysecretkey";

// Middleware to verify token
const authenticate = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // ✅ Extract token correctly

  if (!token) return res.status(403).json({ message: "Access Denied" });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid token" });
  }
};

// ✅ Allow only logged-in users to recommend cars
router.post("/recommend", authenticate, async (req, res) => {
  try {
    const newCar = new Recommendation({ ...req.body, userId: req.user.id });
    await newCar.save();
    res.status(201).json({ message: "Car recommended successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to recommend car" });
  }
});

// ✅ Export router
module.exports = router;

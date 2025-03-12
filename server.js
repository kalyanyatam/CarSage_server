const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/car_recommendations");

const authRoutes = require("./routes/authRoutes");
const recommendationRoutes = require("./routes/recommendationRoutes");

app.get("/", (req, res) => {
    res.send("✅ Server is working!");
  });

app.use("/api/auth", authRoutes);
app.use("/api", recommendationRoutes);

app.listen(3000, () => console.log("🚀 Server running on port 3000"));

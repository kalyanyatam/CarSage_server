const mongoose = require("mongoose");

const RecommendationSchema = new mongoose.Schema({
  Year: Number,
  Present_Price: Number,
  Kms_Driven: Number,
  Fuel_Type: String,
  Seller_Type: String,
  Transmission: String,
  Owner: Number,
  Predicted_Price: Number,
});

module.exports = mongoose.model("Recommendation", RecommendationSchema);

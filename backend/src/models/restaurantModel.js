const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
  {
    restaurantName: { type: String, required: true },
    restaurantAddress: { type: String, required: true },
    ownerName: { type: String, required: true },
    ownerAddress: { type: String, required: true },
    ownerEmail: { type: String, required: true , unique : true },
    password: { type: String, required: true },
    ownerPhone: { type: String, required: true },
  },
);

module.exports = mongoose.model("Restaurant", restaurantSchema);

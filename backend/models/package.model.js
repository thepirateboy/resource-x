const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const packageSchema = new Schema(
  {
    departureDate: { type: Date, required: true },
    exporter: { type: String, required: true },
    total: { type: Number, required: true },
    value: { type: Number, required: true },
    quantity: { type: Number, required: true },
    weight: { type: Number, required: true },
    destination: { type: String, required: true },
    user: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Packages = mongoose.model("Package", packageSchema);

module.exports = Packages;

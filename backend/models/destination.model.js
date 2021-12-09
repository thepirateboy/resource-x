const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const destinationSchema = new Schema(
  {
    destination_name: { type: String, required: true },
    destination_description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Destination = mongoose.model("Destination", destinationSchema);

module.exports = Destination;
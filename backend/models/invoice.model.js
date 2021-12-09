const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const invoiceSchema = new Schema(
  {
    total: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Invoices = mongoose.model("Invoice", invoiceSchema);

module.exports = Invoices;

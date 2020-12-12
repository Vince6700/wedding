const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Guest = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    firstname: { type: String, required: true },
    adults: { type: Number, required: true },
    children: Number,
    ceremony: { type: Boolean, required: true, default: false },
    reception: { type: Boolean, required: true, default: false },
    diner: { type: Boolean, required: true, default: false },
    party: { type: Boolean, required: true, default: false },
    confirmation: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("guest", Guest);

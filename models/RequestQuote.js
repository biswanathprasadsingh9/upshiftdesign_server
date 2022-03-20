const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RequestQuoteSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    contact: {
      type: String,
    },
    organization: {
      type: String,
    },
    website: {
      type: String,
    },
    country: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

const RequestQuote = mongoose.model("RequestQuote", RequestQuoteSchema);
module.exports = RequestQuote;

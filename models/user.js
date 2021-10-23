const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  user_id: {
    type: String,
    required: true,
  },
  created_on: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  identifier_type: {
    type: String,
    required: true,
  },
  verification_token: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);

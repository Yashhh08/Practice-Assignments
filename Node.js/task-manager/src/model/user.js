const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("please provide valid email !!");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minLength: [7, "password length should be more than 6 !!"],
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error(`Password cannot contain "password" in it !!`);
      }
    },
  },
});

const User = mongoose.model("users",userSchema);

module.exports = User;

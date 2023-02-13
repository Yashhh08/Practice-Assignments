const mongoose = require("mongoose");
const validator = require("validator");

mongoose
  .connect("mongodb://127.0.0.1:27017/task-manager-api")
  .then(() => console.log("connnected..!!"))
  .catch((err) => {
    console.log(err.message);
  });

const taskSchema = mongoose.Schema({
  description: { type: String, required: true, trim: true },
  completed: { type: Boolean, required: false, default: false },
});

const Task = mongoose.model("task", taskSchema);

const task = new Task({
  description: "React",
  completed: true
});

task
  .save()
  .then(() => {
    console.log(task);
  })
  .catch((err) => {
    console.log(err.message);
  });

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email..!!");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minLength: [7, "length must be greater than 6"],
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error(`password cannot contains "password"..!!`);
      }
    },
  },
});

const User = mongoose.model("users", userSchema);

// const user = new User({
//   name: "Yash Yerunkar",
//   email: "yash@gmail.com",
//   password: "yash@123",
// });

// user
//   .save()
//   .then(() => console.log(user))
//   .catch((err) => console.log(err.message));

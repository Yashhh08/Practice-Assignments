const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("../../src/model/user");
const Task = require("../../src/model/task");

const userOneId = new mongoose.Types.ObjectId();

const userOne = {
  _id: userOneId,
  name: "Mike Tyson",
  email: "mike@gmail.com",
  password: "mike@123",
  tokens: [
    {
      token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET),
    },
  ],
};

const userTwoId = new mongoose.Types.ObjectId();

const userTwo = {
  _id: userTwoId,
  name: "John Tyson",
  email: "john@gmail.com",
  password: "john@123",
  tokens: [
    {
      token: jwt.sign({ _id: userTwoId }, process.env.JWT_SECRET),
    },
  ],
};

const taskOne = {
  _id: new mongoose.Types.ObjectId(),
  description: "userOne task 1",
  completed: false,
  user: userOne._id,
};

const taskTwo = {
  _id: new mongoose.Types.ObjectId(),
  description: "userOne task 2",
  completed: true,
  user: userOne._id,
};

const taskThree = {
  _id: new mongoose.Types.ObjectId(),
  description: "userTwo task 1",
  completed: false,
  user: userTwo._id,
};

const setupDatabase = async () => {
  await User.deleteMany();
  await Task.deleteMany();
  await new User(userOne).save();
  await new User(userTwo).save();
  await new Task(taskOne).save();
  await new Task(taskTwo).save();
  await new Task(taskThree).save();
};

module.exports = {
  userOneId,
  userTwoId,
  userOne,
  userTwo,
  taskOne,
  taskTwo,
  taskThree,
  setupDatabase,
};

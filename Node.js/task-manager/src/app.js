const express = require("express");
require("./configs/mongoose");
const userRouter = require("./controller/user");
const taskRouter = require("./controller/task");

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

module.exports = app;

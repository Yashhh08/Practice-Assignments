const express = require("express");
require("./configs/mongoose");
const userRouter = require("./controller/user");
const taskRouter = require("./controller/task");

const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use('/', async(req,res) => {
  try {
    return res.status(200).json({message : "OK"})
  }
  catch(err) {
    return res.status(500).send(err);
  }
})
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`running on port ${port}`);
});

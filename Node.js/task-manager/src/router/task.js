const express = require("express");
const Task = require("../model/task");

const router = new express.Router();

router.post("/tasks", async (req, res) => {
  try {
    const task = new Task(req.body);

    await task.save();

    res.status(201).send(task);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();

    if (tasks.length > 0) {
      res.status(200).send(tasks);
    } else {
      res.status(404).send();
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/tasks/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const task = await Task.findById(id);

    if (task) {
      res.status(200).send(task);
    } else {
      res.status(404).send();
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

router.patch("/tasks/:id", async (req, res) => {
  const allowedUpdates = ["description", "completed"];
  const requestedUpdates = Object.keys(req.body);
  const isRequestValid = requestedUpdates.every((field) =>
    allowedUpdates.includes(field)
  );

  if (!isRequestValid) {
    return res.status(400).send({ error: "Invalid updates..!!" });
  }

  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (task) {
      res.status(200).send(task);
    } else {
      res
        .status(404)
        .send({ error: `Task not found with id ${req.params.id}` });
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (task) {
      res.status(200).send(task);
    } else {
      res.status(400).send(`Task not found with id ${req.params.id}`);
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;

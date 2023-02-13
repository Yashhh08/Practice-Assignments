const express = require("express");
const User = require("../model/user");

const router = new express.Router();

// User controller

router.post("/users", async (req, res) => {
    const user = new User(req.body);
  
    try {
      await user.save();
      res.status(201).send(user);
    } catch (err) {
      res.status(400).send(err);
    }
  });
  
  router.get("/users", async (req, res) => {
    try {
      const users = await User.find();
  
      if (users.length > 0) {
        res.status(200).send(users);
      } else {
        res.status(404).send();
      }
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  router.get("/users/:id", async (req, res) => {
    try {
      const id = req.params.id;
  
      const user = await User.findById(id);
  
      if (user) {
        res.status(200).send(user);
      } else {
        res.status(404).send();
      }
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  router.patch("/users/:id", async (req, res) => {
    const allowedUpdates = ["name", "email", "password"];
    const requestedUpdates = Object.keys(req.body);
    const isRequestValid = requestedUpdates.every((field) =>
      allowedUpdates.includes(field)
    );
  
    if (!isRequestValid) {
      return res.status(400).send({ error: "invalid updates..!!" });
    }
  
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
  
      if (user) {
        res.status(200).send(user);
      } else {
        res.status(404).send();
      }
    } catch (err) {
      res.status(400).send(err);
    }
  });
  
  router.delete("/users/:id", async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
  
      if (user) {
        res.status(200).send(user);
      } else {
        res
          .status(400)
          .send({ error: `user not found with id : ${req.params.id}` });
      }
    } catch (err) {
      res.status(400).send(err);
    }
  });

  module.exports = router;
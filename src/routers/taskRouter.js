import express from "express";
const router = express.Router();
import mongoose from "mongoose";
//creating controllers

// router.all("/", (req, res, next) => {
//   //do your code
//   //   res.json({
//   //     status: "success",
//   //     message: "response from all",
//   //   });
//   next();
// });

//database table selecting
const taskSchema = new mongoose.Schema({}, { statics: false });
const TaskCollection = mongoose.model("Task", taskSchema);

router.get("/", async (req, res, next) => {
  //do your code
  console.log(req.body, "------");
  //Insert task
  const result = await TaskCollection();
  res.json({
    status: "success",
    message: "Here are the task list",
    tasks: [],
  });
});

router.post("/", (req, res, next) => {
  //do your code
  res.json({
    status: "success",
    message: "New data has been added successfully",
  });
});

router.patch("/", (req, res, next) => {
  const { id, type } = req.body;

  //do your code
  res.json({
    status: "success",
    message: "your task has been updated",
  });
});

router.delete("/:id", (req, res, next) => {
  //do your code
  const { id } = req.params;
  console.log(id);
  res.json({
    status: "success",
    message: "Your task has been deleted",
  });
});

export default router;

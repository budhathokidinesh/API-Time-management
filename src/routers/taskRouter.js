import express from "express";
const router = express.Router();
import {
  deleteTask,
  getTask,
  insertTask,
  updateTask,
} from "../routers/models/taskModel/TaskSchema.js";
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
router.get("/", async (req, res, next) => {
  //do your code

  //db.c.find()
  const tasks = await getTask();
  // console.log(result);
  res.json({
    status: "success",
    message: "Here are the task list",
    tasks,
  });
});

router.post("/", async (req, res, next) => {
  //do your code
  try {
    //Insert task
    const result = await insertTask(req.body);
    console.log(result);
    res.json({
      status: "success",
      message: "New data has been added successfully",
      tasks: [],
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.patch("/", async (req, res, next) => {
  const { _id, ...rest } = req.body;
  console.log(req.body);
  const result = await updateTask(_id, rest);
  //do your code
  res.json({
    status: "success",
    message: "your task has been updated",
    result,
  });
});

router.delete("/:_id", async (req, res, next) => {
  //do your code
  const { _id } = req.params;

  const result = await deleteTask(_id);
  console.log(_id);
  res.json({
    status: "success",
    message: "Your task has been deleted",
    result,
  });
});

export default router;

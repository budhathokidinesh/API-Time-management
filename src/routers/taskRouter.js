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
    result?._id
      ? res.json({
          status: "success",
          message: "New data has been added successfully",
        })
      : res.json({
          status: "error",
          message: "Unable to add the task, try again later",
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
  try {
    const { _id, ...rest } = req.body;

    const result = await updateTask(_id, rest);
    result?._id
      ? res.json({
          status: "success",
          message: "your task has been updated",
        })
      : res.json({
          status: "success",
          message: "Unable to update the task, try again later",
        });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.delete("/", async (req, res, next) => {
  try {
    const result = await deleteTask(req.body);
    console.log(result);
    result?.deletedCount
      ? res.json({
          status: "success",
          message: "Your task has been deleted",
        })
      : res.json({
          status: "error",
          message: "Unable to delete the item, try it later",
        });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
  //do your code
  console.log(req.body);
});

export default router;

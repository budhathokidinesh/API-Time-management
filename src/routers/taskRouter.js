import express from "express";
const router = express.Router();

//creating controllers

// router.all("/", (req, res, next) => {
//   //do your code
//   //   res.json({
//   //     status: "success",
//   //     message: "response from all",
//   //   });
//   next();
// });

let fakeDB = [
  {
    id: 1,
    task: "Cooking",
    hr: 20,
    type: "entry",
  },
  {
    id: 2,
    task: "Coding",
    hr: 20,
    type: "entry",
  },
  {
    id: 3,
    task: "sleeping",
    hr: 20,
    type: "entry",
  },
];
router.get("/", (req, res, next) => {
  //do your code
  res.json({
    status: "success",
    message: "Here are the task list",
    tasks: fakeDB,
  });
});

router.post("/", (req, res, next) => {
  fakeDB.push(req.body);
  console.log(fakeDB);
  //do your code
  res.json({
    status: "success",
    message: "New data has been added successfully",
  });
});

router.patch("/", (req, res, next) => {
  const { id, type } = req.body;
  fakeDB = fakeDB.map((item) => {
    if (item.id === id) {
      item.type = type;
      return item;
    } else {
      return item;
    }
  });
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
  fakeDB = fakeDB.filter((item) => item.id !== +id);
  res.json({
    status: "success",
    message: "Your task has been deleted",
  });
});

export default router;

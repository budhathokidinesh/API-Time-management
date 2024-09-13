import express from "express";
const app = express();
const PORT = 8000;
import morgan from "morgan";

// Connect MongoDB
import { connectMongoDb } from "./src/routers/cofig/dbConfig.js";
connectMongoDb();
app.use(morgan("dev"));
app.use(express.json());
//Importing task routers
import taskRouter from "./src/routers/taskRouter.js";
// set up end points
app.use("/api/v1/tasks", taskRouter);

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is running at http://localhost:${PORT}`);
});

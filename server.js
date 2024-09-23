import express from "express";
const app = express();
const PORT = 8000;
import morgan from "morgan";
import cors from "cors";

// Connect MongoDB
import { connectMongoDb } from "./src/routers/cofig/dbConfig.js";
connectMongoDb();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
// static serving

import path from "path";
const _dirname = path.resolve();
//serve the static files from the node
app.use(express.static(path.join(_dirname, "dist")));
app.get("/", (req, res) => {
  res.sendFile(path.join(_dirname, "dist", "index.html"));
});
console.log(_dirname);

//Importing task routers
import taskRouter from "./src/routers/taskRouter.js";
// set up end points
app.use("/api/v1/tasks", taskRouter);

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is running at http://localhost:${PORT}`);
});

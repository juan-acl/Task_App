/* Imports dependencies */
const bodyParser = require("body-parser");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const TaskRouter = require("../routes/task.route");

/* Express server */
const port = process.env.PORT ?? 4000;
const app = express();

/* Config dependencies  */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());

/* Usage routes */
app.use("/api/task", TaskRouter);

/* Initial endpoint */
app.get("/", (_, res) => {
  res.statusCode = 200;
  return res
    .status(200)
    .json({ code: 200, message: "Welcome to my API task_app" });
});

/* Endpoint not existent */
app.get("/*", (_, res) => {
  res.statusCode = 404;
  return res.status(404).json({ code: 404, message: "Endpoint not found" });
});

/* Export initialize app node */
module.exports.initial_App = () =>
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

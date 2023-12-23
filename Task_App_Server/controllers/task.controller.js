const databaseFuntions = require("../models/database.model");

module.exports.getTasksByUser = (req, res) => {
  const { user } = req.body;
  if (user !== undefined) {
    databaseFuntions.getTasksByUser(user, (error, data) => {
      if (error) {
        res.statusCode = 500;
        return res
          .status(500)
          .send({ code: 500, ErrorMessage: "Internal server error" });
      }
      return res.status(200).send({
        code: 200,
        message: "Success",
        count: data.length,
        tasks: data,
      });
    });
  } else {
    res.statusCode = 400;
    return res
      .status(400)
      .send({ code: 400, message: "All the fields are required!" });
  }
};

module.exports.insertTask = (req, res) => {
  const { description, updateAt, user } = req.body;
  if (
    description !== undefined &&
    updateAt !== undefined &&
    user !== undefined
  ) {
    let insertTask = {
      description: description,
      updateAt: updateAt,
      user_id: user,
      active: 1,
    };
    databaseFuntions.insertTask(insertTask, (error, data) => {
      if (error) {
        res.statusCode = 500;
        return res.status(500).send({
          code: 500,
          ErrorMessage: "Internal server error",
          error: error,
        });
      }
      return res
        .status(200)
        .send({ code: 200, message: "Task created successfully" });
    });
  } else {
    res.statusCode = 400;
    return res
      .status(400)
      .send({ code: 400, message: "All the fields are required!" });
  }
};

module.exports.deleteTask = (req, res) => {
  const { id_task } = req.body;
  if (id_task !== undefined) {
    databaseFuntions.deleteTask(id_task, (error, data) => {
      if (error) {
        res.statusCode = 500;
        return res
          .status(500)
          .send({ code: 500, ErrorMessage: "Internal server error", error });
      }
      return res
        .status(200)
        .send({ code: 200, Message: "Task deleted successfully" });
    });
  } else {
    res.statusCode = 400;
    return res
      .status(400)
      .send({ code: 400, message: "All the fields are required!" });
  }
};

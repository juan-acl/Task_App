const databaseFuntions = require("../models/database.model");

module.exports.createUser = (req, res) => {
  const { name, email, password, lastname, phone_number } = req.body;
  const insertUser = {
    name: name,
    email: email,
    password: password,
    lastname: lastname,
    phone_number: phone_number,
  };

  if (
    name !== undefined &&
    email !== undefined &&
    password !== undefined &&
    lastname !== undefined &&
    phone_number !== undefined
  ) {
    databaseFuntions.createUser(insertUser, (error, data) => {
      if (error) {
        res.statusCode = 500;
        return res.status(500).send({
          code: 500,
          ErrorMessage: "Internal server error",
          error: error,
        });
      }
      res.statusCode = 200;
      return res
        .status(200)
        .send({ code: 200, message: "User created successfully" });
    });
  } else {
    res.statusCode = 400;
    return res
      .status(400)
      .send({ code: 400, message: "All the fields are required!" });
  }
};

module.exports.login = (req, res) => {
  const { email, password } = req.body;
  const credential = {
    email: email,
    password: password,
  };
  if (email !== undefined && password !== undefined) {
    databaseFuntions.login(credential, (error, data) => {
      if (error) {
        res.statusCode = 500;
        return res.status(500).send({
          code: 500,
          ErrorMessage: "Internal server error",
          error: error,
        });
      }
      if (data.length === 0) {
        res.statusCode = 200;
        return res.status(200).send({
          code: 200,
          user: data,
          message: "Email or password incorrect",
        });
      }
      return res
        .status(200)
        .send({ code: 200, message: "Success", user: data });
    });
  } else {
    res.statusCode = 400;
    return res
      .status(400)
      .send({ code: 400, message: "All the fields are required!" });
  }
};

const mysql = require("mysql2");

connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ADMIN",
  database: "task_app",
});

let databaseFunctions = {};

databaseFunctions.getTasksByUser = (user, callBack) => {
  if (connection) {
    connection.query(
      `SELECT * FROM task WHERE user_id = ${user} AND active = 1`,
      user,
      (error, rows) => {
        if (error) {
          throw error;
        } else {
          callBack(null, rows);
        }
      }
    );
  }
};

databaseFunctions.insertTask = (insertTask, callBack) => {
  if (connection) {
    connection.query("INSERT INTO task SET ?", insertTask, (error, rows) => {
      if (error) {
        throw error;
      } else {
        callBack(null, rows);
      }
    });
  }
};

databaseFunctions.deleteTask = (id, callBack) => {
  if (connection) {
    connection.query(
      "UPDATE task SET active = 0 WHERE task_id = ?",
      id,
      (error, rows) => {
        if (error) {
          throw error;
        } else {
          callBack(null, rows);
        }
      }
    );
  }
};

module.exports = databaseFunctions;

require("dotenv").config();

module.exports = {
  port: process.env.PORT,
  db_string: process.env.DB_STRING,
};

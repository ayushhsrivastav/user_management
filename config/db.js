const { MongoClient } = require("mongodb");
const config = require("./config");
console.log(config.db_string);

const client = new MongoClient(config.db_string);

let db;

const connectDB = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    db = client.db("authentication");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

const getDB = () => {
  if (!db) {
    throw new Error("Database not initialized");
  }
  return db;
};

module.exports = { connectDB, getDB };

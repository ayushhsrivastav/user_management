const { ObjectId } = require("mongodb");
const { getDB } = require("../config/db");

class User {
  collection() {
    return getDB().collection("users");
  }

  async findById(userId) {
    return await this.collection().findOne({ _id: new ObjectId(userId) });
  }

  async findOneByEmail(email) {
    return await this.collection().findOne({ email });
  }

  async insertOne(user) {
    return await this.collection().insertOne(user);
  }

  async updateOne(userId, update) {
    return await this.collection().updateOne(
      { _id: new ObjectId(userId) },
      { $set: update }
    );
  }

  async find(query) {
    return await this.collection().find(query).toArray();
  }
}

module.exports = new User();

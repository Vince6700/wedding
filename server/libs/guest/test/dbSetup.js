require("dotenv").config();
const mongoose = require("mongoose");

const dbSetup = () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.connection;
  });

  afterAll(async () => {
    await connection.close();
  });
};

module.exports = dbSetup;

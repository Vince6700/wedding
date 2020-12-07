const app = require("./index");

const apiPort = process.env.PORT || 3000;
const db = require("./db");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(apiPort, () =>
  console.log(`Server running on http://localhost:${apiPort}/`)
);

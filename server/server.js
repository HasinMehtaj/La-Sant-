const express = require("express");
require("dotenv").config();
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const bmiRoutes = require("./routes/bmi");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

connectDB();

server.use(express.json());
server.use(
  express.urlencoded({
    extended: true,
  })
);

server.use("/", authRoutes);
server.use("/", bmiRoutes);

app
  .prepare()
  .then(() => {
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });

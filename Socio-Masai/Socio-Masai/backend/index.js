const express = require("express");
const { connection } = require("./db.js");
const { UserRouter } = require("./routes/user.routes.js");
const { PostRouter } = require("./routes/post.routes.js");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send({ msg: "Welcome to Socio-Masai" });
});

app.use("/users", UserRouter);

app.use("/posts", PostRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(
      "DB Connection Successfull - Server running on port: ",
      process.env.PORT
    );
  } catch (error) {
    console.log(error);
    console.log("Error while connecting to Database - ", error);
  }
});

const express = require("express");
const { connection } = require("./db");
const app = express();
app.use(express.json());
const { userRouter } = require("./routes/user.routes");
const { postRouter } = require("./routes/post.routes");
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.listen(8080, async () => {
    try {
        await connection
        console.log("server start on port 8080");
    } catch (err) {
        console.log(err)
    }
})
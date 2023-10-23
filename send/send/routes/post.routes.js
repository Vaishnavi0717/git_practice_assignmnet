const express = require("express");
const { postModel } = require("../model/post.model");
const postRouter = express.Router();
const { auth } = require("../middleware/auth.middleware");
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    limit: 70,
    message: { error: "Rate limit exceeded. please try again later" }
})

postRouter.post("/add", auth, limiter, async (req, res) => {
    const { title, content } = req.body;
    try {
        const post = new postModel({ title, content });
        await post.save();
        res.status(200).send({ "msg": "Post added" })
    } catch (error) {
        res.status(400).send({ "error": error })
    }
})


postRouter.get("/get", auth, limiter, async (req, res) => {
    const { title } = req.query;
    try {
        if (title) {
            const posts = await postModel.findOne({ title });
            res.status(200).send(posts)
        }
        else {
            const posts = await postModel.find();
            res.status(200).send(posts)
        }
    } catch (error) {
        res.status(400).send({ "error": error })
    }
})

postRouter.patch("/update/:id", auth, limiter, async (req, res) => {

    const { id } = req.params;
    try {
        const data = await postModel.findByIdAndUpdate({ _id: id }, req.body);
        res.status(200).send(data);
    } catch (error) {
        res.status(200).send(error);
    }
})

postRouter.delete("/delete/:id", auth, limiter, async (req, res) => {

    const { id } = req.params;
    try {
        const data = await postModel.findByIdAndDelete({ _id: id });
        res.status(200).send({ "message": "post deleted" });
    } catch (error) {
        res.status(200).send(error);
    }
})
module.exports = {
    postRouter
}
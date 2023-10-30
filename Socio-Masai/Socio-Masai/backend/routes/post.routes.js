const express = require("express");
const { authentication } = require("../middlewares/authentication.middleware");
const { PostModel } = require("../model/post.model");

const PostRouter = express.Router();

PostRouter.get("/", authentication, (req, res) => {
  try {
    const { userId } = req.body;
    const allPosts = PostModel.find({ _id: userId });
    console.log(allPosts);
    res.status(200).send({ msg: "Welcome to Posts section", allPosts });
  } catch (error) {
    res.status(400).send({ msg: "Error while getting posts", Error: error });
  }
});

PostRouter.post("/add", authentication, async (req, res) => {
  try {
    const postDetails = req.body;
    console.log(postDetails);
    const newPost = new PostModel(postDetails);
    await newPost.save();
    res.status(200).send({ msg: "New Post has been created!", postDetails });
  } catch (error) {
    res
      .status(400)
      .send({ msg: "Error while saving post to DB", Error: error });
  }
});

PostRouter;

module.exports = {
  PostRouter,
};

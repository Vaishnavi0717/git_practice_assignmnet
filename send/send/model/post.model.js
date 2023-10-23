const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
     title:String,
     content:String
}, {
    versionKey: false
})

const postModel = mongoose.model("post", postSchema);

module.exports = {
    postModel
}
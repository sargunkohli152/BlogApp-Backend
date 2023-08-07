//import model
const Comment = require("../models/commentModel");
const Post = require("../models/postModel");

exports.createComment = async (req, res) => {
    try{
        //fetch data form req's body
        const {post, user, body} = req.body;

        //ceate a comment object
        const comment = new Comment({
            post, user, body
        })

        //save the new comment into the database
        const savedComment = await comment.save();

        //find the post by id, add the new comment to its comments array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id}}, {new: true}).populate("comments").exec();
        res.json({
            post: updatedPost,
        });
    }
    catch(error){
        res.status(500).json({
            error: "Error while creating comment",
        });
    }
}
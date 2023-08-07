const Like = require("../models/likeModel");
const Post = require("../models/postModel");

exports.likePost= async (req, res) => {
    try{
        const{post, user} = req.body;
        const like = new Like({post, user});

        const savedLike = await like.save();

        //update the post collection
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {like: savedLike._id}}, {new: true})
                            .populate("like").exec();
        res.json({
            post: updatedPost
        })
    }
    catch(error){
        res.status(400).json({
            error: "Error while liking post"
        })
    }
}

exports.unlikePost = async (req, res) => {
    try{
        const{post, like} = req.body;
        
        //delete from like collection
        const deletedLike = await Like.findOneAndDelete({post: post, _id: like});

        const updatedPost = await Post.findByIdAndUpdate(post, {$pull: {like: deletedLike._id}}, {new: true});

        res.json({
            deletedLike, updatedPost
        })
    }
    catch(error){
        res.status(400).json({
            error: "Error while unliking post"
        })
    }
}

exports.dummyLink = (req, res) => {
    res.send("This is your Dummy Page")
}
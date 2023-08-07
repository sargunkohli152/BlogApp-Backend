const express = require("express");
const router = express.Router();

//import controller
const {createComment} = require("../controllers/CommentController");
const {createPost, getAllPosts} = require("../controllers/postController");
const {likePost, unlikePost, dummyLink} = require("../controllers/likeController");


//create mapping between routes and controllers
router.get("/dummyroute", dummyLink);
router.post("/comments/create", createComment); 
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);
router.post("/likes/like", likePost); 
router.post("/likes/unlike", unlikePost); 

module.exports = router; 
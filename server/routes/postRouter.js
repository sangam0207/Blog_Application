const express = require("express");
const {
  createPost,
  getAllPosts,
  getOwnPosts,
  updateUserPost,
  deletePost,
  getPostById,
} = require("../controllers/postController.js");
const isAuthorized=require('../middleware/isAuthorized.js')
const router = express.Router();
router.get("/test", (req, res) => {
  res.send("Testing");
});
router.post("/create",isAuthorized,createPost);
router.get("/getAll", getAllPosts);
router.get("/getPostById/:postId", getPostById);
router.get("/getOwnPosts",isAuthorized, getOwnPosts);
router.put("/updatePost/:postId",isAuthorized, updateUserPost);
router.delete("/deletePost/:postId",isAuthorized, deletePost);

module.exports = router;

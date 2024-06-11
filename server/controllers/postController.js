const Post = require("../models/blogModel.js");
const User = require("../models/user.js");

const createPost = async (req, res) => {
  try {
    const userId=req.user.id;
    const {title, content, image } = req.body;
    if (!userId || !title || !content) {
      return res
        .status(400)
        .json({ message: "Please enter all required fields" });
    }
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const newPost = new Post({
      user: userId,
      title,
      content,
      image:
        image ||
        "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png",
    });
    const savedPost = await newPost.save();
    res
      .status(201)
      .json({ message: "Post created successfully", post: savedPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("user", "name email").lean();
    const newPostsList = posts.map((post) => {
      const { user, ...rest } = post;
      return {
        ...rest,
        user: {
          name: user.name,
          email: user.email,
        },
      };
    });
    console.log(newPostsList);
    res.status(200).json({ status: "success", posts: newPostsList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "failed", message: "Server error" });
  }
};
const getPostById = async (req, res) => {
  try {
    const postId = req.params.postId;
    const post = await Post.findById(postId)
      .populate("user", "name email")
      .lean();
    if (!post) {
      return res
        .status(404)
        .json({ status: "failed", message: "Post not found" });
    }
    const { user, ...rest } = post;
    const userDetail = {
      name: user.name,
      email: user.email,
    };
    const response = {
      ...rest,
      user: userDetail,
    };
    res.status(200).json({ status: "success", post: response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "failed", message: "Server error" });
  }
};

const getOwnPosts = async (req, res) => {
  try {
    const userId=req.user.id;
    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ status: "failed", message: "User not found" });
    }
    const posts = await Post.find({ user: userId }).lean();
    res.status(200).json({ status: "success", posts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "failed", message: "Server error" });
  }
};

const updateUserPost = async (req, res) => {
  try {
    const userId=req.user.id;
    const postId = req.params.postId;
    const updates = req.body;
    const post = await Post.findOneAndUpdate(
      { _id: postId, user: userId },
      updates,
      { new: true }
    );
    if (!post) {
      return res.status(404).json({
        status: "failed",
        message: "Post not found or user does not own the post",
      });
    }
    res.status(200).json({ status: "success", post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "failed", message: "Server error" });
  }
};

const deletePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const userId=req.user.id;
    const post = await Post.findById(postId);
    if (!post) {
      return res
        .status(404)
        .json({ status: "failed", message: "Post not found" });
    }
    if (post.user.toString() !== userId) {
      return res.status(403).json({
        status: "failed",
        message: "You are not authorized to delete this post",
      });
    }
    await Post.findByIdAndDelete(postId);
    res
      .status(200)
      .json({ status: "success", message: "Post deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "failed", message: "Server error" });
  }
};
module.exports = {
  createPost,
  getAllPosts,
  getOwnPosts,
  updateUserPost,
  deletePost,
  getPostById,
};

const express = require("express");

const { getPosts, createPost, updatePost, deletePost , likePost } = require ("../controllers/posts.js")

const router = express.Router();

router.patch('/:id', updatePost);
router.post('/', createPost);
router.get('/', getPosts);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

module.exports = router;

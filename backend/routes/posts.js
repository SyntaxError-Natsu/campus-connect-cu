const express = require('express');
const { getAllPosts, createPost, likePost, addComment, getComments } = require('../controllers/postController');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

router.get('/', getAllPosts);
router.post('/', authenticateToken, createPost);
router.post('/:id/like', authenticateToken, likePost);
router.post('/:id/comments', authenticateToken, addComment);
router.get('/:id/comments', getComments);

module.exports = router;

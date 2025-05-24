const db = require('../config/database');

const getAllPosts = (req, res) => {
    const sql = `
        SELECT p.*, u.username, u.full_name,
        (SELECT COUNT(*) FROM post_likes pl WHERE pl.post_id = p.id) as likes_count
        FROM posts p 
        JOIN users u ON p.user_id = u.id 
        ORDER BY p.created_at DESC
    `;
    
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to fetch posts' });
        }
        res.json(results);
    });
};

const createPost = (req, res) => {
    const { title, content, category } = req.body;
    const userId = req.user.userId;
    
    if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required' });
    }

    const sql = 'INSERT INTO posts (user_id, title, content, category) VALUES (?, ?, ?, ?)';
    
    db.query(sql, [userId, title, content, category || 'general'], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to create post' });
        }
        res.status(201).json({ message: 'Post created successfully', postId: result.insertId });
    });
};

const likePost = (req, res) => {
    const postId = req.params.id;
    const userId = req.user.userId;

    // Check if user already liked the post
    const checkSql = 'SELECT * FROM post_likes WHERE post_id = ? AND user_id = ?';
    
    db.query(checkSql, [postId, userId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }

        if (results.length > 0) {
            // Unlike the post
            const deleteSql = 'DELETE FROM post_likes WHERE post_id = ? AND user_id = ?';
            db.query(deleteSql, [postId, userId], (err) => {
                if (err) {
                    return res.status(500).json({ error: 'Failed to unlike post' });
                }
                res.json({ message: 'Post unliked successfully' });
            });
        } else {
            // Like the post
            const insertSql = 'INSERT INTO post_likes (post_id, user_id) VALUES (?, ?)';
            db.query(insertSql, [postId, userId], (err) => {
                if (err) {
                    return res.status(500).json({ error: 'Failed to like post' });
                }
                res.json({ message: 'Post liked successfully' });
            });
        }
    });
};

const addComment = (req, res) => {
    const postId = req.params.id;
    const { content } = req.body;
    const userId = req.user.userId;

    if (!content) {
        return res.status(400).json({ error: 'Comment content is required' });
    }

    const sql = 'INSERT INTO comments (post_id, user_id, content) VALUES (?, ?, ?)';
    
    db.query(sql, [postId, userId, content], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to add comment' });
        }
        res.status(201).json({ message: 'Comment added successfully' });
    });
};

const getComments = (req, res) => {
    const postId = req.params.id;
    
    const sql = `
        SELECT c.*, u.username, u.full_name 
        FROM comments c 
        JOIN users u ON c.user_id = u.id 
        WHERE c.post_id = ? 
        ORDER BY c.created_at ASC
    `;
    
    db.query(sql, [postId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to fetch comments' });
        }
        res.json(results);
    });
};

module.exports = { getAllPosts, createPost, likePost, addComment, getComments };

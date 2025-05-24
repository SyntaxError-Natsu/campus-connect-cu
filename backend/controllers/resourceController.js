const db = require('../config/database');

const getAllResources = (req, res) => {
    const sql = `
        SELECT r.*, u.username, u.full_name 
        FROM resources r 
        JOIN users u ON r.user_id = u.id 
        ORDER BY r.created_at DESC
    `;
    
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to fetch resources' });
        }
        res.json(results);
    });
};

const createResource = (req, res) => {
    const { title, description, file_url, file_type, subject } = req.body;
    const userId = req.user.userId;
    
    if (!title || !file_url) {
        return res.status(400).json({ error: 'Title and file URL are required' });
    }

    const sql = 'INSERT INTO resources (user_id, title, description, file_url, file_type, subject) VALUES (?, ?, ?, ?, ?, ?)';
    
    db.query(sql, [userId, title, description, file_url, file_type, subject], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to create resource' });
        }
        res.status(201).json({ message: 'Resource created successfully', resourceId: result.insertId });
    });
};

const downloadResource = (req, res) => {
    const resourceId = req.params.id;
    
    // Increment download count
    const updateSql = 'UPDATE resources SET downloads_count = downloads_count + 1 WHERE id = ?';
    
    db.query(updateSql, [resourceId], (err) => {
        if (err) {
            console.error('Failed to update download count:', err);
        }
    });
    
    // Get resource details
    const selectSql = 'SELECT * FROM resources WHERE id = ?';
    
    db.query(selectSql, [resourceId], (err, results) => {
        if (err || results.length === 0) {
            return res.status(404).json({ error: 'Resource not found' });
        }
        
        res.json({ message: 'Download counted', resource: results[0] });
    });
};

module.exports = { getAllResources, createResource, downloadResource };

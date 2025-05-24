const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/database');
require('dotenv').config();

const register = (req, res) => {
    const { username, email, password, full_name, course, year_of_study, student_id } = req.body;
    
    console.log('Registration attempt:', { username, email, full_name });
    
    if (!username || !email || !password || !full_name) {
        return res.status(400).json({ error: 'All required fields must be provided' });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    
    const sql = 'INSERT INTO users (username, email, password, full_name, course, year_of_study, student_id) VALUES (?, ?, ?, ?, ?, ?, ?)';
    
    db.query(sql, [username, email, hashedPassword, full_name, course, year_of_study, student_id], (err, result) => {
        if (err) {
            console.error('Database insertion error:', err);
            if (err.code === 'ER_DUP_ENTRY') {
                return res.status(400).json({ error: 'Username or email already exists' });
            }
            return res.status(500).json({ error: 'User registration failed' });
        }
        
        // Success - log the details
        console.log('User registered successfully:', {
            userId: result.insertId,
            affectedRows: result.affectedRows,
            username: username
        });
        
        res.status(201).json({ 
            message: 'User registered successfully',
            userId: result.insertId,
            affectedRows: result.affectedRows
        });
    });
};
const login = (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    const sql = 'SELECT * FROM users WHERE email = ?';
    
    db.query(sql, [email], (err, results) => {
        if (err) {
            console.error('Login error:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        
        if (results.length === 0) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        
        const user = results[0];
        const isValidPassword = bcrypt.compareSync(password, user.password);
        
        if (!isValidPassword) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' });
        
        res.json({
            token,
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                full_name: user.full_name,
                course: user.course,
                year_of_study: user.year_of_study,
                student_id: user.student_id
            }
        });
    });
};

module.exports = { register, login };

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Middleware to parse JSON
app.use(express.json());

// Sample data
const posts = [
  { name: "CBIT", title: "Welcome to CBIT" },
  { name: "MGIT", title: "Welcome to MGIT" },
  { name: "VBIT", title: "Welcome to VBIT" }
];

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Login route to generate JWT
app.post('/login', (req, res) => {
    const username = req.body.username;
    const user = { name: username };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN);
    res.json({ accessToken });
  });
  

// Protected route for posts
app.get('/posts', authenticateToken, (req, res) => {
  res.json(posts.filter(post => post.name === req.user.name));
});

// Start server
app.listen(3000, () => console.log('Server running on port 3000'));

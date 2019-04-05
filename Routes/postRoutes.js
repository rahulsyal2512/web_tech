const express = require('express');
const app = express.Router();
const post = require('../Controllers/dummyController');

app.get('/', post.getAllPost);
app.post('/addPost', post.savePost);

module.exports = app;
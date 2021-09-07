const mongoose = require('mongoose');

// Connecting to MongoDB
mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected...'))
    .catch(err => console.error('Connection failed...', err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});
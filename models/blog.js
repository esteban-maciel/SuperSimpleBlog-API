const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true,
        trim: true
    }, 
    author: {
        type: String,
        required: true,
        trim: true
    },
    body: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {timestamps: true});

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;
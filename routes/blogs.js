const express = require("express");
const Blog = require("../models/blog.js");
const app = express();

app.get("/blogs", async (req, res) => {
    const blogs = await Blog.find({});
    
    try {
        res.send(blogs);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get("/blogs/:id", async(req, res) => {
    Blog.findById(req.params.id).then((blog) => {
        if(!blog) {
            return res.status(404).send();
        }
        res.send(blog);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

app.post("/blogs", async (req, res) => {
    const blog = new Blog(req.body); 

    blog.save().then((blog) => {
        res.status(201).send(blog);
    }).catch((err) => {
        res.status(400).send(err);
    })
});

app.patch("/blogs/:id", async (req, res) => {
    Blog.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((blog) => {
        if(!blog) {
            return res.status(404).send();
        }
        res.send(blog);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

app.delete("/blogs/:id", async (req, res) => {
    Blog.findByIdAndDelete(req.params.id).then((blog) => {
        if(!blog) {
            return res.status(404).send();
        }
        res.send(blog);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

module.exports = app;
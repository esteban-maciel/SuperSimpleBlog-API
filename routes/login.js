const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user.js");
const app = express();

app.post("/login", (req, res) => {
    User.findOne({ username: req.body.username })
   .then((user) => {
        const passwordCompare = bcrypt.compare(req.body.password, user.password)
        if(passwordCompare) {
            const token = jwt.sign(user.username, process.env.JWT_SECRET);
            res.status(200).send(token);
        } else {
            res.status(401).status(err);
        }

   }).catch((err) => {
       res.status(404).send(err);
   })
});

module.exports = app;
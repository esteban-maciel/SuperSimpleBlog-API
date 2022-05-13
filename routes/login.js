const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user.js");
const app = express();

app.post("/login", async(req, res) => {
    User.findOne({ username: req.body.username })
   .then( async (user) => {
        const passwordCompare =  await bcrypt.compare(req.body.password, user.password)
        if(passwordCompare) {
            const token = jwt.sign(user.username, process.env.JWT_SECRET);
            res.status(200).send(token);
        } else {
            return res.status(401).status(err);
        }

   }).catch((err) => {
       res.status(404).send(err);
   })
});

module.exports = app;
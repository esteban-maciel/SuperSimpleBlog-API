const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user.js");
const app = express();

app.post("/register", async (req, res) => {

    const takenUsername = await User.findOne({ username: req.body.username });
    const takenEmail = await User.findOne({ email: req.body.email });

    if(takenUsername || takenEmail) {
        res.status(409).send();
    }

    else {
        req.body.password = await bcrypt.hash(req.body.password, 10);

        const user = User(req.body);

        user.save().then((user) => {
            res.status(201).send(user);
            
        }).catch((err) => {
            res.status(400).send(user);
        })
    }
});

module.exports = app;
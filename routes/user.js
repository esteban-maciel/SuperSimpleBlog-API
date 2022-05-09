const User = require("../models/user.js");
const express = require("express");
const app = express();

app.get("/user/info", auth, async (req, res) => {
    User.findById(req.params.id).then((user) => {
        if(!user) {
            return res.status(404).send();
        }

        res.send(user);
    }).catch((err) => {
        res.status(500).send(err);
    });
});
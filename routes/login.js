const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user.js");
const app = express();


app.post("/login", async (req, res) => {

    User.findOne({username: req.body.username})
    .then((user) => {
        if(!user) {
            res.status(404).send(user);
        }
        bcrypt.compare(req.body.password, user.password)
        .then((isCorrect) => {
            if(isCorrect) {
                const payload = {
                    id: user._id,
                    username: user.username
                }
                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    {expiresIn: 86400},
                    (err, token) => {
                        if(err) {
                            res.status(500).send(err);
                        }

                        res.status(200).send();
                    }
                )
            }
            else {
                res.status(404).send();
            }
        });
    });
});

module.exports = app;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user.js");

exports.signup = (req, res) => {
    const user = User(req.body);
    user.password = bcrypt(user.password, 10);

    
}
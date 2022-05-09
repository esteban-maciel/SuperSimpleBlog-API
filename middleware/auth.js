const jwt = require("jsonwebtoken");

function verifyJWT(req, res, next) {
    const token = req.headers["x-access-toekn"]?.split(' ')[1];

    if(token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if(err) {
                res.status(500).send({isLoggedIn: false});
            }
            req.user = {};
            req.user.id = decoded.id;
            req.user.username = decoded.username;
            next();
        })
    }
    else {
        isLoggedIn: false,
        res.status(500).send({isLoggedIn: false});
    }
}
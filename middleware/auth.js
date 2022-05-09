const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    const token = req.header("x-auth-token");

    try {
        if(!token) {
            res.status(404).send(err);
        }

        const verified = jwt.verify(token, process.env.JWT_SECRET);

        if(!verified) {
            res.status(401).send(err);
        }

        req.user = verified.id;
        next();

    } catch(err) {
        res.status(500).send(err);
    }  

}

module.exports = auth;
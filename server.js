const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const blogRouter = require("./routes/blogs.js");
const loginRouter = require("./routes/login.js");
const registrationRouter = require("./routes/register.js");

const app = express();
dotenv.config();

app.use(express.json());

mongoose.connect(process.env.ATLAS_URI);

app.use(blogRouter);
app.use(loginRouter);
app.use(registrationRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
}); 
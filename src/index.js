const express = require("express");
const  dotenv = require("dotenv");
dotenv.config();

const conn = require("./connection");
const routes = require("./routes");
const authMiddleware = require("./middleware");
const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(authMiddleware)
routes(app);

app.listen(port, () => {
    conn()
    console.log(`server is running`)
})

module.exports = app;
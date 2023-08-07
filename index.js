const express = require("express");
require("dotenv").config();

const app = express();
//using middlewares
app.use(express.json());

const PORT = process.env.PORT || 3000;

//importing the routes
const blog = require("./routes/blog");
//mount
app.use("/api/v1", blog);

//starting the serve
app.listen(PORT, () => {
    console.log(`Server started succesfully on port: ${PORT}`);
})

//default route
app.get("/", (req, res) => {
    res.send(`<h1>This is Homepage baby</h1>`)
})

//connecting database
const connectWithDb = require("./config/database");
connectWithDb();
const mongoose = require("mongoose");

require("dotenv").config();

const connectWithDb = async () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log("Database Connected Successfully"))
    .catch((error) => {
        console.log("Database Connection failed");
        console.log(error.message);
        process.exit(1);
    })
}

module.exports = connectWithDb;
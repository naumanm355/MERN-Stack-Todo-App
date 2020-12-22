const mongoose = require('mongoose');
const connectionStr = "mongodb://127.0.0.1:27017";

const options = {
    reconnectTries: Number.MAX_VALUE,
    poolSize: 10
}

mongoose.connect(connectionStr, options).then(
    () => {
        console.log("Database connection established!")
    },
    err => {
        console.log("Error connecting Database instance due to: ", err);
    }
)
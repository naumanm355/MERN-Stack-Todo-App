const mongoose = require('mongoose');
const connectionStr = "mongodb://EnterPassword:EnterPassword@cluster0-shard-00-00.ofcaz.mongodb.net:27017,cluster0-shard-00-01.ofcaz.mongodb.net:27017,cluster0-shard-00-02.ofcaz.mongodb.net:27017/test?replicaSet=atlas-111hon-shard-0&ssl=true&authSource=admin" //"mongodb://127.0.0.1:27017";

const options = {
    reconnectTries: Number.MAX_VALUE,
    poolSize: 10,
    useNewUrlParser: true
}

mongoose.connect(connectionStr, options).then(
    () => {
        console.log("Database connection established!")
    },
    err => {
        console.log("Error connecting Database instance due to: ", err);
    }
)
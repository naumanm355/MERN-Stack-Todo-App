const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListData = new Schema({
    name: {
        type: String
    },
    todo: []
})

module.exports = mongoose.model("ListData", ListData)
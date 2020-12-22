const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoData = new Schema({
    title: {
        type: String
    },
    date: {
        type: String
    },
    status: {
        type: String,
        default: 'uncomplete'
    },
    listId: {
        type: Schema.Types.ObjectId, ref: 'ListData'
    }
})

module.exports = mongoose.model("TodoData", TodoData)
const ListData = require('../models/List')
const TodoData = require('../models/Todo');

exports.createList = (req, res) => {
    ListData.findOne({ name: req.body.name }, (err, data) => {
        if (err) {
            console.log(err)
            res.status(500).json({ 'success': 'false', 'message': "Error in Database." });
        }
        if (data != null || data != undefined) {
            res.status(200).json({ 'success': 'false', 'message': 'List data already exist.' });
        }
        else {
            let newListData = new ListData(req.body);
            newListData.save((err, data) => {
                if (err) {
                    res.status(500).json({ 'success': 'false', 'message': "Error in Database." });
                } else {
                    res.status(200).json({ 'success': 'true', 'message': "List created successfully.", 'data': data });
                }
            })
        }
    })
}

exports.getListData = (req, res) => {
    ListData.find({}, (err, data) => {
        if (err) {
            res.status(500).json({ 'success': 'false', 'message': "Error in getting list data." });
        } else {
            res.status(200).json({ 'success': 'true', 'data': data });
        }
    })
}

exports.deleteOneList = (req, res) => {
    ListData.deleteOne({ _id: req.body.listId }, (err, data) => {
        if (err) {
            res.status(500).json({ 'success': 'false', 'message': "Error in deleting list." });
        } else {
            res.status(200).json({ 'success': 'true', 'message': "List deleted successfully." });
        }
    })
}

exports.editListData = (req, res) => {
    ListData.findByIdAndUpdate({ _id: req.body.id }, { $set: { name: req.body.name } }, (err, data)=>{
        res.status(200).json({ 'success': 'true', 'message': "List edit successfully." });
    });
}

exports.deleteTodoFromList = (req, res) => {
    ListData.findById({ _id: req.body.listId }, (err, data) => {
        if (err) {
            res.json(err)
        } else {
            const dd = data.todo.filter(tod => tod._id != req.body.todoId);
            ListData.findByIdAndUpdate({ _id: req.body.listId }, { $set: { todo: dd } }, (err, succ) => {
                if (err) {
                    res.status(500).json({ "success": 'false', "message": "Error in updating list" });
                } else {
                    TodoData.deleteOne({_id: req.body.todoId}).then(()=>console.log("Deleted from todo also"))
                    res.status(200).json({ "success": 'true', "message": "Todo deleted successfully" });
                }
            })
        }
    })
}

exports.deleteAllList = (req, res) => {
    ListData.deleteMany({}).then(data=>res.send(data))
}
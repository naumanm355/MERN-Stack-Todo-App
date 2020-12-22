const TodoData = require('../models/Todo');
const ListData = require('../models/List')

exports.createTodo = (req, res) => {
    TodoData.findOne({ title: req.body.title }, (err, data) => {
        if (err) {
            res.status(500).send({ 'success': 'false', 'message': "Error in Database." });
        }
        if (data != null || data != undefined) {
            res.status(200).send({ 'success': 'false', 'message': 'List data already exist.' });
        }
        else {
            let newTodoData = new TodoData(req.body);
            newTodoData.save((err, data1) => {
                if (err) {
                    res.status(500).send({ 'success': 'false', 'message': "Failure in creating todo." });
                } else {
                    ListData.findByIdAndUpdate({ _id: req.body.listId }, { $push: { todo: data1 } }, (err1, succ) => {
                        if (err1) {
                            res.status(500).send({ 'success': 'false', 'message': "Failure in merging todo." });
                        } else {
                            res.status(500).send({ 'success': 'true', 'message': "List created successfully.", 'data': data1 });
                        }
                    })
                }
            })
        }
    })
}
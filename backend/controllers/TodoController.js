const TodoData = require('../models/Todo');
const ListData = require('../models/List')

exports.createTodo = (req, res) => {
    TodoData.findOne({ title: req.body.title }, (err, data) => {
        if (err) {
            res.status(500).json({ 'success': 'false', 'message': "Error in Database." });
        }
        // if (data != null || data != undefined) {
        //     res.status(200).json({ 'success': 'false', 'message': 'List data already exist.' });
        // }
        else {
            let newTodoData = new TodoData(req.body);
            newTodoData.save((err, data1) => {
                if (err) {
                    res.status(500).json({ 'success': 'false', 'message': "Failure in creating todo." });
                } else {
                    ListData.findByIdAndUpdate({ _id: req.body.listId }, { $push: { todo: data1 } }, (err1, succ) => {
                        if (err1) {
                            res.status(500).json({ 'success': 'false', 'message': "Failure in merging todo." });
                        } else {
                            ListData.findById({_id: req.body.listId}, (err, data2)=> {
                                res.status(200).json({ 'success': 'true', 'message': "List created successfully.", 'data': data2 });
                            })
                        }
                    })
                }
            })
        }
    })
}

exports.handleEditTodo = (req, res) => {
    ListData.findById({ _id: req.body.listId }, (err, data)=>{
        const uupdate = data.todo.map(ss => ss._id == req.body.todoId ? { ...ss, title: req.body.title} : ss)
        // res.send(uupdate)
        ListData.findByIdAndUpdate({ _id: req.body.listId }, { todo: uupdate }, (err1,data1)=>{
            if(err1) {
                res.status(500).json({ 'success': 'false', 'message': "Failure in updating todo." });
            } else {
                res.status(200).json({ 'success': 'true', 'message': "Updated successfully" });
            }
        })
    })
}

exports.handleUpdateStatus = (req, res) => {
    ListData.findById({ _id:  req.body.listId }, (err, data) => {
        const update = data.todo.map(ss => ss._id == req.body.todoId ? { ...ss, status: req.body.status } : ss )
        ListData.findByIdAndUpdate({ _id: req.body.listId }, { todo: update }, (err1, data1) => {
            if(err1) {
                res.status(500).json({ 'success': 'false', 'message': "Failure in updating status." });
            } else {
                ListData.find({}, (er, dat)=>{
                    res.status(200).json({ 'success': 'true', 'data': dat });
                })
            }
        })
    })

}
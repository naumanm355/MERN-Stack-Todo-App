const cors = require('cors')
const express = require('express');
var config=require("./config/db");
const app = express();
const port = process.env.PORT || 3301;
const bodyParser = require("body-parser");

const ListController = require('./controllers/ListController')
const TodoController = require('./controllers/TodoController')

app.use(cors());
app.options('*',cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


    // List
app
    .route("/api/createlist")
    .post(ListController.createList)

app
    .route("/api/getlistdata")
    .get(ListController.getListData)

app
    .route("/api/deletelist/:listId")
    .get(ListController.deleteOneList)

app
    .route("/api/editlist")
    .get(ListController.editListData)

app
    .route("/api/deletetodofromlist")
    .get(ListController.deleteTodoFromList)

    // Todo
app
    .route("/api/createtodo")
    .post(TodoController.createTodo)


app.listen(port, ()=> {
    console.log(`Server running at http://localhost:${port}`);
})
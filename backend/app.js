const express = require('express');
const app = express();
var config=require("./config/db");
const port = process.env.PORT || 3301;
const bodyParser = require("body-parser");

const ListController = require('./controllers/ListController')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
    .route("/api/editlist/:listId")
    .get(ListController.editListData)

app.listen(port, ()=> {
    console.log(`Server running at http://localhost:${port}`);
})
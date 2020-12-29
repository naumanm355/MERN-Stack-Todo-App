import { List_Action } from '../constants/listActions';
import ROOT_URL from '../constants/config';
import store from '../store/index'
 export const handleCreateList = (listname) => dispatch => {
    var listData = {
        'name': listname
    }
    fetch(ROOT_URL+'/api/createlist',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        mode: 'cors',
        body: JSON.stringify(listData)
    }).then((response) => {
        response.json().then(data => {
            if(data.success) {
                console.log("response",data);
                return dispatch({ type: List_Action.NEW, payload: data })
            }
        })
    })
    .catch(err=>{
        console.log(err);
    })
 }

 export const handleShowList = () => dispatch => {
    fetch(ROOT_URL+'/api/getlistdata', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        mode: 'cors',
    }).then(response => {
            response.json().then(data => {
                if(data.success) {
                    store.dispatch({ type: List_Action.SHOW, payload: data.data })
                }
            })
    }).catch(err=>console.log(err))
    return { type: List_Action.SHOW, payload: [] }
 }

 export const handleUpdateList = (id, name) => dispatch => {
    var obj = {
         'id': id,
         'name': name
    }
    fetch(ROOT_URL + '/api/editlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        mode: 'cors',
        body: JSON.stringify(obj)
    }).then((res)=>{
        res.json().then(data=>{
            if(data.success) {
                console.log("updated successfully")
                // store.dispatch({ type: List_Action.SHOW })
            } else {
                console.log("Error in updating action")
            }
        })
    })
 }

 export const handleDeleteList = (id) => dispatch => {
     var obj = {
         "listId": id
     }
     fetch(ROOT_URL + '/api/deletelist', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        mode: 'cors',
        body: JSON.stringify(obj)
     }).then((res)=> {
         res.json().then(data => {
             if(data.success) {
                 console.log(data);
             } else {
                console.log(data);
             }
         })
     })
 }

 export const handleCreateTodo = (listId, title, date) => dispatch => {
     var obj = {
        "title": title,
        "date": date,
        "listId": listId
     }
     fetch(ROOT_URL + '/api/createtodo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        mode: 'cors',
        body: JSON.stringify(obj)
     }).then(res => {
         res.json().then(data => {
            if(data.success) {
                console.log(data)
            } else {
                console.log(data)
            }
         })
     })
 }

 export const handleDeleteTodoFromList = (listId, todoId) => dispatch => {
     var obj = {
        "listId": listId,
        "todoId": todoId
     }
     fetch(ROOT_URL + '/api/deletetodofromlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        mode: 'cors',
        body: JSON.stringify(obj)
     }).then(res => {
         res.json().then(data => {
            if(data.success) {
                console.log(data)
            } else {
                console.log(data)
            }
         })
     })
 }

 export const handleEditTodo = (listId, todoId, title) => dispatch => {
    var obj = {
        "listId": listId,
        "todoId": todoId,
        "title": title
    }
    fetch(ROOT_URL + '/api/edittodo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        mode: 'cors',
        body: JSON.stringify(obj)
    }).then(res=> {
        res.json().then(data => {
            if(data.success) {
                console.log(data)
            } else {
                console.log(data)
            }
         })
    })
 }
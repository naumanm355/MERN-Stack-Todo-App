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
     console.log("I am called")
    fetch(ROOT_URL+'/api/getlistdata', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        mode: 'cors',
    }).then(response => {
            response.json().then(data => {
                console.log("res of list",data.data)
                if(data.success) {
                    store.dispatch({ type: List_Action.SHOW, payload: data.data })
                }
            })
    }).catch(err=>console.log(err))
    return { type: List_Action.SHOW, payload: [] }
 }
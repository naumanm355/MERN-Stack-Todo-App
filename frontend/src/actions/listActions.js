import { List_Action } from '../constants/listActions';
import ROOT_URL from '../constants/config';
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
        console.log("response",response);
        response.json().then(data => {
            if(data.success) {
                return dispatch({type: List_Action.NEW, payload: data})
            }
        })
    })
    .catch(err=>{
        console.log(err);
    })
 }
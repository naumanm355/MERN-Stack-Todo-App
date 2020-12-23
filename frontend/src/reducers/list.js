import { List_Action, List_Status } from '../constants/listActions';
const initialState = {
    list_status: List_Status.NEW
}

export default function (state = initialState, action) {
    switch (action.type) {
        case List_Action.NEW:
            return { ...state, list_status: List_Status.NEW }
    
        default:
            return { ...state }
    }
}
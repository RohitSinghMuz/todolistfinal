import {ADD} from "../actions/Todoaction";
import {DELETE} from "../actions/Todoaction";
import {EDIT} from "../actions/Todoaction";

const initState = {
    tododata:[], 

}

const todoreducer = (state = initState, action:any) => {
    console.log('action', action)
    switch (action.type) {
        case ADD:
            return {
                ...state,
                tododata: { ...state.tododata, ...action.payload },
             
            }
            case DELETE:
                return {
                    ...state,
                    tododata: { ...state.tododata, ...action.payload },
                 
                }
                case EDIT:
                    return {
                        ...state,
                        tododata: { ...state.tododata, ...action.payload },
                     
                    }
   
        default:
            return state;
    }

}


export const Adddataredux = (payload:any) => {
    console.log(payload,'payload')
    return {
        type: 'ADD',
        payload: payload,

    }
}

export const Deletedata = (payload:any) => {
    console.log(payload,'payload')
    return {
        type: 'DELETE',
        payload: payload,

    }
}

export const Editdata = (payload:any) => {
    console.log(payload,'payload')
    return {
        type: 'EDIT',
        payload: payload,

    }
}


export default todoreducer;

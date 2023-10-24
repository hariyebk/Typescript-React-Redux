import { FetchDispatch, Todos } from "../actions";
import { ActionTypes } from "../enum";


export default function Todosreducer(state: Todos[] = [], action: FetchDispatch){
    switch(action.type){
        case ActionTypes.fetchTodo:
            return action.payload
        default:
            return state
    }
}


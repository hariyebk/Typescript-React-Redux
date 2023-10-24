import { Action, Todos } from "../actions";
import { ActionTypes } from "../actions";


export default function Todosreducer(state: Todos[] = [], action: Action){
    switch(action.type){
        case ActionTypes.fetchTodo:
            return action.payload;
        case ActionTypes.deleteTodo:
            return state.filter((todo: Todos) => todo.id !== action.payload)
        default:
            return state
    }
}

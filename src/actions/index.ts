import axios from "axios"
import { Dispatch} from "redux"
import { ActionTypes } from "../enum"

const url = 'https://jsonplaceholder.typicode.com/todos'

export interface Todos{
    id: number,
    title: string,
    completed: boolean
}

export interface FetchDispatch{
    type: ActionTypes.fetchTodo,
    payload: Todos[]
}

// Action creator
export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        const res = await axios.get<Todos[]>(url)
        //  represents the structure of the action dispatched when fetching todos
        dispatch<FetchDispatch>({type: ActionTypes.fetchTodo, payload: res.data})
    }
}
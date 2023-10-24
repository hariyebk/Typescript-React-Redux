import axios from "axios"
import { Dispatch} from "redux"
import { ActionTypes } from "../actions"

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

// Redux thunk action creator middleware
export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        const res = await axios.get<Todos[]>(url)
        console.log(res.data)
        //  represents the structure of the action dispatched when fetching todos
        dispatch<FetchDispatch>({type: ActionTypes.fetchTodo, payload: res.data})
    }
}
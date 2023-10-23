import axios from "axios"
import { Dispatch} from "redux"
import { ActionTypes } from "../enum"

const url = 'https://jsonplaceholder.typicode.com/todos'

interface Todos{
    id: number,
    title: string,
    completed: boolean
}

export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        const res = await axios.get<Todos>(url)
        dispatch({type: ActionTypes.fetchTodo, payload: res.data})
    }
}
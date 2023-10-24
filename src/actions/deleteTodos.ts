import { ActionTypes } from "./ActionTypes"
export interface DeleteTodos{
    type: ActionTypes.deleteTodo,
    payload: number
}

// Action creator
export const deleteTodos = (id: number): DeleteTodos => {
    return {
        type: ActionTypes.deleteTodo,
        payload: id
    }
}
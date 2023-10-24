import { combineReducers } from "redux"
import Todosreducer from "./todo"
import { Todos } from "../actions"

export interface StoreState{
    todos: Todos[]
}
export const reducers = combineReducers<StoreState>({
    todos: Todosreducer,
})
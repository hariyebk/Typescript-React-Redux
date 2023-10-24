import { DeleteTodos, FetchDispatch} from "../actions";

export enum ActionTypes{
    fetchTodo,
    deleteTodo
}

export type Action = FetchDispatch | DeleteTodos
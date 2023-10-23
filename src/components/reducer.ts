
import { Action, combineReducers } from "redux"
import "redux"
const initialState = {

}

function reducer(state = initialState, action: Action){
    switch(action.type){
        case "":
            return {

            };
        default:
            return state
    }
}

export const reducers = combineReducers({
    reducer
})
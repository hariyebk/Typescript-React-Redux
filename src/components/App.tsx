import React from "react"
import { Todos } from "../actions"
import { StoreState } from "../reducers"
import { connect } from "react-redux"
import { fetchTodos } from "../actions"


interface Appprops{
    todo: Todos[]
}
class _App extends React.Component<Appprops>{
    render(): React.ReactNode {
        return (
            <div>
                Hi there
            </div>
        )
    }
}
// The connect function connects a React component to the Redux store. It allows us to subscribe to the Redux store and dispatch actions from our React component. mapStateToProps is a function that is used to select the data from the Redux store that we want to make available to our React component. mapDispatchToProps is a function that is used to create functions that dispatch Redux actions from a React component.

// The connect function returns a new React component that is connected to the Redux store. This new component will receive the props that are defined in the mapStateToProps and mapDispatchToProps functions.

export const mapStateToProps = (state: StoreState): {todo: Todos[]} => {
    return {todo: state.todos}
}


export const App = connect(
    mapStateToProps,
    // mapDispatchToProps - action creator
    {fetchTodos}
)(_App)

export default App
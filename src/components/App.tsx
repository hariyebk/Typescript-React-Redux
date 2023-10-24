import React from "react"
import { DeleteTodos, FetchDispatch, Todos } from "../actions"
import { StoreState } from "../reducers"
import { connect } from "react-redux"
import { fetchTodos, deleteTodos } from "../actions"


interface Appprops{
    todo: Todos[],
    fetchTodos: Function,
    deleteTodos: typeof deleteTodos
}

interface AppState{
    isFetching: boolean
}
class _App extends React.Component<Appprops, AppState>{
    
    // Initializing our state
    constructor(props: Appprops){
        super(props)
        this.state = {isFetching: false}
    }

    componentDidUpdate(prevProps: Appprops): void{
        if(!prevProps.todo.length && this.props.todo.length){
            this.setState({isFetching: false})
        }
    }
    // Event handlers
    handleClick = (): void => {
        this.props.fetchTodos()
        this.setState({isFetching: true})
    }
    handleDelete = (id: number): void => {
        this.props.deleteTodos(id)
    }

    // Renders a list of todos
    renderList(): JSX.Element[]{
        return this.props.todo.map((todo: Todos) => {
            return (
                <div onClick={() => this.handleDelete(todo.id)} key={todo.id} style={{cursor: "pointer"}}>
                    {todo.title}
                </div>
            )
        })
    }
    
    // Main app component
    render(): React.ReactNode {
        return (
            <div>
                <button onClick={this.handleClick}> Fetch </button>
                {this.state.isFetching ? "Loading" : null}
                { this.renderList()}
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
    {fetchTodos, deleteTodos}
)(_App)

export default App
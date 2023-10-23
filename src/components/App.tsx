import React from "react"

interface Appprops{
    color?: string
}
interface AppState{
    count: number
}
class App extends React.Component<Appprops, AppState>{
    constructor(props: Appprops){
    super(props)

    this.state = {count: 0}
    }

    Onadd = (): void => {
    this.setState({count: this.state.count + 1})
    }
    Onsubtract = (): void => {
    this.setState({count: this.state.count - 1})
    }

    render(): React.ReactNode {
    return (
        <div>
        <button onClick={this.Onadd}> + </button> &nbsp;
        <button onClick={this.Onsubtract}> - </button> &nbsp;
        {this.state.count}
        </div>
    )
    }
}

export default App
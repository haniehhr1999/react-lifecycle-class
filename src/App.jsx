import { Component } from "react";

class App extends Component{
    constructor(){
        super()
        console.log('app - constructor()');
        this.state = { 
            date: new Date() , 
            showClock: true,
            color:false
        }
    }
    static getDerivedStateFromProps(props , state){
        console.log('app - getDerivedStateFromProps');
        return state
    }
    componentDidMount(){
        console.log('app - componentDidMount() ');
        this.timer = setInterval(()=> this.tick() , 1000)
    }

    tick(){
        this.setState({ date: new Date() })
    }

    render(){
        console.log('app - render()')
        return(
            <h1>time : {this.state.date.toLocaleTimeString()}</h1>
        )
    }
}

export default App


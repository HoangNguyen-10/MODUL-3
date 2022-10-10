import { Component } from "react";

class Hello extends Component{
    componentWillUnmount(){
        alert('this component will be unmounted')
    }
    render(){
        return <h1>hello wolrd</h1>
    }
    
}
export default Hello
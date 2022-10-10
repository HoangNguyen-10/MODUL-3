import { Component } from "react";

class Tables extends Component{
    constructor(props){
        super(props)
        this.state={
            students:[
                {id:1,name:'long'},
                {id:2,name:'huy'}
            ]
        }
    }

    renderTableData(){
        return this.state.students.map((student,index)=>{
            const {id,name}=student
            return(
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    
                </tr>
            )
        })
    }

    renderTableHeader(){
        const header=Object.keys(this.state.students[0])
        return header.map((key,index)=><th key={index}>{key.toUpperCase()}</th>)
    }

    render(){
        return(
            <table>
                <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                </tbody>
            </table>
        )
    }
}
export default Tables
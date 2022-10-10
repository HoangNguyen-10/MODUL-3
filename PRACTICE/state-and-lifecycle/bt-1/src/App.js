import Home from "./Home";
import React,{ Component } from "react";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isExpand: false
    }
  }

  handleOpen = () => {
    this.setState({ isExpand: true })
  }

  handleClose = () => {
    this.setState({ isExpand: false })
  }

  render() {
    const { isExpand } = this.state
    if (isExpand) return (<Home onClose={this.handleClose} />)
    return (
      <div>
         <h1 style={{ backgroundColor: 'green', color: 'white', padding: 20 }}>Conditional Rendering</h1>
        <button onClick={this.handleOpen}>Xem giới thiệu</button>
      </div>
    )
  }


}

export default App
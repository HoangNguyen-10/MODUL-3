import { Component } from "react";

class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1 style={{ backgroundColor: 'green', color: 'white', padding: 20 }}>Conditional Rendering</h1>
                    <button onClick={this.props.onClose}>Đóng giới thiệu</button>
                    <h2>Giới thiệu</h2>
                    <p>Trong ReactJS, đôi khi bạn có một số components...</p>
                </div>
            </div>
        )
    }
}

export default Home
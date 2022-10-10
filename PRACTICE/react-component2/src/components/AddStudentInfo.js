

import React, { Component } from 'react'

class Tables extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: [
        { id: 1, name: 'hoan', age: 21, address: 'nam dinh' },
        { id: 2, name: 'hieu', age: 19, address: 'thai binh' },
        { id: 3, name: 'linh', age: 16, address: 'ha nam' },
        { id: 4, name: 'huy', age: 25, address: 'ha noi' },
      ]
    }
  }

  renderTableData() {
    return this.state.students.map((student, index) => {
      const { id, name, age, address } = student
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{age}</td>
          <td>{address}</td>
        </tr>
      )
    })
  }

  renderTableHeader() {
    const header = Object.keys(this.state.students[0])
    return header.map((key, index) => <th key={index}>{key.toUpperCase()}</th>)
  }

  render() {
    return (
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

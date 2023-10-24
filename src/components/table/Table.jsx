import React from 'react'
import "./table.css"


const TableLayout = () => {
    const users = [
        { column2: 'John', column1: "First name", email: 'john@example.com' },
        { column2: 'Alice', column1: "Last name", email: 'alice@example.com' },
        { column2: 'Bob', column1: "Email 01", email: 'bob@example.com' },
        { column2: 'Bob', column1: "Email 02", email: 'bob@example.com' },
        { column2: 'Bob', column1: "Phone 01", email: 'bob@example.com' },
        { column2: 'Bob', column1: "Phone 02", email: 'bob@example.com' },
        { column2: 'Bob', column1: "LinkedIn link", email: 'bob@example.com' },
      ]

  return (
    <table>
    <tbody>
            <tr>
                <th style={{width:"20%"}}>{"title"}</th>
                <th style={{width:"40%"}}>New</th>
                <th style={{width:"40%"}}>Actual</th>
            </tr>
            {users.map((user)=>
            <tr key={user.id}>
                <td style={{width:"20%"}}>{user.column1}</td>
                <td style={{width:"40%"}}>{user.column2}</td>
                <td style={{width:"40%"}}>{user.email}</td>
            </tr>)}
    </tbody>
</table>
  )
}

export default TableLayout
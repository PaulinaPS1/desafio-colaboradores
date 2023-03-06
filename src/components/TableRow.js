import React from 'react'

const TableRow = ({user}) => {
const{name, id, email} = user
  return (
      <tr>
                <td>{name}</td>
                <td>{email}</td>
            </tr>
    
  )
}

export default TableRow

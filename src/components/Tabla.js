import React from 'react'
import TableRow from './TableRow'

const Tabla = ({usuarios}) => {
  return (
    <div>
      <h2> Lista de Colaboradores</h2>
    <table className='table table-striped table-hover mt-5 shadow-log'>
        <thead className='bg-primary text-white'>
            <tr>
                <th>Nombre</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {usuarios.map(user => <TableRow key={user.id} user={user} />)}
        </tbody>
    </table>
    </div>
  )
}

export default Tabla

import React from 'react'

const Error = ({message}) => {
  return (
    <div>
      <p className='bg-danger text-white text-center p-2 w-50 text-uppercase rounded font-bold'>{message}</p>
    </div>
  )
}

export default Error

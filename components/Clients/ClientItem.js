import React from 'react'


const ClientItem = ({ client }) => {
  return (
    <>
       <tr className='text-right '>
      <td className='min-w-[200px] text-center'>{client.id} </td>
      <td className="px-2">{client.name}</td>
      <td className="px-2">{client.orderId}</td>    
    </tr>
    </>
  )
}

export default ClientItem
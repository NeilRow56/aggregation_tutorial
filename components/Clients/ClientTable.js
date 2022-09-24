import React from 'react'
import ClientItem from './ClientItem'

const ClientTable = ( { clients }) => {
    return (
      <div>
        <table className="table-auto">
    <thead>
      <tr className='text-sm text-center'>
        <th>ID</th>
        <th>PRODUCT</th>
        <th>PRICE</th>
        
        
        
        </tr>
    </thead>
   <tbody>
    { clients && clients.map((client) => (
      <ClientItem key={client._id} client={client}/>
    ))}
      
        
      <tr className="border-2  border-gray-900 font-bold">
      <td className=' text-center '>Narrative </td>
        <td className='text-center px-2'>Narrative</td>
        <td>Narrative</td>
        
      </tr>
    </tbody>
  </table>
      </div>
    )
  }

export default ClientTable
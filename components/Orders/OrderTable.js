import React from 'react'
import OrderItem from './OrderItem'

const OrderTable = ( { orders }) => {
  return (
    <div>
      <table className="table-auto">
  <thead>
    <tr className='text-sm text-center'>
      <th>ID</th>
      <th>ITEM</th>
      
      
      
      
      </tr>
  </thead>
 <tbody>
  { orders && orders.map(( order) => (
    <OrderItem key={order._id} order={order}/>
  ))}
    
      
    <tr className="border-2  border-gray-900 font-bold">
    <td className=' text-center '>Narrative </td>
      <td className='text-center'></td>
      
      
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default OrderTable
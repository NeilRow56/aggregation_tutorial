import React from 'react'


const OrderItem = ({ order }) => {
  return (
    <>
       <tr className='text-right '>
      <td className='min-w-[200px] text-center'>{order.id} </td>
      <td className="px-2">{order.item}</td>
        
    </tr>
    </>
  )
}

export default OrderItem
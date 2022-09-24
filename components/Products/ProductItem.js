import React from 'react'


const ProductItem = ({ product }) => {
  return (
    <>
       <tr className='text-right '>
      <td className='min-w-[200px] text-center'>{product.id} </td>
      <td className="px-2">{product.name}</td>
      <td className="px-2">{product.price.toFixed(2)}</td>    
    </tr>
    </>
  )
}

export default ProductItem
import React from 'react'
import ProductItem from './ProductItem'

const ProductTable = ( { products }) => {
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
  { products && products.map((product) => (
    <ProductItem key={product._id} product={product}/>
  ))}
    
      
    <tr className="border-2  border-gray-900 font-bold">
    <td className=' text-center '>TOTALS </td>
      <td className='text-center'></td>
      <td>1000.00</td>
      
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default ProductTable
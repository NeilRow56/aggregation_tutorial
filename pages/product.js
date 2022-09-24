import Head from 'next/head'
import React from 'react'
import ProductTable from '../components/Products/ProductTable'
import Product from '../models/Product'
import OrderTable from '../components/Orders/OrderTable'
import Order from '../models/Order'
import ClientTable from '../components/Clients/ClientTable'
import Client from '../models/Client'
import db from '../lib/dbConnect'

const Summary = ( {products, orders, clients } ) => {

  
  return (
    <div>
      <Head>
        <title>Summary</title>
    </Head>
    <div className='w-full text-center'>
      <h2 className='text-3xl semibold underline pb-5'>Products Summary</h2>
    </div>
    <div className='w-full flex justify-center my-5'>
    <ProductTable products={products } />
    </div>
    <hr />
    <div className='w-full text-center'>
      <h2 className='text-3xl semibold underline pb-5'>Orders Summary</h2>
    </div>
    <div className='w-full flex justify-center my-5'>
    <OrderTable orders={orders } />
    </div>
    <hr/>
    <div className='w-full text-center'>
      <h2 className='text-3xl semibold underline pb-5'>Clients Summary</h2>
    </div>
    <div className='w-full flex justify-center my-5'>
    <ClientTable clients={clients } />
    </div>
    
    </div>
      
    
  )
}

export async function getServerSideProps() {
  await db.dbConnect();
  
  const products = await Product.find().lean();
  const orders = await Order.find().lean();
  const clients = await Client.find().lean();
  return {
    props: {
      products: products.map(db.convertDocToObj),
      orders: orders.map(db.convertDocToObj),
      clients: clients.map(db.convertDocToObj),
    },
  };
}

export default Summary


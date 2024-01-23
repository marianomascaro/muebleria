import React from 'react'

const ItemDetail = ({ id, nombre, precio, img }) => {
  return (
    <div className='text-center border border-black m-12'>
        <h2 className='text-xl font-bold'>Nombre: {nombre}</h2>
        <h3 className='text-lg font-semibold'>Precio: {precio}</h3>
        <p className='text-sm'>ID: {id}</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos quod dignissimos provident ut soluta vero iusto, nobis obcaecati incidunt nulla! Facilis nobis porro minima repellendus. Consequatur distinctio incidunt excepturi reprehenderit?</p>
        <img src={img} alt={nombre} className='h-60 w-60 mx-auto mt-10' />
    </div>
  )
}

export default ItemDetail
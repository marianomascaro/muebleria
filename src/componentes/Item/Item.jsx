import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='py-5 space-y-1 ml-5 mt-5 bg-sky-50 rounded-lg w-60 flex flex-col items-center'>
        <img src={img} alt={nombre} className='w-40 h-40' />
        <h3>Nombre: {nombre}</h3>
        <p className='text-sm'>ID: {id}</p>
        <p>Precio: {precio}</p>
        <Link 
          to={`/item/${id}`}
          className='bg-gray-300 text-sm p-2 rounded-lg'
          >
            Ver Detalles
        </Link>
    </div>
  )
}

export default Item
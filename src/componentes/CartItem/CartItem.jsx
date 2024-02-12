import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const CartItem = ({item, cantidad, eliminarProducto}) => {
  return (
    <div>
        <div className='flex flex-row'>
          <p className='font-semibold text-xl'>{item.nombre}</p>
          <button
            onClick={eliminarProducto}
            className='bg-red-600 px-1.5 ml-3 rounded-full'
          >
            <XMarkIcon className='w-4 h-4 text-white' />
          </button>
        </div>
        <p>Cantidad: {cantidad}</p>
        <p>Precio:$ {item.precio}</p>
    </div>
  )
}

export default CartItem
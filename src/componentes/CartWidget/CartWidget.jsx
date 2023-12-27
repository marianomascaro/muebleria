import React from 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

const CartWidget = () => {
  return (
    <div className='p-3 justify-center items-center flex flex-row space-x-2'>
        <div><ShoppingCartIcon className='h-8 w-8' /></div>
        <div className='text-xl font-semibold'>3</div>
    </div>
  )
}

export default CartWidget
import { useContext } from 'react'
import {CarritoContext} from '../../context/CarritoContext'
import { Link } from 'react-router-dom'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

const CartWidget = () => {

  const {cantidadTotal} = useContext(CarritoContext)

  return (
      <Link to='/cart'>
        <div className='p-3 justify-center items-center flex flex-row space-x-2'>
            <div><ShoppingCartIcon className='h-8 w-8' /></div>
            {
              (cantidadTotal > 0 ) ? <div className='text-xl font-semibold'>{cantidadTotal}</div> : <p>0</p>
            }
        </div>
      </Link>
  )
}

export default CartWidget
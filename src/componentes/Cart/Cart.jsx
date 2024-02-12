import { useContext } from 'react'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'

const Cart = () => {

    const {carrito, vaciarCarrito, total, cantidadTotal, eliminarProducto} = useContext(CarritoContext)

    if (cantidadTotal === 0) {
        <>
            <h2>No hay productos en el carrito</h2>
            <Link to='/'>Ver Productos</Link>
        </>
    }
  return (
    <div className='flex justify-center mt-5'>
        <div>
            {
                carrito.map(prod => <CartItem key={prod.id} {...prod} eliminarProducto={eliminarProducto} />)
            }
            <div className='font-bold text-lg text-center mt-2 py-3 px-4 bg-gray-300 rounded-lg shadow-md'>
                Total: ${total}
            </div>
            <div className='flex flex-col space-y-2 mt-2'>
                <button
                    onClick={() => vaciarCarrito()}
                    className='bg-red-500 text-white font-semibold py-2 px-3 rounded-lg'
                >
                    Vaciar Carrito
                </button>
                <Link 
                    to='/checkout'
                    className='bg-sky-600 text-white font-semibold py-2 px-3 rounded-lg'
                >
                    Finalizar Compra
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Cart
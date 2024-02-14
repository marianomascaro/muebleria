import { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'

const ItemDetail = ({ id, nombre, stock, precio, img }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0)
  const {agregarAlCarrito} = useContext(CarritoContext)

  const handleCantidad = (cantidad) => {
    setAgregarCantidad(cantidad)

    const item = {id, nombre, precio}
    agregarAlCarrito(item, cantidad)
  }

  return (
    <div className='text-center border border-black m-12 pb-5'>
        <h2 className='text-xl font-bold'>Artículo: {nombre}</h2>
        <h3 className='text-lg font-semibold'>Precio: {precio}</h3>
        <p className='text-sm'>ID: {id}</p>
        <p>Stock: {stock}</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos quod dignissimos provident ut soluta vero iusto, nobis obcaecati incidunt nulla! Facilis nobis porro minima repellendus. Consequatur distinctio incidunt excepturi reprehenderit?</p>
        <img src={img} alt={nombre} className='h-60 w-60 mx-auto my-10' />

        {
          agregarCantidad > 0 ?
          (
            <Link 
              to='/cart'
              className='bg-yellow-200 py-2 px-3 rounded-lg mb-5'
            >
              Terminar compra
            </Link>
          ) :
          (<ItemCount inicial={1} stock={stock} funcionAgregar={handleCantidad} />)
        }
    </div>
  )
}

export default ItemDetail
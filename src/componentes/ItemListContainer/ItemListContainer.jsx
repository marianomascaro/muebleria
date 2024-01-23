import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { getProductos, getProductosPorCategoria } from '../../asyncmock'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

  const [ productos, setProductos ] = useState([])

  const { idCategoria } = useParams()

  useEffect(() => {
    const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

    funcionProductos(idCategoria)
      .then(res => setProductos(res))
      .catch(error => console.log(error))

    /* getProductos()
      .then(respuesta => setProductos(respuesta)) */

  }, [idCategoria])


  return (
    <div className='pt-1 text-xl'> 
      <h2 className='pl-5'>Productos en stock</h2>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer
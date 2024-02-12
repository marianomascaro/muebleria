import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../../services/config'
import { collection, getDocs, where, query } from 'firebase/firestore'

const ItemListContainer = () => {

  const [ productos, setProductos ] = useState([])

  const { idCategoria } = useParams()

  useEffect (() =>{
    const misProductos = idCategoria 
    ? 
    query(collection(db, "inventario"), where("idCat", "==", idCategoria)) 
    :
    collection(db, "inventario")

    getDocs(misProductos)
      .then( res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data()
          return {id: doc.id, ...data}
        })
        setProductos(nuevosProductos)
      })
      .catch(error => console.log(error))

  }, [idCategoria])


  return (
    <div className='pt-1 text-xl'> 
      <h2 className='pl-5'>Productos en stock</h2>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer
import { useState, useEffect, useContext, cloneElement } from 'react'
import { CarritoContext } from '../context/CarritoContext'
import { db } from '../services/config'
import { collection, addDoc, updateDoc, getDoc, doc } from 'firebase/firestore'
import Swal from 'sweetalert2'

const Checkout = () => {

    const { carrito, vaciarCarrito, total } = useContext(CarritoContext)

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmacion, setEmailConfirmacion] = useState("")
    const [ordenId, SetOrdenId] = useState("")
    const [error, SetError] = useState("")

    const manejadorSubmit = (event) => {
        event.preventDefault()

        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            SetError("Todos los campos deben estar completos")
            return
        }

        if(email !== emailConfirmacion) {
            SetError("No coinciden los email")
            return
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email,
        }

        Promise.all(
            orden.items.map( async(productoOrden) => {
                const productoRef = doc(db,"inventario", productoOrden.id)
                const productoDoc = await getDoc(productoRef)
                const stockActual = productoDoc.data().stock
                await updateDoc(productoRef, {stock: stockActual - productoOrden.cantidad})
            })
        )
        .then(() => {
            addDoc(collection(db, "ordenes"), orden)
                .then(docRef =>{
                    SetOrdenId(docRef.id)
                    vaciarCarrito()
                    setNombre("")
                    setApellido("")
                    setTelefono("")
                    setEmail("")
                    setEmailConfirmacion("")

                    Swal.fire({
                        title: "¡Orden generada exitosamente!",
                        text: `Tu número de orden es: ${docRef.id}`,
                        icon: "success"
                    })
                })
                .catch(error => console.log("Error al crear la orden", error))
        })
        .catch(error => {
            console.log("No pudimos actualizar el stock", error)
            SetError("Error al actualizar el error")
        })

    }


  return (
    <div>
        <div className='ml-20 text-2xl font-semibold mt-10'>
            Checkout - Finalizamos la compra
        </div>
        <form onSubmit={manejadorSubmit}>
            {
                carrito.map(producto => (
                    <div key={producto.item.id} className='flex flex-row mt-3'>
                        <p className='font-semibold ml-5'>
                            {producto.item.nombre} x {producto.cantidad}
                        </p>
                        <p className='font-semibold ml-5'>
                            $ {producto.item.precio}
                        </p>
                    </div>
                ))
            }

            <div className='flex flex-row mt-5'>
                <label 
                    htmlFor='nombre'
                    className='w-40 text-end mr-2'
                >
                    Nombre:
                </label>
                <input 
                    type='text'
                    id='nombre'
                    onChange={(e) => setNombre(e.target.value)}
                    className='border-2 border-gray-300 rounded-lg w-52 pl-2'
                />
            </div>
            <div className='flex flex-row mt-2'>
                <label 
                    htmlFor='apellido'
                    className='w-40 text-end mr-2'
                >
                    Apellido:
                </label>
                <input 
                    type='text'
                    id='apellido'
                    onChange={(e) => setApellido(e.target.value)}
                    className='border-2 border-gray-300 rounded-lg w-52 pl-2'
                />
            </div>
            <div className='flex flex-row mt-2'>
                <label 
                    htmlFor='telefono'
                    className='w-40 text-end mr-2'
                >
                    Telefono:
                </label>
                <input 
                    type='text'
                    id='telefono'
                    onChange={(e) => setTelefono(e.target.value)}
                    className='border-2 border-gray-300 rounded-lg w-52 pl-2'
                />
            </div>
            <div className='flex flex-row mt-2'>
                <label 
                    htmlFor='email'
                    className='w-40 text-end mr-2'
                >
                    Email:
                </label>
                <input 
                    type='email'
                    id='email'
                    onChange={(e) => setEmail(e.target.value)}
                    className='border-2 border-gray-300 rounded-lg w-52 pl-2'
                />
            </div>
            <div className='flex flex-row mt-2'>
                <label 
                    htmlFor='emailcon'
                    className='w-40 text-end mr-2'
                >
                    Email Confirmación:
                </label>
                <input 
                    type='email'
                    id='emailcon'
                    onChange={(e) => setEmailConfirmacion(e.target.value)}
                    className='border-2 border-gray-300 rounded-lg w-52 pl-2'
                />
            </div>

            <div className='h-5 ml-16'>
            {
                error && <p className='text-red-500'>{error}</p>
            }
            </div>

            <button
                className='text-white font-bold py-2 px-3 bg-sky-500 disabled:opacity-50 rounded-lg mt-5 ml-8'
                disabled={carrito.length === 0}
            >
                Finalizar Orden
            </button>

            {/* {
                ordenId && 
                <div className='flex flex-col items-center'>
                    <p className='font-bold text-center'>¡Gracias por su compra!</p>
                    <p className='font-bold'> Tu número de orden es: {ordenId}</p>
                </div>
            } */}
        </form>
    </div>
  )
}

export default Checkout
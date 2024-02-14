import { useState } from "react";


const ItemCount = ({inicial, stock, funcionAgregar }) => {

    const [contador, setContador] = useState(1);

    const incrementar = () => {
      if(contador < stock) {
        setContador(contador + 1);
      }
    }

    const decrementar = () => {
      if(contador > inicial) {
        setContador(contador - 1);
      }
    }


  return (
    <>
      <div className="flex flex-row space-x-5 justify-center mt-5">
        <button 
          onClick={decrementar}
          className="bg-gray-300 px-3 py-1 rounded-xl"
        >
          - 
        </button>
        <p className="pt-2 h-10 w-10 border border-black"> 
            {contador} 
        </p>
        <button 
          onClick={incrementar}
          className="bg-gray-300 px-3 py-1 rounded-xl"
        >
          + 
        </button>
      </div>
      <button 
        onClick={() => funcionAgregar(contador)}
        className="bg-sky-300 p-3 my-5 rounded-lg"
      > 
        Agregar al Carrito 
      </button>
    </>
  )
}

export default ItemCount
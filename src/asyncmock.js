const productos = [
    {id: "1", nombre: "Silla de Madera", precio: 5500, img:"./public/img/silla_madera.jpeg", idCat: "2", stock: 1000},
    {id: "2", nombre: "Silla de Hierro", precio: 7180, img:"./public/img/silla_metal.jpeg", idCat: "2", stock: 1000},
    {id: "3", nombre: "Mesa de Madera", precio: 14500, img:"./public/img/mesa_madera.jpeg", idCat: "3", stock: 1000},
    {id: "4", nombre: "Mesa de Hierro", precio: 18700, img:"./public/img/mesa_metal.jpeg", idCat: "3", stock: 1000},
    {id: "5", nombre: "Armario 3 puertas", precio: 25000, img:"./public/img/armario3puertas.jpeg", idCat: "4", stock: 1000},
    {id: "6", nombre: "Armario 4 puertas", precio: 29900, img:"./public/img/armario4puertas.jpeg", idCat: "4", stock: 1000},
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 100)
    })
}

//Función similar que retorna un solo item
export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

//Función que retorne toda la categoria
export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}
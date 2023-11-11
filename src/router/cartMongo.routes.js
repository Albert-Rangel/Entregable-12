import Router from "express"
import {
    addCartasync,
    addCartProducts,
    getCarts,
    getCartById,
    getProductsinCartById,
    deleteCart,
    deleteCartProduct,
    deleteAllCartProducts,
    updateCartProductQuantity,
    updateCartProducts
} from '../dao/controllers/CartManager.js'
const CartRoute = Router();

//Obtiene un carro por su id
CartRoute.get('/byId/:cid', getCartById);

//Obtiene los productos de un carro por su id
CartRoute.get('/CartProd/:cid', getProductsinCartById);

//obtiene todos los carros
CartRoute.get('/', getCarts);

//crea un carro sin productos
CartRoute.post('/', addCartasync)

//Agrega un producto  especifico a un carro especifico
CartRoute.post('/:cid/product/:pid', addCartProducts)

//Elimina un producto especifico de un carro especifico
CartRoute.delete('/:cid/product/:pid', deleteCartProduct)

//Elimina un carro en especifico
CartRoute.delete('/SpecificCart/:cid', deleteCart)

//Elimina todos los productos dentro de un carro especifico
CartRoute.delete('/:cid', deleteAllCartProducts)

//Actualiza el Quantity Dde un producto especifico en un carro especifico
CartRoute.put('/:cid/product/:pid', updateCartProductQuantity)

//Actualiza los productos en un carro especifico
CartRoute.put('/:cid', updateCartProducts)

export default CartRoute;
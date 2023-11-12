import { cartsModel } from '../dao/models/carts.model.js';
import { productsModel } from '../dao/models/products.model.js';
import ProductManager from './ProductManager.js';
import cartsService from '../services/cartService.js';
const CartsService = new cartsService()
const productManager = new ProductManager()

class CartManager {

  async addCart() {

    try {
      let carnew
      return carnew = await CartsService.addCartviaService()

    } catch (error) {
      return `ERR|Error generico. Descripcion :${error}`
    }
  }

  async addCartProducts(pid, cid) {

    try {
      const answer = await CartsService.addCartProductsviaService(pid, cid)

      if (answer == undefined || answer.length === 0) return `E02|El carro con el id ${cid} no se encuentra agregado.`;

      return answer

    } catch (error) {
      return `ERR|Error generico. Descripcion :${error}`
    }
  }

  async getCarts() {
    try {
      const allCarts = await CartsService.getcartsviaService();
      return allCarts

    } catch (error) {
      return `ERR|Error generico. Descripcion :${error}`
    }
  }

  async getCartById(cid) {
    try {

      const CartById = await CartsService.getCartbyIDviaService(cid)

      if (CartById == undefined) return `E02|El carro con el id ${cid} no se encuentra agregado.`;

      return CartById

    } catch (error) {
      return `ERR|Error generico. Descripcion :${error}`
    }
  }

  async getProductsinCartById(cid) {
    try {
      const cartObject = await CartsService.getProductsinCartbyIDviaService(cid)

      return cartObject

    } catch (error) {
      return `ERR|Error generico. Descripcion :${error}`
    }
  }

  async deleteCart(cid) {
    try {
      return await CartsService.deleteCartviaService({ _id: cid })
    }
    catch (error) {
      return `ERR|Error generico. Descripcion :${error}`
    }
  }

  async deleteCartProduct(pid, cid) {
    try {
      return await CartsService.deleteCartProductviaService(pid, cid)
    }
    catch (error) {
      return `ERR|Error generico. Descripcion :${error}`
    }
  }

  async deleteAllCartProducts(cid) {
    try {
      const CartById = await CartsService.deleteAllCartProductsviaService(cid)

      return CartById
    }
    catch (error) {
      return `ERR|Error generico. Descripcion :${error}`
    }
  }

  async updateCartProductQuantity(pid, cid, quantity_) {
    try {


      const CartById = await CartsService.updateProductQuantityviaService(pid, cid, quantity_)

      return CartById
    }
    catch (error) {
      return `ERR|Error generico. Descripcion :${error}`
    }
  }

  async updateCartProducts(cid, products) {
    try {
      const answer = await CartsService.updateCartProducstviaService(cid, products)
      
      return answer
    }
    catch (error) {
      return `ERR|Error generico. Descripcion :${error}`
    }
  }
}

export default CartManager;




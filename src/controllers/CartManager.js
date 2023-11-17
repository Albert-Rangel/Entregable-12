import { cartsModel } from '../dao/models/carts.model.js';
import { productsModel } from '../dao/models/products.model.js';
import { ticketsModel } from '../dao/models/tickets.model.js';

import ProductManager from './ProductManager.js';
import cartsService from '../services/cartService.js';
import emailsService from '../services/emailService.js';

const emailService = new emailsService()
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
      console.log("entro en el addcartproducts")
      const answer = await CartsService.addCartProductsviaService(pid, cid)
      console.log("respuesta del servidor " + answer)
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

  async purchaseCart(cid, email) {
    try {
      
      let totalsum = 0
      //obtener los productos dentro del carrito
      const answer = await this.getProductsinCartById(cid)

      //valido si es un string es caso fallido y retorno
      if (typeof answer == "string") return answer

      //itero por cada objeto dentro del array de productos
      for (let i = 0; i < answer.length; i++) {
        let resultQtt = 0
        let swResult = false
        let stock = parseInt(answer[i].id.stock, 10); // Access the stock property within the nested object

        let initialstock = stock
        let endstock = 0


        let pid = answer[i].id._id; // Access the stock property within the nested object
        let quantity = parseInt(answer[i].quantity, 10); // Access the quantity property directly
        let price = answer[i].id.price;
        let sumtotalprice = 0

        let finalqtt = quantity
        console.log("pid:", pid);
        console.log("Stock:", stock);
        console.log("Quantity:", quantity);
        console.log("Price:", price);
        while (!swResult) {
          let resultQtt = stock - quantity
          if (resultQtt >= 0) {
            stock = resultQtt
            swResult = true
            finalqtt = finalqtt - quantity
            break
          } else {

            quantity = quantity - 1
          }
        }
        let amounttisubstract = initialstock - stock
        sumtotalprice = price * amounttisubstract
        totalsum = totalsum + sumtotalprice
        //ya tengo la cantidad de productos que quedan de un producto en especifico en stock
        console.log("FINAL Stock:", stock);
        console.log("FINAL Quantity:", finalqtt);
        console.log("sumatoria de precio", sumtotalprice)

        //Actualizar el Quantity de ese producto
        //const updateProductQTT = productManager.updateProduct(pid, { "stock": stock })

        //ELIMINAR EL PRODUCTO DEL CARRITO EN CANSO DE QTT = 0 O ACTUAKLIZAR LA CANTIDAD EN CARRITO
        // if (originalqtt = 0) {
        //   //eliminar producto de carrito
        //   let eliminateProdinCart = this.deleteCartProduct(pid, cid)
        // } else {
        //   //Actualizamos la quantity del producto en el carrito
        //   let updateProdInCart = this.updateCartProductQuantity(pid, cid, originalqtt)
        // }
      }

      //Despues de que se actualizaran los productos y se actualizara el carrito correspondiente hay que generar un ticket y despues enviar correo
      

      console.log("va a crear el ticket y posteriormente enviarlo usando el servicio de envio de correo")


      
      // const ticket = await ticketsModel.create({
      //   amount: totalsum,
      //   purchaser: email
      // })



      return 'ERR|Error generico. Descripcion: prueba'

      // return answer
    }
    catch (error) {
      return `ERR|Error generico. Descripcion :${error}`
    }
  }
}

export default CartManager;




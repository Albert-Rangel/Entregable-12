import Router from "express"
import {

    addProduct,
    getProducts_,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
} from '../dao/controllers/ProductManager.js'

const ProductRoute = Router();

ProductRoute.get('/', getProducts);

ProductRoute.get('/Npagin/', getProducts_)

ProductRoute.get('/:pid', getProductById);

ProductRoute.post('/', addProduct)

ProductRoute.put('/:pid', updateProduct)

ProductRoute.delete('/:pid', deleteProduct)


export default ProductRoute;
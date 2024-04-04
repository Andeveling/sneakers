import { Router } from "express"
import { API_Endpoints } from "../interfaces/Endpoints"
import { getProductsWithStock } from "../controllers/product.controller"

const productRouter = Router()

productRouter.get(API_Endpoints.PRODUCTS, getProductsWithStock)

export default productRouter

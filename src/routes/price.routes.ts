import { Router } from "express"
import { getSpecialPricesUser } from "../controllers/price.controller"
import { API_Endpoints } from "../interfaces/Endpoints"

const priceRouter = Router()

priceRouter.get(`${API_Endpoints.PRICE}/:user_id/:nombre_producto`, getSpecialPricesUser)

export default priceRouter

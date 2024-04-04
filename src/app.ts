import express from "express"
import morgan from "morgan"
import cors from "cors"
import router from "./routes/api.routes"
import productRoutes from "./routes/product.routes"
import priceRoutes from "./routes/price.routes"
import { API_Endpoints } from "./interfaces/Endpoints"
import * as middlewares from "./middlewares/middlewares"

const app = express()

// Middlewares
app.use(express.json())
app.use(router)
app.use(morgan("dev"))
app.use(cors())
app.use(API_Endpoints.API, productRoutes)
app.use(API_Endpoints.API, priceRoutes)
app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

export default app

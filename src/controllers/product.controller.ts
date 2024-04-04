import { Request, Response, NextFunction } from "express"
import { Product } from "../models/product.model"

export const getProductsWithStock = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await Product.find({ stock: { $gt: 0 } })
    
    res.json(products)
  } catch (error) {
    next(error)
  }
}

import { NextFunction, Request, Response } from "express"
import { Product } from "../models/product.model"
import { SpecialPriceModel } from "../models/specialPrice.model"
import { User } from "../models/user.model"
import { getPriceWithDiscount } from "../utils/getPriceWithDiscount.util"
import { Brand } from "../models/brand.model"

export const getSpecialPricesUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { user_id: userId, nombre_producto: productName } = req.params

    // include brand name in product
    const product = await Product.findOne({ name: productName, stock: { $gt: 0 } })

    if (!product) throw new Error(`Product ${productName} not found`)

    const user = await User.findById(userId)

    if (!user) throw new Error(`User ${userId} not found`)

    const specialPrice = await SpecialPriceModel.findOne({ brand: product.brand, user: user._id })
    const brand = await Brand.findById(product.brand)

    if (!brand) throw new Error(`Brand ${brand} not found`)

    if (!specialPrice) {
      const productWithOutSpecialPrice = {
        user: user.name,
        product: product.name,
        brand: brand.name,
        price: product.price,
      }

      return res.status(200).json(productWithOutSpecialPrice)
    }

    const { specialPriceDiscount } = specialPrice

    const price = getPriceWithDiscount(product.price, specialPriceDiscount)

    const productWithSpecialPrice = {
      user: user.name,
      product: product.name,
      brand: brand.name,
      price: price,
    }

    res.status(200).json(productWithSpecialPrice)
  } catch (error) {
    next(error)
  }
}

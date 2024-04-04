import mongoose from "mongoose"
import { Product } from "../models/product.model"
import { User } from "../models/user.model"
import { Brand } from "../models/brand.model"
import { SpecialPriceModel } from "../models/specialPrice.model"

import { config } from "../config"

const { MONGO_URI } = config

export const seed = async () => {
  try {
    mongoose.set("strictQuery", true)
    await mongoose.connect(MONGO_URI)

    console.log("MongoDB connected")

    await SpecialPriceModel.deleteMany()
    await User.deleteMany()
    await Brand.deleteMany()
    await Product.deleteMany()

    const user1 = new User({
      name: "Andres",
      brandsSpecialPrice: []
    })

    const user2 = new User({
      name: "Marcela",
      brandsSpecialPrice: []
    })

    const user3 = new User({
      name: "Jorge",
      brandsSpecialPrice: []
    })

    const brand1 = new Brand({
      name: "Nike",
      products: []
    })

    const brand2 = new Brand({
      name: "Adidas",
      products: []
    })

    const brand3 = new Brand({
      name: "Puma",
      products: []
    })

    const product1 = new Product({
      name: "Shoes Nike",
      brand: brand1._id,
      price: 140,
      stock: 10
    })

    const product2 = new Product({
      name: "Shoes Adidas",
      brand: brand2._id,
      price: 120,
      stock: 10
    })

    const product3 = new Product({
      name: "Shoes Puma",
      brand: brand3._id,
      price: 100,
      stock: 10
    })

    const product4 = new Product({
      name: "Tennis Puma",
      brand: brand3._id,
      price: 100,
      stock: 0
    })

    brand1.products.push(product1._id)
    brand2.products.push(product2._id)
    brand3.products.push(product3._id)
    brand3.products.push(product4._id)

    const specialPrice1 = new SpecialPriceModel({
      brand: brand1._id,
      user: user1._id,
      specialPriceDiscount: 10
    })

    const specialPrice2 = new SpecialPriceModel({
      brand: brand2._id,
      user: user2._id,
      specialPriceDiscount: 15
    })

    const specialPrice3 = new SpecialPriceModel({
      brand: brand3._id,
      user: user2._id,
      specialPriceDiscount: 5
    })

    user1.brandsSpecialPrice.push(specialPrice1._id)
    user2.brandsSpecialPrice.push(specialPrice2._id)
    user2.brandsSpecialPrice.push(specialPrice3._id)

    // Crear los documentos en la base de datos

    await user1.save()
    await user2.save()
    await user3.save()
    await brand1.save()
    await brand2.save()
    await brand3.save()
    await product1.save()
    await product2.save()
    await product3.save()
    await product4.save()
    await specialPrice1.save()
    await specialPrice2.save()
    await specialPrice3.save()

    console.log("Seeding done")
  }
 catch (error) {
    console.log(`Error seeding: ${error}`)
  }
 finally {
    mongoose.disconnect()
  }
}

seed()

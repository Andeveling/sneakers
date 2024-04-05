import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, length: 50 },
  brand: { type: mongoose.Types.ObjectId, ref: "Brand", required: true },
  price: { type: Number, required: true, min: 0, max: 10000 },
  stock: { type: Number, required: true, min: 0 },
})

export const Product = mongoose.models.Product || mongoose.model("Product", productSchema)

import mongoose from "mongoose"

const brandSchema = new mongoose.Schema({
  name: { type: String, required: true, length: 50 },
  products: [{ type: mongoose.Types.ObjectId, ref: "Product", default: [] }]
})

export const Brand = mongoose.model("Brand", brandSchema)

import mongoose from "mongoose"

const specialPriceSchema = new mongoose.Schema({
  brand: { type: mongoose.Types.ObjectId, ref: "Brand", required: true },
  user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  specialPriceDiscount: { type: Number, required: true }
})

export const SpecialPriceModel = mongoose.models.SpecialPrice || mongoose.model("SpecialPrice", specialPriceSchema)

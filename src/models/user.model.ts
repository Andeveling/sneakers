import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brandsSpecialPrice: [{ type: mongoose.Types.ObjectId, ref: "SpecialPrice", default: [] }],
})

export const User = mongoose.models.User || mongoose.model("User", userSchema)

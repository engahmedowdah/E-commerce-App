import mongoose from "mongoose";
const CountrySchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  CurrencySymbol: {
    type: String,
    required: true,
  },
  Slug: {
    type: String,
    required: true,
    unique: true,
  },
  IsActivated: {
    type: Boolean,
    required: true,
    default: false,
  },
  IsDeleted: {
    type: Boolean,
    default: false,
  },
  CreatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
    required: false,
  },
  CreatedDate: {
    type: Date,
    default: Date.now,
  },
  UpdatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
  },
  UpdatedDate: {
    type: Date,
  },
});
export default mongoose.model("Country", CountrySchema, "Countries");

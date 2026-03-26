import mongoose from "mongoose";

const CurrencySymbolSchema = new mongoose.Schema({
  CountryID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Country",
    required: true,
  },
  CurrencySymbol: {
    type: String,
    required: true,
  },
  IsActivated: {
    type: Boolean,
    default: true,
  },
  IsDeleted: {
    type: Boolean,
    default: false,
  },
  CreatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
    required: true,
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

export default mongoose.model("CurrencySymbol", CurrencySymbolSchema, "CurrencySymbols");

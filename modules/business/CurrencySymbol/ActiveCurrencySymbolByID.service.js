import mongoose from "mongoose";
import CurrencySymbolModel from "../../data/CurrencySymbol/CurrencySymbol.model.js";

const ActiveCurrencySymbolByID = async ({ CurrencySymbolID, UpdatedBy }) => {
  try {
    if (!CurrencySymbolID) throw new Error("CurrencySymbolID (id) is required");
    if (!mongoose.Types.ObjectId.isValid(CurrencySymbolID)) throw new Error("Invalid CurrencySymbolID format");
    if (!UpdatedBy) throw new Error("UpdatedBy admin is required");
    if (!mongoose.Types.ObjectId.isValid(UpdatedBy)) throw new Error("Invalid UpdatedBy format");

    const currencySymbol = await CurrencySymbolModel.findById(id);
    if (!currencySymbol) {
      throw new Error("Currency symbol not found");
    }

    const updatedCurrencySymbol = await CurrencySymbolModel.findByIdAndUpdate(
      CurrencySymbolID,
      {
        IsActivated: !currencySymbol.IsActivated,
        UpdatedBy,
        UpdatedDate: Date.now(),
      }
    );

    return updatedCurrencySymbol;
  } catch (error) {
    throw error;
  }
};

export default ActiveCurrencySymbolByID;

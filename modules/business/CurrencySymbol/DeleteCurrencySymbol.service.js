import mongoose from "mongoose";
import CurrencySymbolModel from "../../data/CurrencySymbol/CurrencySymbol.model.js";

const DeleteCurrencySymbol = async ({ CurrencySymbolID, UpdatedBy }) => {
  try {
    if (!CurrencySymbolID) throw new Error("CurrencySymbolID (id) is required");
    if (!mongoose.Types.ObjectId.isValid(CurrencySymbolID)) throw new Error("Invalid CurrencySymbolID format");
    if (!UpdatedBy) throw new Error("UpdatedBy admin is required");
    if (!mongoose.Types.ObjectId.isValid(UpdatedBy)) throw new Error("Invalid UpdatedBy format");

    const deletedCurrencySymbol = await CurrencySymbolModel.findByIdAndUpdate(
      CurrencySymbolID,
      {
        IsDeleted: true,
        UpdatedBy,
        UpdatedDate: new Date(),
      }
    );

    if (!deletedCurrencySymbol) {
      throw new Error("Currency symbol not found");
    }

    return deletedCurrencySymbol;
  } catch (error) {
    throw error;
  }
};

export default DeleteCurrencySymbol;

import mongoose from "mongoose";
import CurrencySymbolModel from "../../data/CurrencySymbol/CurrencySymbol.model.js";

const UpdateCurrencySymbol = async ({ CurrencySymbolID, CountryID, CurrencySymbol, UpdatedBy }) => {
  try {
    if (!CurrencySymbolID) throw new Error("CurrencySymbolID (id) is required");
    if (!mongoose.Types.ObjectId.isValid(CurrencySymbolID)) throw new Error("Invalid CurrencySymbolID format");
    if (!UpdatedBy) throw new Error("UpdatedBy admin is required");
    if (!mongoose.Types.ObjectId.isValid(UpdatedBy)) throw new Error("Invalid UpdatedBy format");

    const updateData = {
      UpdatedBy,
      UpdatedDate: Date.now(),
    };

    if (CountryID) {
      if (!mongoose.Types.ObjectId.isValid(CountryID)) throw new Error("Invalid CountryID format");
      updateData.CountryID = CountryID;
    }

    if (CurrencySymbol) {
      updateData.CurrencySymbol = CurrencySymbol;
    }

    const updatedCurrencySymbol = await CurrencySymbolModel.findByIdAndUpdate(
      CurrencySymbolID,
      updateData
    );

    if (!updatedCurrencySymbol) {
      throw new Error("Currency symbol not found");
    }

    await updatedCurrencySymbol.populate("CountryID");

    return updatedCurrencySymbol;
  } catch (error) {
    throw error;
  }
};

export default UpdateCurrencySymbol;

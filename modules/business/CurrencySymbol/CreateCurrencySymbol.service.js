import mongoose from "mongoose";
import CurrencySymbolModel from "../../data/CurrencySymbol/CurrencySymbol.model.js";

const CreateCurrencySymbol = async ({ CountryID, CurrencySymbol, CreatedBy }) => {
  try {
    if (!CountryID) throw new Error("CountryID is required");
    if (!mongoose.Types.ObjectId.isValid(CountryID)) throw new Error("Invalid CountryID format");
    if (!CurrencySymbol) throw new Error("CurrencySymbol is required");
    if (!CreatedBy) throw new Error("CreatedBy admin is required");
    if (!mongoose.Types.ObjectId.isValid(CreatedBy)) throw new Error("Invalid CreatedBy format");

    const newCurrencySymbol = await CurrencySymbolModel.create({
      CountryID,
      CurrencySymbol,
      CreatedBy,
      CreatedDate: new Date(),
      IsActivated: true,
      IsDeleted: false,
    });

    await newCurrencySymbol.populate("CountryID");

    return newCurrencySymbol;
  } catch (error) {
    throw error;
  }
};

export default CreateCurrencySymbol;

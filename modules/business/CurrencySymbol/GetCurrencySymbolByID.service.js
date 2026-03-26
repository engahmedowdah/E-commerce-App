import mongoose from "mongoose";
import { NotDeletedFilter } from "../../../shared/utils.js";
import CurrencySymbolModel from "../../data/CurrencySymbol/CurrencySymbol.model.js";

const GetCurrencySymbolByID = async ({ CurrencySymbolID, IncludeDeleted = false }) => {
  try {
    if (!CurrencySymbolID) throw new Error("CurrencySymbolID (id) is required");
    if (!mongoose.Types.ObjectId.isValid(CurrencySymbolID)) throw new Error("Invalid CurrencySymbolID format");

    const currencySymbol = await CurrencySymbolModel.findOne({
      _id: CurrencySymbolID,
      ...NotDeletedFilter({ IncludeDeleted }),
    });

    if (!currencySymbol) {
      throw new Error("Currency symbol not found");
    }

    await currencySymbol.populate("CountryID");

    return currencySymbol;
  } catch (error) {
    throw error;
  }
};

export default GetCurrencySymbolByID;

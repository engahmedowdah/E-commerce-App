import { NotDeletedFilter } from "../../../shared/utils.js";
import CurrencySymbolModel from "../../data/CurrencySymbol/CurrencySymbol.model.js";

const GetAllCurrencySymbols = async ({ IncludeDeleted = false }) => {
  try {
    const currencySymbols = await CurrencySymbolModel.find({
      ...NotDeletedFilter({ IncludeDeleted })
    });
    await Promise.all([
      currencySymbols.populate("CountryID")
    ]);

    return currencySymbols;
  } catch (error) {
    throw error;
  }
};

export default GetAllCurrencySymbols;

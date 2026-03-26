import { Ok, BadRequest, ServerError } from "../../../../shared/utils.js";
import SearchWithFilters from "../../../business/Product/SearchWithFilters.service.js";
export default async function SearchWithFiltersController(req, res) {
    const { CategoryID, CollectionID, MaxPrice, MinPrice, Name, PageSize, PageNumber } = req.body;
    try {
        const products = await SearchWithFilters({ Name, CategoryID, CollectionID, MinPrice, MaxPrice, PageSize, PageNumber });
        return Ok(res, "Search results fetched successfully", products);
    } catch (err) {
        return ServerError(res, err.message);
    }
}

import { Ok, BadRequest, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import SearchWithFilters from "../../../business/Product/SearchWithFilters.service.js";
const searchSchema = {
    CategoryIDs: { type: "array", required: false },
    CollectionIDs: { type: "array", required: false },
    MaxPrice: { type: "number", required: false },
    MinPrice: { type: "number", required: false },
    Name: { type: "string", required: true },
};
export default async function SearchWithFiltersController(req, res) {
    const error = ValidateSchema(req.body, searchSchema);
    if (error) return BadRequest(res, error);
    const { CategoryIDs, CollectionIDs, MaxPrice, MinPrice, Name } = req.body;
    try {
        const products = await SearchWithFilters({ Name, CategoryIDs, CollectionIDs, MinPrice, MaxPrice });
        if (!products) return NotFound(res, "No products found");
        return Ok(res, "Search results fetched successfully", products);
    } catch (err) {
        return ServerError(res, err.message);
    }
}

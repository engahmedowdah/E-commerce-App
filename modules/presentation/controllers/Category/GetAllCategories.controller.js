import { Ok, ServerError } from "../../../../shared/utils.js";
import GetAllCategories from "../../../business/Category/GetAllCategories.service.js";
export default async function GetAllCategoriesController(req, res) {
    try {
        const Categories = await GetAllCategories();
        return Ok(res, "Categories fetched successfully", Categories);
    } catch (err) {
        return ServerError(res, err.message);
    }
}

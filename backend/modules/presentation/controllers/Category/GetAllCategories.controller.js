import { Ok, ServerError } from "../../../../shared/utils.js";
import GetAllCategories from "../../../business/Category/GetAllCategories.service.js";
export default async function GetAllCategoriesController(req, res) {
    try {
        const { page, limit, sort } = req.query;
        const result = await GetAllCategories({page, limit, sort});
        return Ok(res, "Categories fetched successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}

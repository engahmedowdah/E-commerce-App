import CategoryModel from "../../data/Category/Category.model.js";
import CategoryMapper from "./CategoryMapper.js";
const CreateCategory = async ({ Name, Description, Slug, IsActivated }) => {
  const existingCategory = await CategoryModel.findOne({ Name, IsDeleted: false });
  if (existingCategory) throw new Error("Category already exists");
  const category = await CategoryModel.create({
    Name: Name,
    Description: Description,
    Slug: Slug,
    IsActivated: IsActivated || false,
    CreatedDate: new Date(),
  });
  return await CategoryMapper(category);
};
export default CreateCategory;

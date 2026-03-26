import CategoryModel from "../../data/Category/Category.model.js";
const CreateCategory = async ({ Name, Description, Slug, IsActivated, CreatedBy }) => {
  try {
    if (!Name || !Description || !Slug || !CreatedBy) {
      throw new Error("Missing required fields");
    }
    const category = await CategoryModel.create({
      Name,
      Description,
      Slug,
      IsActivated: IsActivated || false,
      CreatedBy,
      CreatedDate: new Date(),
    });
    return category;
  } catch (error) {
    throw "Error creating category";
  }
};
export default CreateCategory;

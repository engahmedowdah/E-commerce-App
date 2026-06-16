import ImageModel from "../../data/Image/Image.model.js";
import ImageMapper from "./ImageMapper.js";
const GetImagesByProductID = async ({ ProductID }) => {
    const images = await ImageModel.find({ ProductID: ProductID }).sort({ SortingNumber: 1 }).lean();
    return images.map(ImageMapper);
};
export default GetImagesByProductID;

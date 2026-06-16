import ImageModel from "../../data/Image/Image.model.js";
import ImageMapper from "./ImageMapper.js";
const GetImageByID = async ({ ImageID }) => {
    const image = await ImageModel.findOne({ _id: ImageID }).lean();
    return ImageMapper(image);
};
export default GetImageByID;

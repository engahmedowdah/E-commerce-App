import ImageModel from "../../data/Image/Image.model.js";
import ProductModel from "../../data/Product/Product.model.js";
const UploadImageByProductID = async ({ Path, Filename, ProductID, SortingNumber }) => {
    const image = await ImageModel.create({
        Path: Path,
        Filename: Filename,
        CreatedDate: Date.now(),
    });
    await ProductModel.findByIdAndUpdate(ProductID, {
        $push: {
            Images: {
                ImageID: image._id,
                SortingNumber: SortingNumber
            }
        },
        UpdatedDate: Date.now(),
    });
    return image;
};
export default UploadImageByProductID;

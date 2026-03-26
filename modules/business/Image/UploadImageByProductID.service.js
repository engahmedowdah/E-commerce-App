import ImageModel from "../../data/Image/Image.model.js";
import ProductModel from "../../data/Product/Product.model.js";

const UploadImageByProductID = async ({ Path, Filename, ProductID, SortingNumber, UserID }) => {
    try {
        if (!Path || !Filename || !ProductID) {
            throw new Error("Path, Filename, and ProductID are required");
        }

        // 1. Create the image record (generic)
        const image = await ImageModel.create({
            Path: Path,
            Filename: Filename,
            CreatedBy: UserID,
            CreatedDate: Date.now(),
        });

        // 2. Link it to the product
        await ProductModel.findByIdAndUpdate(ProductID, {
            $push: {
                Images: {
                    ImageID: image._id,
                    SortingNumber: SortingNumber
                }
            },
            UpdatedBy: UserID,
            UpdatedDate: Date.now(),
        });

        return image;
    } catch (error) {
        throw "Error uploading image";
    }
};

export default UploadImageByProductID;

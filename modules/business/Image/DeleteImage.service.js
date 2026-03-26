import fs from "fs/promises";
import path from "path";
import ImageModel from "../../data/Image/Image.model.js";
import ProductModel from "../../data/Product/Product.model.js";
import UserModel from "../../data/User/User.model.js";

const DeleteImage = async (ImageID, UpdatedBy) => {
    try {
        if (!ImageID) throw new Error("ImageID is required");

        const image = await ImageModel.findById(ImageID);
        if (!image) return null;

        // 1. Delete from database
        await ImageModel.findByIdAndDelete(ImageID);

        // 2. Cleanup references in Products
        await ProductModel.updateMany(
            { "Images.ImageID": ImageID },
            {
                $pull:
                {
                    Images: { ImageID: ImageID }
                }
            },
            {
                UpdatedBy: UpdatedBy,
                UpdatedDate: Date.now()
            }
        );

        // 3. Cleanup references in Users
        await UserModel.updateMany(
            { LogoID: ImageID },
            { $set: { LogoID: null } },
            {
                UpdatedBy: UpdatedBy,
                UpdatedDate: Date.now()
            }
        );

        // 4. Delete from file system
        const filePath = path.resolve(image.Path);
        await fs.unlink(filePath);
    } catch (err) {
        throw "Error deleting image";
    }

    return image;
};

export default DeleteImage;

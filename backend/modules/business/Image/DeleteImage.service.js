import fs from "fs/promises";
import path from "path";
import ImageModel from "../../data/Image/Image.model.js";
import ProductModel from "../../data/Product/Product.model.js";
import UserModel from "../../data/User/User.model.js";
const DeleteImage = async ({ ImageID }) => {
    const image = await ImageModel.findById(ImageID);
    if (!image) return null;
    await ImageModel.findByIdAndDelete(ImageID);
    await ProductModel.updateMany(
        { "Images.ImageID": ImageID },
        {
            $pull:
            {
                Images: { ImageID: ImageID }
            }
        },
        {
            UpdatedDate: Date.now()
        }
    );
    await UserModel.updateMany(
        { LogoID: ImageID },
        { $set: { LogoID: null } },
        {
            UpdatedDate: Date.now()
        }
    );
    const filePath = path.resolve(image.Path);
    await fs.unlink(filePath);
    return image;
};
export default DeleteImage;

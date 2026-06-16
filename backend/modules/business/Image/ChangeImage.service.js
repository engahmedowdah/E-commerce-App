import ImageModel from "../../data/Image/Image.model.js";
import ProductModel from "../../data/Product/Product.model.js";
import UserModel from "../../data/User/User.model.js";
import DeleteImage from "./DeleteImage.service.js";
const ChangeImage = async ({ OldImageID, NewFileData }) => {
    const newImage = await ImageModel.create({
        Path: NewFileData.path,
        Filename: NewFileData.filename,
    });
    await ProductModel.updateMany(
        { "Images.ImageID": OldImageID },
        {
            $set: {
                "Images.$[elem].ImageID": newImage._id,
                UpdatedDate: Date.now()
            }
        },
        {
            arrayFilters: [{ "elem.ImageID": OldImageID }]
        }
    );
    await UserModel.updateMany(
        { LogoID: OldImageID },
        {
            $set: {
                LogoID: newImage._id,
                UpdatedDate: Date.now()
            }
        }
    );
    await DeleteImage(OldImageID);
    return newImage;
};
export default ChangeImage;

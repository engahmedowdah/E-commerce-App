import ImageModel from "../../data/Image/Image.model.js";
import ProductModel from "../../data/Product/Product.model.js";
import UserModel from "../../data/User/User.model.js";
import DeleteImage from "./DeleteImage.service.js";

const ChangeImage = async ({ OldImageID, NewFileData, UpdatedBy }) => {
    try {
        if (!OldImageID || !NewFileData) {
            throw new Error("OldImageID and NewFileData are required");
        }

        // 1. Create new image
        const newImage = await ImageModel.create({
            Path: NewFileData.path,
            Filename: NewFileData.filename,
            CreatedBy: UpdatedBy
        });

        // 2. Update Products (ALL matching images)
        await ProductModel.updateMany(
            { "Images.ImageID": OldImageID },
            {
                $set: {
                    "Images.$[elem].ImageID": newImage._id,
                    UpdatedBy: UpdatedBy,
                    UpdatedDate: Date.now()
                }
            },
            {
                arrayFilters: [{ "elem.ImageID": OldImageID }]
            }
        );

        // 3. Update Users
        await UserModel.updateMany(
            { LogoID: OldImageID },
            {
                $set: {
                    LogoID: newImage._id,
                    UpdatedBy: UpdatedBy,
                    UpdatedDate: Date.now()
                }
            }
        );

        // 4. Delete old image
        await DeleteImage(OldImageID);

        return newImage;

    } catch (error) {
        console.error(error);
        throw new Error("Error changing image");
    }
};

export default ChangeImage;
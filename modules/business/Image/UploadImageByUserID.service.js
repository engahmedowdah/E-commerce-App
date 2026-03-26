import ImageModel from "../../data/Image/Image.model.js";
import UserModel from "../../data/User/User.model.js";

const UploadImageByUserID = async ({ Path, Filename, UserID, UpdatedBy }) => {
    try {
        if (!Path || !Filename || !UserID) {
            throw new Error("Path, Filename, and UserID are required");
        }

        // 1. Create the image record (generic)
        const image = await ImageModel.create({
            Path: Path,
            Filename: Filename,
            CreatedBy: UpdatedBy,
            CreatedDate: Date.now(),
        });

        // 2. Link it to the user as a logo
        await UserModel.findByIdAndUpdate(UserID, {
            LogoID: image._id,
            UpdatedBy: UpdatedBy,
            UpdatedDate: Date.now(),
        });

        return image;
    } catch (error) {
        throw "Error uploading image";
    }
};

export default UploadImageByUserID;

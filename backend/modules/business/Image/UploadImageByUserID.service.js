import ImageModel from "../../data/Image/Image.model.js";
import UserModel from "../../data/User/User.model.js";
const UploadImageByUserID = async ({ Path, Filename, UserID }) => {
    const image = await ImageModel.create({
        Path: Path,
        Filename: Filename,
        CreatedDate: Date.now(),
    });
    await UserModel.findByIdAndUpdate(UserID, {
        LogoID: image._id,
        UpdatedDate: Date.now(),
    });
    return image;
};
export default UploadImageByUserID;

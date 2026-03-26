import ImageModel from "../../data/Image/Image.model.js";

const GetImageByID = async (ImageID) => {
    try {
        if (!ImageID) throw new Error("ImageID is required");

        const image = await ImageModel.findOne({ _id: ImageID, IsDeleted: false });
        if (!image) throw new Error("Image not found");

        return image;
    } catch (error) {
        throw "Error getting image";
    }
};

export default GetImageByID;

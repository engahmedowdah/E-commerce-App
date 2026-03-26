import ImageModel from "../../data/Image/Image.model.js";

const GetImagesByProductID = async ({ ProductID }) => {
    try {
        if (!ProductID) throw new Error("ProductID is required");

        const images = await ImageModel.find({ ProductID: ProductID }).sort({ SortingNumber: 1 });
        if (!images) throw new Error("Images not found");

        return images;
    } catch (error) {
        throw "Error getting images";
    }
};

export default GetImagesByProductID;

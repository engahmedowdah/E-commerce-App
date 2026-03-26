import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: false,
  },
  Price: {
    type: Number,
    required: true,
  },
  Stock: {
    type: Number,
    required: true,
  },
  CategoryID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  CollectionID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Collection",
    required: false,
  },
  Images: [
    {
      ImageID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Image",
      },
      SortingNumber: {
        type: Number,
        default: 0,
      },
    },
  ],
  IsActivated: {
    type: Boolean,
    required: true,
    default: false,
  },
  IsDeleted: {
    type: Boolean,
    default: false,
  },
  CreatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
    required: false,
  },
  CreatedDate: {
    type: Date,
    default: Date.now,
  },
  UpdatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
  },
  UpdatedDate: {
    type: Date,
  },
});
export default mongoose.model("Product", ProductSchema, "Products");

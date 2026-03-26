import mongoose from "mongoose";
const AddressSchema = new mongoose.Schema(
  {
    UserID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    CityID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "City",
      required: true,
    },
    CountryID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Country",
      required: true,
    },
    AddressLine1: {
      type: String,
      required: true,
    },
    AddressLine2: {
      type: String,
      required: false,
    },
    PostalCode: {
      type: String,
      required: false,
    },
    IsDefault: {
      type: Boolean,
      default: false,
    },
    IsDeleted: {
      type: Boolean,
      default: false,
    },
    CreatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    CreatedDate: {
      type: Date,
      default: Date.now,
    },
    UpdatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    UpdatedDate: {
      type: Date,
    },
  },
);
export default mongoose.model("Address", AddressSchema, "Addresses");

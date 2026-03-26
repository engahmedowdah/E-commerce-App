import mongoose from "mongoose";
import * as utils from "../../../shared/utils.js";

const PersonSchema = new mongoose.Schema(
    {
        FirstName: {
            type: String,
            required: true,
        },
        LastName: {
            type: String,
            required: true,
        },
        Email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        HashedPassword: {
            type: String,
            required: true,
            select: false,
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
PersonSchema.pre("save", async function () {
    if (!this.isModified("HashedPassword")) return;
    this.HashedPassword = await utils.hashPassword(this.HashedPassword);
});
PersonSchema.methods.comparePassword = async function (password) {
    return await utils.comparePassword(password, this.HashedPassword);
};
export default mongoose.model("Person", PersonSchema, "Persons");

import crypto from "crypto";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};
export const generateRandomToken = (length = 32) => {
    return crypto.randomBytes(length).toString("hex");
};
export const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};
export const comparePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
};
export const generateAccessToken = (userId) => {
    return jwt.sign({ UserId: userId }, process.env.JWT_SECRET, {
        expiresIn: "15m",
    });
};
export const generateRefreshToken = (userId) => {
    return jwt.sign({ UserId: userId }, process.env.JWT_REFRESH_SECRET, {
        expiresIn: "7d",
    });
};
export const formatResponse = (success, message, data = null) => {
    return { success, message, data };
};
export const Ok = (res, message, data = null) => {
    return res.status(200).json(formatResponse(true, message, data));
};
export const Created = (res, message, data = null) => {
    return res.status(201).json(formatResponse(true, message, data));
};
export const NoContent = (res, message = "No Content") => {
    return res.status(204).json(formatResponse(true, message));
};
export const BadRequest = (res, message, data = null) => {
    return res.status(400).json(formatResponse(false, message, data));
};
export const Unauthorized = (res, message, data = null) => {
    return res.status(401).json(formatResponse(false, message, data));
};
export const Forbidden = (res, message, data = null) => {
    return res.status(403).json(formatResponse(false, message, data));
};
export const NotFound = (res, message, data = null) => {
    return res.status(404).json(formatResponse(false, message, data));
};
export const Conflict = (res, message, data = null) => {
    return res.status(409).json(formatResponse(false, message, data));
};
export const ServerError = (res, message, data = null) => {
    return res.status(500).json(formatResponse(false, message, data));
};
export const NotDeletedFilter = (includeDeleted) => {
    return includeDeleted ? {} : { IsDeleted: false };
};
export const ValidateSchema = (body, schema) => {
    for (const [field, rules] of Object.entries(schema)) {
        const value = body[field];
        const isMissing = value === undefined || value === null || value === "";
        if (rules.required && isMissing) {
            return `Missing required field: ${field}`;
        }
        if (!isMissing) {
            if (rules.type === "array") {
                if (!Array.isArray(value)) {
                    return `${field} must be an array`;
                }
            } else if (typeof value !== rules.type) {
                return `${field} must be a ${rules.type}`;
            }
        }
    }
    return null;
};

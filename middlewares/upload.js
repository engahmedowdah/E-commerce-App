import multer from "multer";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/products/");
    },
    filename: function (req, file, cb) {
        const guid = uuidv4();
        cb(null, guid + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

export default upload;

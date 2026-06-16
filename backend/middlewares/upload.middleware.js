import multer from "multer";
import path from "path";
import crypto from "crypto";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "backend/uploads/");
  },
  filename: function (req, file, cb) {
    const guid = crypto.randomUUID();
    const ext = path.extname(file.originalname);
    cb(null, guid + ext);
  },
});
const upload = multer({ storage: storage });
export default upload;

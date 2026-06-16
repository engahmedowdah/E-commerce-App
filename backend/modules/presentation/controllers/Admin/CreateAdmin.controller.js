import { Created, BadRequest, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import ImageModel from "../../../data/Image/Image.model.js";
import CreateAdmin from "../../../business/Admin/CreateAdmin.service.js";
const createSchema = {
  FirstName: { type: "string", required: true },
  LastName: { type: "string", required: true },
  Email: { type: "string", required: true },
  Phone: { type: "string", required: true },
  Password: { type: "string", required: true },
  RoleID: { type: "string", required: true },
  IsActivated: { type: "boolean", required: false },
};
export default async function CreateAdminController(req, res) {
  const error = ValidateSchema(req.body, createSchema);
  if (error) return BadRequest(res, error);
  const { FirstName, LastName, Email, Phone, Password, ConfirmPassword, UserName, RoleID, IsActivated } = req.body;
  if (!RoleID || !FirstName || !LastName || !Email || !Phone || !Password || !UserName) {
    return BadRequest(res, "Please provide all required fields (RoleID, FirstName, LastName, Email, Phone, Password, UserName)");
  }
  try {
    let ImageID = null;
    if (req.file) {
      const image = await ImageModel.create({
        Path: req.file.path,
        FileName: req.file.originalname,
        Alt: `${FirstName} ${LastName} profile picture`,
        CreatedBy: req.user.id,
      });
      ImageID = image._id;
    }
    if (Password !== ConfirmPassword) {
      return BadRequest(res, "Passwords do not match");
    }
    const admin = await CreateAdmin({
      FirstName,
      LastName,
      Email,
      Phone,
      Password,
      UserName,
      RoleID,
      ImageID: ImageID || null,
      IsActivated: IsActivated || false
    });
    if (!admin) {
      return BadRequest(res, "Failed to create admin");
    }
    return Created(res, "Admin created successfully", admin);
  } catch (err) {
    return ServerError(res, err.message);
  }
}

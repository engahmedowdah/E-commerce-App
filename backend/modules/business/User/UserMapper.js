import ImageMapper from "../Image/ImageMapper.js";
const UserMapper = (user) => {
  if (!user) return null;
  const userObj = typeof user.toObject === "function" ? user.toObject() : user;
  const {
    HashedPassword,
    CreatedBy,
    UpdatedBy,
    UpdatedDate,
    __v,
    LogoID,
    ...userRest
  } = userObj;
  const mapped = {
    ...userRest,
  };
  if (LogoID && typeof LogoID === "object") {
    const mappedLogo = ImageMapper(LogoID);
    mapped.Logo = mappedLogo;
    mapped.LogoID = LogoID._id.toString();
    mapped.Image = mappedLogo;
    mapped.ImageID = LogoID._id.toString();
  } else if (LogoID) {
    mapped.LogoID = LogoID.toString();
    mapped.ImageID = LogoID.toString();
  }
  return mapped;
};
export default UserMapper;

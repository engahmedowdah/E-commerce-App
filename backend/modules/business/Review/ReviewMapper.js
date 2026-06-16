import UserMapper from "../User/UserMapper.js";
import ProductMapper from "../Product/ProductMapper.js";
const ReviewMapper = async (review) => {
  if (!review) return null;
  const reviewObj = typeof review.toObject === "function" ? review.toObject() : review;
  const {
    IsDeleted,
    CreatedBy,
    CreatedDate,
    UpdatedBy,
    UpdatedDate,
    __v,
    UserID,
    ProductID,
    ...reviewRest
  } = reviewObj;
  const mapped = {
    ...reviewRest,
  };
  if (UserID && typeof UserID === "object") {
    mapped.User = UserMapper(UserID);
    mapped.UserID = UserID._id.toString();
  } else if (UserID) {
    mapped.UserID = UserID.toString();
  }
  if (ProductID && typeof ProductID === "object") {
    mapped.Product = await ProductMapper(ProductID);
    mapped.ProductID = ProductID._id.toString();
  } else if (ProductID) {
    mapped.ProductID = ProductID.toString();
  }
  return mapped;
};
export default ReviewMapper;

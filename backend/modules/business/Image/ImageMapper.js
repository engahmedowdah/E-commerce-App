const ImageMapper = (image) => {
  if (!image) return null;
  const imageObj = typeof image.toObject === "function" ? image.toObject() : image;
  const {
    CreatedBy,
    CreatedDate,
    UpdatedBy,
    UpdatedDate,
    __v,
    ...imageRest
  } = imageObj;
  return imageRest;
};
export default ImageMapper;

const CartMapper = (cart) => {
  if (!cart) return null;
  const cartObj = typeof cart.toObject === "function" ? cart.toObject() : cart;
  const mapped = {
    ...cartObj,
  };
  if (cartObj.UserID && typeof cartObj.UserID === "object") {
    mapped.User = cartObj.UserID;
    mapped.UserID = cartObj.UserID._id.toString();
  }
  if (cartObj.Products && Array.isArray(cartObj.Products)) {
    mapped.Products = cartObj.Products.map((p) => {
      const item = { ...p };
      if (p.ProductID && typeof p.ProductID === "object") {
        item.Product = p.ProductID;
        item.ProductID = p.ProductID._id.toString();
      }
      return item;
    });
  }
  return mapped;
};
export default CartMapper;

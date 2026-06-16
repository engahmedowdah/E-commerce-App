import ProductModel from "../../data/Product/Product.model.js";
import AddressMapper from "../Address/AddressMapper.js";
import PaymentMapper from "../Payment/PaymentMapper.js";
const OrderMapper = async (order) => {
  if (!order) return null;
  const orderObj = typeof order.toObject === "function" ? order.toObject() : order;
  const mapped = {
    ...orderObj,
  };
  if (orderObj.UserID && typeof orderObj.UserID === "object") {
    mapped.User = orderObj.UserID;
    mapped.UserID = orderObj.UserID._id.toString();
  }
  if (orderObj.AddressID && typeof orderObj.AddressID === "object") {
    mapped.Address = AddressMapper(orderObj.AddressID);
    mapped.AddressID = orderObj.AddressID._id.toString();
  }
  if (orderObj.PaymentID && typeof orderObj.PaymentID === "object") {
    mapped.Payment = PaymentMapper(orderObj.PaymentID);
    mapped.PaymentID = orderObj.PaymentID._id.toString();
  }
  if (orderObj.OrderStatusID && typeof orderObj.OrderStatusID === "object") {
    mapped.OrderStatus = orderObj.OrderStatusID;
    mapped.OrderStatusID = orderObj.OrderStatusID._id.toString();
  }
  if (Array.isArray(orderObj.Items)) {
    mapped.Items = await Promise.all(
      orderObj.Items.map(async (item) => {
        const itemObj = { ...item };
        const prodId = item.ProductID || item.Product;
        if (prodId) {
          try {
            const product = await ProductModel.findById(prodId).lean();
            itemObj.Product = product || null;
            itemObj.ProductID = prodId.toString();
          } catch (err) {
            itemObj.Product = null;
            itemObj.ProductID = prodId.toString();
          }
        }
        return itemObj;
      })
    );
  }
  return mapped;
};
export default OrderMapper;

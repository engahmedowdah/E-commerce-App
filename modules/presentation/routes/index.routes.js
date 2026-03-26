import express from "express";

import ActiveAdminByIDRouter from "./Admin/ActiveAdminByID.routes.js";
import CreateAdminRouter from "./Admin/CreateAdmin.routes.js";
import DeleteAdminRouter from "./Admin/DeleteAdmin.routes.js";
import GetAdminByIDRouter from "./Admin/GetAdminByID.routes.js";
import GetAllAdminsRouter from "./Admin/GetAllAdmins.routes.js";
import UpdateAdminRouter from "./Admin/UpdateAdmin.routes.js";

import CreateAddressRouter from "./Address/CreateAddress.routes.js";
import DeleteAddressRouter from "./Address/DeleteAddress.routes.js";
import GetAllUserAddressesByUserIDRouter from "./Address/GetAllUserAddressesByUserID.routes.js";
import UpdateAddressRouter from "./Address/UpdateAddress.routes.js";
import GetUserAddressByIDRouter from "./Address/GetUserAddressByID.routes.js";

import LoginRouter from "./Auth/Login.routes.js";
import RegisterRouter from "./Auth/Register.routes.js";
import ResetPasswordRouter from "./Auth/ResetPassword.routes.js";

import AddItemToCartRouter from "./Cart/AddItemToCart.routes.js";
import GetCartItemsByUserIDRouter from "./Cart/GetCartItemsByUserID.routes.js";
import DeleteItemFromCartRouter from "./Cart/DeleteItemFromCart.routes.js";
import UpdateItemQuantityRouter from "./Cart/UpdateItemQuantity.routes.js";
import GetAllCartsRouter from "./Cart/GetAllCarts.routes.js";

import CreateCategoryRouter from "./Category/CreateCategory.routes.js";
import DeleteCategoryRouter from "./Category/DeleteCategory.routes.js";
import GetAllCategoriesRouter from "./Category/GetAllCategories.routes.js";
import GetCategoryByIDRouter from "./Category/GetCategoryByID.routes.js";
import GetCategoryBySlugRouter from "./Category/GetCategoryBySlug.routes.js";
import UpdateCategoryRouter from "./Category/UpdateCategory.routes.js";
import ActiveCategoryByIDRouter from "./Category/ActiveCategoryByID.routes.js";

import CreateCityRouter from "./City/CreateCity.routes.js";
import DeleteCityRouter from "./City/DeleteCity.routes.js";
import GetAllCitiesRouter from "./City/GetAllCities.routes.js";
import GetCityByIDRouter from "./City/GetCityByID.routes.js";
import UpdateCityRouter from "./City/UpdateCity.routes.js";
import ActiveCityByIDRouter from "./City/ActiveCityByID.routes.js";

import CreateCollectionRouter from "./Collection/CreateCollection.routes.js";
import DeleteCollectionRouter from "./Collection/DeleteCollection.routes.js";
import GetAllCollectionsRouter from "./Collection/GetAllCollections.routes.js";
import GetCollectionByIDRouter from "./Collection/GetCollectionByID.routes.js";
import GetCollectionBySlugRouter from "./Collection/GetCollectionBySlug.routes.js";
import UpdateCollectionRouter from "./Collection/UpdateCollection.routes.js";
import ActiveCollectionByIDRouter from "./Collection/ActiveCollectionByID.routes.js";

import CreateCountryRouter from "./Country/CreateCountry.routes.js";
import DeleteCountryRouter from "./Country/DeleteCountry.routes.js";
import GetAllCountriesRouter from "./Country/GetAllCountries.routes.js";
import GetCountryByIDRouter from "./Country/GetCountryByID.routes.js";
import UpdateCountryRouter from "./Country/UpdateCountry.routes.js";
import ActiveCountryByIDRouter from "./Country/ActiveCountryByID.routes.js";

import ActiveCurrencySymbolByIDRouter from "./CurrencySymbol/ActiveCurrencySymbolByID.routes.js";
import CreateCurrencySymbolRouter from "./CurrencySymbol/CreateCurrencySymbol.routes.js";
import DeleteCurrencySymbolRouter from "./CurrencySymbol/DeleteCurrencySymbol.routes.js";
import GetCurrencySymbolByIDRouter from "./CurrencySymbol/GetCurrencySymbolByID.routes.js";
import GetAllCurrencySymbolsRouter from "./CurrencySymbol/GetAllCurrencySymbols.routes.js";
import UpdateCurrencySymbolRouter from "./CurrencySymbol/UpdateCurrencySymbol.routes.js";

import CreateOrderRouter from "./Order/CreateOrder.routes.js";
import GetAllOrdersRouter from "./Order/GetAllOrders.routes.js";
import GetOrderByIDRouter from "./Order/GetOrderByID.routes.js";
import GetOrderHistoryRouter from "./Order/GetOrderHistory.routes.js";
import UpdateOrderRouter from "./Order/UpdateOrder.routes.js";
import ActiveOrderStatusByIDRouter from "./OrderStatus/ActiveOrderStatusByID.routes.js";

import CreateOrderStatusRouter from "./OrderStatus/CreateOrderStatus.routes.js";
import DeleteOrderStatusRouter from "./OrderStatus/DeleteOrderStatus.routes.js";
import GetOrderStatusByIDRouter from "./OrderStatus/GetOrderStatusByID.routes.js";
import GetAllOrderStatusesRouter from "./OrderStatus/GetAllOrderStatuses.routes.js";
import UpdateOrderStatusRouter from "./OrderStatus/UpdateOrderStatus.routes.js";

import CreateOtpVerificationRouter from "./OtpVerification/CreateOtpVerification.routes.js";
import VerifyOtpRouter from "./OtpVerification/VerifyOtp.routes.js";

import CreatePaymentRouter from "./Payment/CreatePayment.routes.js";
import GetPaymentByIDRouter from "./Payment/GetPaymentByID.routes.js";
import GetAllPaymentsRouter from "./Payment/GetAllPayments.routes.js";
import ActivePaymentMethodByIDRouter from "./PaymentMethod/ActivePaymentMethodByID.routes.js";

import CreatePaymentMethodRouter from "./PaymentMethod/CreatePaymentMethod.routes.js";
import DeletePaymentMethodRouter from "./PaymentMethod/DeletePaymentMethod.routes.js";
import GetPaymentMethodByIDRouter from "./PaymentMethod/GetPaymentMethodByID.routes.js";
import GetAllPaymentMethodsRouter from "./PaymentMethod/GetAllPaymentMethods.routes.js";
import UpdatePaymentMethodRouter from "./PaymentMethod/UpdatePaymentMethod.routes.js";

import ActivePaymentStatusByIDRouter from "./PaymentStatus/ActivePaymentStatusByID.routes.js";
import CreatePaymentStatusRouter from "./PaymentStatus/CreatePaymentStatus.routes.js";
import DeletePaymentStatusRouter from "./PaymentStatus/DeletePaymentStatus.routes.js";
import GetPaymentStatusByIDRouter from "./PaymentStatus/GetPaymentStatusByID.routes.js";
import GetAllPaymentStatusesRouter from "./PaymentStatus/GetAllPaymentStatuses.routes.js";
import UpdatePaymentStatusRouter from "./PaymentStatus/UpdatePaymentStatus.routes.js";

import CreateProductRouter from "./Product/CreateProduct.routes.js";
import DeleteProductRouter from "./Product/DeleteProduct.routes.js";
import GetAllProductsRouter from "./Product/GetAllProducts.routes.js";
import GetProductByIDRouter from "./Product/GetProductByID.routes.js";
import SearchWithFiltersRouter from "./Product/SearchWithFilters.routes.js";
import UpdateProductRouter from "./Product/UpdateProduct.routes.js";
import ActiveProductByIDRouter from "./Product/ActiveProductByID.routes.js";

import TokenRouter from "./Token/Token.routes.js";

import ImageRouter from "./Image/Image.routes.js";

import CreateReviewRouter from "./Review/CreateReview.routes.js";
import DeleteReviewRouter from "./Review/DeleteReview.routes.js";
import GetProductReviewsByProductIDRouter from "./Review/GetProductReviewsByProductID.routes.js";
import GetReviewByIDRouter from "./Review/GetReviewByID.routes.js";

import CreateRoleRouter from "./Role/CreateRole.routes.js";
import DeleteRoleRouter from "./Role/DeleteRole.routes.js";
import GetAllRolesRouter from "./Role/GetAllRoles.routes.js";
import GetRoleByIDRouter from "./Role/GetRoleByID.routes.js";
import UpdateRoleRouter from "./Role/UpdateRole.routes.js";
import ActiveRoleByIDRouter from "./Role/ActiveRoleByID.routes.js";

import CreatePermissionRouter from "./Permission/CreatePermission.routes.js";
import DeletePermissionRouter from "./Permission/DeletePermission.routes.js";
import GetAllPermissionsRouter from "./Permission/GetAllPermissions.routes.js";
import GetPermissionByIDRouter from "./Permission/GetPermissionByID.routes.js";
import UpdatePermissionRouter from "./Permission/UpdatePermission.routes.js";
import ActivePermissionByIDRouter from "./Permission/ActivePermissionByID.routes.js";

import CreateSubcategoryRouter from "./Subcategory/CreateSubcategory.routes.js";
import DeleteSubcategoryRouter from "./Subcategory/DeleteSubcategory.routes.js";
import GetSubcategoriesByCategoryIDRouter from "./Subcategory/GetSubcategoriesByCategoryID.routes.js";
import GetSubcategoryByIDRouter from "./Subcategory/GetSubcategoryByID.routes.js";
import GetSubcategoryBySlugRouter from "./Subcategory/GetSubcategoryBySlug.routes.js";
import UpdateSubcategoryRouter from "./Subcategory/UpdateSubcategory.routes.js";
import ActiveSubcategoryByIDRouter from "./Subcategory/ActiveSubcategoryByID.routes.js";

import DeleteUserRouter from "./User/DeleteUser.routes.js";
import GetUserByIDRouter from "./User/GetUserByID.routes.js";
import GetAllUsersRouter from "./User/GetAllUsers.routes.js";
import UpdateUserRouter from "./User/UpdateUser.routes.js";
import ActiveUserByIDRouter from "./User/ActiveUserByID.routes.js";

const router = express.Router();

//Address

router.use("/addresses", GetAllUserAddressesByUserIDRouter);
router.use("/address", CreateAddressRouter);
router.use("/address", DeleteAddressRouter);
router.use("/address", UpdateAddressRouter);
router.use("/address", GetUserAddressByIDRouter);

//Admin

router.use("/admins", GetAllAdminsRouter);
router.use("/admin", CreateAdminRouter);
router.use("/admin", DeleteAdminRouter);
router.use("/admin", GetAdminByIDRouter);
router.use("/admin", UpdateAdminRouter);
router.use(
  "/admin/active",
  ActiveAdminByIDRouter,
);

//Auth
router.use("/auth/login", LoginRouter);
router.use("/auth/reset-password", ResetPasswordRouter);
router.use("/auth/register", RegisterRouter);

//Carts

router.use("/carts", GetAllCartsRouter);
router.use("/cart", AddItemToCartRouter);
router.use("/cart", GetCartItemsByUserIDRouter);
router.use("/cart", DeleteItemFromCartRouter);
router.use("/cart", UpdateItemQuantityRouter);

//Categories

router.use("/categories", GetAllCategoriesRouter);
router.use("/category", CreateCategoryRouter);
router.use("/category", DeleteCategoryRouter);
router.use("/category", GetCategoryByIDRouter);
router.use("/category", GetCategoryBySlugRouter);
router.use("/category", UpdateCategoryRouter);
router.use(
  "/category/active",
  ActiveCategoryByIDRouter,
);

//Cities

router.use("/cities", GetAllCitiesRouter);
router.use("/city", CreateCityRouter);
router.use("/city", DeleteCityRouter);
router.use("/city", GetCityByIDRouter);
router.use("/city", UpdateCityRouter);
router.use(
  "/city/active",
  ActiveCityByIDRouter,
);

//Collections

router.use("/collections", GetAllCollectionsRouter);
router.use(
  "/collection",
  CreateCollectionRouter
);
router.use(
  "/collection",
  DeleteCollectionRouter
);
router.use("/collection", GetCollectionByIDRouter);
router.use("/collection", GetCollectionBySlugRouter);
router.use(
  "/collection",
  UpdateCollectionRouter,
);
router.use(
  "/collection/active",
  ActiveCollectionByIDRouter,
);

//Countries

router.use("/countries", GetAllCountriesRouter);
router.use("/country", CreateCountryRouter);
router.use("/country", DeleteCountryRouter);
router.use("/country", GetCountryByIDRouter);
router.use("/country", UpdateCountryRouter);
router.use(
  "/country/active",
  ActiveCountryByIDRouter,
);

//CurrencySymbols

router.use("/currency-symbols", GetAllCurrencySymbolsRouter);
router.use("/currency-symbol", CreateCurrencySymbolRouter);
router.use("/currency-symbol", DeleteCurrencySymbolRouter);
router.use("/currency-symbol", GetCurrencySymbolByIDRouter);
router.use("/currency-symbol", UpdateCurrencySymbolRouter);
router.use(
  "/currency-symbol/active",
  ActiveCurrencySymbolByIDRouter,
);

//Orders

router.use("/orders", GetAllOrdersRouter);
router.use("/order", CreateOrderRouter);
router.use("/order", GetOrderByIDRouter);
router.use("/order/history", GetOrderHistoryRouter);
router.use("/order", UpdateOrderRouter);

//OrderStatuses

router.use("/order-statuses", GetAllOrderStatusesRouter);
router.use(
  "/order-status",
  CreateOrderStatusRouter,
);
router.use(
  "/order-status",
  DeleteOrderStatusRouter,
);
router.use("/order-status", GetOrderStatusByIDRouter);
router.use(
  "/order-status",
  UpdateOrderStatusRouter,
);
router.use(
  "/order-status/active",
  ActiveOrderStatusByIDRouter,
);

//OtpVerification

router.use("/otp-verification", CreateOtpVerificationRouter);
router.use("/otp-verification", VerifyOtpRouter);

//Payments

router.use("/payments", GetAllPaymentsRouter);
router.use("/payment", CreatePaymentRouter);
router.use("/payment", GetPaymentByIDRouter);

//PaymentMethods

router.use("/payment-methods", GetAllPaymentMethodsRouter);
router.use(
  "/payment-method",
  CreatePaymentMethodRouter,
);
router.use(
  "/payment-method",
  DeletePaymentMethodRouter,
);
router.use("/payment-method", GetPaymentMethodByIDRouter);
router.use(
  "/payment-method",
  UpdatePaymentMethodRouter,
);
router.use(
  "/payment-method/active",
  ActivePaymentMethodByIDRouter,
);

//PaymentStatuses

router.use("/payment-statuses", GetAllPaymentStatusesRouter);
router.use(
  "/payment-status",
  CreatePaymentStatusRouter,
);
router.use(
  "/payment-status",
  DeletePaymentStatusRouter,
);
router.use("/payment-status", GetPaymentStatusByIDRouter);
router.use(
  "/payment-status",
  UpdatePaymentStatusRouter,
);
router.use(
  "/payment-status/active",
  ActivePaymentStatusByIDRouter,
);

//Products

router.use("/products", GetAllProductsRouter);
router.use("/product", CreateProductRouter);
router.use("/product", DeleteProductRouter);
router.use("/product", GetProductByIDRouter);
router.use("/products/filter", SearchWithFiltersRouter);
router.use("/product", UpdateProductRouter);
router.use(
  "/product/active",
  ActiveProductByIDRouter,
);

//Images

router.use("/images", ImageRouter);

//Tokens

router.use("/tokens", TokenRouter);

//Reviews

router.use("/reviews", GetProductReviewsByProductIDRouter);
router.use("/review", CreateReviewRouter);
router.use("/review", DeleteReviewRouter);
router.use("/review", GetReviewByIDRouter);

//Roles

router.use("/roles", GetAllRolesRouter);
router.use("/role", CreateRoleRouter);
router.use("/role", DeleteRoleRouter);
router.use("/role", GetRoleByIDRouter);
router.use("/role", UpdateRoleRouter);
router.use(
  "/role/active",
  ActiveRoleByIDRouter,
);

//Permissions

router.use(
  "/permissions",
  GetAllPermissionsRouter,
);
router.use(
  "/permission",
  CreatePermissionRouter,
);
router.use(
  "/permission",
  DeletePermissionRouter,
);
router.use(
  "/permission",
  GetPermissionByIDRouter,
);
router.use(
  "/permission",
  UpdatePermissionRouter,
);
router.use(
  "/permission/active",
  ActivePermissionByIDRouter,
);

//Subcategories

router.use("/subcategories/category-id", GetSubcategoriesByCategoryIDRouter);
router.use("/subcategory/id", GetSubcategoryByIDRouter);
router.use("/subcategory/slug", GetSubcategoryBySlugRouter);
router.use(
  "/subcategory",
  CreateSubcategoryRouter,
);
router.use(
  "/subcategory",
  DeleteSubcategoryRouter,
);
router.use(
  "/subcategory",
  UpdateSubcategoryRouter,
);
router.use(
  "/subcategory/active",
  ActiveSubcategoryByIDRouter,
);

//Users

router.use("/users", GetAllUsersRouter);
router.use("/user", DeleteUserRouter);
router.use("/user", GetUserByIDRouter);
router.use("/user", UpdateUserRouter);
router.use(
  "/user/active",
  ActiveUserByIDRouter,
);


export default router;

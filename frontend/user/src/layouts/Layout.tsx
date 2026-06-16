//React libaries
import { Navigate, Route, Routes } from "react-router-dom";

//Style
import "./Layout.css";

//Pages
import { LoginPage, RegisterPage, ResetPasswordPage } from "../features/Auth";
import { CartPage } from "../features/Carts";
import { CategoryPage } from "../features/Categories";
import { CollectionsPage } from "../features/Collections";
import { HomePage } from "../features/Home";
import { OrdersPage } from "../features/Orders";
import { CheckoutPage } from "../features/Payments";
import { ProductsPage, ProductDetailsPage } from "../features/Products";
import { FaqPage } from "../features/Contacts";
import ContactUsPage from "../features/Contact/Pages/ContactUsPage/ContactUsPage";
import {
  ShippingReturnsPage,
  PrivacyPolicyPage,
  TermsOfServicePage,
} from "../features/Settings";
import { AboutUsPage } from "../features/About";

//Components
import Header from "../features/UI/Components/Header/Header";
import Footer from "../features/UI/Components/Footer/Footer";

function Layout() {
  return (
    <div className="ss-page min-h-screen m-auto">
      <Header/> 
      <main className="layout-main flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/shipping-returns" element={<ShippingReturnsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />

          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/login" element={<Navigate to="/auth/login" replace />} />
          <Route path="/auth/register" element={<RegisterPage />} />
          <Route path="/register" element={<Navigate to="/auth/register" replace />} />
          <Route path="/auth/reset-password" element={<ResetPasswordPage />} />
          <Route path="/reset-password" element={<Navigate to="/auth/reset-password" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;

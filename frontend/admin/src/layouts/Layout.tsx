import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "../features/Home";
import { AdminDetailsPage, CreateAdminPage, EditAdminPage, ListAdminsPage } from "../features/Admins";
import { Login, Register, ResetPassword } from "../features/Auth";
import { CartDetailsPage, ListCartsPage } from "../features/Carts";
import { CategoryDetailsPage, CreateCategoryPage, EditCategoryPage, ListCategoriesPage } from "../features/Categories";
import { CollectionDetailsPage, CreateCollectionPage, EditCollectionPage, ListCollectionsPage } from "../features/Collections";
import { CountryDetailsPage, CreateCountryPage, EditCountryPage, ListCountriesPage } from "../features/Countries";
import { CreateOrderStatusPage, EditOrderStatusPage, ListOrderStatusesPage, OrderStatusDetailsPage } from "../features/OrderStatuses";
import { EditOrderPage, ListOrdersPage, OrderDetailsPage } from "../features/Orders";
import { CreatePaymentMethodPage, EditPaymentMethodPage, ListPaymentMethodsPage, PaymentMethodDetailsPage } from "../features/PaymentMethods";
import { CreatePaymentStatusPage, EditPaymentStatusPage, ListPaymentStatusesPage, PaymentStatusDetailsPage } from "../features/PaymentStatuses";
import { ListPaymentsPage, PaymentDetailsPage, EditPaymentPage } from "../features/Payments";
import { CreatePermissionPage, EditPermissionPage, ListPermissionsPage, PermissionDetailsPage } from "../features/Permissions";
import { CreateProductPage, EditProductPage, ListProductsPage, ProductDetailsPage } from "../features/Products";
import { CreateRolePage, EditRolePage, ListRolesPage, RoleDetailsPage } from "../features/Roles";
import { CreateSubcategoryPage, EditSubcategoryPage, ListSubcategoriesPage, SubcategoryDetailsPage } from "../features/Subcategories";
import { CreateUserPage, EditUserPage, ListUsersPage, UserDetailsPage } from "../features/Users";
import { SettingsPage } from "../features/Settings";
import { Header, Footer, Sidebar } from "../features/UI/compoents";
import "./Layout.css";

function Layout() {
  const location = useLocation();

  useEffect(() => {
    const fontLinkId = "google-fonts-design-themes";
    if (!document.getElementById(fontLinkId)) {
      const link = document.createElement("link");
      link.id = fontLinkId;
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap";
      document.head.appendChild(link);
    }

    try {
      const LS_PREFIX = "storefront_design_";
      const storedPalette = localStorage.getItem(`${LS_PREFIX}palette`);
      const storedFont = localStorage.getItem(`${LS_PREFIX}font`) || "font-inter";

      if (storedPalette) {
        const colors = JSON.parse(storedPalette);
        const primaryColor = colors.primary || "#111827";
        const primaryColorHover = `${primaryColor}ee`;
        const secondaryColor = colors.secondary || "#0ea5e9";
        const accentColor = colors.accent || "#34d399";
        const bgColor = colors.background || "#f8fafc";
        
        let fontFamilyValue = "'Inter', sans-serif";
        if (storedFont === "font-serif") fontFamilyValue = "'Playfair Display', Georgia, serif";
        if (storedFont === "font-mono") fontFamilyValue = "'JetBrains Mono', monospace";
        if (storedFont === "font-sans") fontFamilyValue = "system-ui, -apple-system, sans-serif";

        let styleElement = document.getElementById("dynamic-storefront-theme") as HTMLStyleElement;
        if (!styleElement) {
          styleElement = document.createElement("style");
          styleElement.id = "dynamic-storefront-theme";
          document.head.appendChild(styleElement);
        }

        styleElement.innerHTML = `
          :root {
            --primary-color: ${primaryColor};
            --primary-color-hover: ${primaryColorHover};
            --secondary-color: ${secondaryColor};
            --accent-color: ${accentColor};
            --bg-color: ${bgColor};
            --font-family: ${fontFamilyValue};
          }

          /* Global Overrides for primary elements */
          .bg-\\[\\#111827\\], 
          .bg-slate-900, 
          .bg-slate-950,
          button[type="submit"],
          .bg-primary {
            background-color: var(--primary-color) !important;
          }

          .hover\\:bg-black:hover,
          .hover\\:bg-slate-950:hover,
          .bg-\\[\\#111827\\]:hover,
          .bg-slate-900:hover,
          button[type="submit"]:hover {
            background-color: var(--primary-color-hover) !important;
            filter: brightness(0.95);
            opacity: 0.95;
          }

          .text-slate-900, 
          .text-slate-800,
          .text-primary,
          .text-slate-950 {
            color: var(--primary-color) !important;
          }

          .border-slate-900, 
          .border-primary,
          .border-\\[\\#111827\\] {
            border-color: var(--primary-color) !important;
          }

          /* Override fonts globally */
          body, html, .font-inter, input, button, select, textarea {
            font-family: var(--font-family), 'Inter', sans-serif !important;
          }

          /* Soft backgrounds using custom bg accent */
          .bg-slate-50, .bg-gray-50\\/20 {
            background-color: var(--bg-color) !important;
          }
        `;
      } else {
        const styleElement = document.getElementById("dynamic-storefront-theme");
        if (styleElement) styleElement.remove();
      }
    } catch (e) {
      console.error("Error applying theme", e);
    }
  }, [location.pathname]);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="flex-shrink-0">
          <Header />
        </div>
        <main className="flex-1 overflow-y-auto p-4 md:p-6 relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/admins" element={<ListAdminsPage />} />
            <Route path="/admins/create" element={<CreateAdminPage />} />
            <Route path="/admins/edit/:id" element={<EditAdminPage />} />
            <Route path="/admins/:id" element={<AdminDetailsPage />} />
            <Route path="/carts" element={<ListCartsPage />} />
            <Route path="/carts/:UserID" element={<CartDetailsPage />} />
            <Route path="/categories" element={<ListCategoriesPage />} />
            <Route path="/categories/create" element={<CreateCategoryPage />} />
            <Route path="/categories/edit/:id" element={<EditCategoryPage />} />
            <Route path="/categories/:id" element={<CategoryDetailsPage />} />
            <Route path="/collections" element={<ListCollectionsPage />} />
            <Route path="/collections/create" element={<CreateCollectionPage />} />
            <Route path="/collections/edit/:id" element={<EditCollectionPage />} />
            <Route path="/collections/:id" element={<CollectionDetailsPage />} />
            <Route path="/countries" element={<ListCountriesPage />} />
            <Route path="/countries/create" element={<CreateCountryPage />} />
            <Route path="/countries/edit/:id" element={<EditCountryPage />} />
            <Route path="/countries/:id" element={<CountryDetailsPage />} />
            <Route path="/order-statuses" element={<ListOrderStatusesPage />} />
            <Route path="/order-statuses/create" element={<CreateOrderStatusPage />} />
            <Route path="/order-statuses/edit/:id" element={<EditOrderStatusPage />} />
            <Route path="/order-statuses/:id" element={<OrderStatusDetailsPage />} />
            <Route path="/orders" element={<ListOrdersPage />} />
            <Route path="/orders/edit/:id" element={<EditOrderPage />} />
            <Route path="/orders/:id" element={<OrderDetailsPage />} />
            <Route path="/payment-methods" element={<ListPaymentMethodsPage />} />
            <Route path="/payment-methods/create" element={<CreatePaymentMethodPage />} />
            <Route path="/payment-methods/edit/:id" element={<EditPaymentMethodPage />} />
            <Route path="/payment-methods/:id" element={<PaymentMethodDetailsPage />} />
            <Route path="/payment-statuses" element={<ListPaymentStatusesPage />} />
            <Route path="/payment-statuses/create" element={<CreatePaymentStatusPage />} />
            <Route path="/payment-statuses/edit/:id" element={<EditPaymentStatusPage />} />
            <Route path="/payment-statuses/:id" element={<PaymentStatusDetailsPage />} />
            <Route path="/payments" element={<ListPaymentsPage />} />
            <Route path="/payments/edit/:id" element={<EditPaymentPage />} />
            <Route path="/payments/:id" element={<PaymentDetailsPage />} />
            <Route path="/permissions" element={<ListPermissionsPage />} />
            <Route path="/permissions/create" element={<CreatePermissionPage />} />
            <Route path="/permissions/edit/:id" element={<EditPermissionPage />} />
            <Route path="/permissions/:id" element={<PermissionDetailsPage />} />
            <Route path="/products" element={<ListProductsPage />} />
            <Route path="/products/create" element={<CreateProductPage />} />
            <Route path="/products/edit/:id" element={<EditProductPage />} />
            <Route path="/products/:id" element={<ProductDetailsPage />} />
            <Route path="/roles" element={<ListRolesPage />} />
            <Route path="/roles/create" element={<CreateRolePage />} />
            <Route path="/roles/edit/:id" element={<EditRolePage />} />
            <Route path="/roles/:id" element={<RoleDetailsPage />} />
            <Route path="/subcategories" element={<ListSubcategoriesPage />} />
            <Route path="/subcategories/create" element={<CreateSubcategoryPage />} />
            <Route path="/subcategories/edit/:id" element={<EditSubcategoryPage />} />
            <Route path="/subcategories/:id" element={<SubcategoryDetailsPage />} />
            <Route path="/users" element={<ListUsersPage />} />
            <Route path="/users/create" element={<CreateUserPage />} />
            <Route path="/users/edit/:id" element={<EditUserPage />} />
            <Route path="/users/:id" element={<UserDetailsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}
export default Layout;

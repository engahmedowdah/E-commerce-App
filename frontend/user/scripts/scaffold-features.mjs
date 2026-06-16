import fs from "fs";
import path from "path";

const ROOT = path.resolve("src/features");

const uiComponents = [
  "Header",
  "Footer",
  "Nav",
  "Search",
  "Copyright",
  "ListSidebarCards",
  "Logo",
  "Sidebar",
  "SidebarCard",
];

const features = {
  About: { pages: ["AboutPage"], services: false },
  Auth: { pages: ["LoginPage", "RegisterPage", "ResetPasswordPage"], services: false },
  Carts: { pages: ["CartPage"], services: true },
  Categories: { pages: ["CategoryPage"], services: true },
  Cities: { pages: ["CitiesPage"], services: true },
  Countries: { pages: ["CountriesPage"], services: true },
  Collections: { pages: ["CollectionsPage"], services: true },
  Contacts: { pages: ["ContactPage", "FaqPage"], services: true },
  Home: { pages: ["HomePage"], services: false },
  NewArrivals: { pages: ["NewArrivalsPage"], services: false },
  Orders: { pages: ["OrdersPage"], services: false },
  Payments: { pages: ["CheckoutPage"], services: false },
  Products: { pages: ["ProductsPage", "ProductDetailsPage"], services: true },
  Settings: {
    pages: ["SettingsPage", "ShippingReturnsPage", "PrivacyPolicyPage", "TermsOfServicePage"],
    services: false,
  },
  Subcategories: { pages: ["SubcategoriesPage"], services: true },
};

function write(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content);
}

function stubComponent(name, displayName) {
  return `import React from "react";
import "./${name}.css";

const ${displayName}: React.FC = () => {
  return <div className="${name.toLowerCase()}"></div>;
};

export default ${displayName};
`;
}

function stubCss(name) {
  return `.${name.toLowerCase()} {\n}\n`;
}

function stubPage(pageName) {
  const base = pageName.replace(/Page$/, "");
  return `import React from "react";
import "./${pageName}.css";

const ${pageName}: React.FC = () => {
  return (
    <div className="${pageName.toLowerCase()}">
      <h1>${base}</h1>
    </div>
  );
};

export default ${pageName};
`;
}

// UI
for (const comp of uiComponents) {
  write(path.join(ROOT, "UI", "Components", comp, `${comp}.tsx`), stubComponent(comp, comp));
  write(path.join(ROOT, "UI", "Components", comp, `${comp}.css`), stubCss(comp));
}

write(
  path.join(ROOT, "UI", "index.ts"),
  uiComponents.map((c) => `export { default as ${c} } from "./Components/${c}/${c}";`).join("\n") + "\n"
);

// Features
for (const [feature, config] of Object.entries(features)) {
  const base = path.join(ROOT, feature);

  write(path.join(base, "Components", "Components.tsx"), stubComponent("Components", `${feature}Components`));
  write(path.join(base, "Components", "Components.css"), stubCss("Components"));

  write(
    path.join(base, "Hooks", "Hooks.tsx"),
    `import React from "react";
import "./Hooks.css";

/** ${feature} hooks barrel */
const Hooks: React.FC = () => null;
export default Hooks;
`
  );
  write(path.join(base, "Hooks", "Hooks.css"), stubCss("Hooks"));

  if (config.services) {
    write(path.join(base, "Services", "Services.tsx"), stubComponent("Services", `${feature}Services`));
    write(path.join(base, "Services", "Services.css"), stubCss("Services"));
  }

  for (const page of config.pages) {
    write(path.join(base, "Pages", page, `${page}.tsx`), stubPage(page));
    write(path.join(base, "Pages", page, `${page}.css`), stubCss(page));
  }

  const exports = config.pages.map((p) => `export { default as ${p} } from "./Pages/${p}/${p}";`).join("\n");
  write(path.join(base, "index.ts"), exports + "\n");
}

console.log("Scaffold complete:", ROOT);

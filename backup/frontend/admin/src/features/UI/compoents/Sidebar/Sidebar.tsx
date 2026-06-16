import Configuration from "../Configuration/Configuration";
import ListSidebarCards from "../ListSidebarCards/ListSidebarCards";
import Logo from "../Logo/Logo";
import useTranslation from "../../../../shared/i18n/useTranslation";

function Sidebar() {
    const t = useTranslation();
    const listSidebarCards = [
        { icon: "admin_panel_settings", alt: "List Admins",           name: t.nav.admins,          path: "/admins" },
        { icon: "shopping_bag",         alt: "List Carts",            name: t.nav.carts,           path: "/carts" },
        { icon: "category",             alt: "List Categories",       name: t.nav.categories,      path: "/categories" },
        { icon: "layers",               alt: "List Collections",      name: t.nav.collections,     path: "/collections" },
        { icon: "public",               alt: "List Countries",        name: t.nav.countries,       path: "/countries" },
        { icon: "rule",                 alt: "List Order Statuses",   name: t.nav.orderStatuses,   path: "/order-statuses" },
        { icon: "shopping_cart",        alt: "List Orders",           name: t.nav.orders,          path: "/orders" },
        { icon: "credit_card",          alt: "List Payment Methods",  name: t.nav.paymentMethods,  path: "/payment-methods" },
        { icon: "verified",             alt: "List Payment Statuses", name: t.nav.paymentStatuses, path: "/payment-statuses" },
        { icon: "payments",             alt: "List Payments",         name: t.nav.payments,        path: "/payments" },
        { icon: "key",                  alt: "List Permissions",      name: t.nav.permissions,     path: "/permissions" },
        { icon: "inventory_2",          alt: "List Products",         name: t.nav.products,        path: "/products" },
        { icon: "badge",                alt: "List Roles",            name: t.nav.roles,           path: "/roles" },
        { icon: "account_tree",         alt: "List Subcategories",    name: t.nav.subcategories,   path: "/subcategories" },
        { icon: "group",                alt: "List Users",            name: t.nav.users,           path: "/users" },
    ];
    return (
        <aside className="h-screen w-64 flex-shrink-0 bg-surface flex flex-col py-6 px-4 z-40 border-r border-surface-container-high shadow-sm overflow-y-auto">
            <div className="mb-8 px-2">
                <Logo />
            </div>
            <ListSidebarCards listSidebarCards={listSidebarCards.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }))} />
            <div className="mt-auto pt-6 border-t border-surface-container-high/50">
                <Configuration />
            </div>
        </aside>
    );
}
export default Sidebar;

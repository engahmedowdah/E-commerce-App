// Central translation dictionary for the admin panel.
// Add new keys here as the app grows.

export type Lang = "en" | "ar";

const translations = {
  // ─── Sidebar nav items ──────────────────────────────────────────────────────
  nav: {
    admins:          { en: "Admins",           ar: "المشرفون" },
    carts:           { en: "Carts",            ar: "عربات التسوق" },
    categories:      { en: "Categories",       ar: "الأقسام" },
    collections:     { en: "Collections",      ar: "المجموعات" },
    countries:       { en: "Countries",        ar: "الدول" },
    orderStatuses:   { en: "Order Statuses",   ar: "حالات الطلبات" },
    orders:          { en: "Orders",           ar: "الطلبات" },
    paymentMethods:  { en: "Payment Methods",  ar: "طرق الدفع" },
    paymentStatuses: { en: "Payment Statuses", ar: "حالات الدفع" },
    payments:        { en: "Payments",         ar: "المدفوعات" },
    permissions:     { en: "Permissions",      ar: "الصلاحيات" },
    products:        { en: "Products",         ar: "المنتجات" },
    roles:           { en: "Roles",            ar: "الأدوار" },
    subcategories:   { en: "Subcategories",    ar: "الأقسام الفرعية" },
    users:           { en: "Users",            ar: "المستخدمون" },
    settings:        { en: "Settings",         ar: "الإعدادات" },
    account:         { en: "Account",          ar: "الحساب" },
  },

  // ─── Page headers & subtitles ───────────────────────────────────────────────
  pages: {
    admins: {
      title:    { en: "Admins",     ar: "المشرفون" },
      subtitle: { en: "Curate and manage your storefront admins.", ar: "إدارة مشرفي المتجر." },
      create:   { en: "Create Admin", ar: "إضافة مشرف" },
      empty:    { en: "No Admins Found", ar: "لا يوجد مشرفون" },
      emptyHint:{ en: "You don't have any admins yet. Create one to get started!", ar: "لا يوجد مشرفون بعد. أضف مشرفاً للبدء!" },
    },
    carts: {
      title:    { en: "Carts",      ar: "عربات التسوق" },
      subtitle: { en: "View and manage customer shopping carts.", ar: "عرض وإدارة عربات تسوق العملاء." },
      empty:    { en: "No Carts Found", ar: "لا توجد عربات تسوق" },
      emptyHint:{ en: "You don't have any carts yet.", ar: "لا توجد عربات تسوق بعد." },
    },
    categories: {
      title:    { en: "Categories", ar: "الأقسام" },
      subtitle: { en: "Curate and manage your storefront categories.", ar: "إدارة أقسام المتجر." },
      create:   { en: "Create Category", ar: "إضافة قسم" },
      empty:    { en: "No Categories Found", ar: "لا توجد أقسام" },
      emptyHint:{ en: "You don't have any categories yet. Create one to get started!", ar: "لا توجد أقسام بعد. أضف قسماً للبدء!" },
    },
    collections: {
      title:    { en: "Collections", ar: "المجموعات" },
      subtitle: { en: "Curate and manage your storefront collections.", ar: "إدارة مجموعات المتجر." },
      create:   { en: "Create Collection", ar: "إضافة مجموعة" },
      empty:    { en: "No Collections Found", ar: "لا توجد مجموعات" },
      emptyHint:{ en: "You don't have any collections yet. Create one to get started!", ar: "لا توجد مجموعات بعد. أضف مجموعة للبدء!" },
    },
    countries: {
      title:    { en: "Countries",  ar: "الدول" },
      subtitle: { en: "Curate and manage your storefront countries.", ar: "إدارة الدول في المتجر." },
      create:   { en: "Create Country", ar: "إضافة دولة" },
      empty:    { en: "No Countries Found", ar: "لا توجد دول" },
      emptyHint:{ en: "You don't have any countries yet. Create one to get started!", ar: "لا توجد دول بعد. أضف دولة للبدء!" },
    },
    orderStatuses: {
      title:    { en: "Order Statuses", ar: "حالات الطلبات" },
      subtitle: { en: "Curate and manage your storefront order statuses.", ar: "إدارة حالات الطلبات في المتجر." },
      create:   { en: "Create Order Status", ar: "إضافة حالة طلب" },
      empty:    { en: "No Order Statuses Found", ar: "لا توجد حالات طلبات" },
      emptyHint:{ en: "You don't have any order statuses yet.", ar: "لا توجد حالات طلبات بعد." },
    },
    orders: {
      title:    { en: "Orders",     ar: "الطلبات" },
      subtitle: { en: "Manage all orders.", ar: "إدارة جميع الطلبات." },
      empty:    { en: "No Orders Found", ar: "لا توجد طلبات" },
      emptyHint:{ en: "You don't have any orders yet.", ar: "لا توجد طلبات بعد." },
    },
    paymentMethods: {
      title:    { en: "Payment Methods", ar: "طرق الدفع" },
      subtitle: { en: "Curate and manage your storefront payment methods.", ar: "إدارة طرق الدفع في المتجر." },
      create:   { en: "Create Payment Method", ar: "إضافة طريقة دفع" },
      empty:    { en: "No Payment Methods Found", ar: "لا توجد طرق دفع" },
      emptyHint:{ en: "You don't have any payment methods yet.", ar: "لا توجد طرق دفع بعد." },
    },
    paymentStatuses: {
      title:    { en: "Payment Statuses", ar: "حالات الدفع" },
      subtitle: { en: "Curate and manage your storefront payment statuses.", ar: "إدارة حالات الدفع في المتجر." },
      create:   { en: "Create Payment Status", ar: "إضافة حالة دفع" },
      empty:    { en: "No Payment Statuses Found", ar: "لا توجد حالات دفع" },
      emptyHint:{ en: "You don't have any payment statuses yet.", ar: "لا توجد حالات دفع بعد." },
    },
    payments: {
      title:    { en: "Payments",   ar: "المدفوعات" },
      subtitle: { en: "Manage all payments.", ar: "إدارة جميع المدفوعات." },
      empty:    { en: "No Payments Found", ar: "لا توجد مدفوعات" },
      emptyHint:{ en: "You don't have any payments yet.", ar: "لا توجد مدفوعات بعد." },
    },
    permissions: {
      title:    { en: "Permissions", ar: "الصلاحيات" },
      subtitle: { en: "Curate and manage your storefront permissions.", ar: "إدارة صلاحيات المتجر." },
      create:   { en: "Create Permission", ar: "إضافة صلاحية" },
      empty:    { en: "No Permissions Found", ar: "لا توجد صلاحيات" },
      emptyHint:{ en: "You don't have any permissions yet.", ar: "لا توجد صلاحيات بعد." },
    },
    products: {
      title:    { en: "Products",   ar: "المنتجات" },
      subtitle: { en: "Curate and manage your storefront products.", ar: "إدارة منتجات المتجر." },
      create:   { en: "Create Product", ar: "إضافة منتج" },
      empty:    { en: "No Products Found", ar: "لا توجد منتجات" },
      emptyHint:{ en: "You don't have any products yet. Create one to get started!", ar: "لا توجد منتجات بعد. أضف منتجاً للبدء!" },
    },
    roles: {
      title:    { en: "Roles",      ar: "الأدوار" },
      subtitle: { en: "Curate and manage your storefront roles.", ar: "إدارة أدوار المتجر." },
      create:   { en: "Create Role", ar: "إضافة دور" },
      empty:    { en: "No Roles Found", ar: "لا توجد أدوار" },
      emptyHint:{ en: "You don't have any roles yet.", ar: "لا توجد أدوار بعد." },
    },
    subcategories: {
      title:    { en: "Subcategories", ar: "الأقسام الفرعية" },
      subtitle: { en: "Curate and manage your storefront product groupings.", ar: "إدارة التصنيفات الفرعية للمتجر." },
      create:   { en: "Create Subcategory", ar: "إضافة قسم فرعي" },
      empty:    { en: "No Subcategories Found", ar: "لا توجد أقسام فرعية" },
      emptyHint:{ en: "You don't have any subcategories yet. Create one to get started!", ar: "لا توجد أقسام فرعية بعد. أضف قسماً للبدء!" },
    },
    users: {
      title:    { en: "Users",      ar: "المستخدمون" },
      subtitle: { en: "Manage all users in the system.", ar: "إدارة جميع المستخدمين في النظام." },
      empty:    { en: "No Users Found", ar: "لا يوجد مستخدمون" },
      emptyHint:{ en: "You don't have any users yet.", ar: "لا يوجد مستخدمون بعد." },
    },
  },

  // ─── Dashboard stat card labels ─────────────────────────────────────────────
  stats: {
    totalAdmins:        { en: "Total Admins",        ar: "إجمالي المشرفين" },
    totalCarts:         { en: "Total Carts",         ar: "إجمالي عربات التسوق" },
    totalCategories:    { en: "Total Categories",    ar: "إجمالي الأقسام" },
    totalCollections:   { en: "Total Collections",   ar: "إجمالي المجموعات" },
    totalCountries:     { en: "Total Countries",     ar: "إجمالي الدول" },
    totalOrderStatuses: { en: "Total Order Statuses",ar: "إجمالي حالات الطلبات" },
    totalOrders:        { en: "Total Orders",        ar: "إجمالي الطلبات" },
    totalPaymentMethods:{ en: "Total Payment Methods",ar:"إجمالي طرق الدفع" },
    totalPaymentStatuses:{en: "Total Payment Statuses",ar:"إجمالي حالات الدفع" },
    totalPayments:      { en: "Total Payments",      ar: "إجمالي المدفوعات" },
    totalPermissions:   { en: "Total Permissions",   ar: "إجمالي الصلاحيات" },
    totalProducts:      { en: "Total Products",      ar: "إجمالي المنتجات" },
    totalRoles:         { en: "Total Roles",         ar: "إجمالي الأدوار" },
    totalSubcategories: { en: "Total Subcategories", ar: "إجمالي الأقسام الفرعية" },
    totalUsers:         { en: "Total Users",         ar: "إجمالي المستخدمين" },
    active:             { en: "Active",              ar: "نشط" },
    inactive:           { en: "Inactive",            ar: "غير نشط" },
    avgProducts:        { en: "Avg. Products",       ar: "متوسط المنتجات" },
    avgPermissions:     { en: "Avg. Permissions",    ar: "متوسط الصلاحيات" },
    totalAmount:        { en: "Total Amount",        ar: "إجمالي المبلغ" },
    avgAmount:          { en: "Avg. Amount",         ar: "متوسط المبلغ" },
    pending:            { en: "Pending",             ar: "قيد الانتظار" },
    completed:          { en: "Completed",           ar: "مكتمل" },
  },

  // ─── Pagination & List Controls ─────────────────────────────────────────────
  pagination: {
    showing: {
      en: (start: number, end: number, total: number) => `Showing ${start} to ${end} of ${total} results`,
      ar: (start: number, end: number, total: number) => `عرض ${start} إلى ${end} من أصل ${total} نتيجة`,
    },
    limit: { en: "Limit:", ar: "الحد:" },
  },
  
  sort: {
    newest:   { en: "Newest",       ar: "الأحدث" },
    oldest:   { en: "Oldest",       ar: "الأقدم" },
    nameAsc:  { en: "Name (A-Z)",   ar: "الاسم (أ-ي)" },
    nameDesc: { en: "Name (Z-A)",   ar: "الاسم (ي-أ)" },
  },
  
  list: {
    allAdmins:        { en: "All Admins",           ar: "جميع المشرفين" },
    allCarts:         { en: "All Carts",            ar: "جميع عربات التسوق" },
    allCategories:    { en: "All Categories",       ar: "جميع الأقسام" },
    allCollections:   { en: "All Collections",      ar: "جميع المجموعات" },
    allCountries:     { en: "All Countries",        ar: "جميع الدول" },
    allOrderStatuses: { en: "All Order Statuses",   ar: "جميع حالات الطلبات" },
    allOrders:        { en: "All Orders",           ar: "جميع الطلبات" },
    allPaymentMethods:{ en: "All Payment Methods",  ar: "جميع طرق الدفع" },
    allPaymentStatuses:{en: "All Payment Statuses", ar: "جميع حالات الدفع" },
    allPayments:      { en: "All Payments",         ar: "جميع المدفوعات" },
    allPermissions:   { en: "All Permissions",      ar: "جميع الصلاحيات" },
    allProducts:      { en: "All Products",         ar: "جميع المنتجات" },
    allReviews:       { en: "All Reviews",          ar: "جميع التقييمات" },
    allRoles:         { en: "All Roles",            ar: "جميع الأدوار" },
    allSubcategories: { en: "All Subcategories",    ar: "جميع الأقسام الفرعية" },
    allUsers:         { en: "All Users",            ar: "جميع المستخدمين" },
  },

  // ─── Footer ─────────────────────────────────────────────────────────────────
  footer: {
    copyright: {
      en: (year: number) => `© ${year} Ahmed Alghamdi. All Rights Reserved.`,
      ar: (year: number) => `© ${year} أحمد الغامدي. جميع الحقوق محفوظة.`,
    },
  },
} as const;

export default translations;

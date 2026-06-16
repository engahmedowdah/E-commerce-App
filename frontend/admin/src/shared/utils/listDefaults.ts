const DEFAULT_LIMIT      = 20;
const DEFAULT_SORT       = "createdAt_desc";
const DEFAULT_PRICE_SORT = "price_asc";
const DEFAULT_LANG       = "en";

export const LS_LANG = "admin_default_lang";

export const getDefaultLimit = (): number => {
    const stored = localStorage.getItem("admin_default_limit");
    return stored ? Number(stored) : DEFAULT_LIMIT;
};

export const getDefaultSort = (): string => {
    return localStorage.getItem("admin_default_sort") || DEFAULT_SORT;
};

export const getDefaultPriceSort = (): string => {
    return localStorage.getItem("admin_default_price_sort") || DEFAULT_PRICE_SORT;
};

export const getDefaultLang = (): string => {
    return localStorage.getItem(LS_LANG) || DEFAULT_LANG;
};

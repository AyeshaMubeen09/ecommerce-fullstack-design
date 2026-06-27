/*
==========================================================
Dashboard Helper Functions
----------------------------------------------------------
Every statistic shown on the admin dashboard is calculated
from the products array.

Expected Product Schema

{
  id,
  name,
  price,
  originalPrice,
  image,
  description,
  category,
  stock,
  discount,
  rating,
  orders,
  freeShipping,
  color,
  brand,
  features,
  condition,
  pageType
}
==========================================================
*/

/* ======================================================
   TOTAL PRODUCTS
====================================================== */

export const getTotalProducts = (products = []) => {
  return products.length;
};

/* ======================================================
   TOTAL STOCK
====================================================== */

export const getTotalStock = (products = []) => {
  return products.reduce(
    (total, product) => total + Number(product.stock || 0),
    0
  );
};

/* ======================================================
   TOTAL ORDERS
====================================================== */

export const getTotalOrders = (orders = []) => {
  return orders.length;
};

/* ======================================================
   TOTAL REVENUE
====================================================== */

export const getTotalRevenue = (orders = []) => {
  return orders.reduce(
    (total, order) =>
      total + Number(order.totalPrice || order.total || 0),
    0
  );
};

/* ======================================================
   TOTAL CATEGORIES
====================================================== */

export const getTotalCategories = (products = []) => {
  return new Set(
    products.map((product) => product.category)
  ).size;
};

/* ======================================================
   AVERAGE RATING
====================================================== */

export const getAverageRating = (products = []) => {
  if (!products.length) return 0;

  const total = products.reduce(
    (sum, product) =>
      sum + Number(product.rating || 0),
    0
  );

  return (total / products.length).toFixed(1);
};

/* ======================================================
   TOP CATEGORIES
====================================================== */

export const getTopCategories = (products = []) => {
  const categories = {};

  products.forEach((product) => {
    const category = product.category;

    if (!categories[category]) {
      categories[category] = 0;
    }

    categories[category]++;
  });

  return Object.entries(categories)
    .map(([name, value]) => ({
      name,
      value,
    }))
    .sort((a, b) => b.value - a.value);
};

/* ======================================================
   BRAND DISTRIBUTION
====================================================== */

export const getBrandDistribution = (
  products = []
) => {
  const brands = {};

  products.forEach((product) => {
    const brand = product.brand;

    if (!brands[brand]) {
      brands[brand] = 0;
    }

    brands[brand]++;
  });

  return Object.entries(brands).map(
    ([name, value]) => ({
      name,
      value,
    })
  );
};

/* ======================================================
   BEST SELLERS
====================================================== */

export const getBestSellingProducts = (
  products = [],
  limit = 5
) => {
  return [...products]
    .sort(
      (a, b) =>
        Number(b.orders) - Number(a.orders)
    )
    .slice(0, limit);
};

/* ======================================================
   LOW STOCK
====================================================== */

export const getLowStockProducts = (
  products = [],
  limit = 5
) => {
  return [...products]
    .sort(
      (a, b) =>
        Number(a.stock) - Number(b.stock)
    )
    .slice(0, limit);
};

/* ======================================================
   HIGHEST DISCOUNTS
====================================================== */

export const getHighestDiscountProducts = (
  products = [],
  limit = 5
) => {
  return [...products]
    .sort((a, b) => {
      return (
        parseInt(b.discount) -
        parseInt(a.discount)
      );
    })
    .slice(0, limit);
};

/* ======================================================
   MOST EXPENSIVE PRODUCTS
====================================================== */

export const getMostExpensiveProducts = (
  products = [],
  limit = 5
) => {
  return [...products]
    .sort(
      (a, b) =>
        Number(b.price) - Number(a.price)
    )
    .slice(0, limit);
};

/* ======================================================
   FREE SHIPPING COUNT
====================================================== */

export const getFreeShippingCount = (
  products = []
) => {
  return products.filter(
    (product) => product.freeShipping
  ).length;
};

/* ======================================================
   CONDITION STATS
====================================================== */

export const getConditionStats = (
  products = []
) => {
  const conditions = {};

  products.forEach((product) => {
    const condition =
      product.condition || "Unknown";

    if (!conditions[condition]) {
      conditions[condition] = 0;
    }

    conditions[condition]++;
  });

  return Object.entries(conditions).map(
    ([name, value]) => ({
      name,
      value,
    })
  );
};

/* ======================================================
   SALES BY CATEGORY
====================================================== */

export const getSalesByCategory = (
  products = []
) => {
  const sales = {};

  products.forEach((product) => {
    const category = product.category;

    if (!sales[category]) {
      sales[category] = 0;
    }

    sales[category] += Number(
      product.orders || 0
    );
  });

  return Object.entries(sales)
    .map(([name, value]) => ({
      name,
      value,
    }))
    .sort((a, b) => b.value - a.value);
};

/* ======================================================
   DASHBOARD SUMMARY
====================================================== */

export const getDashboardStats = (
  products = [],
  orders = []
) => {
return {
  totalProducts: getTotalProducts(products),
  totalOrders: getTotalOrders(orders),
  totalRevenue: getTotalRevenue(orders),
    totalStock: getTotalStock(products),
    totalCategories:
      getTotalCategories(products),
    averageRating:
      getAverageRating(products),
    freeShipping:
      getFreeShippingCount(products),
  };
};
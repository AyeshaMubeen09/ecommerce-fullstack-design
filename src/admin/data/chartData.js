/*
==========================================================
Chart Data Helpers
----------------------------------------------------------
These functions prepare data for Recharts.
The chart components only render UI.
==========================================================
*/

/* ======================================================
   MONTHLY SALES
====================================================== */

export const getMonthlySalesData = (products = []) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return months.map((month, index) => {
    const revenue = products.reduce((total, product) => {
      const price = Number(product.price || 0);
      const orders = Number(product.orders || 0);

      /*
        Fake monthly distribution.

        Until backend exists we distribute
        sales across months to create
        a realistic analytics graph.
      */

      const multiplier =
        0.45 +
        Math.abs(Math.sin(index + product.id)) *
          0.85;

      return total + price * orders * multiplier;
    }, 0);

    return {
      month,
      revenue: Math.round(revenue),
    };
  });
};

/* ======================================================
   CATEGORY SALES
====================================================== */

export const getCategoryChartData = (
  products = []
) => {
  const categories = {};

  products.forEach((product) => {
    const category = product.category;

    if (!categories[category]) {
      categories[category] = 0;
    }

    categories[category] += Number(
      product.orders || 0
    );
  });

  return Object.entries(categories).map(
    ([name, value]) => ({
      name,
      value,
    })
  );
};

/* ======================================================
   BRAND CHART
====================================================== */

export const getBrandChartData = (
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
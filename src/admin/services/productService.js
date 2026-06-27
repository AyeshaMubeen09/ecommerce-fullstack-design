import axios from "axios";

const API_URL =
  "http://ecommerce-fullstack-design-production-a246.up.railway.app";

/* =========================
   GET ALL PRODUCTS
========================= */
export const getProducts = async () => {
  const { data } = await axios.get(
    API_URL
  );

  return data;
};

/* =========================
   GET SINGLE PRODUCT
========================= */
export const getProductById = async (
  id
) => {
  const { data } = await axios.get(
    `${API_URL}/${id}`
  );

  return data;
};

/* =========================
   CREATE PRODUCT
========================= */
export const createProduct = async (
  productData
) => {
  const { data } = await axios.post(
    API_URL,
    productData
  );

  return data;
};

/* =========================
   UPDATE PRODUCT
========================= */
export const updateProduct = async (
  id,
  productData
) => {
  const { data } = await axios.put(
    `${API_URL}/${id}`,
    productData
  );

  return data;
};

/* =========================
   DELETE PRODUCT
========================= */
export const deleteProduct = async (
  id
) => {
  const { data } = await axios.delete(
    `${API_URL}/${id}`
  );

  return data;
};

/* =========================
   EXPORT PRODUCTS
========================= */
export const exportProducts =
  async () => {
    const response =
      await axios.get(
        `${API_URL}/export`,
        {
          responseType: "blob",
        }
      );

    return response.data;
  };
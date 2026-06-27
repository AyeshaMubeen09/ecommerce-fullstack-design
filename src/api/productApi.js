import axios from "axios";

const API_URL =
"https://ecommerce-fullstack-design-production-a246.up.railway.app/api/products";

export const getProducts = async () => {
  const { data } = await axios.get(API_URL);
  return data;
};

export const getProductById = async (id) => {
  const { data } = await axios.get(`${API_URL}/${id}`);
  return data;
};

export const getRelatedProducts = async (category) => {
  const { data } = await axios.get(
    `${API_URL}?category=${encodeURIComponent(category)}`
  );
  return data;
};

export const createProduct = async (productData) => {
  const { data } = await axios.post(API_URL, productData);
  return data;
};

export const updateProduct = async (id, productData) => {
  const { data } = await axios.put(
    `${API_URL}/${id}`,
    productData
  );

  return data;
};

export const deleteProduct = async (id) => {
  const { data } = await axios.delete(`${API_URL}/${id}`);
  return data;
};
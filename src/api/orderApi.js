import axios from "axios";

const API =
  "http://localhost:5000/api/orders";

const getAuthConfig = () => {
  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  );

  return {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
};

/* =========================
    GET MY ORDERS
========================= */

export const getMyOrders = async () => {
  const { data } = await axios.get(
    `${API}/myorders`,
    getAuthConfig()
  );

  return data;
};

/* =========================
    GET ALL ORDERS (ADMIN)
========================= */

export const getAllOrders = async () => {
  const { data } = await axios.get(
    API,
    getAuthConfig()
  );

  return data;
};

/* =========================
    CREATE ORDER
========================= */

export const createOrder = async (
  orderData
) => {
  const { data } = await axios.post(
    API,
    orderData,
    getAuthConfig()
  );

  return data;
};
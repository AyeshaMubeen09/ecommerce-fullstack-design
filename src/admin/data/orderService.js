import axios from "axios";

const API = "http://ecommerce-fullstack-design-production-a246.up.railway.app";

/* =========================
    AUTH CONFIG
========================= */

const getAuthConfig = () => {
  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  );

  if (!userInfo?.token) {
    throw new Error("User is not authenticated");
  }

  return {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
};
/* =========================
    GET ALL ORDERS
========================= */

export const getOrders = async () => {
  const { data } = await axios.get(
    API,
    getAuthConfig()
  );

  return data;
};

/* =========================
    GET ORDER BY ID
========================= */

export const getOrderById = async (id) => {
  const { data } = await axios.get(
    `${API}/${id}`,
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

/* =========================
    UPDATE ORDER STATUS
========================= */

export const updateOrderStatus = async (
  orderId,
  status
) => {
  const { data } = await axios.patch(
    `${API}/${orderId}/status`,
    {
      status,
    },
    getAuthConfig()
  );

  return data;
};

/* =========================
    DELETE ORDER
========================= */

export const deleteOrder = async (
  orderId
) => {
  const { data } = await axios.delete(
    `${API}/${orderId}`,
    getAuthConfig()
  );

  return data;
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
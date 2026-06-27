import axios from "axios";

const API_URL =
  "https://ecommerce-fullstack-design-production-a246.up.railway.app/api/users";

/* =========================
   REGISTER
========================= */

export const registerUser = async (
  userData
) => {
  const { data } = await axios.post(
    `${API_URL}/register`,
    userData
  );

  return data;
};

/* =========================
   LOGIN
========================= */

export const loginUser = async (
  userData
) => {
  const { data } = await axios.post(
    `${API_URL}/login`,
    userData
  );

  return data;
};
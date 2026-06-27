import axios from "axios";

const API_URL =
  "https://ecommerce-fullstack-design-production-a246.up.railway.app";

// =========================
// Register
// =========================

export const registerUser = async (
  userData
) => {
  const { data } =
    await axios.post(
      `${API_URL}/register`,
      userData
    );

  return data;
};

// =========================
// Login
// =========================

export const loginUser = async (
  userData
) => {
  const { data } =
    await axios.post(
      `${API_URL}/login`,
      userData
    );

  return data;
};
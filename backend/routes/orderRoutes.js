const express = require("express");

const {
  createOrder,
  getMyOrders,
  getAllOrders,
  getOrderById,
  updateOrderStatus,
  deleteOrder,
} = require("../controllers/orderController");

const {
  protect,
  admin,
} = require("../middleware/authMiddleware");

const router = express.Router();

/* ======================================
   CUSTOMER ROUTES
====================================== */

// Create a new order
router.post(
  "/",
  protect,
  createOrder
);

// Logged in user's orders
router.get(
  "/myorders",
  protect,
  getMyOrders
);

/* ======================================
   ADMIN ROUTES
====================================== */

// Get all orders
router.get(
  "/",
  protect,
  admin,
  getAllOrders
);

// Get single order
router.get(
  "/:id",
  protect,
  admin,
  getOrderById
);

// Update order status
router.patch(
  "/:id/status",
  protect,
  admin,
  updateOrderStatus
);

// Delete order
router.delete(
  "/:id",
  protect,
  admin,
  deleteOrder
);

module.exports = router;
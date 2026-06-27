const Order = require("../models/Order");

/* ======================================
   Create Order
   POST /api/orders
====================================== */

const createOrder = async (req, res) => {
  try {
    const {
      items,
      shippingAddress,
      paymentMethod,
      subtotal,
      shippingPrice,
      taxPrice,
      totalPrice,
    } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({
        message: "No order items",
      });
    }

    const order = await Order.create({
      user: req.user._id,
      items,
      shippingAddress,
      paymentMethod,
      subtotal,
      shippingPrice,
      taxPrice,
      totalPrice,
    });

    const populatedOrder = await Order.findById(order._id)
      .populate("user", "name email")
      .populate("items.product", "name image brand price");

    res.status(201).json(populatedOrder);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/* ======================================
   Get Logged In User Orders
   GET /api/orders/myorders
====================================== */

const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.user._id,
    })
      .populate("user", "name email")
      .populate(
        "items.product",
        "name image brand price"
      )
      .sort({
        createdAt: -1,
      });

    const formattedOrders = orders.map(
      (order) => ({
        ...order.toObject(),

        orderNumber:
          "#" +
          order._id
            .toString()
            .slice(-8)
            .toUpperCase(),

        customer:
          order.user?.name || "Unknown",

        email:
          order.user?.email || "",

        payment:
          order.paymentMethod,

        total:
          order.totalPrice,

        itemCount:
          order.items.length,
      })
    );

    res.json(formattedOrders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/* ======================================
   Get All Orders (Admin)
   GET /api/orders
====================================== */

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate("user", "name email")
      .populate(
        "items.product",
        "name image brand price"
      )
      .sort({
        createdAt: -1,
      });

    const formattedOrders = orders.map(
      (order) => ({
        ...order.toObject(),

        id: order._id.toString(),

        orderNumber:
          "#" +
          order._id
            .toString()
            .slice(-8)
            .toUpperCase(),

        customer:
          order.user?.name || "Unknown",

        email:
          order.user?.email || "",

        phone:
          order.shippingAddress?.phone ||
          "",

        payment:
          order.paymentMethod,

        total:
          order.totalPrice,

        itemCount:
          order.items.length,

        products: order.items.map(
          (item) => ({
            _id:
              item.product?._id,
            id:
              item.product?._id,
            name:
              item.product?.name,
            image:
              item.product?.image,
            brand:
              item.product?.brand,
            quantity: item.qty,
            qty: item.qty,
            price: item.price,
          })
        ),
      })
    );

    res.json(formattedOrders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/* ======================================
   Get Order By ID
   GET /api/orders/:id
====================================== */

const getOrderById = async (req, res) => {
  try {
    const order =
      await Order.findById(req.params.id)
        .populate(
          "user",
          "name email"
        )
        .populate(
          "items.product",
          "name image brand price"
        );

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    const formattedOrder = {
      ...order.toObject(),

      id: order._id.toString(),

      orderNumber:
        "#" +
        order._id
          .toString()
          .slice(-8)
          .toUpperCase(),

      customer:
        order.user?.name || "Unknown",

      email:
        order.user?.email || "",

      payment:
        order.paymentMethod,

      total:
        order.totalPrice,

      itemCount:
        order.items.length,

      products: order.items.map(
        (item) => ({
          _id:
            item.product?._id,
          id:
            item.product?._id,
          name:
            item.product?.name,
          image:
            item.product?.image,
          brand:
            item.product?.brand,
          quantity: item.qty,
          qty: item.qty,
          price: item.price,
        })
      ),
    };

    res.json(formattedOrder);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/* ======================================
   Update Order Status
   PATCH /api/orders/:id/status
====================================== */

const updateOrderStatus = async (
  req,
  res
) => {
  try {
    const { status } = req.body;

    const order =
      await Order.findById(
        req.params.id
      );

    if (!order) {
      return res.status(404).json({
        message:
          "Order not found",
      });
    }

    order.status = status;

    if (
      status === "Delivered"
    ) {
      order.deliveredAt =
        new Date();
    }

    await order.save();

    const updatedOrder =
      await Order.findById(
        order._id
      )
        .populate(
          "user",
          "name email"
        )
        .populate(
          "items.product",
          "name image brand price"
        );

    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({
      message:
        error.message,
    });
  }
};

/* ======================================
   Delete Order
   DELETE /api/orders/:id
====================================== */

const deleteOrder = async (
  req,
  res
) => {
  try {
    const order =
      await Order.findById(
        req.params.id
      );

    if (!order) {
      return res.status(404).json({
        message:
          "Order not found",
      });
    }

    await order.deleteOne();

    res.json({
      message:
        "Order deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message:
        error.message,
    });
  }
};

module.exports = {
  createOrder,
  getMyOrders,
  getAllOrders,
  getOrderById,
  updateOrderStatus,
  deleteOrder,
};
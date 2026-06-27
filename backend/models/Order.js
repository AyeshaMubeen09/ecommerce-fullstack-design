const mongoose = require("mongoose");

/* =========================
    ORDER ITEM SCHEMA
========================= */

const orderItemSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },

    price: {
      type: Number,
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  {
    _id: false,
  }
);

/* =========================
    SHIPPING ADDRESS
========================= */

const shippingAddressSchema =
  new mongoose.Schema(
    {
      fullName: {
        type: String,
        default: "Customer",
      },

      address: {
        type: String,
        default:
          "123 Main Street",
      },

      city: {
        type: String,
        default: "Islamabad",
      },

      postalCode: {
        type: String,
        default: "44000",
      },

      country: {
        type: String,
        default: "Pakistan",
      },

      phone: {
        type: String,
        default: "+92 300 0000000",
      },
    },
    {
      _id: false,
    }
  );

/* =========================
    ORDER SCHEMA
========================= */

const orderSchema =
  new mongoose.Schema(
    {
      user: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      items: {
        type: [orderItemSchema],
        required: true,
      },

      shippingAddress: {
        type:
          shippingAddressSchema,
      },

      paymentMethod: {
        type: String,
        default:
          "Cash on Delivery",
      },

      subtotal: {
        type: Number,
        required: true,
      },

      shippingPrice: {
        type: Number,
        default: 0,
      },

      taxPrice: {
        type: Number,
        default: 0,
      },

      totalPrice: {
        type: Number,
        required: true,
      },

      status: {
        type: String,
        enum: [
          "Pending",
          "Processing",
          "Packed",
          "Shipped",
          "Delivered",
          "Cancelled",
        ],
        default: "Pending",
      },

      isPaid: {
        type: Boolean,
        default: false,
      },

      paidAt: {
        type: Date,
      },

      deliveredAt: {
        type: Date,
      },
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "Order",
    orderSchema
  );
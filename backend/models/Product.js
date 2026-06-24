const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    // Frontend Product ID
    id: {
  type: Number,
},

    name: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
    },

    originalPrice: {
      type: Number,
      default: 0,
    },

    image: {
      type: String,
      required: true,
    },

    // Optional different image for list view
    listImage: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    stock: {
      type: Number,
      default: 0,
    },

    discount: {
      type: String,
      default: "0%",
    },

    rating: {
      type: Number,
      default: 0,
    },

    orders: {
      type: Number,
      default: 0,
    },

    freeShipping: {
      type: Boolean,
      default: false,
    },

    brand: {
      type: String,
      default: "",
    },

    color: {
      type: String,
      default: "",
    },

    pageType: {
      type: String,
      default: "",
    },

    // Added condition field
    condition: {
      type: String,
      default: "",
      trim: true,
    },

    // Added features field
    features: {
      type: [String],
      default: [],
    },

    // Optional display stars
    ratingStars: {
      type: String,
      default: "★★★★☆",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
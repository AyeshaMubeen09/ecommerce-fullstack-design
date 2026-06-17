import shirt from "../assets/recommended/item1.jpg";
import bag from "../assets/recommended/item5.jpg";
import lamp from "../assets/home/sofa.jpg";

const cartItems = [
  {
    id: 1,
    title: "Classic Cotton Polo Shirt",
    seller: "Fashion Hub Store",
    price: 78.99,
    qty: 9,
    details: "Size: Medium, Color: Blue, Material: Cotton",
    image: shirt,
  },
  {
    id: 2,
    title: "Waterproof Travel Backpack",
    seller: "Outdoor Gear Co.",
    price: 39.0,
    qty: 3,
    details: "Capacity: 25L, Color: Blue, Material: Polyester",
    image: bag,
  },
  {
    id: 3,
    title: "Modern Decorative Table Lamp",
    seller: "Home Living Store",
    price: 170.5,
    qty: 1,
    details: "Color: Beige, Material: Ceramic & Fabric",
    image: lamp,
  },
];

export default cartItems;
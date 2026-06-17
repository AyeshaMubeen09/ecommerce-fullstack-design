import phone from "../assets/electronics/drone.jpg";
import laptop from "../assets/electronics/blue.jpg";
import camera from "../assets/deals/phone.jpg";
import watch from "../assets/deals/camera.jpg";
import speaker from "../assets/electronics/camera.jpg";
import headphone from "../assets/electronics/watch.jpg";
import tablet from "../assets/electronics/speaker.jpg";
import tab from "../assets/electronics/tablet.jpg";


const products = [
  {
    id: 1,
    name: "Apple iPhone 12 Pro Max",
    price: 998,
    image: phone,
  },
  {
    id: 2,
    name: "Apple iPhone 12",
    price: 799,
    image: laptop,
    listImage: camera, 
  },
  {
    id: 3,
    name: "Xiaomi Mi 9 Lite",
    price: 349,
    image: camera,
    listImage: tablet, 
  },
  {
    id: 4,
    name: "Xiaomi Pad 5 Tablet",
    price: 499,
    image: tablet,
    listImage: tab, 
  },
  {
    id: 5,
    name: "Canon EOS 2000D DSLR Camera",
    price: 1899,
    image: watch,
    listImage: headphone, 
  },
  {
    id: 6,
    name: "Apple iPhone 12",
    price: 799,
    image: laptop,
    listImage: speaker, 
  },
  {
    id: 7,
    name: "MacBook Pro 16-inch",
    price: 1348,
    image: tab,
  },
  {
    id: 8,
    name: "Apple Watch Series 8 GPS",
    price: 499,
    image: headphone,
  },
  {
    id: 9,
    name: "Apple iPhone 12 Pro Max",
    price: 998,
    image: phone,
  },
];

export default products;
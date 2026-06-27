// Smartphones
import iphone from "../assets/Final assets/iphone.jpg";
import phone from "../assets/Final assets/phone.jpg";
import samsung from "../assets/Final assets/samsung.jpg";
import galaxy from "../assets/Final assets/galaxy.jpg";
import google from "../assets/Final assets/google.jpg";
import blue from "../assets/Final assets/blue.jpg";

// Tablets
import tab from "../assets/Final assets/tab.jpg";
import tab1 from "../assets/Final assets/tab1.jpg";

// Laptops
import laptop from "../assets/Final assets/laptop.jpg";
import dell from "../assets/Final assets/dell.jpg";

// Audio
import headphone from "../assets/Final assets/headphone.jpg";
import airpods from "../assets/Final assets/airpods.jpg";
import boss from "../assets/Final assets/boss.jpg";

// Camera
import camera from "../assets/Final assets/camera.jpg";
import sony from "../assets/Final assets/sony.jpg";

// Watches
import watch from "../assets/Final assets/watch.jpg";

// TV
import led from "../assets/Final assets/led.jpg";

// Smart Devices
import amazon from "../assets/Final assets/amazon.jpg";

// Home Products
import blender from "../assets/Final assets/blender.jpg";
import chair from "../assets/Final assets/chair.jpg";
import coffee from "../assets/Final assets/coffee.jpg";
import kettle from "../assets/Final assets/kettle.jpg";
import lamp from "../assets/Final assets/lamp.jpg";
import plant from "../assets/Final assets/plant.jpg";
import pot from "../assets/Final assets/pot.jpg";
import speaker from "../assets/Final assets/speaker.jpg";
import wallet from "../assets/Final assets/wallet.jpg";

import iphone17 from "../assets/Final assets/iphone17.jpg";
import iphone15 from "../assets/Final assets/iphone15.jpg";
import phone9 from "../assets/Final assets/phone9.jpg";
import tab5 from "../assets/Final assets/tab5.jpg";
import macbook from "../assets/Final assets/macbook.jpg";
import xps from "../assets/Final assets/xps.jpg";
import ultra from "../assets/Final assets/ultra.jpg";
import headset from "../assets/Final assets/headset.jpg";

import item1 from "../assets/Final assets/item1.jpg";
import item2 from "../assets/Final assets/item2.jpg";
import item3 from "../assets/Final assets/item3.jpg";
import item4 from "../assets/Final assets/item4.jpg";
import item5 from "../assets/Final assets/item5.jpg";
import item6 from "../assets/Final assets/item6.jpg";
import item7 from "../assets/Final assets/item7.jpg";
import item8 from "../assets/Final assets/item8.jpg";
import item9 from "../assets/Final assets/item9.jpg";
import item10 from "../assets/Final assets/item10.jpg";


const productImages = {
  "iphone.jpg": iphone,
  "phone.jpg": phone,
  "samsung.jpg": samsung,
  "galaxy.jpg": galaxy,
  "google.jpg": google,
  "blue.jpg": blue,

  "tab.jpg": tab,
  "tab1.jpg": tab1,

  "laptop.jpg": laptop,
  "dell.jpg": dell,

  "headphone.jpg": headphone,
  "airpods.jpg": airpods,
  "boss.jpg": boss,

  "camera.jpg": camera,
  "sony.jpg": sony,

  "watch.jpg": watch,

  "led.jpg": led,

  "amazon.jpg": amazon,

  "blender.jpg": blender,
  "chair.jpg": chair,
  "coffee.jpg": coffee,
  "kettle.jpg": kettle,
  "lamp.jpg": lamp,
  "plant.jpg": plant,
  "pot.jpg": pot,
  "speaker.jpg": speaker,
  "wallet.jpg": wallet,

"iphone17.jpg": iphone17,
"iphone15.jpg": iphone15,
"phone9.jpg": phone9,
"tab5.jpg": tab5,
"macbook.jpg": macbook,
"xps.jpg": xps,
"ultra.jpg": ultra,
"headset.jpg": headset,

"item1.jpg": item1,
"item2.jpg": item2,
"item3.jpg": item3,
"item4.jpg": item4,
"item5.jpg": item5,
"item6.jpg": item6,
"item7.jpg": item7,
"item8.jpg": item8,
"item9.jpg": item9,
"item10.jpg": item10,
};

export const getProductImage = (image) => {
  return productImages[image] || image;
};

export default productImages;
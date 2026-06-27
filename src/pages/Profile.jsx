import {
  useNavigate,
  Link,
} from "react-router-dom";

import { useState, useEffect } from "react";
import { getMyOrders } from "../api/orderApi";
import AuthLayout from "../components/layout/AuthLayout";
import loginBanner from "../assets/auth/loginBanner.jpg";

import {
  ArrowLeft,
  LogOut,
  User,
  ShoppingBag,
  Heart,
  MapPin,
  Settings,
  ShoppingCart,
  Tag,
  Package,
  CreditCard,
  ShieldCheck,
} from "lucide-react";


function Profile() {
  const navigate = useNavigate();

  /* =========================
   BACK BUTTON
========================= */

const handleBack = () => {
  if (window.history.length > 1) {
    navigate(-1);
  } else {
    navigate("/");
  }
};

/* =========================
    USER DATA
========================= */

const [orders, setOrders] = useState([]);

useEffect(() => {
  const fetchOrders = async () => {
    try {
      const data = await getMyOrders();
      setOrders(data);
    } catch (error) {
      console.error("Failed to load orders:", error);
      setOrders([]);
    }
  };

  fetchOrders();
}, []);

const [wishlistItems, setWishlistItems] = useState(() => {
  try {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  } catch {
    return [];
  }
});

  // Get logged-in user data from localStorage
  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  );

  const cartItems =
  JSON.parse(
    localStorage.getItem("cart")
  ) || [];

  const [isEditingName, setIsEditingName] =
  useState(false);

const [isEditingEmail, setIsEditingEmail] =
  useState(false);

const [editedName, setEditedName] =
  useState(userInfo?.name || "");

const [editedEmail, setEditedEmail] =
  useState(userInfo?.email || "");
  

  // Handle logout
const logoutHandler = () => {
  localStorage.removeItem("userInfo");

  navigate("/login", {
    state: {
      success:
        "Logged out successfully.",
    },
  });
};

const saveName = () => {
  const updatedUser = {
    ...userInfo,
    name: editedName,
  };

  localStorage.setItem(
    "userInfo",
    JSON.stringify(updatedUser)
  );

  setIsEditingName(false);

  window.location.reload();
};

const saveEmail = () => {
  const updatedUser = {
    ...userInfo,
    email: editedEmail,
  };

  localStorage.setItem(
    "userInfo",
    JSON.stringify(updatedUser)
  );

  setIsEditingEmail(false);

  window.location.reload();
};

 return (
  <>
    
{/* =====================================
      MOBILE PROFILE
===================================== */}

<div className="lg:hidden min-h-screen bg-[#F7FAFC]">

  {/* Header */}

<div className="lg:hidden sticky top-0 z-50 bg-white border-b border-[#DEE2E7]">
  <div className="h-[56px] px-4 flex items-center justify-between">

    {/* Left */}
    <div className="flex items-center gap-3">
      <button
        onClick={() => {
          if (window.history.length > 1) {
            navigate(-1);
          } else {
            navigate("/");
          }
        }}
      >
        <ArrowLeft size={22} />
      </button>

      <h1 className="font-semibold text-[18px]">
        My Profile
      </h1>
    </div>

    {/* Right */}
    <div className="flex items-center gap-4">
      <Link to="/wishlist">
        <Heart
          size={22}
          className="text-[#0D6EFD]"
        />
      </Link>

      <Link to="/cart">
        <ShoppingCart
          size={22}
          className="text-[#0D6EFD]"
        />
      </Link>
    </div>

  </div>
</div>

  {/* Profile Card */}

  <div className="px-4 pt-5">

    <div
      className="
        bg-white
        rounded-2xl
        border
        border-[#DEE2E7]
        p-6
      "
    >

      <div className="flex flex-col items-center">

        <div
          className="
            w-24
            h-24
            rounded-full
            bg-[#0D6EFD]
            flex
            items-center
            justify-center
            text-white
            text-4xl
            font-bold
          "
        >
          {userInfo?.name?.charAt(0)?.toUpperCase() || "U"}
        </div>

        <h2 className="mt-4 text-[24px] font-bold">

          {userInfo?.name || "Guest"}

        </h2>

        <p className="text-[#8B96A5] mt-1">

          {userInfo?.email}

        </p>

<div className="grid grid-cols-3 gap-3 mt-5 w-full">

  <div className="text-center">
    <h3 className="font-bold text-[#0D6EFD]">
      {cartItems.length}
    </h3>
    <p className="text-xs text-[#8B96A5]">
      Cart
    </p>
  </div>

  <div className="text-center">
    <h3 className="font-bold text-pink-500">
      {wishlistItems.length}
    </h3>
    <p className="text-xs text-[#8B96A5]">
      Wishlist
    </p>
  </div>

  <div className="text-center">
    <h3 className="font-bold text-green-600">
      Active
    </h3>
    <p className="text-xs text-[#8B96A5]">
      Status
    </p>
  </div>

</div>

      </div>

    </div>

  </div>

  {/* =====================================
    QUICK ACTIONS
===================================== */}

<div className="px-4 mt-5">

  <div className="grid grid-cols-2 gap-4">

{/* Orders */}

<Link
  to="/orders"
  className="
    bg-white
    rounded-2xl
    border
    border-[#DEE2E7]
    p-5
    block
    transition
    hover:shadow-md
  "
>
  <div
    className="
      w-12
      h-12
      rounded-full
      bg-[#EAF2FF]
      flex
      items-center
      justify-center
    "
  >
    <ShoppingBag
      size={22}
      className="text-[#0D6EFD]"
    />
  </div>

  <h3 className="mt-4 font-semibold">
    Orders
  </h3>

  <p className="text-sm text-[#8B96A5] mt-1">
    Track purchases
  </p>
</Link>

    {/* Wishlist */}

    <Link
      to="/Wishlist"
      className="
        bg-white
        rounded-2xl
        border
        border-[#DEE2E7]
        p-5
        block
      "
    >
      <div
        className="
          w-12
          h-12
          rounded-full
          bg-[#FFF1F5]
          flex
          items-center
          justify-center
        "
      >
        <Heart
          size={22}
          className="text-pink-500"
        />
      </div>

      <h3 className="mt-4 font-semibold">
        Wishlist
      </h3>

      <p className="text-sm text-[#8B96A5] mt-1">
        Saved items
      </p>
    </Link>

    {/* Cart */}

    <Link
      to="/cart"
      className="
        bg-white
        rounded-2xl
        border
        border-[#DEE2E7]
        p-5
        block
      "
    >
      <div
        className="
          w-12
          h-12
          rounded-full
          bg-[#EAFBF0]
          flex
          items-center
          justify-center
        "
      >
        <ShoppingCart
          size={22}
          className="text-green-600"
        />
      </div>

      <h3 className="mt-4 font-semibold">
        My Cart
      </h3>

      <p className="text-sm text-[#8B96A5] mt-1">
        {cartItems.length} item(s)
      </p>
    </Link>

    {/* Settings */}

    <div
      className="
        bg-white
        rounded-2xl
        border
        border-[#DEE2E7]
        p-5
      "
    >
      <div
        className="
          w-12
          h-12
          rounded-full
          bg-[#F4ECFF]
          flex
          items-center
          justify-center
        "
      >
        <Settings
          size={22}
          className="text-purple-600"
        />
      </div>

      <h3 className="mt-4 font-semibold">
        Settings
      </h3>

      <p className="text-sm text-[#8B96A5] mt-1">
        Manage account
      </p>
    </div>

  </div>

</div>

{/* =====================================
      ACCOUNT OVERVIEW
===================================== */}

<div className="px-4 mt-5">

  <div
    className="
      bg-white
      rounded-2xl
      border
      border-[#DEE2E7]
      p-5
    "
  >

    <h2 className="text-lg font-semibold mb-5">
      Account Overview
    </h2>

    <div className="grid grid-cols-2 gap-4">

      <div className="rounded-xl bg-[#F8FAFC] p-4 text-center">
        <ShoppingBag
          className="mx-auto text-[#0D6EFD]"
          size={22}
        />

        <p className="mt-2 text-sm text-[#8B96A5]">
          Orders
        </p>

        <h3 className="text-xl font-bold mt-1">
  {orders.length}
</h3>
      </div>

      <div className="rounded-xl bg-[#F8FAFC] p-4 text-center">
        <ShoppingCart
          className="mx-auto text-green-600"
          size={22}
        />

        <p className="mt-2 text-sm text-[#8B96A5]">
          Cart
        </p>

        <h3 className="text-xl font-bold mt-1">
          {cartItems.length}
        </h3>
      </div>

      <div className="rounded-xl bg-[#F8FAFC] p-4 text-center">
        <Heart
          className="mx-auto text-pink-500"
          size={22}
        />

        <p className="mt-2 text-sm text-[#8B96A5]">
          Wishlist
        </p>

        <h3 className="text-xl font-bold mt-1">
          {wishlistItems.length}
        </h3>
      </div>

      <div className="rounded-xl bg-[#F8FAFC] p-4 text-center">
        <Tag
          className="mx-auto text-purple-600"
          size={22}
        />

        <p className="mt-2 text-sm text-[#8B96A5]">
          Reviews
        </p>

        <h3 className="text-xl font-bold mt-1">
          4
        </h3>
      </div>

    </div>

  </div>

</div>
{userInfo?.isAdmin && (

<div className="px-4 mt-5">

  <Link
    to="/admin"
    className="
      bg-white
      border
      border-[#DEE2E7]
      rounded-2xl
      p-5
      flex
      items-center
      gap-4
    "
  >

    <div
      className="
        w-12
        h-12
        rounded-full
        bg-[#EAF2FF]
        flex
        items-center
        justify-center
      "
    >
      <ShieldCheck
        size={22}
        className="text-[#0D6EFD]"
      />
    </div>

    <div>

      <h3 className="font-semibold">
        Admin Dashboard
      </h3>

      <p className="text-sm text-[#8B96A5]">
        Manage products & orders
      </p>

    </div>

  </Link>

</div>

)}
{/* =====================================
      PERSONAL INFORMATION
===================================== */}

<div className="px-4 mt-5">

  <div
    className="
      bg-white
      rounded-2xl
      border
      border-[#DEE2E7]
      p-5
    "
  >

    <h2 className="text-lg font-semibold mb-5">
      Personal Information
    </h2>

    {/* Name */}

    <div className="mb-5">

      <p className="text-sm text-[#8B96A5]">
        Full Name
      </p>

      {isEditingName ? (

        <div className="mt-3">

          <input
            type="text"
            value={editedName}
            onChange={(e) =>
              setEditedName(e.target.value)
            }
            className="
              w-full
              h-[46px]
              border
              border-[#DEE2E7]
              rounded-lg
              px-4
            "
          />

          <button
            onClick={saveName}
            className="
              mt-3
              w-full
              h-[44px]
              bg-[#0D6EFD]
              text-white
              rounded-lg
            "
          >
            Save Name
          </button>

        </div>

      ) : (

        <div className="flex justify-between items-center mt-2">

          <span className="font-medium">
            {userInfo?.name}
          </span>

          <button
            onClick={() =>
              setIsEditingName(true)
            }
            className="text-[#0D6EFD]"
          >
            Edit
          </button>

        </div>

      )}

    </div>

    <hr />

    {/* Email */}

    <div className="mt-5">

      <p className="text-sm text-[#8B96A5]">
        Email Address
      </p>

      {isEditingEmail ? (

        <div className="mt-3">

          <input
            type="email"
            value={editedEmail}
            onChange={(e) =>
              setEditedEmail(e.target.value)
            }
            className="
              w-full
              h-[46px]
              border
              border-[#DEE2E7]
              rounded-lg
              px-4
            "
          />

          <button
            onClick={saveEmail}
            className="
              mt-3
              w-full
              h-[44px]
              bg-[#0D6EFD]
              text-white
              rounded-lg
            "
          >
            Save Email
          </button>

        </div>

      ) : (

        <div className="flex justify-between items-center mt-2">

          <span className="font-medium break-all">
            {userInfo?.email}
          </span>

          <button
            onClick={() =>
              setIsEditingEmail(true)
            }
            className="text-[#0D6EFD]"
          >
            Edit
          </button>

        </div>

      )}

    </div>

  </div>

</div>

{/* =====================================
      MEMBERSHIP
===================================== */}

<div className="px-4 mt-5">

  <div
    className="
      bg-white
      rounded-2xl
      border
      border-[#DEE2E7]
      p-5
    "
  >

    <h2 className="font-semibold">
      Membership
    </h2>

    <div className="mt-5 space-y-4">

      <div className="flex justify-between">

        <span className="text-[#8B96A5]">
          Status
        </span>

        <span className="text-green-600 font-medium">
          Active
        </span>

      </div>

      <div className="flex justify-between">

        <span className="text-[#8B96A5]">
          Member Since
        </span>

        <span>
          June 2026
        </span>

      </div>

    </div>

  </div>

</div>
{/* =====================================
      LOGOUT
===================================== */}

<div className="px-4 py-6">

  <button
    onClick={logoutHandler}
    className="
      w-full
      h-[50px]
      rounded-xl
      border
      border-red-200
      text-[#FA3434]
      font-medium
      flex
      items-center
      justify-center
      gap-2
      bg-white
    "
  >

    <LogOut size={18} />

    Logout

  </button>

</div>

</div>

<div className="hidden lg:block">
  <AuthLayout page="profile">

    <section className="max-w-7xl mx-auto px-4 py-6">

  <div
    className="
      bg-[#F7FAFC]
      border
      border-[#DEE2E7]
      rounded-[36px]
      p-8
      shadow-sm
    "
  >

    <div className="grid lg:grid-cols-[290px_1fr] gap-6">

    {/* =========================
        LEFT SIDEBAR
    ========================= */}
    <div
      className="
        bg-white
        border
        border-[#DEE2E7]
        rounded-[36px]
        p-6
        flex
        flex-col
      "
    >

      {/* Avatar */}
      <div className="flex flex-col items-center">

        <div
          className="
            w-28
            h-28
            rounded-full
            bg-[#0D6EFD]
            flex
            items-center
            justify-center
            text-white
            text-4xl
            font-bold
          "
        >
          {userInfo?.name?.charAt(0)?.toUpperCase() || "U"}
        </div>

        <h2 className="mt-5 text-[32px] font-bold text-center">
          {userInfo?.name || "Guest User"}
        </h2>

        <p className="text-[#8B96A5] text-sm mt-2">
          Premium Member
        </p>

      </div>

      {/* Menu */}
      <div className="mt-8 space-y-2">

        <button className="w-full h-[52px] bg-[#EFF6FF] rounded-xl flex items-center gap-3 px-4 text-[#0D6EFD] font-medium">
          <User size={18} />
          My Profile
        </button>

       <Link
  to="/orders"
  className="
    w-full
    h-[52px]
    rounded-xl
    flex
    items-center
    gap-3
    px-4
    hover:bg-[#F8FAFC]
    transition
  "
>
  <ShoppingBag size={18} />
  My Orders
</Link>

        <Link
  to="/cart#saved"
  className="
    w-full
    h-[52px]
    rounded-xl
    flex
    items-center
    gap-3
    px-4
    hover:bg-[#F8FAFC]
    transition
  "
>
  <Heart size={18} />
  Wishlist
</Link>

        <button className="w-full h-[52px] rounded-xl flex items-center gap-3 px-4 hover:bg-[#F8FAFC]">
          <MapPin size={18} />
          My Addresses
        </button>

        <button className="w-full h-[52px] rounded-xl flex items-center gap-3 px-4 hover:bg-[#F8FAFC]">
          <CreditCard size={18} />
          Payment Methods
        </button>

        <button className="w-full h-[52px] rounded-xl flex items-center gap-3 px-4 hover:bg-[#F8FAFC]">
          <Settings size={18} />
          Account Settings
        </button>

      </div>


      {/* Logout */}
      <button
        onClick={logoutHandler}
        className="
          mt-auto
          h-[52px]
          border
          border-red-200
          rounded-xl
          text-[#FA3434]
          font-medium
          flex
          items-center
          justify-center
          gap-2
          hover:bg-red-50
          transition
        "
      >
        <LogOut size={18} />
        Logout
      </button>

    </div>

{/* =========================
    ADMIN DASHBOARD
========================= */}

{userInfo?.isAdmin && (
  <Link
    to="/admin"
    className="
      w-full
      h-[52px]
      rounded-xl
      flex
      items-center
      gap-3
      px-4
      hover:bg-[#F8FAFC]
      transition
    "
  >
    <ShieldCheck size={18} />
    Admin Dashboard
  </Link>
)}

    {/* =========================
        RIGHT CONTENT
    ========================= */}
    <div>

      {/* Welcome Banner */}
      <div
        className="
          rounded-[28px]
          overflow-hidden
          bg-gradient-to-r
          from-[#0D6EFD]
          to-[#2D7CFF]
          p-8
          flex
          items-center
          justify-between
        "
      >

        <div className="text-white">

          <h1 className="text-5xl font-bold">
            Hello, {userInfo?.name || "User"} 👋
          </h1>

          <p className="mt-4 text-lg text-blue-100 max-w-xl">
            Welcome back to your account dashboard.
            Manage your orders, saved items and
            account settings all in one place.
          </p>

        </div>

        <img
          src={loginBanner}
          alt="Banner"
          className="hidden lg:block w-[280px]"
        />

      </div>

 {/* =========================
    QUICK ACTION CARDS
========================= */}
<div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mt-6">

  {/* Orders */}
<Link
  to="/orders"
  className="
    bg-white
    border
    border-[#DEE2E7]
    rounded-2xl
    p-6
    shadow-sm
    hover:shadow-md
    transition
    block
  "
>
    <div
      className="
        w-14
        h-14
        rounded-full
        bg-[#EAF2FF]
        flex
        items-center
        justify-center
      "
    >
      <ShoppingBag
        size={24}
        className="text-[#0D6EFD]"
      />
    </div>

    <h3 className="mt-6 text-xl font-semibold">
      My Orders
    </h3>

    <p className="mt-2 text-[#6B7280]">
      View & track your orders
    </p>

    <div className="mt-6 text-[#0D6EFD] font-medium">
      →
    </div>
    </Link>
  {/* Wishlist */}
<Link
  to="/cart#saved"
  className="
    bg-white
    border
    border-[#DEE2E7]
    rounded-2xl
    p-6
    shadow-sm
    hover:shadow-md
    transition
    cursor-pointer
    block
  "
>
  <div
    className="
      w-14
      h-14
      rounded-full
      bg-[#FFEAF0]
      flex
      items-center
      justify-center
    "
  >
    <Heart
      size={24}
      className="text-[#FF5A7A]"
    />
  </div>

  <h3 className="mt-6 text-xl font-semibold">
    Wishlist
  </h3>

  <p className="mt-2 text-[#6B7280]">
    Your saved favorite items
  </p>

  <div className="mt-6 text-[#0D6EFD] font-medium">
    →
  </div>
</Link>

{/* Cart */}
<Link
  to="/cart"
  className="
    bg-white
    border
    border-[#DEE2E7]
    rounded-2xl
    p-6
    shadow-sm
    hover:shadow-md
    transition
    cursor-pointer
    block
  "
>
  <div
    className="
      w-14
      h-14
      rounded-full
      bg-[#EAFBF0]
      flex
      items-center
      justify-center
    "
  >
    <Package
      size={24}
      className="text-[#34A853]"
    />
  </div>

  <h3 className="mt-6 text-xl font-semibold">
    My Cart
  </h3>

  <p className="mt-2 text-[#6B7280]">
    Review items in your cart
  </p>

  <div className="mt-6 text-[#0D6EFD] font-medium">
    →
  </div>
</Link>

  {/* Settings */}
  <div
    className="
      bg-white
      border
      border-[#DEE2E7]
      rounded-2xl
      p-6
      shadow-sm
      hover:shadow-md
      transition
      cursor-pointer
    "
  >
    <div
      className="
        w-14
        h-14
        rounded-full
        bg-[#F3EAFF]
        flex
        items-center
        justify-center
      "
    >
      <Settings
        size={24}
        className="text-[#7C3AED]"
      />
    </div>

    <h3 className="mt-6 text-xl font-semibold">
      Settings
    </h3>

    <p className="mt-2 text-[#6B7280]">
      Manage your preferences
    </p>

    <div className="mt-6 text-[#0D6EFD] font-medium">
      →
    </div>
  </div>

  {userInfo?.isAdmin && (
  <Link
    to="/admin"
    className="
      bg-white
      border
      border-[#DEE2E7]
      rounded-2xl
      p-6
      shadow-sm
      hover:shadow-md
      transition
      cursor-pointer
      block
    "
  >
    <div
      className="
        w-14
        h-14
        rounded-full
        bg-[#EAF2FF]
        flex
        items-center
        justify-center
      "
    >
      <ShieldCheck
        size={24}
        className="text-[#0D6EFD]"
      />
    </div>

    <h3 className="mt-6 text-xl font-semibold">
      Admin Dashboard
    </h3>

    <p className="mt-2 text-[#6B7280]">
      Manage products, orders and analytics
    </p>

    <div className="mt-6 text-[#0D6EFD] font-medium">
      →
    </div>
  </Link>
)}

</div>

{/* =========================
    INFO SECTION
========================= */}
<div className="grid xl:grid-cols-[1.7fr_1fr] gap-6 mt-6">

  {/* LEFT CARD */}
  <div
    className="
      bg-white
      border
      border-[#DEE2E7]
      rounded-2xl
      p-8
    "
  >
    <h2 className="text-2xl font-semibold mb-8">
      Personal Information
    </h2>

    <div className="space-y-8">

<div className="flex justify-between items-center">

  <div className="flex-1">

    <p className="text-sm text-[#8B96A5]">
      Full Name
    </p>

    {isEditingName ? (
      <input
        type="text"
        value={editedName}
        onChange={(e) =>
          setEditedName(e.target.value)
        }
        className="
          mt-2
          w-full
          border
          border-[#DEE2E7]
          rounded-xl
          px-3
          py-2
        "
      />
    ) : (
      <p className="font-medium mt-1">
        {userInfo?.name}
      </p>
    )}

  </div>

  <button
    onClick={() =>
      isEditingName
        ? saveName()
        : setIsEditingName(true)
    }
    className="
      px-4
      py-2
      rounded-xl
      bg-[#F3F4F6]
      hover:bg-[#E5E7EB]
    "
  >
    {isEditingName
      ? "Save"
      : "Edit"}
  </button>

</div>

<div className="flex justify-between items-center">

  <div className="flex-1">

    <p className="text-sm text-[#8B96A5]">
      Email Address
    </p>

    {isEditingEmail ? (
      <input
        type="email"
        value={editedEmail}
        onChange={(e) =>
          setEditedEmail(e.target.value)
        }
        className="
          mt-2
          w-full
          border
          border-[#DEE2E7]
          rounded-xl
          px-3
          py-2
        "
      />
    ) : (
      <p className="font-medium mt-1">
        {userInfo?.email}
      </p>
    )}

  </div>

  <button
    onClick={() =>
      isEditingEmail
        ? saveEmail()
        : setIsEditingEmail(true)
    }
    className="
      px-4
      py-2
      rounded-xl
      bg-[#F3F4F6]
      hover:bg-[#E5E7EB]
    "
  >
    {isEditingEmail
      ? "Save"
      : "Edit"}
  </button>

</div>

      <div>
        <p className="text-sm text-[#8B96A5]">
          Member Since
        </p>

        <p className="font-medium mt-1">
          June 2026
        </p>
      </div>

      <div>
        <p className="text-sm text-[#8B96A5]">
          Account Status
        </p>

        <span
          className="
            inline-flex
            mt-2
            px-3
            py-1
            rounded-full
            bg-green-100
            text-green-700
            text-sm
          "
        >
          Active
        </span>
      </div>

    </div>
  </div>

  {/* RIGHT CARD */}
  <div
    className="
      bg-white
      border
      border-[#DEE2E7]
      rounded-2xl
      p-8
    "
  >
    <h2 className="text-2xl font-semibold mb-8">
      Account Overview
    </h2>
<div className="space-y-5">

  {/* Total Orders */}
  <div className="flex items-center justify-between">

    <div className="flex items-center gap-4">

      <div
        className="
          w-12
          h-12
          rounded-full
          bg-[#E8F1FF]
          flex
          items-center
          justify-center
        "
      >
        <ShoppingBag
          size={20}
          className="text-[#0D6EFD]"
        />
      </div>

      <div>
        <p className="font-medium">
          Total Orders
        </p>

        <p className="text-sm text-[#8B96A5]">
          All time orders
        </p>
      </div>

    </div>

    <span className="font-bold text-[#0D6EFD] text-lg">
      {orders.length}
    </span>

  </div>

  {/* Cart Items */}
  <div className="flex items-center justify-between">

    <div className="flex items-center gap-4">

      <div
        className="
          w-12
          h-12
          rounded-full
          bg-[#E8F8EC]
          flex
          items-center
          justify-center
        "
      >
        <ShoppingCart
          size={20}
          className="text-green-600"
        />
      </div>

      <div>
        <p className="font-medium">
          Cart Items
        </p>

        <p className="text-sm text-[#8B96A5]">
          Items in your cart
        </p>
      </div>

    </div>

   <span className="font-bold text-green-600 text-lg">
  {cartItems.length}
</span>

  </div>

  {/* Saved Items */}
  <div className="flex items-center justify-between">

    <div className="flex items-center gap-4">

      <div
        className="
          w-12
          h-12
          rounded-full
          bg-[#FFF0F6]
          flex
          items-center
          justify-center
        "
      >
        <Heart
          size={20}
          className="text-pink-500"
        />
      </div>

      <div>
        <p className="font-medium">
          Saved Items
        </p>

        <p className="text-sm text-[#8B96A5]">
          Items in wishlist
        </p>
      </div>

    </div>

    <span className="font-bold text-pink-500 text-lg">
      {wishlistItems.length}
    </span>

  </div>

  {/* Reviews */}
  <div className="flex items-center justify-between">

    <div className="flex items-center gap-4">

      <div
        className="
          w-12
          h-12
          rounded-full
          bg-[#F5EEFF]
          flex
          items-center
          justify-center
        "
      >
        <Tag
          size={20}
          className="text-purple-600"
        />
      </div>

      <div>
        <p className="font-medium">
          Reviews
        </p>

        <p className="text-sm text-[#8B96A5]">
          Product reviews
        </p>
      </div>

    </div>

    <span className="font-bold text-purple-600 text-lg">
      4
    </span>

  </div>

</div>

  </div>

</div>

    </div>
    </div>
    </div>
    </section>

  </AuthLayout>
</div>

</>
);
}

export default Profile;
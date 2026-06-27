import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Profile from "./pages/Profile";
import Wishlist from "./pages/Wishlist";
import AdminDashboard from "./admin/pages/AdminDashboard";
import AdminProducts from "./admin/pages/AdminProducts";
import AdminProtectedRoute from "./admin/components/AdminProtectedRoute";
import AdminAddProduct from "./admin/pages/AdminAddProduct";
import AdminEditProduct from "./admin/pages/AdminEditProduct";
import Orders from "./pages/Orders";
import AdminOrders from "./admin/pages/AdminOrders";

import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <>
      {/* Automatically scrolls to top on route change */}
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
  path="/orders"
  element={<Orders />}
/>

        <Route
  path="/wishlist"
  element={<Wishlist />}
/>

        <Route
           path="/register"
           element={<Register />}
        />

        <Route
           path="/profile"
           element={
        <ProtectedRoute>
        <Profile />
        </ProtectedRoute>
         }
        />

<Route
  path="/admin"
  element={
    <AdminProtectedRoute>
      <AdminDashboard />
    </AdminProtectedRoute>
  }
/>

<Route
  path="/admin/products/create"
  element={
    <AdminProtectedRoute>
      <AdminAddProduct />
    </AdminProtectedRoute>
  }
/>

<Route
  path="/admin/products/edit/:id"
  element={
    <AdminProtectedRoute>
      <AdminEditProduct />
    </AdminProtectedRoute>
  }
/>

<Route
  path="/admin/products"
  element={
    <AdminProtectedRoute>
      <AdminProducts />
    </AdminProtectedRoute>
  }
/>

<Route
  path="/admin/orders"
  element={
    <AdminProtectedRoute>
      <AdminOrders/>
    </AdminProtectedRoute>
  }
/>

        <Route
           path="/cart"
           element={
        <ProtectedRoute>
        <Cart />
        </ProtectedRoute>
  }
/>
      </Routes>
    </>
  );
}

export default App;
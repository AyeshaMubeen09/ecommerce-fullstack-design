import { Navigate } from "react-router-dom";

function AdminProtectedRoute({
  children,
}) {
  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  );

  // User is not logged in
  if (!userInfo) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  // Logged in but not an admin
  if (!userInfo.isAdmin) {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  // Logged in and is an admin
  return children;
}

export default AdminProtectedRoute;
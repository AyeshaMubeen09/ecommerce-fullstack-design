import {
  useState,
  useEffect,
} from "react";
import { useNavigate, Link, useLocation} from "react-router-dom";
import { loginUser } from "../api/authApi";

import AuthLayout from "../components/layout/AuthLayout";
import AuthBenefits from "../components/auth/AuthBenefits";
import AuthAlert from "../components/auth/AuthAlert";

import {
  Eye,
  EyeOff,
  Loader2,
} from "lucide-react";

import {
  FcGoogle,
} from "react-icons/fc";

import {
  FaFacebookF,
  FaApple,
} from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const location =
  useLocation();

const success =
  location.state?.success;

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

    const [showPassword, setShowPassword] =
  useState(false);

    const [rememberMe, setRememberMe] =
  useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);
    setError("");

    const user = await loginUser(formData);

    /* =========================
        SAVE LOGGED IN USER
    ========================= */

    localStorage.setItem(
      "userInfo",
      JSON.stringify(user)
    );

    /* =========================
        REDIRECT BASED ON ROLE
    ========================= */

    if (user.isAdmin) {
      navigate("/admin");
    } else {
      navigate("/");
    }

  } catch (err) {
    setError(
      err.response?.data?.message ||
      "Login failed"
    );
  } finally {
    setLoading(false);
  }
};

  return (
<AuthLayout page="login">
  <div className="max-w-5xl mx-auto px-4 py-10">

    <div
      className="
        bg-white
        border
        border-[#E5E7EB]
        rounded-[28px]
        overflow-hidden
        shadow-xl
        grid
        lg:grid-cols-2
      "
    >

      {/* =========================
          LEFT SIDE - BENEFITS
      ========================== */}
      <AuthBenefits page="login" />

      {/* =========================
          RIGHT SIDE - LOGIN FORM
      ========================== */}
      <div className="p-8 lg:p-10">

        <h1 className="text-[42px] font-bold text-[#111827]">
          Sign in
        </h1>

        <p className="text-[#6B7280] mt-2 mb-8">
          Enter your email and password to continue
        </p>

        {/* Success Alert */}
        {success && (
          <AuthAlert
            type="success"
            message={success}
          />
        )}

        {/* Error Alert */}
        {error && (
          <AuthAlert
            type="error"
            message={error}
          />
        )}

        <form
  onSubmit={handleSubmit}
  autoComplete="off"
  className="space-y-5"
>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Email address
            </label>

            <input
  type="email"
  name="email"
  autoComplete="off"
  value={formData.email}
  onChange={handleChange}
  placeholder="Enter your email"
  className="
    w-full
    h-[52px]
    px-4
    border
    border-[#DEE2E7]
    rounded-xl
    outline-none
    focus:border-[#0D6EFD]
    transition
  "
/>
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-semibold">
                Password
              </label>

              <button
                type="button"
                className="text-[#0D6EFD] text-sm hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <div className="relative">
             <input
  type={
    showPassword
      ? "text"
      : "password"
  }
  autoComplete="new-password"
  name="password"
  value={formData.password}
  onChange={handleChange}
  placeholder="Enter your password"
  className="
    w-full
    h-[52px]
    px-4
    pr-12
    border
    border-[#DEE2E7]
    rounded-xl
    outline-none
    focus:border-[#0D6EFD]
  "
/>

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  text-[#8B96A5]
                "
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center">
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() =>
                  setRememberMe(
                    !rememberMe
                  )
                }
                className="accent-[#0D6EFD]"
              />

              Remember me
            </label>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              h-[54px]
              rounded-xl
              text-white
              font-semibold
              bg-gradient-to-r
              from-[#127FFF]
              to-[#0D6EFD]
              hover:shadow-lg
              disabled:opacity-70
              flex
              items-center
              justify-center
              gap-2
              transition
            "
          >
            {loading ? (
              <>
                <Loader2
                  size={18}
                  className="animate-spin"
                />
                Signing In...
              </>
            ) : (
              "Sign in"
            )}
          </button>

        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-[#E5E7EB]" />

          <span className="text-sm text-[#8B96A5]">
            or continue with
          </span>

          <div className="flex-1 h-px bg-[#E5E7EB]" />
        </div>

        {/* Social Buttons */}
<div className="grid grid-cols-3 gap-3">

  {/* Google */}
  <button
    type="button"
    className="
      h-[48px]
      border
      border-[#DEE2E7]
      rounded-xl
      hover:bg-gray-50
      transition
      flex
      items-center
      justify-center
      gap-2
      text-sm
      font-medium
    "
  >
    <FcGoogle size={18} />
    Google
  </button>

  {/* Facebook */}
  <button
    type="button"
    className="
      h-[48px]
      border
      border-[#DEE2E7]
      rounded-xl
      hover:bg-gray-50
      transition
      flex
      items-center
      justify-center
      gap-2
      text-sm
      font-medium
    "
  >
    <FaFacebookF size={18} className="text-[#1877F2]" />
    Facebook
  </button>

  {/* Apple */}
  <button
    type="button"
    className="
      h-[48px]
      border
      border-[#DEE2E7]
      rounded-xl
      hover:bg-gray-50
      transition
      flex
      items-center
      justify-center
      gap-2
      text-sm
      font-medium
    "
  >
    <FaApple size={18} />
    Apple
  </button>

</div>

        {/* Terms */}
        <p className="text-xs text-center text-[#6B7280] mt-8 leading-6">
          By signing in, you agree to our
          <span className="text-[#0D6EFD] cursor-pointer">
            {" "}Terms of Service
          </span>
          {" "}and
          <span className="text-[#0D6EFD] cursor-pointer">
            {" "}Privacy Policy
          </span>
          .
        </p>

        {/* Register Link */}
        <div className="mt-8 pt-6 border-t border-[#E5E7EB]">

          <p className="text-center text-sm text-[#6B7280]">
            Don't have an account?
          </p>

          <Link
            to="/register"
            className="
              mt-3
              w-full
              h-[50px]
              border
              border-[#0D6EFD]
              rounded-xl
              text-[#0D6EFD]
              font-semibold
              flex
              items-center
              justify-center
              hover:bg-[#F3F8FF]
              transition
            "
          >
            Create account
          </Link>

        </div>

      </div>

    </div>

  </div>
</AuthLayout>
  );
}

export default Login;
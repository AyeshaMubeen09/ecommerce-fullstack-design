import { useState } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  Eye,
  EyeOff,
  Loader2,
} from "lucide-react";

import AuthLayout from "../components/layout/AuthLayout";
import AuthBenefits from "../components/auth/AuthBenefits";

import { registerUser } from "../api/authApi";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
    });

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [
    showConfirmPassword,
    setShowConfirmPassword,
  ] = useState(false);

  const [agreeTerms, setAgreeTerms] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.value,
    }));
  };

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    if (
      formData.password !==
      confirmPassword
    ) {
      setError(
        "Passwords do not match"
      );
      return;
    }

    if (!agreeTerms) {
      setError(
        "Please accept Terms & Conditions"
      );
      return;
    }

    try {
      setLoading(true);
      setError("");

      const user =
        await registerUser(
          formData
        );

      localStorage.setItem(
        "userInfo",
        JSON.stringify(user)
      );

      navigate("/");
    } catch (err) {
      setError(
        err.response?.data
          ?.message ||
          "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout page="register">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div
          className="
            bg-white
            rounded-3xl
            overflow-hidden
            border
            border-[#DEE2E7]
            shadow-xl
            grid
            lg:grid-cols-2
          "
        >
          {/* Left Side */}
          <AuthBenefits page="register" />

          {/* Right Side */}
          <div className="p-8 md:p-12">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-[#1C1C1C]">
                  Create Account
                </h1>

                <p className="text-[#8B96A5] mt-2">
                  Start shopping with us
                </p>
              </div>

              {error && (
                <div
                  className="
                    mb-5
                    rounded-xl
                    border
                    border-red-200
                    bg-red-50
                    px-4
                    py-3
                    text-red-600
                    text-sm
                  "
                >
                  {error}
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={
                      handleChange
                    }
                    placeholder="Enter your full name"
                    className="
                      w-full
                      h-[52px]
                      px-4
                      border
                      border-[#DEE2E7]
                      rounded-xl
                      outline-none
                      focus:border-[#0D6EFD]
                    "
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={
                      handleChange
                    }
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
                    "
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Password
                  </label>

                  <div className="relative">
                    <input
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      name="password"
                      value={
                        formData.password
                      }
                      onChange={
                        handleChange
                      }
                      placeholder="Create password"
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
                      "
                    >
                      {showPassword ? (
                        <EyeOff
                          size={18}
                        />
                      ) : (
                        <Eye
                          size={18}
                        />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Confirm Password
                  </label>

                  <div className="relative">
                    <input
                      type={
                        showConfirmPassword
                          ? "text"
                          : "password"
                      }
                      value={
                        confirmPassword
                      }
                      onChange={(e) =>
                        setConfirmPassword(
                          e.target.value
                        )
                      }
                      placeholder="Confirm password"
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
                        setShowConfirmPassword(
                          !showConfirmPassword
                        )
                      }
                      className="
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2
                      "
                    >
                      {showConfirmPassword ? (
                        <EyeOff
                          size={18}
                        />
                      ) : (
                        <Eye
                          size={18}
                        />
                      )}
                    </button>
                  </div>
                </div>

                {/* Terms */}
                <label className="flex items-start gap-3 text-sm">
                  <input
                    type="checkbox"
                    checked={
                      agreeTerms
                    }
                    onChange={() =>
                      setAgreeTerms(
                        !agreeTerms
                      )
                    }
                    className="mt-1 accent-[#0D6EFD]"
                  />

                  <span>
                    I agree to the
                    Terms &
                    Conditions and
                    Privacy Policy
                  </span>
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={
                    loading
                  }
                  className="
                    w-full
                    h-[52px]
                    bg-[#0D6EFD]
                    text-white
                    rounded-xl
                    font-medium
                    hover:bg-[#005ade]
                    flex
                    items-center
                    justify-center
                    gap-2
                  "
                >
                  {loading ? (
                    <>
                      <Loader2
                        size={18}
                        className="animate-spin"
                      />
                      Creating
                      Account...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </button>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-4 my-6">
                <div className="flex-1 h-px bg-[#DEE2E7]" />
                <span className="text-sm text-[#8B96A5]">
                  OR
                </span>
                <div className="flex-1 h-px bg-[#DEE2E7]" />
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  className="h-[48px] border border-[#DEE2E7] rounded-xl"
                >
                  Google
                </button>

                <button
                  type="button"
                  className="h-[48px] border border-[#DEE2E7] rounded-xl"
                >
                  Facebook
                </button>

                <button
                  type="button"
                  className="h-[48px] border border-[#DEE2E7] rounded-xl"
                >
                  Apple
                </button>
              </div>

              {/* Login Link */}
              <div className="mt-8 border-t pt-6">
                <p className="text-center text-sm text-[#6B7280]">
                  Already have an
                  account?
                </p>

                <Link
                  to="/login"
                  className="
                    mt-3
                    w-full
                    h-[48px]
                    border
                    border-[#0D6EFD]
                    rounded-lg
                    text-[#0D6EFD]
                    font-medium
                    flex
                    items-center
                    justify-center
                    hover:bg-[#F0F7FF]
                    transition
                  "
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}

export default Register;
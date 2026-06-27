import {
  Lock,
  Zap,
  User,
} from "lucide-react";

import loginBanner from "../../assets/auth/loginBanner.jpg";

function AuthBenefits({
  page = "login",
}) {
  const isRegisterPage =
    page === "register";

  const benefits = [
    {
      icon: Lock,
      title: "Secure & Safe",
      text: "Your data is always protected",
    },
    {
      icon: Zap,
      title: "Fast & Easy",
      text: isRegisterPage
        ? "Create your account in seconds"
        : "Login to checkout in seconds",
    },
    {
      icon: User,
      title: "Personalized for You",
      text: "Recommendations just for you",
    },
  ];

  return (
    <div
      className="
        bg-[#E1F1FD]
        p-10
        md:p-14
        h-full
        flex
        flex-col
      "
    >
      {/* =========================
          HEADING
      ========================== */}
      <div>
        <h2 className="text-[36px] font-bold text-[#111827] leading-tight">
          {isRegisterPage
            ? "Create your account"
            : "Welcome back!"}
        </h2>

        <p className="mt-6 text-[17px] leading-relaxed text-[#4B5563] max-w-md">
          {isRegisterPage
            ? "Join thousands of shoppers, save your favorites, track orders, and enjoy a seamless shopping experience."
            : "Sign in to manage your orders, track deliveries, and enjoy a better shopping experience."}
        </p>
      </div>

      {/* =========================
          BANNER IMAGE
      ========================== */}
      <div className="flex-1 flex items-center justify-center py-8">
        <img
          src={loginBanner}
          alt="Auth Banner"
          className="
            w-full
            max-w-[380px]
            object-contain
            select-none
            pointer-events-none
          "
        />
      </div>

      {/* =========================
          BENEFITS
      ========================== */}
      <div className="space-y-7">
        {benefits.map(
          (benefit, index) => {
            const Icon =
              benefit.icon;

            return (
              <div
                key={index}
                className="flex items-center gap-4"
              >
                <div
                  className="
                    w-12
                    h-12
                    rounded-full
                    bg-[#0D6EFD]
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <Icon
                    size={20}
                    className="text-white"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-[18px] text-[#111827]">
                    {benefit.title}
                  </h3>

                  <p className="text-[15px] text-[#6B7280]">
                    {benefit.text}
                  </p>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default AuthBenefits;
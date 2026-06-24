import { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Subscribed:", email);

    setSubscribed(true);
    setEmail("");
  };

  return (
    <section className="mt-8 md:mt-10 bg-[#EFF2F4] border-t border-[#DEE2E7]">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-10">
        <div className="max-w-[540px] mx-auto text-center">
          <h2 className="text-[18px] md:text-[20px] font-semibold text-[#1C1C1C]">
            Subscribe to our newsletter
          </h2>

          <p className="text-[#606060] text-[13px] md:text-[15px] mt-2 max-w-[460px] mx-auto leading-5">
            Get daily news on upcoming offers from suppliers around the world.
          </p>

          {subscribed ? (
            <div className="mt-6 flex flex-col items-center">
              <CheckCircle2
                size={52}
                className="text-green-500"
              />

              <h3 className="mt-3 text-[18px] font-semibold text-[#1C1C1C]">
                Subscription Successful
              </h3>

              <p className="mt-2 text-[#606060] text-sm max-w-[320px]">
                Thank you for subscribing. You'll now receive updates,
                offers, and supplier news directly in your inbox.
              </p>

              <button
                onClick={() => setSubscribed(false)}
                className="mt-5 h-[40px] px-5 bg-[#0D6EFD] hover:bg-[#005ADE] text-white rounded-md text-sm font-medium transition-colors"
              >
                Subscribe Another Email
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row items-center justify-center gap-2 mt-5"
            >
              <div className="relative w-full md:w-[280px]">
                <Mail
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8B96A5]"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  aria-label="Email address"
                  required
                  className="
                    w-full
                    h-[40px]
                    pl-10
                    pr-3
                    bg-white
                    border
                    border-[#DEE2E7]
                    rounded-md
                    text-sm
                    outline-none
                  "
                />
              </div>

              <button
                type="submit"
                className="
                  w-full
                  md:w-auto
                  h-[40px]
                  px-5
                  bg-[#0D6EFD]
                  hover:bg-[#005ADE]
                  text-white
                  rounded-md
                  text-sm
                  font-medium
                  transition-colors
                "
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
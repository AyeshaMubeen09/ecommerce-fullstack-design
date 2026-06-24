import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const backgroundImage =
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1600";

function SupplierBanner() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 mt-6">
      <div className="relative overflow-hidden rounded-md">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C7CF1] via-[#2C7CF1]/90 to-[#00B5FF]/70" />

        {/* Mobile Layout */}
        <div className="relative z-10 md:hidden px-6 py-10 min-h-[220px] flex flex-col justify-center">
          <h2 className="max-w-[260px] text-[28px] font-semibold leading-[36px] text-white">
            An easy way to send requests to all suppliers
          </h2>

          <button className="mt-6 w-fit h-[40px] px-5 bg-[#0D6EFD] text-white rounded-md text-sm font-medium">
            Send inquiry
          </button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid relative z-10 lg:grid-cols-[1fr_420px] gap-8 p-8 lg:p-10">
          {/* Left Content */}
          <div className="pt-2 text-white">
            <h2 className="max-w-[440px] text-[32px] font-semibold leading-[40px]">
              Source products directly from verified suppliers
            </h2>

            <p className="max-w-[420px] mt-4 text-[15px] leading-6 text-blue-50">
              Compare quotes, negotiate prices, and connect with trusted
              manufacturers worldwide.
            </p>

            <p className="max-w-[420px] mt-4 text-[15px] leading-6 text-blue-50">
              Send one request and receive multiple offers from verified
              suppliers within hours.
            </p>
          </div>

          {/* Right Card */}
          {submitted ? (
            <div className="bg-white rounded-md p-8 shadow-lg flex flex-col items-center justify-center text-center min-h-[360px]">
              <CheckCircle2
                size={64}
                className="text-green-500"
              />

              <h3 className="mt-5 text-[24px] font-semibold text-[#1C1C1C]">
                Inquiry Sent Successfully
              </h3>

              <p className="mt-3 text-[#606060] leading-6 max-w-[280px]">
                Your request has been sent to our verified suppliers.
                You can expect responses within a few hours.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 h-[40px] px-6 bg-[#0D6EFD] hover:bg-[#005ADE] text-white rounded-md text-sm font-medium transition-colors"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-md p-6 shadow-lg"
            >
              <h3 className="mb-5 text-[20px] font-semibold text-[#1C1C1C]">
                Send quote to suppliers
              </h3>

              <input
                type="text"
                placeholder="What item you need?"
                required
                className="w-full h-[40px] px-3 mb-4 border border-[#DEE2E7] rounded-md outline-none text-sm"
              />

              <textarea
                rows={4}
                placeholder="Type more details"
                required
                className="w-full p-3 mb-4 border border-[#DEE2E7] rounded-md outline-none resize-none text-sm"
              />

              <div className="flex gap-3 mb-5">
                <input
                  type="number"
                  placeholder="Quantity"
                  required
                  className="w-[140px] h-[40px] px-3 border border-[#DEE2E7] rounded-md outline-none text-sm"
                />

                <select className="flex-1 h-[40px] px-3 border border-[#DEE2E7] rounded-md outline-none text-sm">
                  <option>Pcs</option>
                  <option>Kg</option>
                  <option>Boxes</option>
                </select>
              </div>

              <button
                type="submit"
                className="h-[40px] px-6 bg-[#0D6EFD] hover:bg-[#005ADE] text-white rounded-md text-sm font-medium transition-colors"
              >
                Send inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default SupplierBanner;
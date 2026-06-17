function SupplierBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-6">
      <div className="relative overflow-hidden rounded-md">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1600')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C7CF1] via-[#2C7CF1]/90 to-[#00B5FF]/70" />

        {/* MOBILE */}
        <div className="relative z-10 md:hidden px-6 py-10 min-h-[220px] flex flex-col justify-center">
          <h2 className="text-white text-[28px] font-semibold leading-[36px] max-w-[260px]">
            An easy way to send requests to all suppliers
          </h2>

          <button className="mt-6 w-fit h-[40px] px-5 bg-[#0D6EFD] text-white rounded-md text-sm font-medium">
            Send inquiry
          </button>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:grid relative z-10 lg:grid-cols-[1fr_420px] gap-8 p-8 lg:p-10">
          {/* Left Content */}
          <div className="text-white pt-2">
            <h2 className="max-w-[440px] text-[32px] leading-[40px] font-semibold">
              Source products directly from verified suppliers
            </h2>

            <p className="max-w-[420px] mt-4 text-[15px] text-blue-50 leading-6">
              Compare quotes, negotiate prices, and connect with trusted
              manufacturers worldwide.
            </p>

            <p className="max-w-[420px] mt-4 text-[15px] text-blue-50 leading-6">
              Send one request and receive multiple offers from verified
              suppliers within hours.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-md p-6 shadow-lg">
            <h3 className="text-[20px] font-semibold text-[#1C1C1C] mb-5">
              Send quote to suppliers
            </h3>

            <input
              type="text"
              placeholder="What item you need?"
              className="w-full h-[40px] px-3 border border-[#DEE2E7] rounded-md outline-none text-sm mb-4"
            />

            <textarea
              rows="4"
              placeholder="Type more details"
              className="w-full border border-[#DEE2E7] rounded-md p-3 outline-none resize-none text-sm mb-4"
            />

            <div className="flex gap-3 mb-5">
              <input
                type="number"
                placeholder="Quantity"
                className="w-[140px] h-[40px] px-3 border border-[#DEE2E7] rounded-md outline-none text-sm"
              />

              <select className="flex-1 h-[40px] px-3 border border-[#DEE2E7] rounded-md outline-none text-sm">
                <option>Pcs</option>
                <option>Kg</option>
                <option>Boxes</option>
              </select>
            </div>

            <button className="h-[40px] px-6 bg-[#0D6EFD] hover:bg-[#005ADE] text-white rounded-md text-sm font-medium transition-colors">
              Send inquiry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupplierBanner;
import ReactCountryFlag from "react-country-flag";

function SuppliersSection() {
  const suppliers = [
    {
      country: "Arabic Emirates",
      domain: "shopname.ae",
      code: "AE",
    },
    {
      country: "Australia",
      domain: "shopname.au",
      code: "AU",
    },
    {
      country: "United States",
      domain: "shopname.com",
      code: "US",
    },
    {
      country: "Russia",
      domain: "shopname.ru",
      code: "RU",
    },
    {
      country: "Italy",
      domain: "shopname.it",
      code: "IT",
    },
    {
      country: "Denmark",
      domain: "denmark.com.dk",
      code: "DK",
    },
    {
      country: "France",
      domain: "shopname.com.fr",
      code: "FR",
    },
    {
      country: "Arabic Emirates",
      domain: "shopname.ae",
      code: "AE",
    },
    {
      country: "China",
      domain: "shopname.cn",
      code: "CN",
    },
    {
      country: "Great Britain",
      domain: "shopname.co.uk",
      code: "GB",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 mt-8">
      <h2 className="text-[20px] md:text-[24px] font-semibold text-[#1C1C1C] mb-5">
        Suppliers by region
      </h2>

      {/* Mobile */}
      <div className="md:hidden overflow-x-auto">
        <div className="flex gap-4 pb-2 w-max">
          {suppliers.map((supplier, index) => (
            <div
              key={index}
              className="min-w-[170px] flex items-start gap-3 bg-white border border-[#DEE2E7] rounded-md p-3"
            >
              <ReactCountryFlag
                countryCode={supplier.code}
                svg
                style={{
                  width: "24px",
                  height: "18px",
                  marginTop: "2px",
                  flexShrink: 0,
                }}
              />

              <div>
                <h3 className="text-[13px] text-[#1C1C1C] leading-tight">
                  {supplier.country}
                </h3>

                <p className="text-[11px] text-[#8B96A5] mt-1 leading-tight">
                  {supplier.domain}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-y-5 gap-x-8">
        {suppliers.map((supplier, index) => (
          <div
            key={index}
            className="flex items-start gap-3"
          >
            <ReactCountryFlag
              countryCode={supplier.code}
              svg
              style={{
                width: "28px",
                height: "20px",
                marginTop: "2px",
              }}
            />

            <div>
              <h3 className="text-[14px] text-[#1C1C1C] leading-none">
                {supplier.country}
              </h3>

              <p className="text-[12px] text-[#8B96A5] mt-1 leading-none">
                {supplier.domain}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SuppliersSection;
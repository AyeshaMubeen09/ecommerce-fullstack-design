import ReactCountryFlag from "react-country-flag";

/* -------------------------------------------------------------------------- */
/*                                Suppliers Data                              */
/* -------------------------------------------------------------------------- */

const suppliers = [
  {
    country: "United Arab Emirates",
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
    country: "United Arab Emirates",
    domain: "shopname.ai",
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

function SuppliersSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-8">
      <h2 className="mb-5 text-[20px] md:text-[24px] font-semibold text-[#1C1C1C]">
        Suppliers by region
      </h2>

      {/* Mobile Layout */}
      <div className="md:hidden overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 pb-2 w-max">
          {suppliers.map((supplier) => (
            <div
              key={`${supplier.code}-${supplier.domain}`}
              className="min-w-[170px] p-3 flex items-start gap-3 bg-white border border-[#DEE2E7] rounded-md"
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
                <h3 className="text-[13px] leading-tight text-[#1C1C1C]">
                  {supplier.country}
                </h3>

                <p className="mt-1 text-[11px] leading-tight text-[#8B96A5]">
                  {supplier.domain}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-5">
        {suppliers.map((supplier) => (
          <div
            key={`${supplier.code}-${supplier.domain}`}
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
              <h3 className="text-[14px] leading-none text-[#1C1C1C]">
                {supplier.country}
              </h3>

              <p className="mt-1 text-[12px] leading-none text-[#8B96A5]">
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
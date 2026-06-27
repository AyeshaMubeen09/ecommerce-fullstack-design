import CountUp from "react-countup";

function StatCard({
  title,
  value,
  icon,
  iconBg = "bg-blue-100",
  iconColor = "text-[#0D6EFD]",
  increase = 0,
  increaseColor = "text-green-600",
  prefix = "",
  suffix = "",
  decimals = 0,
  compact = false,
}) {

    const formatValue = (num) => {
  if (num >= 1000000000)
    return (num / 1000000000).toFixed(1) + "B";

  if (num >= 1000000)
    return (num / 1000000).toFixed(1) + "M";

  if (num >= 1000)
    return (num / 1000).toFixed(1) + "K";

  return num;
};

  return (
    <div
      className="
        bg-white
        border
        border-[#E5E7EB]
        rounded-2xl
        p-6
        shadow-sm
        hover:shadow-md
        transition-all
        duration-300
        flex
        items-center
        justify-between
      "
    >
      {/* Left Side */}

      <div className="flex items-center gap-5">

        {/* Icon */}

        <div
          className={`
            w-16
            h-16
            rounded-full
            flex
            items-center
            justify-center
            ${iconBg}
          `}
        >
          <div className={iconColor}>
            {icon}
          </div>
        </div>

        {/* Text */}

        <div>

          <p
            className="
              text-[15px]
              text-[#6B7280]
              font-medium
            "
          >
            {title}
          </p>

 <h2
  className={`
    mt-1
    font-bold
    text-[#1C1C1C]
    ${
      compact
        ? "text-[24px] leading-tight"
        : "text-[34px] leading-none"
    }
  `}
>
{prefix}
{formatValue(Number(value))}
{suffix}
          </h2>

          <div
            className="
              mt-3
              flex
              items-center
              gap-2
              text-sm
            "
          >
            <span
              className={`
                font-semibold
                ${increaseColor}
              `}
            >
              +{increase}%
            </span>

            <span className="text-[#8B96A5]">
              vs last month
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default StatCard;
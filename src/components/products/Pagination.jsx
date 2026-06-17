function Pagination() {
  return (
    <div className="flex items-center justify-end gap-4 mt-8">
      {/* Show Dropdown */}
<select
  className="
    h-[40px]
    min-w-[125px]
    pl-4
    pr-8
    border
    border-[#DEE2E7]
    rounded-md
    bg-white
    text-[14px]
    text-[#1C1C1C]
    outline-none
  "
>
  <option>Show 10</option>
  <option>Show 20</option>
  <option>Show 30</option>
</select>

      {/* Pagination */}
      <div className="flex bg-white border border-[#DEE2E7] rounded-md overflow-hidden">
        <button className="w-[44px] h-[40px] flex items-center justify-center border-r border-[#DEE2E7] text-[#8B96A5]">
          &lt;
        </button>

        <button className="w-[44px] h-[40px] flex items-center justify-center bg-[#EFF2F4] text-[#1C1C1C] font-medium border-r border-[#DEE2E7]">
          1
        </button>

        <button className="w-[44px] h-[40px] flex items-center justify-center text-[#505050] border-r border-[#DEE2E7] hover:bg-[#F7FAFC]">
          2
        </button>

        <button className="w-[44px] h-[40px] flex items-center justify-center text-[#505050] border-r border-[#DEE2E7] hover:bg-[#F7FAFC]">
          3
        </button>

        <button className="w-[44px] h-[40px] flex items-center justify-center text-[#8B96A5]">
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Pagination;
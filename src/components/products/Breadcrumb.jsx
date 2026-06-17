import { ChevronRight } from "lucide-react";

function Breadcrumb() {
  return (
    <div className="flex items-center gap-2 text-sm text-[#8B96A5] mb-5">
      <span>Home</span>

      <ChevronRight size={14} />

      <span>Clothings</span>

      <ChevronRight size={14} />

      <span>Men's wear</span>

      <ChevronRight size={14} />

      <span>Summer clothing</span>
    </div>
  );
}

export default Breadcrumb;
"use client";

import { useMemo, useState } from "react";
import CaseStudy from "@/components/CaseStudy";
import {
  categories,
  portfolioItems,
  type CategoryId,
} from "@/data/portfolioItems";

export default function PortfolioBrowser({
  initialCategory = "all",
}: {
  initialCategory?: CategoryId;
}) {
  const [category, setCategory] = useState<CategoryId>(initialCategory);
  const visible = useMemo(
    () =>
      category === "all"
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === category),
    [category],
  );

  return (
    <div>
      <div
        className="flex flex-wrap gap-x-6 gap-y-2 border-b border-white/10"
        role="group"
        aria-label="Filter case studies by category"
      >
        {categories.map((item) => {
          const active = item.id === category;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setCategory(item.id)}
              aria-pressed={active}
              className={`border-b-2 px-0 pb-3 pt-1 text-xs font-semibold tracking-wide transition ${
                active
                  ? "border-[#1767f2] text-[#7ca9ff]"
                  : "border-transparent text-[#9aa5b3] hover:text-white"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div className="mt-8 space-y-6">
        {visible.map((item) => (
          <CaseStudy key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}

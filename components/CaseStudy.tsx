import { Download } from "lucide-react";
import Link from "next/link";
import ShotGallery from "@/components/ShotGallery";
import type { PortfolioItem } from "@/data/portfolioItems";

export default function CaseStudy({
  item,
  showPermalink = true,
}: {
  item: PortfolioItem;
  showPermalink?: boolean;
}) {
  return (
    <article
      id={item.slug}
      className="scroll-mt-24 border border-white/10 border-t-2 border-t-[#1767f2] bg-[#20262e] p-6 sm:p-8"
    >
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#7ca9ff]">
        {item.tag}
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
        {item.title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-[#c1c9d3]">
        <span className="font-semibold text-[#7ca9ff]">About and role. </span>
        {item.role}
      </p>
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#7ca9ff]">
            Problem
          </h3>
          <p className="mt-2 text-sm leading-6 text-[#c1c9d3]">{item.problem}</p>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#7ca9ff]">
            Approach
          </h3>
          <p className="mt-2 text-sm leading-6 text-[#c1c9d3]">{item.approach}</p>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#7ca9ff]">
            Final look
          </h3>
          <p className="mt-2 text-sm leading-6 text-[#c1c9d3]">{item.outcome}</p>
        </div>
      </div>
      <ShotGallery shots={item.shots} />
      {item.files.length > 0 ? (
        <div className="mt-6 flex flex-wrap gap-3">
          {item.files.map((file) => (
            <a
              key={file.href}
              href={file.href}
              download
              className="inline-flex items-center gap-2 border border-white/15 px-4 py-2 text-sm font-medium text-[#7ca9ff] transition hover:border-[#1767f2] hover:bg-white/5"
            >
              <Download size={15} />
              {file.label}
            </a>
          ))}
        </div>
      ) : null}
      {showPermalink ? (
        <p className="mt-4 text-xs text-[#8d98a6]">
          <Link
            href={`/portfolio/${item.slug}`}
            className="font-medium text-[#7ca9ff] hover:text-white"
          >
            Open project
          </Link>
        </p>
      ) : null}
    </article>
  );
}

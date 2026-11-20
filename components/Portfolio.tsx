import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const featured = [
  {
    tag: "BA Capstone",
    title: "1816 Car Rental Co.",
    body: "The capstone PDF and two owner dashboard captures show the business context alongside recorded booking value, active rentals, fleet status, revenue, and pending actions.",
    href: "/portfolio/1816-car-rental-capstone",
  },
  {
    tag: "SQL",
    title: "Layoffs cleaning in MySQL",
    body: "cleaning_data.sql on world_layoffs: staging tables, ROW_NUMBER() duplicates, a self-join for industry, and STR_TO_DATE. Workbench screenshots are on the case study. The raw CSV was not captured.",
    href: "/portfolio/sql-layoffs-cleaning",
  },
  {
    tag: "Power BI",
    title: "Purchase Power Query, then the Alex report",
    body: "The Power Query file is finished even though the name still says UNFINISH. The Alex report charts Walmart, Target, and Costco from that purchase data.",
    href: "/portfolio/purchase-power-query",
  },
  {
    tag: "Excel",
    title: "Bike buyers dashboard",
    body: "Working sheet, pivot, and a Bike Sales Dashboard with slicers. Age brackets use the nested IF written in the notes.",
    href: "/portfolio/excel-bike-buyers",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-24 border-y border-white/10 bg-[#20262e] px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7ca9ff]">
          03 — Featured work
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Four entry points. The full evidence sits on the portfolio page.
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[#a5afbc]">
          SQL, Excel, Power Query, and the capstone PDF are documented with the
          screenshots I have. System screens for CourseDock, RevOn, and ACSIS
          are in IT Foundation and on the same portfolio list.
        </p>
        <div className="mt-9 grid border-y border-white/10 md:grid-cols-2">
          {featured.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="group grid grid-cols-[52px_1fr] gap-4 border-b border-white/10 py-6 md:px-6 md:even:border-l md:even:border-white/10 md:even:pl-8 md:odd:pl-0"
            >
              <span className="pt-1 text-sm font-semibold tabular-nums text-[#788493]">0{index + 1}</span>
              <span>
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#7ca9ff]">
                  {item.tag}
                </span>
                <span className="mt-2 block text-lg font-semibold tracking-tight text-white transition group-hover:text-[#7ca9ff]">
                  {item.title}
                </span>
                <span className="mt-2 block text-sm leading-6 text-[#a5afbc]">
                  {item.body}
                </span>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#7ca9ff]">
                  Open project <ArrowUpRight size={15} />
                </span>
              </span>
            </Link>
          ))}
        </div>
        <Link
          href="/portfolio"
          className="mt-7 inline-flex items-center gap-2 bg-[#1767f2] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0757df]"
        >
          Browse every case study
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}

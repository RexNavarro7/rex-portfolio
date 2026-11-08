import { Download, FileSpreadsheet, FileText } from "lucide-react";
import { FILES } from "@/lib/assets";

const projects = [
  {
    tag: "Business Analysis & System Evaluation",
    title: "1816 Car Rental Co. — BA Capstone",
    problem:
      "A live rental operation needed formal requirements, privacy controls, and an evidence-based quality evaluation—not just a working app.",
    approach:
      "Elicited functional requirements through client interviews and integrated research-adviser recommendations into formal system documentation. Authored data privacy protocols and coordinated stakeholder User Acceptance Testing (UAT).",
    outcome:
      "Evaluated system quality using ISO/IEC 25010 standards, achieving a 3.72/4.00 Grand Overall Weighted Mean from 21 participants. Built backend reporting modules for revenue CSV exports.",
    links: [
      { href: FILES.capstonePdf, label: "Download capstone PDF", icon: FileText },
      { href: FILES.capstoneNotes, label: "BA notes (DOCX)", icon: Download },
    ],
  },
  {
    tag: "Data Analytics",
    title: "SQL Data Cleaning & EDA",
    problem:
      "A messy global layoffs dataset could not support accurate trend analysis until duplicates, blanks, and inconsistent categories were resolved.",
    approach:
      "Cleaned the dataset in MySQL with a staging-table workflow: duplicate detection, standardization, null handling, then exploratory analysis on a trusted table.",
    outcome:
      "Removed duplicate records using CTEs and ROW_NUMBER(), executed advanced self-joins to impute missing industry data, and calculated rolling totals using window functions.",
    snippet: `WITH duplicate_cte AS (
  SELECT *,
    ROW_NUMBER() OVER (
      PARTITION BY company, location, industry,
        total_laid_off, percentage_laid_off, \`date\`,
        stage, country, funds_raised_millions
    ) AS row_num
  FROM layoffs_staging
)
SELECT * FROM duplicate_cte WHERE row_num > 1;`,
    links: [
      { href: FILES.sqlScript, label: "Download cleaning_data.sql", icon: Download },
      { href: FILES.layoffsCsv, label: "Download layoffs.csv", icon: FileSpreadsheet },
    ],
  },
  {
    tag: "Business Intelligence",
    title: "Power BI Superstore Data Modeling",
    problem:
      "Dashboard visuals failed to render because the model was stuck in a Many-to-Many cardinality relationship.",
    approach:
      "Diagnosed the model in Power Query, traced nulls in the key column, and rebuilt the relationship once the primary key was trustworthy.",
    outcome:
      "Traced the root cause to 700 phantom null rows using Power Query, filtered out anomalies, and reformatted the primary key to establish a clean 1-to-Many relationship.",
    links: [
      { href: FILES.powerBiPbix, label: "Download Power BI file (.pbix)", icon: Download },
      { href: FILES.superstoreXlsx, label: "Superstore workbook (.xlsx)", icon: FileSpreadsheet },
    ],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-24 px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
          03 — Featured work
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-white">
          Analytics and BA projects recruiters can open and download
        </h2>
        <div className="mt-10 space-y-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-white/10 bg-[#0e151c] p-6 sm:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                {project.tag}
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <div className="mt-6 grid gap-5 md:grid-cols-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                    Problem
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                    Approach
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {project.approach}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                    Outcome
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {project.outcome}
                  </p>
                </div>
              </div>
              {"snippet" in project && project.snippet ? (
                <pre className="mt-6 overflow-x-auto rounded-xl border border-white/10 bg-black/40 p-4 text-xs leading-6 text-emerald-200">
                  <code>{project.snippet}</code>
                </pre>
              ) : null}
              <div className="mt-6 flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    download
                    className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200 transition hover:bg-emerald-400/20"
                  >
                    <link.icon size={15} />
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

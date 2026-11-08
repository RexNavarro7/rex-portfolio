import {
  BarChart3,
  ClipboardList,
  Database,
  Workflow,
} from "lucide-react";

const skills = [
  {
    icon: ClipboardList,
    title: "Business Analysis",
    items: [
      "Requirements Elicitation",
      "User Stories",
      "BPMN",
      "UAT Coordination",
    ],
  },
  {
    icon: Workflow,
    title: "Process Engineering",
    items: ["As-Is / To-Be Analysis", "Workflow Optimization"],
  },
  {
    icon: Database,
    title: "Data Analytics",
    items: ["SQL (CTEs, Window Functions)", "EDA", "Data Cleaning"],
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    items: ["Power BI", "Power Query", "Relational Data Modeling"],
  },
];

export default function Competencies() {
  return (
    <section className="px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
          02 — Core competencies
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-white">
          How I turn messy problems into decisions
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <article
              key={skill.title}
              className="rounded-2xl border border-white/10 bg-[#0e151c] p-5 transition hover:border-emerald-400/30"
            >
              <skill.icon className="mb-4 text-emerald-300" size={22} />
              <h3 className="text-base font-semibold text-white">
                {skill.title}
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-400">
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

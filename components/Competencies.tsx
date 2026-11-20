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
    <section id="competencies" className="border-b border-white/10 bg-[#1b2027] px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7ca9ff]">
          02 — Core competencies
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          How I turn messy problems into decisions
        </h2>
        <div className="mt-10 grid border-y border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <article
              key={skill.title}
              className="border-b border-white/10 py-6 sm:px-5 lg:border-b-0 lg:border-r lg:border-white/10 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center bg-[#1767f2]/15 text-[#7ca9ff]">
                  <skill.icon size={18} />
                </span>
                <span className="text-xs font-semibold text-[#788493]">0{index + 1}</span>
              </div>
              <h3 className="text-base font-semibold text-white">
                {skill.title}
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm leading-6 text-[#a5afbc]">
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

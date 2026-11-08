import { Database, Lock, Server, Workflow } from "lucide-react";

const items = [
  {
    icon: Database,
    title: "CourseDock / CMS",
    body: "Gathered user requirements and designed the MySQL database schema to track academic submissions.",
  },
  {
    icon: Workflow,
    title: "RevOn Car Rental ERP",
    body: "Mapped As-Is/To-Be process flows and modeled the relational database for billing and reservations.",
  },
  {
    icon: Lock,
    title: "ACSIS",
    body: "Elicited access control requirements and configured PostgreSQL databases for institutional Google OAuth security.",
  },
  {
    icon: Server,
    title: "SIA-2",
    body: "Translated business rules into backend logic, structuring an Express/MySQL connection.",
  },
];

export default function Systems() {
  return (
    <section id="it-foundation" className="scroll-mt-24 px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
          04 — IT foundation
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white">
          Systems analysis & database architecture
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
          Analytics is the focus. These academic builds show I still understand
          how systems are designed, stored, and secured—so requirements I write
          are implementable.
        </p>
        <ol className="relative mt-10 space-y-0 border-l border-white/10 pl-6">
          {items.map((item, index) => (
            <li key={item.title} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[31px] flex h-8 w-8 items-center justify-center rounded-full border border-emerald-400/40 bg-[#070b10] text-emerald-300">
                <item.icon size={14} />
              </span>
              <p className="text-xs text-slate-500">0{index + 1}</p>
              <h3 className="mt-1 text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

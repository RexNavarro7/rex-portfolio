import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import CaseStudy from "@/components/CaseStudy";
import SiteShell from "@/components/SiteShell";
import { getPortfolioItem, portfolioItems } from "@/data/portfolioItems";

export function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getPortfolioItem(slug);
  return { title: item ? `${item.title} | Rex Navarro Jr.` : "Portfolio" };
}

export default async function PortfolioItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getPortfolioItem(slug);
  if (!item) notFound();

  return (
    <SiteShell>
      <main id="main-content" className="bg-[#171b21] px-5 pt-14 pb-16 sm:pt-18">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7ca9ff]">
            03 — Featured work
          </p>
          <p className="mt-3 text-sm text-[#a5afbc]">
            <Link href="/portfolio" className="font-medium text-[#7ca9ff] hover:text-white">
              All case studies
            </Link>
          </p>
          <div className="mt-6">
            <CaseStudy item={item} showPermalink={false} />
          </div>
        </div>
      </main>
    </SiteShell>
  );
}

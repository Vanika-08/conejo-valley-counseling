import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Grow My Therapy — Stage 2 | Clone & Redesign",
  description:
    "Choose a version: the Conejo Valley Family Counseling homepage clone, or the Dr. Maya Reynolds redesign.",
};

function Card({
  href,
  img,
  tag,
  title,
  desc,
  cta,
}: {
  href: string;
  img: string;
  tag: string;
  title: string;
  desc: string;
  cta: string;
}) {
  return (
    <Link
      href={href}
      className="flex flex-col overflow-hidden rounded-[18px] border border-dune bg-white text-inherit no-underline [box-shadow:0_24px_50px_-36px_rgba(60,50,40,0.5)] [transition:transform_0.18s_ease,box-shadow_0.18s_ease] hover:[box-shadow:0_34px_60px_-34px_rgba(60,50,40,0.55)] hover:[transform:translateY(-6px)]"
    >
      <div className="h-[190px] overflow-hidden">
        <img src={img} alt="" className="h-[300px] w-full object-cover" />
      </div>
      <div className="px-7 pt-[26px] pb-[30px]">
        <div className="text-[0.7rem] font-semibold tracking-[0.18em] text-bronze uppercase">
          {tag}
        </div>
        <h2 className="mx-0 my-2.5 font-display text-[1.7rem] font-light">
          {title}
        </h2>
        <p className="mx-0 mt-0 mb-5 text-[0.95rem] leading-[1.7] text-stone">
          {desc}
        </p>
        <span className="inline-flex items-center gap-2 border-b border-ink pb-1 text-[0.74rem] font-semibold tracking-[0.14em] text-ink uppercase">
          {cta} →
        </span>
      </div>
    </Link>
  );
}

export default function Landing() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 bg-linen px-6 py-16 font-body text-ink">
      <div className="max-w-[640px] text-center">
        <div className="text-[0.72rem] font-semibold tracking-[0.2em] text-bronze uppercase">
          Grow My Therapy · Stage 2
        </div>
        <h1 className="mx-0 mt-3.5 mb-2.5 font-display text-[2.6rem] leading-[1.2] font-light">
          Two versions, one project
        </h1>
        <p className="m-0 leading-[1.7] text-stone">
          Choose which site to view. Part 1 is a faithful clone of the original
          homepage. Part 2 is a full redesign for a new therapist, with its own
          theme and an added office section.
        </p>
      </div>

      <div className="grid w-full max-w-[740px] grid-cols-[repeat(auto-fit,minmax(280px,340px))] justify-center gap-7">
        <Card
          href="/clone"
          img="/assets/hero-family.jpg"
          tag="Part 1"
          title="The Clone"
          desc="A close recreation of the Conejo Valley Family Counseling homepage — layout, sections, and working navigation."
          cta="View the clone"
        />
        <Card
          href="/redesign"
          img="/assets/maya-reynolds.jpg"
          tag="Part 2 + 3"
          title="The Redesign"
          desc="A redesigned site for Dr. Maya Reynolds with a new palette, rewritten content, and an ‘Our Office’ section."
          cta="View the redesign"
        />
      </div>
    </main>
  );
}

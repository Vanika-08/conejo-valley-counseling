"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { expertise, images, team } from "./content";
import { navLink, ovalLink, to } from "./ui";

// Dropdown items all point back to the clone homepage.
function Dropdown({
  title,
  items,
}: {
  title: string;
  items: { label: string; path: string }[];
}) {
  return (
    <div className="group relative">
      <a className={navLink} href={to("/")}>
        {title}
      </a>

      <div className="invisible absolute top-full left-1/2 z-20 block min-w-[260px] pt-[15px] opacity-0 [transform:translateX(-50%)_translateY(8px)] [transition:opacity_0.18s_ease,transform_0.18s_ease,visibility_0s_linear_0.18s] group-focus-within:visible group-focus-within:opacity-100 group-focus-within:[transform:translateX(-50%)_translateY(0)] group-focus-within:[transition:opacity_0.18s_ease,transform_0.18s_ease] group-hover:visible group-hover:opacity-100 group-hover:[transform:translateX(-50%)_translateY(0)] group-hover:[transition:opacity_0.18s_ease,transform_0.18s_ease]">
        <div className="bg-paper px-5 py-3 text-center">
          {items.map((item) => (
            <a
              key={item.label}
              href={to("/")}
              className="block py-2.5 text-right text-nav tracking-[0.1em] whitespace-nowrap uppercase [transition:color_0.15s_ease] hover:text-sea"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="flex h-[126px] items-center justify-between bg-paper px-[5.8%] py-6 max-[1001px]:px-[4%] max-[768px]:h-[96px] max-[768px]:px-[6%] max-[768px]:py-5">
        <a href={to("/")} aria-label="Conejo Valley Family Counseling home">
          <img
            className="h-[75px] w-auto max-[768px]:w-[175px]"
            src={images.logo}
            alt="Conejo Valley Family Counseling"
          />
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-9 md:flex max-[1001px]:max-w-[470px] max-[1001px]:flex-wrap max-[1001px]:justify-end max-[1001px]:gap-[12px_20px]"
        >
          <a className={navLink} href={to("/")}>
            About
          </a>

          <Dropdown
            title="Our Team"
            items={team.map((label) => ({ label, path: "/" }))}
          />

          <Dropdown
            title="Specialties"
            items={expertise
              .slice(0, 6)
              .map(([label, path]) => ({ label, path }))}
          />

          <Dropdown
            title="Methods"
            items={[
              { label: "EMDR", path: "/" },
              { label: "Brainspotting", path: "/" },
              { label: "Somatic Therapy", path: "/" },
              { label: "Parts Work Therapy", path: "/" },
            ]}
          />

          <a className={navLink} href={to("/")}>
            FAQs
          </a>

          <a className={ovalLink} href={to("/")}>
            Contact
          </a>
        </nav>

        <button
          className="inline-flex h-9 w-9 cursor-pointer items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:hidden [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {menuOpen && (
        <nav
          className="border-t bg-paper px-[6%] pt-5 pb-[35px] md:hidden"
          aria-label="Mobile navigation"
        >
          {[
            { label: "About", path: "/" },
            { label: "Our Team", path: "/" },
            { label: "Specialties", path: "/" },
            { label: "Methods", path: "/" },
            { label: "FAQs", path: "/" },
            { label: "Contact", path: "/" },
          ].map(({ label, path }) => (
            <a className={`block py-3 ${navLink}`} href={to(path)} key={label}>
              {label}
            </a>
          ))}
        </nav>
      )}
    </>
  );
}

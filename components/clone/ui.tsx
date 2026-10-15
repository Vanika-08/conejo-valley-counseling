import type { ReactNode } from "react";

// The clone lives under /clone
export const to = (path: string) => (path === "/" ? "/clone" : `/clone${path}`);

export const eyebrow =
  "text-eyebrow uppercase tracking-[0.12em] leading-[1.8] font-normal";

export const navLink =
  "text-nav uppercase tracking-[0.1em] font-normal [transition:color_0.15s_ease] hover:text-sea";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";

const linkBase =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer font-normal uppercase tracking-[0.12em] text-button";

export const ovalLink = `${linkBase} ${focusRing} rounded-[50%] border border-muted-foreground px-[20.8px] py-4 leading-[calc(1.25/0.875)] [transition:background-color_0.18s_ease,color_0.18s_ease,border-color_0.18s_ease,transform_0.18s_ease] hover:border-foreground hover:bg-foreground hover:text-paper hover:[transform:translateY(-1px)]`;

const editorialLink = `${linkBase} ${focusRing} relative pb-[5px] leading-[1.7] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:bg-muted-foreground after:[transform:scaleX(1)] after:[transition:transform_1.5s_ease] hover:after:[transform:scaleX(0)] motion-reduce:after:transition-none`;

export function TextLink({
  children,
  path,
  className = "",
}: {
  children: ReactNode;
  path: string;
  className?: string;
}) {
  return (
    <a href={to(path)} className={`${editorialLink} ${className}`}>
      {children}
    </a>
  );
}

export function ScriptWord({ children }: { children: ReactNode }) {
  return (
    <span className="pl-2.5 font-script text-[1em] font-light leading-[0.7] text-sea">
      {children}
    </span>
  );
}

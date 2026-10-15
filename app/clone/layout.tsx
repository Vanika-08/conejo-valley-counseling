import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/clone/site-header";
import { SiteFooter } from "@/components/clone/site-footer";

export const metadata: Metadata = {
  title: "Conejo Valley Family Counseling | Newbury Park Therapy",
  description:
    "Specialized online and in-person therapy for adults, couples, teens, and children in Newbury Park and across California.",
};

export default function CloneLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}

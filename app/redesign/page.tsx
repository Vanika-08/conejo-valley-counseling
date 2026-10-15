import type { Metadata } from "next";
import { MayaHome } from "@/components/maya/maya-home";

export const metadata: Metadata = {
  title:
    "Dr. Maya Reynolds, PsyD | Anxiety, Trauma & Burnout Therapy in Santa Monica, CA",
  description:
    "Dr. Maya Reynolds is a licensed clinical psychologist in Santa Monica offering in-person and secure telehealth therapy across California for anxiety, panic, trauma, and burnout — using CBT, EMDR, mindfulness, and body-oriented approaches.",
  keywords:
    "therapist Santa Monica, anxiety therapy, trauma therapy, EMDR, burnout, telehealth California, clinical psychologist",
  openGraph: {
    title: "Dr. Maya Reynolds, PsyD — Santa Monica Therapy",
    description:
      "Warm, grounded therapy for anxiety, trauma, and burnout. In-person in Santa Monica and secure telehealth across California.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RedesignPage() {
  return <MayaHome />;
}

"use client";

import { useState } from "react";
import { Menu, X, Plus, MapPin, Video, ArrowRight } from "lucide-react";
import {
  MAYA_IMAGES,
  THERAPIST,
  NAV,
  HERO,
  ABOUT,
  SERVICES,
  FOCUS,
  APPROACH,
  METHODS,
  OFFICE,
  FAQS,
  CONTACT,
} from "./content";

const container = "mx-auto max-w-[1180px] px-[6%]";
const section = "py-[90px]";
const eyebrow =
  "font-sans text-[0.72rem] font-semibold tracking-[0.18em] uppercase";
const h2 = "leading-[1.22] text-espresso";
const h4 = "leading-[1.34] text-espresso";

const button =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-[999px] border px-[30px] py-[14px] font-sans text-[0.74rem] font-semibold tracking-[0.14em] uppercase [transition:background-color_0.15s_ease,color_0.15s_ease,border-color_0.15s_ease]";
const primaryButton = `${button} border-clay bg-clay text-white hover:border-clay-deep hover:bg-clay-deep hover:text-white`;
const outlineButton = `${button} border-espresso bg-transparent text-espresso hover:bg-espresso hover:text-ivory`;

const detailRow = "mt-2.5 flex items-start gap-3 text-taupe";
const detailIcon = "mt-[3px] flex-none text-clay";

const field =
  "mt-1.5 w-full rounded-[10px] border border-hairline bg-ivory px-3.5 py-[11px]";
const fieldLabel = "text-[0.8rem] font-semibold";

function Address({ className = "" }: { className?: string }) {
  return (
    <address className={`not-italic ${className}`}>
      {THERAPIST.address.map((l) => (
        <span key={l} className="block">
          {l}
        </span>
      ))}
    </address>
  );
}

function FaqItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-hairline">
      <button
        className="flex w-full cursor-pointer items-center justify-between gap-5 py-[22px] text-left font-brand text-[1.2rem] text-espresso"
        aria-expanded={open}
        onClick={onToggle}
      >
        <span>{q}</span>
        <Plus
          size={22}
          aria-hidden="true"
          className={`flex-none text-clay [transition:transform_0.2s_ease] ${open ? "[transform:rotate(45deg)]" : ""}`}
        />
      </button>
      {open && <div className="max-w-[70ch] pb-[22px] text-taupe">{a}</div>}
    </div>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const card =
    "rounded-[16px] border border-hairline bg-ivory p-[34px]";

  if (sent) {
    return (
      <div className={card} role="status">
        <h3 className="text-h4 leading-[1.26] text-espresso">
          Thank you for reaching out.
        </h3>
        <p className="mt-3 mb-0 text-taupe">
          Your request has been noted in this demo. Dr. Reynolds would follow up
          to find a time that works for you.
        </p>
      </div>
    );
  }

  return (
    <form
      className={card}
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      noValidate
    >
      <label className="mb-3.5 block">
        <span className={fieldLabel}>Name</span>
        <input required type="text" name="name" className={field} />
      </label>
      <label className="mb-3.5 block">
        <span className={fieldLabel}>Email</span>
        <input required type="email" name="email" className={field} />
      </label>
      <label className="mb-[18px] block">
        <span className={fieldLabel}>What brings you in?</span>
        <textarea rows={4} name="message" className={`${field} resize-y`} />
      </label>
      <button type="submit" className={`${primaryButton} w-full`}>
        Request an appointment
      </button>
      <p className="mt-3.5 mb-0 text-[0.72rem] text-taupe">
        This is a design-exercise form and does not send real messages.
      </p>
    </form>
  );
}

export function MayaHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-ivory font-body text-body leading-[1.8] font-light text-espresso antialiased motion-reduce:[&_*]:transition-none!">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-hairline bg-ivory/92 [backdrop-filter:blur(8px)]">
        <div className="flex items-center justify-between gap-8 px-[6%] py-[18px]">
          <a
            href="#top"
            className="leading-[1.1]"
            aria-label={`${THERAPIST.name} — home`}
          >
            <span className="block font-brand text-[1.35rem] text-espresso">
              {THERAPIST.name}
            </span>
            <span className="text-[0.62rem] tracking-[0.22em] text-clay-deep uppercase">
              Licensed Clinical Psychologist
            </span>
          </a>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {NAV.map((i) => (
              <a
                key={i.label}
                href={i.href}
                className="text-[0.72rem] font-medium tracking-[0.14em] text-espresso uppercase hover:text-clay"
              >
                {i.label}
              </a>
            ))}
            <a href="#contact" className={primaryButton}>
              Request an appointment
            </a>
          </nav>
          <button
            className="inline-flex cursor-pointer text-espresso lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
        {menuOpen && (
          <nav
            className="border-t border-hairline px-[6%] pt-2 pb-5"
            aria-label="Mobile"
          >
            {[...NAV, { label: "Request an appointment", href: "#contact" }].map(
              (i) => (
                <a
                  key={i.label}
                  href={i.href}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-hairline py-3 text-[0.8rem] tracking-[0.14em] uppercase"
                >
                  {i.label}
                </a>
              ),
            )}
          </nav>
        )}
      </header>

      <main id="top">
        {/* Hero */}
        <section className={container}>
          <div className="grid grid-cols-1 items-center gap-10 pt-[60px] pb-20 min-[900px]:grid-cols-[1.1fr_0.9fr] min-[900px]:gap-[6%] min-[900px]:pt-[90px] min-[900px]:pb-[100px]">
            <div>
              <p className={`${eyebrow} text-clay-deep`}>{HERO.eyebrow}</p>
              <h1 className="mt-[18px] mb-5 leading-[1.16] text-espresso">
                Find your footing when anxiety, stress, and the past feel like{" "}
                <span className="font-script leading-[0.7] text-clay">
                  too much
                </span>
                .
              </h1>
              <p className="max-w-[32rem] text-[1.1rem] text-taupe">
                {HERO.lead}
              </p>
              <div className="mt-[30px] flex flex-wrap gap-3.5">
                <a href="#contact" className={primaryButton}>
                  Request an appointment
                </a>
                <a href="#approach" className={outlineButton}>
                  Read my approach
                </a>
              </div>
            </div>
            <img
              className="aspect-[4/5] w-full max-w-[420px] justify-self-center rounded-[16px] object-cover [box-shadow:0_30px_60px_-40px_rgba(58,50,44,0.6)] min-[900px]:[justify-self:end]"
              src={MAYA_IMAGES.portrait}
              alt={`Portrait of ${THERAPIST.name}, ${THERAPIST.credential}`}
              fetchPriority="high"
            />
          </div>
        </section>

        {/* About */}
        <section id="about" className={`${section} bg-oat`}>
          <div className="mx-auto max-w-[820px] px-[6%]">
            <p className={`${eyebrow} text-clay-deep`}>About Dr. Reynolds</p>
            <h2 className={`${h2} mt-3.5 mb-6`}>{ABOUT.heading}</h2>
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i} className="text-taupe">
                {p}
              </p>
            ))}
            <p className="mt-2.5 font-semibold text-espresso">
              {ABOUT.credentialLine}
            </p>
          </div>
        </section>

        {/* How I help */}
        <section id="help" className={section}>
          <div className={container}>
            <p className={`${eyebrow} text-clay-deep`}>How I help</p>
            <h2 className={`${h2} mt-3 max-w-[640px]`}>
              Support for thoughtful adults carrying more than they let on.
            </h2>
            <div className="mt-[46px] grid grid-cols-1 gap-[26px] min-[760px]:grid-cols-3">
              {SERVICES.map((s) => (
                <article
                  key={s.title}
                  className="rounded-[16px] border border-hairline bg-ivory px-7 py-8"
                >
                  <h3 className="mb-3.5 text-h4 leading-[1.26] text-espresso">
                    {s.title}
                  </h3>
                  <p className="m-0 text-[0.98rem] text-taupe">{s.body}</p>
                </article>
              ))}
            </div>
            <div className="mt-[30px] flex flex-wrap gap-3" aria-label="Focus areas">
              {FOCUS.map((f) => (
                <span
                  key={f}
                  className="rounded-[999px] border border-hairline bg-ivory px-[18px] py-[9px] text-[0.85rem] text-espresso"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section id="approach" className={`${section} bg-night text-cream`}>
          <div
            className={`${container} grid grid-cols-1 gap-10 [align-items:start] min-[900px]:grid-cols-[0.9fr_1.1fr] min-[900px]:gap-[7%]`}
          >
            <div>
              <p className={`${eyebrow} text-clay`}>My approach</p>
              <h2 className="mt-3.5 mb-[18px] leading-[1.22] text-cream">
                How therapy works with me
              </h2>
              <p className="text-cream/80">{APPROACH.intro}</p>
            </div>
            <div className="grid gap-[26px]">
              {APPROACH.points.map((p) => (
                <div key={p.title}>
                  <h4 className="mb-1.5 text-[1.15rem] leading-[1.34] text-cream">
                    {p.title}
                  </h4>
                  <p className="m-0 text-[0.98rem] text-cream/80">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methods */}
        <section className={section}>
          <div className={container}>
            <p className={`${eyebrow} text-clay-deep`}>Evidence-based methods</p>
            <h2 className={`${h2} mt-3 max-w-[640px]`}>
              Proven tools, tailored to what you’re experiencing.
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-[18px] min-[640px]:grid-cols-2 min-[1000px]:grid-cols-4">
              {METHODS.map((m, i) => (
                <div key={m.name} className="border-t-2 border-clay pt-4">
                  <span className="font-brand text-[1.1rem] text-clay">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className={`${h4} mt-1.5 mb-2 text-[1.05rem]`}>
                    {m.name}
                  </h4>
                  <p className="m-0 text-[0.9rem] text-taupe">{m.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Office */}
        <section id="office" className={`${section} bg-oat`}>
          <div
            className={`${container} grid grid-cols-1 items-center gap-9 min-[900px]:grid-cols-2 min-[900px]:gap-[6%]`}
          >
            <div>
              <p className={`${eyebrow} text-clay-deep`}>Our office</p>
              <h2 className={`${h2} mt-3.5 mb-5`}>{OFFICE.heading}</h2>
              {OFFICE.paragraphs.map((p, i) => (
                <p key={i} className="text-taupe">
                  {p}
                </p>
              ))}
              <div className={detailRow}>
                <MapPin size={20} aria-hidden="true" className={detailIcon} />
                <Address />
              </div>
              <div className={detailRow}>
                <Video size={20} aria-hidden="true" className={detailIcon} />
                <span>Secure telehealth across California</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3.5">
              <img
                className="row-span-2 h-full min-h-[320px] w-full rounded-[14px] object-cover"
                src={MAYA_IMAGES.office1}
                alt="Dr. Reynolds’ Santa Monica therapy office with natural light"
                loading="lazy"
              />
              <img
                className="h-full min-h-[220px] w-full rounded-[14px] object-cover"
                src={MAYA_IMAGES.office2}
                alt="A calm, uncluttered corner of the therapy office"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className={section}>
          <div className={container}>
            <p className={`${eyebrow} text-center text-clay-deep`}>Questions</p>
            <h2 className={`${h2} mt-3 text-center`}>Frequently asked</h2>
            <div className="mx-auto mt-11 max-w-[820px]">
              {FAQS.map((f, i) => (
                <FaqItem
                  key={f.q}
                  q={f.q}
                  a={f.a}
                  open={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className={`${section} bg-oat`}>
          <div
            className={`${container} grid grid-cols-1 items-center gap-9 min-[900px]:grid-cols-[1.1fr_0.9fr] min-[900px]:gap-[6%]`}
          >
            <div>
              <p className={`${eyebrow} text-clay-deep`}>Get started</p>
              <h2 className={`${h2} mt-3.5 mb-[18px]`}>{CONTACT.heading}</h2>
              <p className="max-w-[34rem] text-taupe">{CONTACT.body}</p>
              <div className={detailRow}>
                <MapPin size={20} aria-hidden="true" className={detailIcon} />
                <Address />
              </div>
              <div className={detailRow}>
                <ArrowRight size={20} aria-hidden="true" className={detailIcon} />
                <span>{THERAPIST.modalities}</span>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-night text-mist">
        <div className="grid grid-cols-1 gap-7 px-[6%] pt-[60px] pb-[30px] min-[760px]:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="m-0 font-brand text-[1.3rem]">{THERAPIST.name}</p>
            <p className="mt-1 mb-0 text-[0.7rem] tracking-[0.18em] text-clay uppercase">
              {THERAPIST.credential}
            </p>
            <Address className="mt-4 text-[0.9rem] opacity-85" />
          </div>
          <div>
            <p className="mb-3.5 text-[0.7rem] tracking-[0.16em] text-clay uppercase">
              Explore
            </p>
            <div className="flex flex-col gap-2 text-[0.9rem]">
              {[...NAV, { label: "Contact", href: "#contact" }].map((i) => (
                <a
                  key={i.label}
                  href={i.href}
                  className="text-mist hover:text-clay"
                >
                  {i.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3.5 text-[0.7rem] tracking-[0.16em] text-clay uppercase">
              Sessions
            </p>
            <p className="text-[0.9rem] opacity-85">{THERAPIST.modalities}</p>
          </div>
        </div>
        <div className="border-t border-[rgba(255,255,255,0.12)] px-[6%] py-4 text-[0.72rem] text-[rgba(233,224,212,0.6)]">
          {THERAPIST.disclaimer}
        </div>
      </footer>
    </div>
  );
}

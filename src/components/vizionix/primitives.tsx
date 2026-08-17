import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Section({
  children,
  className,
  id,
  label,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  label?: string;
}) {
  return (
    <section
      id={id}
      aria-label={label}
      className={cn(
        "border-b border-line px-6 py-14 last:border-b-0 sm:px-10 md:py-20 lg:px-20",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-accent">
      {children}
    </p>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <Reveal as="h2" className="mb-8 text-2xl font-bold md:text-[1.6rem]">
      {children}
    </Reveal>
  );
}

export function Lede({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("mt-4 max-w-[54ch] text-[1.05rem] text-muted-foreground", className)}>
      {children}
    </p>
  );
}

export function CtaLink({
  to,
  children,
  className,
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "group mt-8 inline-flex items-center gap-2 border-b border-accent pb-[3px] text-[0.95rem] font-semibold text-foreground transition-colors hover:text-accent-strong focus-visible:text-accent-strong",
        className,
      )}
    >
      <span>{children}</span>
      <span
        aria-hidden
        className="transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}

export function Hero({
  eyebrow,
  title,
  lede,
  cta = true,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  cta?: boolean;
}) {
  return (
    <Section className="pt-12 md:pt-24">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="rise max-w-[18ch] text-[clamp(2.1rem,4.4vw,3.4rem)] font-bold leading-[1.15]">
        {title}
      </h1>
      <p
        className="rise mt-6 max-w-[54ch] text-[1.08rem] text-muted-foreground"
        style={{ animationDelay: "0.08s" }}
      >
        {lede}
      </p>
      {cta ? (
        <CtaLink to="/contact" className="rise" >
          Prendre rendez-vous
        </CtaLink>
      ) : null}
    </Section>
  );
}

export function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex list-none flex-col gap-4 p-0">
      {items.map((item, i) => (
        <Reveal as="li" key={item} delay={i * 70} className="vz-diamond pl-6 text-base before:top-[0.55em]">
          {item}
        </Reveal>
      ))}
    </ul>
  );
}

export function CtaBand({ title, text, eyebrow }: { title: string; text: string; eyebrow?: string }) {
  return (
    <Section>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <SectionLabel>{title}</SectionLabel>
      <Lede className="mt-0">{text}</Lede>
      <CtaLink to="/contact">Prendre rendez-vous</CtaLink>
    </Section>
  );
}

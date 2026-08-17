import type { Partner } from "@/content/team";
import { Reveal } from "./Reveal";

export function TeamCard({ partner, delay = 0 }: { partner: Partner; delay?: number }) {
  return (
    <Reveal as="article" delay={delay} className="flex flex-col gap-[1.1rem]">
      <div
        aria-hidden
        className="flex size-14 items-center justify-center border border-line bg-surface-2 font-display text-[1.05rem] font-bold text-accent-strong"
      >
        {partner.initials}
      </div>
      <div>
        <h3 className="font-display text-[1.2rem] font-bold">{partner.name}</h3>
        <p className="mt-1 text-[0.86rem] text-accent">{partner.title}</p>
        <p className="mt-[0.15rem] text-[0.8rem] text-muted-foreground">{partner.credential}</p>
      </div>
      <p className="max-w-[46ch] text-[0.94rem] text-muted-foreground">{partner.bio}</p>
      <ul className="flex list-none flex-col gap-2 p-0 text-[0.86rem] text-muted-foreground">
        {partner.highlights.map((h) => (
          <li key={h} className="relative pl-4 before:absolute before:left-0 before:text-accent before:content-['–']">
            {h}
          </li>
        ))}
      </ul>
      <p className="border-t border-line pt-4 font-mono text-[0.74rem] tracking-[0.02em] text-accent-strong">
        {partner.tags}
      </p>
    </Reveal>
  );
}

import logo from "@/assets/vizionix-logo.png";
import { SITE } from "@/content/site";

function Row({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-accent">{term}</dt>
      <dd className="mt-[0.2rem] text-[0.94rem]">{children}</dd>
    </div>
  );
}

export function Letterhead() {
  return (
    <div className="border border-line bg-surface p-8">
      <img src={logo} alt="VIZIONIX" className="mb-[0.4rem] block h-[26px] w-auto" />
      <p className="mt-[0.3rem] text-[0.76rem] text-muted-foreground">{SITE.legal}</p>
      <dl className="mt-7 flex flex-col gap-[0.9rem]">
        <Row term="Siège social">
          {SITE.address}{" "}
          <a
            href={SITE.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-line text-accent-strong no-underline hover:border-accent-strong"
          >
            (voir sur la carte)
          </a>
        </Row>
        <Row term="Téléphone">
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className="border-b border-line text-accent-strong no-underline hover:border-accent-strong"
          >
            {SITE.phone}
          </a>
        </Row>
        <Row term="Fax">{SITE.fax}</Row>
        <Row term="Identifiants">{SITE.identifiers}</Row>
      </dl>
    </div>
  );
}

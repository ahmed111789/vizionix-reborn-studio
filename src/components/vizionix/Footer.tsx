import { SITE } from "@/content/site";

export function Footer() {
  return (
    <footer className="flex flex-wrap justify-between gap-4 border-t border-line px-6 py-9 text-[0.78rem] text-muted-foreground sm:px-10 lg:px-20">
      <span className="font-display font-bold tracking-[0.04em] text-foreground">{SITE.name}</span>
      <span>{SITE.tagline}</span>
      <span>{SITE.copyright}</span>
    </footer>
  );
}

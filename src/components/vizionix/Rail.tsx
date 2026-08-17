import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/vizionix-logo.png";
import { EXPERTISES } from "@/content/expertises";
import { SITE } from "@/content/site";
import { cn } from "@/lib/utils";

const MAIN_LINKS = [
  { to: "/", label: "Accueil" },
  { to: "/apropos", label: "À propos" },
  { to: "/contact", label: "Contact" },
];

function NavLink({
  to,
  children,
  onNavigate,
  className,
}: {
  to: string;
  children: React.ReactNode;
  onNavigate?: () => void;
  className?: string;
}) {
  return (
    <Link
      to={to}
      onClick={onNavigate}
      activeOptions={{ exact: to === "/" }}
      activeProps={{ "data-active": "true" }}
      className={cn(
        "relative w-fit pb-[2px] text-muted-foreground no-underline transition-colors",
        "after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-[width] after:duration-200",
        "hover:text-foreground hover:after:w-full focus-visible:text-foreground focus-visible:after:w-full",
        "data-[active=true]:text-foreground data-[active=true]:after:w-full",
        className,
      )}
    >
      {children}
    </Link>
  );
}

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav aria-label="Navigation principale" className="flex flex-col gap-[0.9rem] text-[0.92rem]">
      <NavLink to="/" onNavigate={onNavigate}>
        Accueil
      </NavLink>
      <span className="w-fit pb-[2px] text-[0.92rem] text-muted-foreground">Expertises</span>
      <div className="ml-[0.9rem] flex flex-col gap-[0.6rem] border-l border-line pl-[0.9rem]">
        {EXPERTISES.map((e) => (
          <NavLink key={e.slug} to={e.slug} onNavigate={onNavigate} className="font-mono text-[0.78rem]">
            <span className="mr-2 text-accent">{e.code}</span>
            {e.name}
          </NavLink>
        ))}
      </div>
      {MAIN_LINKS.slice(1).map((l) => (
        <NavLink key={l.to} to={l.to} onNavigate={onNavigate}>
          {l.label}
        </NavLink>
      ))}
    </nav>
  );
}

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <div>
      <Link to="/" aria-label="VIZIONIX — accueil" className="block w-fit">
        <img src={logo} alt="VIZIONIX" className={cn("block w-auto", compact ? "h-7" : "h-[34px]")} />
      </Link>
      {!compact ? (
        <p className="mt-[0.9rem] max-w-[20ch] text-[0.78rem] tracking-[0.02em] text-muted-foreground">
          {SITE.tagline}
        </p>
      ) : null}
    </div>
  );
}

export function Rail() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Desktop rail */}
      <aside className="sticky top-0 hidden h-screen flex-col justify-between border-r border-line px-8 py-11 lg:flex">
        <Brand />
        <div className="mt-12">
          <NavList />
        </div>
        <div className="flex flex-col gap-[0.35rem] text-[0.8rem] text-muted-foreground">
          <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="w-fit no-underline hover:text-foreground">
            {SITE.phone}
          </a>
          <span>{SITE.addressShort}</span>
          <span className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.03em] text-accent">
            {SITE.meta}
          </span>
        </div>
      </aside>

      {/* Mobile / tablet bar */}
      <header className="sticky top-0 z-40 border-b border-line bg-background lg:hidden">
        <div className="flex items-center justify-between px-6 py-4">
          <Brand compact />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="vz-mobile-nav"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="inline-flex size-11 items-center justify-center border border-line text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
        {open ? (
          <div id="vz-mobile-nav" className="border-t border-line px-6 py-6">
            <NavList onNavigate={() => setOpen(false)} />
            <div className="mt-6 flex flex-col gap-1 border-t border-line pt-4 text-[0.8rem] text-muted-foreground">
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="w-fit no-underline">
                {SITE.phone}
              </a>
              <span>{SITE.addressShort}</span>
            </div>
          </div>
        ) : null}
      </header>
    </>
  );
}

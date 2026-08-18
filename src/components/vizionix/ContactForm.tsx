import { useState } from "react";
import { z } from "zod";
import { CONTACT_EMAIL } from "@/content/site";
import { EXPERTISES } from "@/content/expertises";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Merci d'indiquer votre nom complet." })
    .max(100, { message: "Le nom ne peut pas dépasser 100 caractères." }),
  email: z
    .string()
    .trim()
    .email({ message: "Adresse e-mail invalide." })
    .max(255, { message: "L'adresse e-mail ne peut pas dépasser 255 caractères." }),
  service: z.enum(["Comptabilité", "Audit", "Organisation", "Droit", "Fiscalité"]),
  message: z
    .string()
    .trim()
    .min(10, { message: "Décrivez votre besoin en quelques mots (10 caractères minimum)." })
    .max(2000, { message: "Le message ne peut pas dépasser 2000 caractères." }),
});

type Values = z.infer<typeof schema>;
type Errors = Partial<Record<keyof Values, string>>;

const fieldBase =
  "w-full border-0 border-b border-line bg-transparent px-[0.1rem] py-[0.55rem] font-[inherit] text-foreground rounded-none transition-colors focus:border-accent focus:outline-none";

export function ContactForm() {
  const [values, setValues] = useState<Values>({
    name: "",
    email: "",
    service: "Comptabilité",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof Values) => (v: string) => {
    setValues((prev) => ({ ...prev, [key]: v }) as Values);
    setErrors((prev) => ({ ...prev, [key]: undefined }));
    setSent(false);
  };

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Values;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    const d = parsed.data;
    const subject = `Demande de rendez-vous — ${d.service} — ${d.name}`;
    const body = [
      `Nom complet : ${d.name}`,
      `E-mail : ${d.email}`,
      `Domaine concerné : ${d.service}`,
      "",
      d.message,
    ].join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="name" label="Nom complet" error={errors.name}>
          <input
            id="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => set("name")(e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={cn(fieldBase, errors.name && "border-destructive")}
          />
        </Field>
        <Field id="email" label="E-mail" error={errors.email}>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => set("email")(e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={cn(fieldBase, errors.email && "border-destructive")}
          />
        </Field>
      </div>

      <Field id="service" label="Domaine concerné" error={errors.service}>
        <select
          id="service"
          value={values.service}
          onChange={(e) => set("service")(e.target.value)}
          className={cn(fieldBase)}
        >
          {EXPERTISES.map((e) => (
            <option key={e.code} value={e.name}>
              {e.name}
            </option>
          ))}
        </select>
      </Field>

      <Field id="message" label="Message" error={errors.message}>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={(e) => set("message")(e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(fieldBase, "min-h-20 resize-y", errors.message && "border-destructive")}
        />
      </Field>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="min-h-11 cursor-pointer border-0 bg-accent px-8 py-[0.85rem] text-[0.92rem] font-semibold text-accent-contrast transition-colors hover:bg-accent-strong"
        >
          Demander un rendez-vous
        </button>
        <p aria-live="polite" className="text-[0.82rem] text-muted-foreground">
          {sent
            ? "Votre logiciel de messagerie s'ouvre avec le message pré-rempli. Il ne reste qu'à l'envoyer."
            : ""}
        </p>
      </div>
      <p className="text-[0.78rem] text-muted-foreground">
        Vous pouvez aussi écrire directement à{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="border-b border-line text-accent-strong no-underline hover:border-accent-strong"
        >
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-[0.4rem]">
      <label htmlFor={id} className="text-[0.75rem] uppercase tracking-[0.06em] text-muted-foreground">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-[0.78rem] text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

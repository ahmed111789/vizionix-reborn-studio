import { createFileRoute } from "@tanstack/react-router";
import { ExpertisePage } from "@/components/vizionix/ExpertisePage";
import { EXPERTISES } from "@/content/expertises";

const expertise = EXPERTISES[3];
const title = `${expertise.name} — VIZIONIX`;

export const Route = createFileRoute("/droit")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: expertise.desc },
      { property: "og:title", content: title },
      { property: "og:description", content: expertise.desc },
    ],
  }),
  component: Page,
});

function Page() {
  return <ExpertisePage expertise={expertise} />;
}

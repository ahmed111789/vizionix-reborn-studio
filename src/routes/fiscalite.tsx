import { createFileRoute } from "@tanstack/react-router";
import { ExpertisePage } from "@/components/vizionix/ExpertisePage";
import { getExpertise } from "@/content/expertises";

const expertise = getExpertise("/fiscalite");
const title = `${expertise.name} — VIZIONIX`;

export const Route = createFileRoute("/fiscalite")({
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

import { createFileRoute } from "@tanstack/react-router";
import { ExpertisePage } from "@/components/vizionix/ExpertisePage";
import { getExpertise } from "@/content/expertises";

const expertise = getExpertise("/audit");
const title = `${expertise.name} — VIZIONIX`;

export const Route = createFileRoute("/audit")({
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

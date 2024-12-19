import { FEATURED_WORKFLOWS } from "@/lib/constants/workflows";
import { CanvasClient } from "@/components/canvas/CanvasClient";

// Generate static paths for all workflows
export async function generateStaticParams() {
  return [
    { workflowId: 'scratch' },
    ...FEATURED_WORKFLOWS.map(workflow => ({
      workflowId: workflow.id
    }))
  ];
}

// Server Component
export default function CanvasPage({
  params
}: {
  params: { workflowId: string }
}) {
  return <CanvasClient workflowId={params.workflowId} />;
}
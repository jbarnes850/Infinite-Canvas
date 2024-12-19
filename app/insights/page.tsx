"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResourceMonitor } from "@/components/performance/ResourceMonitor";
import { TrainingMetrics } from "@/components/performance/TrainingMetrics";
import { ModelInsights } from "@/components/feedback/ModelInsights";
import { StyleFeedback } from "@/components/feedback/StyleFeedback";

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12 max-w-7xl space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Training Insights</h1>
            <p className="text-muted-foreground">
              Real-time performance metrics and model analysis
            </p>
          </div>
        </div>

        <Tabs defaultValue="feedback" className="space-y-8">
          <TabsList>
            <TabsTrigger value="feedback">Style Analysis</TabsTrigger>
            <TabsTrigger value="training">Training Progress</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>

          <TabsContent value="feedback" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <StyleFeedback />
              <ModelInsights />
            </div>
          </TabsContent>

          <TabsContent value="training" className="space-y-6">
            <TrainingMetrics />
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <ResourceMonitor />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
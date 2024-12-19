"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export function TrainingMetrics() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Training Progress</CardTitle>
            <Badge variant="secondary">Step 450/1000</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Overall Progress</span>
                <span className="text-muted-foreground">45%</span>
              </div>
              <Progress value={45} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1">
                <span className="text-sm font-medium">Loss</span>
                <p className="text-2xl font-bold">0.342</p>
                <p className="text-xs text-muted-foreground">
                  ↓ 0.015 from last step
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-sm font-medium">Learning Rate</span>
                <p className="text-2xl font-bold">2.5e-5</p>
                <p className="text-xs text-muted-foreground">
                  Using cosine schedule
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-sm font-medium">Time Remaining</span>
                <p className="text-2xl font-bold">~12 min</p>
                <p className="text-xs text-muted-foreground">
                  2.1s per step
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
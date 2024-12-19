"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ModelInsights() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Model Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium mb-2">Style Adaptation</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Color harmony improved</Badge>
              <Badge variant="secondary">Composition stable</Badge>
              <Badge variant="secondary">Brand alignment strong</Badge>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">Learning Progress</h4>
            <div className="space-y-2 text-sm">
              <p>• Strong grasp of brand color palette</p>
              <p>• Consistent style transfer across variations</p>
              <p>• Maintaining structural integrity</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">Suggestions</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• Consider adding more diverse lighting conditions</p>
              <p>• Brand elements could be more prominent</p>
              <p>• Style consistency is improving</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
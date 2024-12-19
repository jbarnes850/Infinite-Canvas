"use client";

import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip
} from "recharts";
import { Card } from "@/components/ui/card";

interface LineChartProps {
  data: any[];
  dataKey: string;
  stroke?: string;
  title: string;
  yAxisDomain?: [number, number];
  formatValue?: (value: number) => string;
}

export function LineChart({
  data,
  dataKey,
  stroke = "hsl(var(--primary))",
  title,
  yAxisDomain,
  formatValue = (value) => `${value}`
}: LineChartProps) {
  return (
    <Card className="p-4">
      <h3 className="text-sm font-medium mb-4">{title}</h3>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
            <XAxis 
              dataKey="timestamp"
              tickFormatter={(value) => new Date(value).toLocaleTimeString()}
              stroke="hsl(var(--muted-foreground))"
            />
            <YAxis 
              domain={yAxisDomain}
              stroke="hsl(var(--muted-foreground))"
              tickFormatter={formatValue}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)"
              }}
              formatter={(value: number) => [formatValue(value), title]}
              labelFormatter={(label) => new Date(label).toLocaleTimeString()}
            />
            <Line
              type="monotone"
              dataKey={dataKey}
              stroke={stroke}
              strokeWidth={2}
              dot={false}
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
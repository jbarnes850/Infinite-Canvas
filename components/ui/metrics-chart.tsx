"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  XAxisProps,
  YAxisProps,
} from "recharts";

interface MetricsChartProps {
  data: any[];
  height?: number;
  lines: {
    key: string;
    color: string;
    label: string;
  }[];
  xAxis?: Partial<XAxisProps>;
  yAxis?: Partial<YAxisProps>;
}

export function MetricsChart({
  data,
  height = 200,
  lines,
  xAxis,
  yAxis,
}: MetricsChartProps) {
  return (
    <div style={{ height: height }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="timestamp"
            tickFormatter={(ts) => new Date(ts).toLocaleTimeString()}
            {...xAxis}
          />
          <YAxis {...yAxis} />
          <Tooltip
            labelFormatter={(ts) => new Date(Number(ts)).toLocaleTimeString()}
            formatter={(value, name, props) => {
              const line = lines.find(l => l.key === props.dataKey);
              return [`${Number(value).toFixed(1)}${line?.label || ''}`, name];
            }}
          />
          {lines.map(({ key, color }) => (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              stroke={color}
              strokeWidth={2}
              dot={false}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const scenarioData = {
  Bull: [
    { year: "2026", cashflow: 150000 },
    { year: "2027", cashflow: 180000 },
    { year: "2028", cashflow: 220000 },
    { year: "2029", cashflow: 260000 },
    { year: "2030", cashflow: 300000 },
    { year: "2031", cashflow: 340000 },
  ],

  Base: [
    { year: "2026", cashflow: 100000 },
    { year: "2027", cashflow: 120000 },
    { year: "2028", cashflow: 150000 },
    { year: "2029", cashflow: 180000 },
    { year: "2030", cashflow: 210000 },
    { year: "2031", cashflow: 240000 },
  ],

  Bear: [
    { year: "2026", cashflow: 70000 },
    { year: "2027", cashflow: 80000 },
    { year: "2028", cashflow: 90000 },
    { year: "2029", cashflow: 100000 },
    { year: "2030", cashflow: 110000 },
    { year: "2031", cashflow: 120000 },
  ],
};
export default function CashflowChart({
  scenario,
}: {
  scenario: "Bull" | "Base" | "Bear";
}) {

  const data = scenarioData[scenario];

  const lineColors = {
    Bull: "#22c55e",
    Base: "#3b82f6",
    Bear: "#ef4444",
  };

  return (
    <div className="bg-gray-900 p-4 rounded-lg">
      <h3 className="font-semibold mb-4">
        Cashflow Projection
      </h3>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip
              formatter={(value) =>
                `$${Number(value).toLocaleString()}`
              }
            />
            <Line
              type="monotone"
              dataKey="cashflow"
              stroke={lineColors[scenario]}
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
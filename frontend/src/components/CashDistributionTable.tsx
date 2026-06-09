"use client";

export default function CashDistributionTable({
  scenario,
}: {
  scenario: "Bull" | "Base" | "Bear";
}) {
  const distributions = {
    Bull: [
      { year: 2026, investors: "$1.2M", sponsor: "$0.4M" },
      { year: 2027, investors: "$1.4M", sponsor: "$0.5M" },
      { year: 2028, investors: "$1.7M", sponsor: "$0.6M" },
      { year: 2029, investors: "$2.0M", sponsor: "$0.8M" },
    ],
    Base: [
      { year: 2026, investors: "$0.9M", sponsor: "$0.3M" },
      { year: 2027, investors: "$1.0M", sponsor: "$0.4M" },
      { year: 2028, investors: "$1.2M", sponsor: "$0.4M" },
      { year: 2029, investors: "$1.5M", sponsor: "$0.5M" },
    ],
    Bear: [
      { year: 2026, investors: "$0.5M", sponsor: "$0.2M" },
      { year: 2027, investors: "$0.6M", sponsor: "$0.2M" },
      { year: 2028, investors: "$0.7M", sponsor: "$0.2M" },
      { year: 2029, investors: "$0.8M", sponsor: "$0.3M" },
    ],
  };

  return (
    <div className="bg-gray-900 rounded-lg p-4 mt-6">
      <h3 className="text-lg font-semibold mb-4">
        Cash Distribution Table
      </h3>

      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="text-left py-2">Year</th>
            <th className="text-left py-2">Investors</th>
            <th className="text-left py-2">Sponsor</th>
          </tr>
        </thead>

        <tbody>
          {distributions[scenario].map((row) => (
            <tr key={row.year}>
              <td className="py-2">{row.year}</td>
              <td>{row.investors}</td>
              <td>{row.sponsor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
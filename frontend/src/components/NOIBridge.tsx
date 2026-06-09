"use client";

export default function NOIBridge({
  scenario,
}: {
  scenario: "Bull" | "Base" | "Bear";
}) {
  const data = {
    Bull: {
      income: 3000000,
      vacancy: -150000,
      expenses: -500000,
      noi: 2350000,
    },
    Base: {
      income: 2500000,
      vacancy: -200000,
      expenses: -600000,
      noi: 1700000,
    },
    Bear: {
      income: 2000000,
      vacancy: -350000,
      expenses: -700000,
      noi: 950000,
    },
  };

  const current = data[scenario];

  const formatMillions = (value: number) => {
    return `$${(value / 1000000).toFixed(2)}M`;
  };

  return (
    <div className="bg-gray-900 rounded-lg p-4 mt-6">
      <h3 className="text-lg font-semibold mb-4">
        NOI Bridge
      </h3>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-gray-800 p-4 rounded">
          <p className="text-gray-400">Rental Income</p>
          <h4 className="text-xl font-bold">
            {formatMillions(current.income)}
          </h4>
        </div>

        <div className="bg-gray-800 p-4 rounded">
          <p className="text-gray-400">Vacancy Loss</p>
          <h4 className="text-xl font-bold">
            {formatMillions(current.vacancy)}
          </h4>
        </div>

        <div className="bg-gray-800 p-4 rounded">
          <p className="text-gray-400">Expenses</p>
          <h4 className="text-xl font-bold">
            {formatMillions(current.expenses)}
          </h4>
        </div>

        <div className="bg-gray-800 p-4 rounded">
          <p className="text-gray-400">NOI</p>
          <h4 className="text-xl font-bold">
            {formatMillions(current.noi)}
          </h4>
        </div>
      </div>
    </div>
  );
}
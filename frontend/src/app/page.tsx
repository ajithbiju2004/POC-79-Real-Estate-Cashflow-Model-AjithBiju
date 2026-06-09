
"use client";

import NOIBridge from "@/components/NOIBridge";
import CashflowChart from "@/components/CashflowChart";
import CashDistributionTable from "@/components/CashDistributionTable";
import { useState } from "react";


export default function Home() {

  const [scenario, setScenario] = useState<"Bull" | "Base" | "Bear">("Base");

  const [selectedStage, setSelectedStage] = useState("Data Ingest");

  const metrics = {
    Bull: {
      occupancy: "99%",
      noi: "$2.8M",
      cashflow: "$1.9M",
      debtService: "$850K",
      capRate: "7.2%",
    },
    Base: {
      occupancy: "94%",
      noi: "$2.4M",
      cashflow: "$1.5M",
      debtService: "$900K",
      capRate: "6.5%",
    },
    Bear: {
      occupancy: "79%",
      noi: "$1.8M",
      cashflow: "$900K",
      debtService: "$950K",
      capRate: "5.4%",
    },
  };

  const currentMetrics =
    metrics[scenario as keyof typeof metrics];

  const stageDescriptions = {

    "Data Ingest":
      "Uses synthetic property-level rent, occupancy, expense and debt data modeled after institutional real estate portfolios.",

    ETL:
      "Transforms raw property data into NOI, cashflow and debt service metrics.",

    "Cashflow Engine":
      "Calculates distributions, NOI, debt coverage and scenario outcomes.",

    Visualization:
      "Renders charts, KPI cards, NOI bridge and distribution tables.",
  };

  const scenarioIntelligence = {
    Bull: {
      title: "Growth Environment",
      text:
        "Strong rent growth and high occupancy increase NOI and investor distributions.",
    },

    Base: {
      title: "Stable Environment",
      text:
        "Properties maintain predictable cashflows with moderate risk exposure.",
    },

    Bear: {
      title: "Stress Environment",
      text:
        "Vacancy pressure and slower rent growth reduce NOI and investor returns.",
    },
  };

  const scenarioColor =
  scenario === "Bull"
    ? "text-green-400"
    : scenario === "Bear"
    ? "text-red-400"
    : "text-blue-400";

  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <div className="border-b border-gray-800 p-4">
        <h1 className="text-3xl font-bold">
          Real Estate Cashflow Model
        </h1>
        <p className="text-gray-400">
          Capital Formation Intelligence Dashboard
        </p>
      </div>

      <div className="flex gap-3 mb-6 p-6">
        <button
          onClick={() => setScenario("Bull")}
          className="bg-green-700 px-4 py-2 rounded"
        >
          Bull Case
        </button>

        <button
          onClick={() => setScenario("Base")}
          className="bg-blue-700 px-4 py-2 rounded"
        >
          Base Case
        </button>

        <button
          onClick={() => setScenario("Bear")}
          className="bg-red-700 px-4 py-2 rounded"
        >
          Bear Case
        </button>
      </div>

      <div className="mb-4 text-gray-300">
        Active Scenario: <span className="font-bold">{scenario}</span>
      </div>

      <div className="flex h-[calc(100vh-90px)]">
        {/* Main Dashboard Area */}
        <div className="w-[70%] p-6 border-r border-gray-800">
          <h2 className="text-xl font-semibold mb-4">
            Property Dashboard
          </h2>

          <div className="grid grid-cols-3 gap-4">
            <div
              className="bg-gray-900 rounded-lg p-4"
              title="Net Operating Income after operating expenses"
            >
              <p className="text-gray-400">Properties</p>
              <h3 className="text-2xl font-bold">50</h3>
            </div>

            <div
              className="bg-gray-900 rounded-lg p-4"
              title="Net Operating Income after operating expenses"
            >
              <p className="text-gray-400">NOI</p>
              <h3 className="text-2xl font-bold">
                {currentMetrics.noi}
              </h3>
            </div>

            <div
              className="bg-gray-900 rounded-lg p-4"
              title="Net Operating Income after operating expenses"
            >
              <p className="text-gray-400">Occupancy</p>
              <h3 className="text-2xl font-bold">
                {currentMetrics.occupancy}
              </h3>
            </div>

            <div
              className="bg-gray-900 rounded-lg p-4"
              title="Net Operating Income after operating expenses"
            >
              <p className="text-gray-400">Cash Flow</p>
              <h3 className="text-2xl font-bold">
                {currentMetrics.cashflow}
              </h3>
            </div>

            <div
              className="bg-gray-900 rounded-lg p-4"
              title="Net Operating Income after operating expenses"
            >
              <p className="text-gray-400">Debt Services</p>
              <h3 className="text-2xl font-bold">
                {currentMetrics.debtService}
              </h3>
            </div>

            <div
              className="bg-gray-900 rounded-lg p-4"
              title="Net Operating Income after operating expenses"
            >
              <p className="text-gray-400">Cap Rate</p>
              <h3 className="text-2xl font-bold">
                {currentMetrics.capRate}
              </h3>
            </div>

          </div>

          <div className="mt-6">
            <CashflowChart scenario={scenario} />
          </div>

          <NOIBridge scenario={scenario} />

          <CashDistributionTable scenario={scenario} />

          
        </div>

        {/* Sidebar */}
        <div className="w-[30%] p-6">
          <h2 className="text-xl font-semibold mb-4">
            Intelligence Panel
          </h2>

          <div className="bg-gray-900 rounded-lg p-4 mb-4">
            <h3 className="font-semibold">
              Handshake Status
            </h3>

            <div className="space-y-2">
              <button
                onClick={() => setSelectedStage("Data Ingest")}
                className="block text-left hover:text-blue-400"
              >
                ✓ Data Ingest
              </button>

              <button
                onClick={() => setSelectedStage("ETL")}
                className="block text-left hover:text-blue-400"
              >
                ✓ ETL
              </button>

              <button
                onClick={() => setSelectedStage("Cashflow Engine")}
                className="block text-left hover:text-blue-400"
              >
                ✓ Cashflow Engine
              </button>

              <button
                onClick={() => setSelectedStage("Visualization")}
                className="block text-left hover:text-blue-400"
              >
                ✓ Visualization
              </button>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-4 mt-4">
            <h3 className="font-semibold mb-2">
              Stage Intelligence
            </h3>

            <p className="text-gray-400">
              {
                stageDescriptions[
                  selectedStage as keyof typeof stageDescriptions
                ]
              }
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-4 mb-4">
            <h3 className="font-semibold mb-2">
              Scenario Intelligence
            </h3>

            <p className={`${scenarioColor} font-semibold`}>
              {scenarioIntelligence[scenario].title}
            </p>

            <p className="text-gray-400 mt-2">
              {scenarioIntelligence[scenario].text}
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-4">
            <h3 className="font-semibold">
              Why This Matters
            </h3>

            <p className="text-gray-400 mt-2">
              Real estate converts capital into income-producing assets.
              Understanding NOI, debt service, occupancy and cash
              distributions helps investors evaluate portfolio risk,
              financing exposure and long-term returns.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-4 mt-4">
            <h3 className="font-semibold">
              Who Controls The Rail
            </h3>

            <ul className="mt-2 space-y-2 text-gray-400">
              <li>Property Owners</li>
              <li>Banks</li>
              <li>Lenders</li>
              <li>REIT Managers</li>
              <li>Institutional Investors</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg p-4 mt-4">
            <h3 className="font-semibold">
              Data Sources
            </h3>

            <ul className="mt-2 text-gray-400 space-y-2">
              <li>Zillow Research</li>
              <li>FRED Economic Data</li>
              <li>Synthetic Property Portfolio Data</li>
            </ul>
          </div>

          <a
            href="/real_estate_sample_data.csv"
            download
            className="inline-block bg-blue-600 px-4 py-2 rounded ml-4"
          >
            Download Sample Data
          </a>

        </div>
      </div>
    </main>
  );
}
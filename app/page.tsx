'use client';

import CalculatorForm from '@/app/components/forms/CalculatorForm';
import RoiChart from '@/app/components/charts/RoiChart';
import { useRoiCalculation } from '@/app/hooks/useRoiCalculation';

export default function Home() {
  // Move the hook here to share state between components
  const { data, result, errors, handleChange, handleSubmit } = useRoiCalculation();

  return (
      <main className="min-h-screen bg-[#1f2225] py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-8 text-center">
            Real Estate ROI Calculator
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <CalculatorForm
                  data={data}
                  errors={errors}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-[#0d5256]">ROI Visualization</h2>
                <p className="text-gray-600 text-sm">Your investment breakdown</p>
              </div>
              <RoiChart data={result} />

              {result && (
                  <div className="mt-6 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cash Invested:</span>
                      <span className="font-medium text-[#0d5256]">${result.cashInvested.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Net Annual Income:</span>
                      <span className="font-medium text-[#0d5256]">${result.netAnnualIncome.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">ROI Percentage:</span>
                      <span className="font-medium text-[#0d5256]">{result.roiPercentage}%</span>
                    </div>
                  </div>
              )}
            </div>
          </div>
        </div>
      </main>
  );
}
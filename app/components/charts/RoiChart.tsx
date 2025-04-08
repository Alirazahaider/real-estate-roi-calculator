// src/components/charts/RoiChart.tsx
'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { RoiResult } from '@/app/types/calculator';

const COLORS = ['#0d5256', '#5ab1bb', '#a3d5dc'];

interface RoiChartProps {
    data?: RoiResult | null;
}

const RoiChart = ({ data }: RoiChartProps) => {
    if (!data) {
        return (
            <div className="h-80 flex items-center justify-center bg-gray-50 rounded-lg">
                <p className="text-gray-500">Submit the form to see ROI visualization</p>
            </div>
        );
    }

    const chartData = [
        { name: 'Cash Invested', value: data.cashInvested },
        { name: 'Net Annual Income', value: data.netAnnualIncome },
        { name: 'ROI %', value: data.roiPercentage }
    ];

    return (
        <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Value']} />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RoiChart;
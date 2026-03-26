import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid,
    ResponsiveContainer
} from "recharts";

const gymData = [
    { name: "Week 1", weight: 80, calories: 2200, strength: 40 },
    { name: "Week 2", weight: 78, calories: 2100, strength: 45 },
    { name: "Week 3", weight: 77, calories: 2000, strength: 50 },
    { name: "Week 4", weight: 75, calories: 1950, strength: 55 },
    { name: "Week 5", weight: 74, calories: 1900, strength: 60 }
];

const ResultCharts = () => {
    return (
        <div className="max-w-5xl mx-auto my-16 p-6 bg-gray-900 text-white rounded-2xl">

            <h2 className="text-2xl font-bold mb-6 text-center">
                Member Progress Overview
            </h2>

            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={gymData}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="name" />
                    <YAxis />

                    <Tooltip />
                    <Legend />

                    <Line
                        type="monotone"
                        dataKey="weight"
                        stroke="#facc15"
                        strokeWidth={3}
                    />

                    <Line
                        type="monotone"
                        dataKey="calories"
                        stroke="#22c55e"
                        strokeWidth={3}
                    />

                    <Line
                        type="monotone"
                        dataKey="strength"
                        stroke="#ef4444"
                        strokeWidth={3}
                    />

                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ResultCharts;
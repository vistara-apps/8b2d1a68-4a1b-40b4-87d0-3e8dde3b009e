'use client';

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '00:00', value: 10000 },
  { time: '04:00', value: 10234 },
  { time: '08:00', value: 10456 },
  { time: '12:00', value: 10123 },
  { time: '16:00', value: 10678 },
  { time: '20:00', value: 10890 },
  { time: '24:00', value: 11473 },
];

export function PerformanceChart() {
  return (
    <div className="h-48">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis 
            dataKey="time" 
            stroke="#6b7280"
            fontSize={12}
            tickLine={false}
          />
          <YAxis 
            stroke="#6b7280"
            fontSize={12}
            tickLine={false}
            tickFormatter={(value) => `$${(value / 1000).toFixed(1)}k`}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'hsl(220, 25%, 12%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              color: 'hsl(210, 20%, 95%)'
            }}
            formatter={(value: number) => [`$${value.toFixed(2)}`, 'Portfolio']}
          />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#0052ff" 
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

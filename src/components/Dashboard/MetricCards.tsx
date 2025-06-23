import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// Funnel Count Data
interface FunnelStage {
  name: 'Discovery' | 'Qualified' | 'In conversation' | 'Negotiations' | 'Closed won' as const;
  count: number;
  value: number;
  duration: string;
  color: string;
}

const funnelData: FunnelStage[] = [
  { name: 'Discovery', count: 200, value: 200, duration: '2 days', color: 'bg-red-400' },
  { name: 'Qualified', count: 100, value: 100, duration: '2 days', color: 'bg-yellow-400' },
  { name: 'In conversation', count: 50, value: 100, duration: 'average time on this stage', color: 'bg-gray-700' },
  { name: 'Negotiations', count: 20, value: 50, duration: '8 days', color: 'bg-green-400' },
  { name: 'Closed won', count: 20, value: 50, duration: '10 days', color: 'bg-purple-500' },
];

const totalFunnelCount = funnelData.reduce((acc, stage) => acc + stage.count, 0);

// Sources Data
interface SourceData {
  name: string;
  value: number;
  percentage: number;
  color: string;
}

const sourcesData: SourceData[] = [
  { name: 'Clutch', value: 3000, percentage: 50, color: '#F87171' }, // red-400
  { name: 'Behance', value: 1000, percentage: 40, color: '#FBBF24' }, // amber-400
  { name: 'Instagram', value: 1000, percentage: 10, color: '#34D399' }, // emerald-400
  { name: 'Dribbble', value: 1000, percentage: 10, color: '#A78BFA' }, // violet-400
];

const MetricCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* Funnel Count Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Funnel count</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-baseline space-x-2">
            <p className="text-5xl font-bold">600</p>
            <p className="text-gray-500">active leads</p>
          </div>
          <div className="mt-4 mb-6">
            <div className="flex h-2 w-full rounded-full overflow-hidden">
              {funnelData.map((stage) => (
                <div
                  key={stage.name}
                  className={stage.color}
                  style={{ width: `${(stage.count / totalFunnelCount) * 100}%` }}
                ></div>
              ))}
            </div>
          </div>
          <div className="space-y-3 text-sm">
            {funnelData.map((stage) => (
              <div key={stage.name} className="grid grid-cols-4 items-center gap-2 text-gray-600">
                <div className="flex items-center col-span-2">
                  <span className={`mr-2 h-2.5 w-2.5 rounded-full ${stage.color}`}></span>
                  <span>{stage.name}</span>
                </div>
                <span className="text-right">{stage.count}</span>
                {stage.name === 'In conversation' ? (
                   <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                         <span className="text-right">$ {stage.value}</span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{stage.duration}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : (
                  <span className="text-right">$ {stage.value}</span>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Sources Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Sources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sourcesData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  cornerRadius={5}
                >
                  {sourcesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} className="stroke-none" />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2 text-sm">
            {sourcesData.map((source) => (
              <div key={source.name} className="grid grid-cols-3 items-center text-gray-600">
                <div className="flex items-center">
                  <span className="mr-2 h-2.5 w-2.5 rounded-full" style={{ backgroundColor: source.color }}></span>
                  <span>{source.name}</span>
                </div>
                <span className="text-right">$ {source.value.toLocaleString()}</span>
                <span className="text-right text-gray-500">{source.percentage}%</span>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="justify-end">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <p className="text-xs text-gray-500 cursor-default">from leads total</p>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Total value from all lead sources.</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </CardFooter>
      </Card>
    </div>
  );
};

export default MetricCards;

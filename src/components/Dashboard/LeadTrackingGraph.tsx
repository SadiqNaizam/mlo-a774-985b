import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ChevronDown } from 'lucide-react';

const data = [
  { name: 'March', 'Closed won': 88, 'Closed lost': 65 },
  { name: 'April', 'Closed won': 65, 'Closed lost': 42 },
  { name: 'May', 'Closed won': 80, 'Closed lost': 98 },
  { name: 'June', 'Closed won': 86, 'Closed lost': 8 },
  { name: 'July', 'Closed won': 45, 'Closed lost': 48 },
  { name: 'August', 'Closed won': 30, 'Closed lost': 95 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <p className="font-bold">{label}</p>
        <p className="text-sm text-[#059669]">{`Closed won: ${payload[0].value}`}</p>
        <p className="text-sm text-[#DC2626]">{`Closed lost: ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

const LeadTrackingGraph: React.FC = () => {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <div>
            <CardTitle className="text-lg font-semibold">Leads tracking</CardTitle>
            <CardDescription className="mt-1 flex items-baseline space-x-4">
                <span className="text-3xl font-bold text-foreground">680</span>
                <span className="text-sm text-muted-foreground">total closed</span>
                <span className="text-3xl font-bold text-foreground">70</span>
                <span className="text-sm text-muted-foreground">total lost</span>
            </CardDescription>
        </div>
        <Button variant="outline" className="shrink-0">
            <Calendar className="mr-2 h-4 w-4" />
            <span>last 6 months</span>
            <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 20 }}>
              <defs>
                <linearGradient id="colorWon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorLost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EF4444" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
              <YAxis tickLine={false} axisLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="Closed won"
                stroke="#059669"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorWon)"
                dot={{ stroke: '#059669', strokeWidth: 2, r: 4, fill: 'white' }}
                activeDot={{ r: 6, stroke: '#059669' }}
              />
              <Area
                type="monotone"
                dataKey="Closed lost"
                stroke="#DC2626"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorLost)"
                dot={{ stroke: '#DC2626', strokeWidth: 2, r: 4, fill: 'white' }}
                activeDot={{ r: 6, stroke: '#DC2626' }}
              />
              <Legend 
                verticalAlign="bottom" 
                height={50}
                iconType="square"
                iconSize={10}
                wrapperStyle={{ paddingTop: '20px' }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadTrackingGraph;

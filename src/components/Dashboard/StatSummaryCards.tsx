import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';


interface LostReason {
  percentage: string;
  reason: string;
}

const lostReasons: LostReason[] = [
  { percentage: '40%', reason: 'The proposal is unclear' },
  { percentage: '20%', reason: 'However venture pursuit' },
  { percentage: '10%', reason: 'Other' },
  { percentage: '30%', reason: 'The proposal is unclear' },
];

interface OtherData {
  value: string;
  label: string;
  hasInfo?: boolean;
}

const otherData: OtherData[] = [
  { value: '900', label: 'total leads count' },
  { value: '12', label: 'days in average to convert lead' },
  { value: '30', label: 'inactive leads', hasInfo: true },
];

const StatSummaryCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* Reasons of leads lost Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Reasons of leads lost</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            {lostReasons.map((item, index) => (
              <div key={index}>
                <p className="text-4xl font-bold text-gray-800">{item.percentage}</p>
                <p className="text-sm text-gray-500 mt-1">{item.reason}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Other data Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Other data</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex h-full items-center justify-around">
            {otherData.map((item, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-gray-800">{item.value}</p>
                <div className="flex items-center space-x-1 mt-1">
                    <p className="text-sm text-gray-500">{item.label}</p>
                    {item.hasInfo && (
                         <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Info className="h-4 w-4 text-gray-400 cursor-pointer" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Leads that have not been contacted in 30 days.</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatSummaryCards;

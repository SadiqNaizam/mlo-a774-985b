import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import MetricCards from '../components/Dashboard/MetricCards';
import LeadTrackingGraph from '../components/Dashboard/LeadTrackingGraph';
import StatSummaryCards from '../components/Dashboard/StatSummaryCards';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

/**
 * The main dashboard overview page.
 * This page assembles the primary dashboard components within the MainAppLayout.
 * It includes tabs for different views ('Sales' and 'Leads') and arranges
 * metric cards, graphs, and data summaries for the selected view.
 */
const DashboardPage: React.FC = () => {
  return (
    <MainAppLayout>
      <div className="flex flex-col gap-6">
        <Tabs defaultValue="leads" className="w-full">
          {/* Main page tabs for 'Sales' and 'Leads' */}
          <TabsList className="grid w-full max-w-[280px] grid-cols-2">
            <TabsTrigger value="sales">Sales</TabsTrigger>
            <TabsTrigger value="leads">Leads</TabsTrigger>
          </TabsList>

          {/* Content for the 'Sales' tab (placeholder) */}
          <TabsContent value="sales" className="mt-6">
            <div className="flex h-96 items-center justify-center rounded-lg border border-dashed bg-card">
              <p className="text-muted-foreground">Sales dashboard content will be displayed here.</p>
            </div>
          </TabsContent>

          {/* Content for the 'Leads' tab */}
          <TabsContent value="leads" className="mt-6 space-y-6">
            {/* Row 1: Funnel count and Sources cards */}
            <MetricCards />
            
            {/* Visual separator/filter buttons seen in the design */}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="bg-muted text-secondary-foreground hover:bg-muted/90">
                Leads came
              </Button>
              <Button variant="secondary" size="sm">
                Leads Converted
              </Button>
              <Button variant="ghost" size="sm" className="bg-muted text-secondary-foreground hover:bg-muted/90">
                Total deals size
              </Button>
            </div>

            {/* Row 2: Leads tracking graph */}
            <LeadTrackingGraph />

            {/* Row 3: Lost reasons and other data cards */}
            <StatSummaryCards />
          </TabsContent>
        </Tabs>
      </div>
    </MainAppLayout>
  );
};

export default DashboardPage;

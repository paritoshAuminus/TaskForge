import StatCard from "../components/StatCardTemp";
import ChartCard from "../components/ChartCardTemp";
import StatusBarChart from "../components/StatusBarChartTemp";
import PriorityBars from "../components/PriorityBars";
import TrendChart from "../components/TrendChart";


function Stats() {
  return (
    <div className="flex h-full flex-col gap-6 p-6 bg-(--bg-canvas)">
      {/* Page Header */}
      <div>
        <h1 className="text-xl font-semibold text-(--text-primary)">
          Project Insights
        </h1>
        <p className="text-sm text-(--text-muted)">
          Overview of progress and issue distribution
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <StatCard title="Total Issues" value="42" />
        <StatCard title="Completed" value="21" accent="var(--status-done)" />
        <StatCard title="In Progress" value="8" accent="var(--status-progress)" />
        <StatCard title="Blocked" value="3" accent="var(--status-blocked)" />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Status Distribution */}
        <ChartCard title="Issues by Status">
          <StatusBarChart />
        </ChartCard>

        {/* Priority Breakdown */}
        <ChartCard title="Issues by Priority">
          <PriorityBars />
        </ChartCard>
      </div>

      {/* Trends */}
      <ChartCard title="Completion Trend (Last 7 Days)">
        <TrendChart />
      </ChartCard>
    </div>
  );
}

export default Stats

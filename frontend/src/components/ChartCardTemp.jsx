function ChartCard({ title, children }) {
  return (
    <div className="rounded-lg border border-(--border-primary) bg-(--surface-card) p-4">
      <div className="mb-4 text-sm font-medium text-(--text-primary)">
        {title}
      </div>
      {children}
    </div>
  );
}

export default ChartCard
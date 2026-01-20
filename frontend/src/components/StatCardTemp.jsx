function StatCard({ title, value, accent }) {
  return (
    <div className="rounded-lg border border-(--border-primary) bg-(--surface-card) p-4">
      <div className="text-sm text-(--text-muted)">{title}</div>
      <div
        className="mt-1 text-2xl font-semibold"
        style={{ color: accent || "var(--text-primary)" }}
      >
        {value}
      </div>
    </div>
  );
}

export default StatCard

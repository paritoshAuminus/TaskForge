function StatusBarChart() {
  return (
    <div className="flex h-6 w-full overflow-hidden rounded-md bg-(--surface-hover)">
      <div className="w-[30%] bg-(--status-todo)" />
      <div className="w-[20%] bg-var(--status-progress)" />
      <div className="w-[10%] bg-var(--status-review)" />
      <div className="w-[35%] bg-var(--status-done)" />
      <div className="w-[5%] bg-var(--status-blocked)" />
    </div>
  );
}

export default StatusBarChart
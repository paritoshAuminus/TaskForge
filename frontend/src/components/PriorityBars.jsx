function PriorityBars() {
  const data = [
    { label: "Low", value: 20 },
    { label: "Medium", value: 50 },
    { label: "High", value: 30 },
  ];

  return (
    <div className="flex h-40 items-end gap-4">
      {data.map((item) => (
        <div key={item.label} className="flex flex-1 flex-col items-center gap-2">
          <div
            className="w-full rounded-md bg-(--accent-primary)"
            style={{ height: `${item.value}%` }}
          />
          <span className="text-xs text-(--text-muted)">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default PriorityBars
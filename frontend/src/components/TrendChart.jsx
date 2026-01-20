function TrendChart() {
  return (
    <svg viewBox="0 0 100 40" className="h-40 w-full">
      <polyline
        fill="none"
        stroke="var(--accent-primary)"
        strokeWidth="2"
        points="0,30 15,25 30,28 45,18 60,20 75,12 100,8"
      />
    </svg>
  );
}

export default TrendChart
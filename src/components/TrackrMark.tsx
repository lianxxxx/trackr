// Trackr logo mark: three ascending bars
export default function TrackrMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 34 30"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      {[
        [0, 16],
        [12, 8],
        [24, 0],
      ].map(([x, y]) => (
        <path
          key={x}
          d={`M${x + 8} ${y}H${x + 9}Q${x + 10} ${y} ${x + 10} ${y + 1}V22A8 8 0 0 1 ${x + 2} 30H${x + 1}Q${x} 30 ${x} 29V${y + 8}A8 8 0 0 1 ${x + 8} ${y}Z`}
        />
      ))}
    </svg>
  );
}

export default function TrackrLoader() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-slate-50 dark:bg-slate-950">
      <div className="flex items-end gap-1.5 h-10">
        {[
          { color: "bg-slate-900 dark:bg-slate-100", delay: "0s" },
          { color: "bg-slate-600 dark:bg-slate-300", delay: "0.15s" },
          { color: "bg-slate-400 dark:bg-slate-500", delay: "0.3s" },
          { color: "bg-slate-300 dark:bg-slate-700", delay: "0.45s" },
        ].map((b, i) => (
          <span
            key={i}
            className={`block w-2 h-10 rounded-sm origin-bottom trackr-bar ${b.color}`}
            style={{ animationDelay: b.delay }}
          />
        ))}
      </div>
      <em
        style={{ fontFamily: "var(--font-dm-serif)" }}
        className="text-2xl tracking-tight text-blue-300"
      >
        Trackr
      </em>
      <style>{`
        @keyframes trackrBarPulse {
          0%, 100% { transform: scaleY(0.4); }
          50% { transform: scaleY(1); }
        }
        .trackr-bar {
          animation: trackrBarPulse 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

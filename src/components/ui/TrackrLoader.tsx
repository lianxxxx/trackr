import TrackrMark from "@/components/TrackrMark";

export default function TrackrLoader() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-5 bg-slate-50 dark:bg-slate-950">
      <TrackrMark className="h-12 w-auto text-blue-400" />
      <div className="relative h-0.5 w-20 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
        <span className="trackr-line absolute inset-y-0 left-0 w-1/2 rounded-full bg-blue-400" />
      </div>
      <p className="text-xs text-slate-400">
        Stack it, track it,{" "}
        <span className="font-medium text-slate-900 dark:text-slate-50">
          Trackr.
        </span>
</p>
      <style>{`
        @keyframes trackrLineSlide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .trackr-line {
          animation: trackrLineSlide 1.1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

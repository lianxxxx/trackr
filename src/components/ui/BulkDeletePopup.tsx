import { TbTrash } from "react-icons/tb";

interface Props {
  count: number;
  noun: string; // plural, e.g. "transactions"
  allSelected: boolean;
  onToggleAll: () => void;
  onDiscard: () => void;
  onDelete: () => void;
}

// Centered on the content area (right of the sidebar) via --sidebar-w from the dashboard layout
export default function BulkDeletePopup({
  count,
  noun,
  allSelected,
  onToggleAll,
  onDiscard,
  onDelete,
}: Props) {
  return (
    <div className="fixed z-40 inset-y-0 right-0 left-0 md:left-(--sidebar-w) flex items-center justify-center pointer-events-none">
      <div className="pointer-events-auto w-80 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6">
        <div className="flex items-start justify-between mb-5">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-red-50 dark:bg-red-500/10 flex items-center justify-center">
                <TbTrash size={15} className="text-red-500" />
              </div>
              <h2 className="text-base font-semibold text-slate-900 dark:text-slate-50">
                Delete {count} {count === 1 ? "item" : "items"}
              </h2>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              These {noun} will be permanently removed.
            </p>
          </div>
          <button
            onClick={onToggleAll}
            className="shrink-0 mt-1.5 text-xs font-medium text-blue-500 hover:text-blue-600 cursor-pointer"
          >
            {allSelected ? "Deselect all" : "Select all"}
          </button>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onDiscard}
            className="flex-1 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 text-sm font-medium py-2.5 rounded-full transition-colors border border-slate-200 dark:border-slate-600 cursor-pointer"
          >
            Discard
          </button>
          <button
            onClick={onDelete}
            disabled={count === 0}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-2.5 rounded-full transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-red-500"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

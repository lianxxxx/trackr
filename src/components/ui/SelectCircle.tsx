import { TbCheck } from "react-icons/tb";

interface Props {
  checked: boolean;
  onToggle: () => void;
  label: string;
}

export default function SelectCircle({ checked, onToggle, label }: Props) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      aria-label={label}
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      className={`w-5 h-5 rounded-full border-2 shrink-0 flex items-center justify-center transition-colors cursor-pointer ${
        checked
          ? "bg-blue-500 border-blue-500 text-white"
          : "border-slate-300 dark:border-slate-600 hover:border-blue-400"
      }`}
    >
      {checked && <TbCheck size={12} strokeWidth={3} />}
    </button>
  );
}

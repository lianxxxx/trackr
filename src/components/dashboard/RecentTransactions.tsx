import { Transaction } from "@/lib/types";
import {
  TbShoppingCart,
  TbCash,
  TbDeviceTv,
  TbBolt,
  TbCar,
  TbTag,
} from "react-icons/tb";
import { VscEmptyWindow } from "react-icons/vsc";
import React from "react";
import Link from "next/link";
const categoryIcon: Record<string, React.ReactElement> = {
  Food: <TbShoppingCart size={18} />,
  Salary: <TbCash size={18} />,
  Freelance: <TbCash size={18} />,
  Investment: <TbCash size={18} />,
  Entertainment: <TbDeviceTv size={18} />,
  Bills: <TbBolt size={18} />,
  Transport: <TbCar size={18} />,
  Shopping: <TbTag size={18} />,
};

const categoryColor: Record<string, string> = {
  Food: "bg-blue-50 dark:bg-blue-500/10 text-blue-500",
  Salary: "bg-blue-50 dark:bg-blue-500/10 text-blue-500",
  Freelance: "bg-blue-50 dark:bg-blue-500/10 text-blue-500",
  Investment: "bg-blue-50 dark:bg-blue-500/10 text-blue-500",
  Entertainment: "bg-blue-50 dark:bg-blue-500/10 text-blue-500",
  Bills: "bg-blue-50 dark:bg-blue-500/10 text-blue-500",
  Transport: "bg-blue-50 dark:bg-blue-500/10 text-blue-500",
  Shopping: "bg-blue-50 dark:bg-blue-500/10 text-blue-500",
  Other: "bg-blue-50 dark:bg-blue-500/10 text-blue-500",
};

interface Props {
  transactions: Transaction[];
}

export default function RecentTransactions({ transactions }: Props) {
  const recent = transactions.slice(0, 5);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 mt-4 overflow-hidden">
      <div className="flex items-center justify-between px-6 pt-6 pb-4">
        <h2 className="text-base font-semibold text-slate-900 dark:text-slate-50">
          Recent Transactions
        </h2>
        <Link
          href="/transactions"
          className="text-xs text-blue-500 hover:text-blue-600 font-medium"
        >
          View all
        </Link>
      </div>

      {/* Header - hidden on mobile */}
      <div className="hidden sm:grid grid-cols-3 px-6 pb-3 border-b border-slate-200 dark:border-slate-800">
        <p className="text-xs font-medium text-slate-400">Name</p>
        <p className="text-xs font-medium text-slate-400 text-center">Date</p>
        <p className="text-xs font-medium text-slate-400 text-right">Amount</p>
      </div>
      {recent.length === 0 ? (
        <div className="flex flex-col items-center justify-center pt-2 pb-6 gap-2">
          <VscEmptyWindow
            size={35}
            className="text-slate-300 dark:text-slate-600"
          />
          <p className="text-sm font-medium text-center  text-slate-500 dark:text-slate-400">
            No transactions yet
          </p>
          <p className="text-xs text-center text-slate-400">
            Add your first transaction to get started
          </p>
        </div>
      ) : (
        <div className="divide-y divide-slate-100 dark:divide-slate-800 border-t border-slate-200 dark:border-slate-800 sm:border-t-0">
          {recent.map((t) => (
            <div
              key={t.id}
              className="flex items-center justify-between px-4 sm:px-6 py-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
            >
              {/* Left: icon + title + date (mobile) */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center ${categoryColor[t.category] || "bg-blue-50 dark:bg-blue-500/10 text-blue-500"}`}
                >
                  {categoryIcon[t.category] || <TbTag size={18} />}
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-slate-50">
                    {t.title}
                  </p>
                  <p className="text-xs text-slate-400 sm:hidden">
                    {new Date(t.date).toLocaleDateString("en-PH", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>

              {/* Center: date - hidden on mobile */}
              <p className="hidden sm:block text-xs text-slate-400 text-center">
                {new Date(t.date).toLocaleDateString("en-PH", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>

              {/* Right: amount */}
              <p
                className={`text-sm font-semibold shrink-0 ${t.type === "income" ? "text-blue-500" : "text-slate-900 dark:text-slate-50"}`}
              >
                {t.type === "income" ? "+" : "-"}₱{t.amount.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

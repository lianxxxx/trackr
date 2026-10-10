"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { User } from "@supabase/supabase-js";
import TrackrMark from "@/components/TrackrMark";

export default function NotFound() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });
  }, []);

  const { label, href } = loading
    ? { label: "Go back", href: "/" }
    : user
      ? { label: "Back to dashboard", href: "/dashboard" }
      : { label: "Back to home", href: "/" };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 bg-slate-50 dark:bg-slate-950">
      {/* Logo mark, same as TrackrLoader */}
      <TrackrMark className="h-12 w-auto text-blue-400" />

      {/* Heading + subtitle + button */}
      <div className="flex flex-col items-center gap-6">
        <div className="text-center space-y-2 max-w-sm">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50">
            Page not found
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            This page doesn&apos;t exist or has moved.
          </p>
        </div>
        <Link
          href={href}
          className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
        >
          {label}
        </Link>
      </div>
    </div>
  );
}

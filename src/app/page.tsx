"use client";

import Link from "next/link";
import Image from "next/image";
import ipadShot from "../../public/devices/ipad-air.webp";
import iphoneShot from "../../public/devices/iphone.webp";
import macbookShot from "../../public/devices/macbook.webp";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const isDark = mounted && theme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <div
      style={{ fontFamily: "var(--font-dm-sans)" }}
      className="min-h-screen bg-white dark:bg-slate-950 text-[#0f0f0f] dark:text-slate-50"
    >
      {/* Nav */}
      <nav className="sticky top-0 z-50 flex items-center justify-between md:px-30 sm:px-10 px-5 py-4 border-b border-slate-100 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
        <em
          style={{ fontFamily: "var(--font-dm-serif)" }}
          className="text-3xl tracking-tight text-blue-300"
        >
          Trackr
        </em>
        <div className="flex items-center gap-2 sm:gap-4 md:gap-8">
          <Link
            href="#features"
            className="text-sm text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors hidden md:block"
          >
            Features
          </Link>
          <Link
            href="/login"
            className="text-sm text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors hidden md:block"
          >
            Login
          </Link>

          {/* Theme toggle */}
          <button onClick={toggleTheme} className="cursor-pointer pl-4">
            {/* Mobile — icon only */}
            <span className="md:hidden flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 ">
              {isDark ? (
                <IoMoonOutline size={13} className="text-blue-400" />
              ) : (
                <MdOutlineWbSunny size={13} className="text-amber-500" />
              )}
            </span>

            {/* Desktop — full slider */}
            <span className="hidden md:relative md:flex items-center bg-slate-100 dark:bg-slate-800 rounded-full p-1 gap-0.5">
              <span
                className={`absolute w-6 h-6 rounded-full transition-all duration-300 ease-in-out ${
                  isDark
                    ? "translate-x-6.5 bg-slate-700"
                    : "translate-x-0 bg-white shadow-sm"
                }`}
              />
              <span className="relative z-10 flex items-center justify-center w-6 h-6">
                <MdOutlineWbSunny
                  size={15}
                  className={!isDark ? "text-amber-500" : "text-slate-500"}
                />
              </span>
              <span className="relative z-10 flex items-center justify-center w-6 h-6">
                <IoMoonOutline
                  size={15}
                  className={isDark ? "text-blue-400" : "text-slate-400"}
                />
              </span>
            </span>
          </button>

          <Link
            href="/register"
            className="text-xs sm:text-sm font-medium text-white bg-blue-500 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 hover:opacity-75 transition-opacity whitespace-nowrap"
          >
            Get started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="md:px-30 sm:px-10 px-5 pt-24 pb-16 flex flex-col lg:flex-row lg:items-center justify-between gap-14 lg:gap-12">
        <div className="max-w-3xl">
        <h1
          style={{ fontFamily: "var(--font-dm-serif)" }}
          className="md:text-6xl text-4xl sm:text-5xl leading-[1.08] tracking-tight text-[#0f0f0f] dark:text-slate-50 mb-6"
        >
          Know where your <br />
          <em className="text-blue-300">money actually goes.</em>
        </h1>
        <p className="text-base font-light text-slate-400 leading-relaxed max-w-md mb-10">
          A quiet, focused tool for tracking income, expenses, and goals. No
          distractions.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="/register"
            className="text-xs sm:text-sm font-medium text-white bg-blue-500 rounded-full px-5 sm:px-8 py-2.5 sm:py-3 hover:opacity-75 transition-opacity whitespace-nowrap"
          >
            Start tracking
          </Link>
          <Link
            href="/dashboard"
            className="text-xs sm:text-sm text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors whitespace-nowrap"
          >
            <span className="flex items-center gap-1 text-sm">
              See what&apos;s inside <IoArrowForward className="w-4 h-4" />
            </span>
          </Link>
        </div>
        </div>

        {/* Device mockups */}
        <div className="relative shrink-0 self-center lg:self-auto lg:mr-8">
          <Image
            src={ipadShot}
            alt="Trackr dashboard on iPad"
            width={340}
            priority
            className="w-[230px] sm:w-[300px] lg:w-[340px] h-auto drop-shadow-xl"
          />
          <Image
            src={iphoneShot}
            alt="Trackr goals on iPhone"
            width={130}
            priority
            className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-14 w-[90px] sm:w-[115px] lg:w-[130px] h-auto drop-shadow-xl"
          />
        </div>
      </section>

      {/* Trackr Info */}

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 md:px-30 sm:px-10 px-5 md:pt-16">
        {/* MacBook mockup */}
        <Image
          src={macbookShot}
          alt="Trackr AI insights on MacBook"
          width={560}
          className="order-2 lg:order-1 self-center w-full max-w-[420px] sm:max-w-[500px] lg:max-w-[560px] h-auto drop-shadow-xl"
        />

        <div className="order-1 lg:order-2 max-w-md text-right pt-8 self-end lg:self-auto">
          <h2
            style={{ fontFamily: "var(--font-dm-serif)" }}
            className="md:text-6xl text-4xl sm:text-5xl leading-[1.08] tracking-tigh text-blue-300 mb-6"
          >
            Trackr <br />
            <em className=" text-[#0f0f0f]  dark:text-slate-50 ">without e.</em>
          </h2>

          <p className="text-sm font-light text-slate-400 leading-relaxed my-3">
            No subscriptions. No data selling. Just a clean space to understand
            your finances,{" "}
            <span className="text-slate-600 dark:text-slate-300 font-medium">
              built for people who want clarity, not clutter.
            </span>
          </p>
        </div>
      </div>

      {/* Features */}
      <section
        id="features"
        className="md:px-30 sm:px-10 px-5 mt-32 md:mt-44 mb-24 md:mb-32 scroll-mt-24"
      >
        <h2
          style={{ fontFamily: "var(--font-dm-serif)" }}
          className="text-2xl sm:text-3xl tracking-tight text-[#0f0f0f] dark:text-slate-50 mb-8"
        >
          Everything you need to{" "}
          <em className="text-blue-300">stay in control.</em>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          {
            title: "Track every peso",
            desc: "Log income and expenses in seconds. Categorized, searchable, always in sync.",
            preview: (
              <div className="space-y-2">
                {[
                  { cat: "Food", name: "Jollibee", amount: "-₱185", income: false },
                  { cat: "Salary", name: "Payroll", amount: "+₱25,000", income: true },
                ].map((t) => (
                  <div
                    key={t.name}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 dark:border-slate-800 px-4 py-3 text-xs"
                  >
                    <span className="w-14 text-slate-400">{t.cat}</span>
                    <span className="flex-1 font-medium text-slate-900 dark:text-slate-50">
                      {t.name}
                    </span>
                    <span
                      className={`font-semibold ${t.income ? "text-blue-500" : "text-slate-900 dark:text-slate-50"}`}
                    >
                      {t.amount}
                    </span>
                  </div>
                ))}
                <div className="flex items-center gap-3 rounded-xl bg-blue-500 px-4 py-3 text-xs">
                  <span className="w-14 text-blue-100">Trackr</span>
                  <span className="flex-1 font-medium text-white">Balance</span>
                  <span className="font-semibold text-white">₱24,815</span>
                </div>
              </div>
            ),
          },
          {
            title: "Visualize patterns",
            desc: "Charts that make your spending habits impossible to ignore.",
            preview: (
              <div>
                <div className="flex items-end justify-between h-16 mb-3 border-b border-slate-200 dark:border-slate-800">
                  {[
                    [70, 45],
                    [60, 80],
                    [85, 40],
                    [65, 55],
                  ].map(([inc, exp], i) => (
                    <div key={i} className="flex items-end gap-1 h-full">
                      <span
                        style={{ height: `${inc}%` }}
                        className="w-3 sm:w-4 rounded-t-md bg-blue-500"
                      />
                      <span
                        style={{ height: `${exp}%` }}
                        className="w-3 sm:w-4 rounded-t-md bg-blue-200 dark:bg-slate-700"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["Food", "Bills", "Transport", "Shopping"].map((c) => (
                    <span
                      key={c}
                      className="rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ),
          },
          {
            title: "AI-Powered Insights",
            desc: "Let AI analyze your finances and give you recommendations.",
            preview: (
              <div className="flex flex-col gap-2 text-xs">
                <span className="self-end rounded-xl bg-slate-100 dark:bg-slate-800 px-4 py-3 text-slate-600 dark:text-slate-300">
                  Where did my money go?
                </span>
                <span className="self-start max-w-[85%] rounded-xl bg-blue-500 px-4 py-3 text-white leading-relaxed">
                  Food is up <span className="font-semibold">18%</span>. Cook
                  at home twice a week to save ₱1,200.
                </span>
              </div>
            ),
          },
        ].map((f) => (
          <div
            key={f.title}
            className="flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6"
          >
            <p className="text-base font-semibold text-slate-900 dark:text-slate-50 mb-1">
              {f.title}
            </p>
            <p className="text-sm font-light text-slate-400 leading-relaxed mb-5">
              {f.desc}
            </p>
            <div className="mt-auto">{f.preview}</div>
          </div>
        ))}
        </div>
      </section>

      {/* Bottom */}
      <div className="md:px-30 sm:px-10 px-5 py-12 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">
        <p
          style={{ fontFamily: "var(--font-dm-serif)" }}
          className="text-lg sm:text-2xl md:text-3xl tracking-tight dark:text-slate-50"
        >
          Your money, <em className="text-blue-300">clearly yours.</em>
        </p>
        <Link
          href="/dashboard"
          className="text-xs sm:text-sm font-medium text-white bg-blue-500 rounded-full px-4 sm:px-6 py-2 sm:py-3 hover:opacity-75 transition-opacity whitespace-nowrap"
        >
          <span className="flex items-center gap-1 text-sm">
            Open Dashboard
            <IoArrowForward className="w-4 h-4" />
          </span>
        </Link>
      </div>

      {/* Footer */}
      <footer className="md:px-30 sm:px-10 px-5 py-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-center sm:justify-between gap-y-2 gap-x-4 text-center sm:text-left">
        <p className="text-xs text-slate-300 dark:text-slate-600">
          © 2026 Trackr. All rights reserved.
        </p>
        <p className="text-xs text-slate-300 dark:text-slate-600">
          Built by{" "}
          <a
            href="https://leyannemayo.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-500 transition-colors"
          >
            el-em
          </a>
        </p>
      </footer>
    </div>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import ipadShot from "../../public/devices/ipad-air.webp";
import iphoneShot from "../../public/devices/iphone.webp";
import macbookShot from "../../public/devices/macbook.webp";
import TrackrMark from "@/components/TrackrMark";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { IoArrowForward, IoCheckmarkCircle } from "react-icons/io5";
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
        <Link href="/" className="flex items-center gap-2">
          <TrackrMark className="h-6 sm:h-7 w-auto text-blue-400" />
          <span
            style={{ fontFamily: "var(--font-dm-serif)" }}
            className="text-2xl sm:text-3xl tracking-tight text-slate-900 dark:text-slate-50"
          >
            Trackr
          </span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-4 md:gap-8">
          <Link
            href="#about"
            className="text-sm text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors hidden md:block"
          >
            About
          </Link>
          <Link
            href="/login"
            className="text-sm text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors hidden md:block"
          >
            Login
          </Link>

          {/* Theme toggle */}
          <button onClick={toggleTheme} className="cursor-pointer pl-4">
            {/* Mobile: icon only */}
            <span className="md:hidden flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 ">
              {isDark ? (
                <IoMoonOutline size={13} className="text-blue-400" />
              ) : (
                <MdOutlineWbSunny size={13} className="text-amber-500" />
              )}
            </span>

            {/* Desktop: full slider */}
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
      <section className="md:px-30 sm:px-10 px-5 pt-12 sm:pt-16 lg:pt-24 pb-16 flex flex-col lg:flex-row lg:items-center justify-between gap-14 lg:gap-12">
        <div className="max-w-3xl">
        <h1
          style={{ fontFamily: "var(--font-dm-serif)" }}
          className="md:text-6xl text-4xl sm:text-5xl leading-[1.08] tracking-tight text-[#0f0f0f] dark:text-slate-50 mb-6"
        >
          Know where your <br />
          <em className="text-blue-300">money actually goes.</em>
        </h1>
        <p className="text-base font-light text-slate-400 leading-relaxed max-w-md lg:mb-10">
          A quiet, focused tool for tracking income, expenses, and goals. No
          distractions.
        </p>
        <div className="hidden lg:flex items-center gap-4">
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
          <span className="absolute -top-10 -left-4 sm:-left-10 z-10 inline-flex -rotate-3 rounded-full bg-blue-300 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium text-white whitespace-nowrap">
            Every peso, in its place
            <span
              aria-hidden
              className="absolute right-6 -bottom-1 h-3 w-3 rotate-45 rounded-[2px] bg-blue-300"
            />
          </span>
          <Image
            src={ipadShot}
            alt="Trackr dashboard on iPad"
            width={340}
            priority
            className="w-[230px] sm:w-[300px] lg:w-[340px] h-auto drop-shadow-xl"
          />
          <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-14 w-[90px] sm:w-[115px] lg:w-[130px]">
            <span className="absolute -top-7 -right-4 sm:-right-6 z-10 inline-flex rotate-3 rounded-full bg-blue-300 px-3 py-1 text-xs font-medium text-white whitespace-nowrap">
              Goals
              <span
                aria-hidden
                className="absolute left-3 -bottom-1 h-2.5 w-2.5 rotate-45 rounded-[2px] bg-blue-300"
              />
            </span>
            <Image
              src={iphoneShot}
              alt="Trackr goals on iPhone"
              width={130}
              priority
              className="w-full h-auto drop-shadow-xl"
            />
          </div>
        </div>

        {/* CTAs below the mockups on mobile */}
        <div className="flex lg:hidden items-center gap-4 self-center">
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
      </section>

      {/* Trackr Info */}

      <div
        id="about"
        className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 md:px-30 sm:px-10 px-5 md:pt-16 scroll-mt-24"
      >
        {/* MacBook mockup */}
        <div className="relative order-2 lg:order-1 self-center w-full max-w-[420px] sm:max-w-[500px] lg:max-w-[560px]">
          <span className="absolute -top-9 right-4 sm:right-10 z-10 inline-flex rotate-3 rounded-full bg-blue-300 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium text-white whitespace-nowrap">
            Ask where it went
            <span
              aria-hidden
              className="absolute left-6 -bottom-1 h-3 w-3 rotate-45 rounded-[2px] bg-blue-300"
            />
          </span>
          <Image
            src={macbookShot}
            alt="Trackr AI insights on MacBook"
            width={560}
            className="w-full h-auto drop-shadow-xl"
          />
        </div>

        <div className="order-1 lg:order-2 max-w-md text-right pt-8 self-end lg:self-auto">
          <h2
            style={{ fontFamily: "var(--font-dm-serif)" }}
            className="md:text-6xl text-4xl sm:text-5xl leading-[1.08] tracking-tight text-blue-300 mb-6"
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
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          {/* What's inside */}
          <div className="relative lg:flex-[1.7] rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-10">
            <h2
              style={{ fontFamily: "var(--font-dm-serif)" }}
              className="text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight text-[#0f0f0f] dark:text-slate-50 mb-4"
            >
              Everything you need to <br />
              <em className="text-blue-300">stay in control.</em>
            </h2>
            <p className="text-sm font-light text-slate-400 leading-relaxed max-w-md mb-8">
              Log it, see it, understand it. Trackr keeps your income,
              expenses, and goals in one quiet place.
            </p>

            <p
              style={{ fontFamily: "var(--font-dm-serif)" }}
              className="text-xl sm:text-2xl tracking-tight text-[#0f0f0f] dark:text-slate-50 mb-4"
            >
              What&apos;s inside
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {[
                "Track every peso",
                "Income vs expense charts",
                "Multiple accounts",
                "Spending breakdown",
                "Savings goals",
                "AI insights",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-300"
                >
                  <IoCheckmarkCircle className="w-4 h-4 shrink-0 text-blue-500" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Binder rings */}
            <div
              aria-hidden
              className="hidden lg:flex absolute inset-y-0 right-0 z-10 translate-x-[calc(50%+0.75rem)] flex-col justify-evenly py-8"
            >
              {[0, 1, 2, 3, 4].map((i) => (
                <svg
                  key={i}
                  viewBox="0 0 64 24"
                  className="block h-6 w-16"
                  fill="none"
                >
                  <circle cx="8" cy="15" r="6.5" className="fill-blue-500" />
                  <circle cx="56" cy="15" r="6.5" className="fill-blue-700" />
                  <path
                    d="M8 15 Q32 5 56 15"
                    strokeWidth="9"
                    strokeLinecap="round"
                    className="stroke-blue-300"
                  />
                </svg>
              ))}
            </div>
          </div>

          {/* Free */}
          <div className="lg:flex-1 flex flex-col items-center justify-center text-center rounded-3xl bg-blue-500 p-6 sm:p-10">
            <span className="relative inline-flex self-end mr-6 sm:mr-12 rotate-3 rounded-full bg-blue-400 px-4 py-1.5 text-sm font-medium text-white">
              No subscriptions, ever
              <span
                aria-hidden
                className="absolute left-6 -bottom-1 h-3 w-3 rotate-45 rounded-[2px] bg-blue-400"
              />
            </span>
            <p
              style={{ fontFamily: "var(--font-dm-serif)" }}
              className="text-6xl sm:text-7xl tracking-tight text-white mt-4 mb-6"
            >
              ₱0<span className="text-blue-200">.00</span>
            </p>
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-1 rounded-full bg-white px-8 py-3 text-sm font-medium text-blue-500 hover:opacity-75 transition-opacity"
            >
              Start tracking <IoArrowForward className="w-4 h-4" />
            </Link>
            <p className="text-xs font-light text-blue-100 leading-relaxed mt-5 max-w-[14rem]">
              No data selling. Just a clean space to understand your finances.
            </p>
          </div>
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

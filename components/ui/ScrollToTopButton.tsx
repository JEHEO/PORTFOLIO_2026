// 우측 하단 "맨 위로" 버튼. 스크롤이 어느 정도 내려가면 페이드 인.

"use client";

import React from "react";

const SHOW_AFTER_Y = 400;

export function ScrollToTopButton() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SHOW_AFTER_Y);
    };
    // 새로고침 직후에도 현재 스크롤 위치 반영
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onClick = () => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="맨 위로"
      tabIndex={visible ? 0 : -1}
      className={`fixed right-5 bottom-5 z-40 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-zinc-200 bg-white/90 text-zinc-600 shadow-sm backdrop-blur-md transition-all hover:border-accent-400 hover:text-accent-500 dark:border-zinc-700 dark:bg-black/70 dark:text-zinc-300 ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <svg
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}

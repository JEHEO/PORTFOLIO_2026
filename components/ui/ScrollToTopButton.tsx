/**
 * 페이지 우측 하단에 고정되는 "맨 위로" 버튼.
 *
 * - 특정 스크롤 이상 내려갔을 때만 페이드 인되는 FAB.
 *   (스크롤이 짧은 페이지에서는 항상 숨어 있음)
 * - 클릭 시 `scrollTo({ top: 0, behavior: "smooth" })` 로 부드럽게 상단 이동.
 * - 모든 페이지 공통이라 `app/layout.tsx` 에 한 번만 포함시킵니다.
 */

"use client";

import React from "react";

/** 이 스크롤(Y px) 이상 내려가면 버튼이 보이기 시작. */
const SHOW_AFTER_Y = 400;

export function ScrollToTopButton() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SHOW_AFTER_Y);
    };
    onScroll(); // 초기 렌더(리프레시 복원 등)에서도 즉시 반영
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onClick = () => {
    // 사용자 OS 설정(prefers-reduced-motion) 이 켜져 있으면 즉시 이동.
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

/**
 * ChipGrabPeek — chip 뒤에서 "손 두 개 + 얼굴" 이 빼꼼 올라와 칸 위에 얹히는 연출.
 *
 * 모션 (CSS keyframes · globals.css)
 * - 손 (`chipGrabHand`): 뒤쪽 아래 → 위로 상승 → 앞쪽으로 내려앉음 3 단계
 *   (z-index -1 → +2 스위칭으로 chip 뒤에서 앞으로)
 * - 얼굴 (`chipGrabFace`): 뒤쪽 아래 → 위로 상승 후 멈춤 (단순)
 *   (z-index -1 유지, chip 에 일부 가려진 채로 머리만 peek 하는 형태)
 *
 * 등장 순서 (stagger)
 * 1) 왼쪽 손 (delay 0ms)
 * 2) 오른쪽 손 (delay 250ms)
 * 3) 얼굴 (delay 550ms · 가장 마지막 · 가운데 · 손보다 큼)
 *
 * 필수 조건
 * - 이 컴포넌트의 조상에 `isolate` (isolation: isolate) 가 있어야
 *   z-index 스위칭이 chip 을 기준으로 동작합니다.
 *
 * 색상
 * - portfolio accent(violet) 팔레트에 맞춰 `bg-accent-300` 사용.
 */

"use client";

import React, { useEffect, useRef, useState } from "react";

export function ChipGrabPeek() {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.4, rootMargin: "-40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // 공통 스타일 — border 가 accent-500(메인), 내부는 accent-50(라이트) / accent-950(다크)
  // 로 팔레트와 조화로운 "배지" 룩
  const common =
    "absolute rounded-full border-2 border-accent-500 bg-accent-50 dark:border-accent-400 dark:bg-accent-950";

  return (
    <span
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0"
    >
      {/* 왼쪽 손 — 먼저 등장, 뒤→앞 스위칭 모션. 얼굴과 살짝 겹침(4px overlap). */}
      <span
        className={`chip-grab-hand ${common} top-0 left-[calc(50%-20px)] h-3 w-3`}
        data-active={visible || undefined}
      />
      {/* 오른쪽 손 — 500ms 늦게 등장 (왼손과 확연한 시간차). */}
      <span
        className={`chip-grab-hand ${common} top-0 left-[calc(50%+8px)] h-3 w-3`}
        data-active={visible || undefined}
        style={{ animationDelay: "500ms" }}
      />
      {/* 얼굴 — 손이 모두 멈춘 뒤(1400ms) 등장, 가운데, 손보다 큼(24px).
          (1) 상승 모션 (1400ms delay) → chip 뒤에서 peek
          (2) 도착 직후(2100ms delay) 좌/우로 둘러보는 루프 시작.
          두 애니메이션 delay 가 comma-separated 로 매핑됨 (shorthand 순서 동일).
          내부에 임시 눈 2개 — 얼굴 원의 1/4 크기 흰 원 + 검은 눈동자.
          얼굴은 거의 고정, 눈동자만 좌우로 translate 되어 "둘러보기" 느낌. */}
      <span
        className={`chip-grab-face ${common} top-0 left-[calc(50%-12px)] h-6 w-6`}
        data-active={visible || undefined}
        style={{ animationDelay: "1400ms, 2100ms" }}
      >
        {/* 왼쪽 눈 — 얼굴(24px) 의 1/4 = 6px. 안경 렌즈 공간 확보 위해 살짝 외곽으로. */}
        <span className="absolute top-[7px] left-[1px] flex h-[6px] w-[6px] items-center justify-center rounded-full bg-white">
          <span className="chip-grab-pupil h-[4px] w-[4px] rounded-full bg-black" />
        </span>
        {/* 오른쪽 눈 */}
        <span className="absolute top-[7px] right-[1px] flex h-[6px] w-[6px] items-center justify-center rounded-full bg-white">
          <span className="chip-grab-pupil h-[4px] w-[4px] rounded-full bg-black" />
        </span>
        {/* 안경 — 렌즈 12×12 두 개가 얼굴 너비(24px) 를 꽉 채우며 가운데에서
            맞닿음. 두 테두리가 중앙에서 붙어 자연스러운 브리지 역할까지 함.
            border-2 로 얼굴 테두리와 동일한 굵기(2px) 유지. */}
        <span className="pointer-events-none absolute top-[4px] -left-[2px] h-[12px] w-[12px] rounded-full border-2 border-accent-500" />
        <span className="pointer-events-none absolute top-[4px] -right-[2px] h-[12px] w-[12px] rounded-full border-2 border-accent-500" />
      </span>
    </span>
  );
}

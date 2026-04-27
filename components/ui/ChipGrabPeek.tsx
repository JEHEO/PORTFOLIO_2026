// chip 뒤에서 손 두 개와 얼굴이 빼꼼 올라와 칸 위에 얹히는 연출.
// 키프레임은 globals.css 의 chipGrabHand / chipGrabFace 참고.
// 손은 z-index 가 -1 → 2 로 바뀌어 chip 뒤에서 앞으로 넘어오기 때문에,
// 부모 어딘가에 isolation: isolate 가 잡혀 있어야 chip 기준으로 작동함.

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

  // accent-500 테두리 + accent-50/950 배경. 다크모드까지 한 번에.
  const common =
    "absolute rounded-full border-2 border-accent-500 bg-accent-50 dark:border-accent-400 dark:bg-accent-950";

  return (
    <span
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0"
    >
      {/* 왼손 — 가장 먼저 등장 */}
      <span
        className={`chip-grab-hand ${common} top-0 left-[calc(50%-20px)] h-3 w-3`}
        data-active={visible || undefined}
      />
      {/* 오른손 — 왼손보다 500ms 늦게 */}
      <span
        className={`chip-grab-hand ${common} top-0 left-[calc(50%+8px)] h-3 w-3`}
        data-active={visible || undefined}
        style={{ animationDelay: "500ms" }}
      />
      {/* 얼굴은 두 손이 자리 잡은 뒤(1400ms)에 올라오고,
          peek 위치에 도착하면(2100ms) 좌우로 둘러보는 루프가 이어진다.
          delay 두 값이 두 애니메이션에 순서대로 매핑됨. */}
      <span
        className={`chip-grab-face ${common} top-0 left-[calc(50%-12px)] h-6 w-6`}
        data-active={visible || undefined}
        style={{ animationDelay: "1400ms, 2100ms" }}
      >
        {/* 임시 눈 — 흰자 6px (얼굴 1/4) + 검은 눈동자 4px.
            얼굴은 거의 고정이고 눈동자만 좌우로 움직여서 둘러보는 느낌. */}
        <span className="absolute top-[7px] left-[1px] flex h-[6px] w-[6px] items-center justify-center rounded-full bg-white">
          <span className="chip-grab-pupil h-[4px] w-[4px] rounded-full bg-black" />
        </span>
        <span className="absolute top-[7px] right-[1px] flex h-[6px] w-[6px] items-center justify-center rounded-full bg-white">
          <span className="chip-grab-pupil h-[4px] w-[4px] rounded-full bg-black" />
        </span>
        {/* 안경. 12x12 렌즈 두 개가 얼굴 너비를 꽉 채우면서 정중앙에서 맞닿아,
            두 테두리가 자연스럽게 브리지 역할도 한다. */}
        <span className="pointer-events-none absolute top-[4px] -left-[2px] h-[12px] w-[12px] rounded-full border-2 border-accent-500" />
        <span className="pointer-events-none absolute top-[4px] -right-[2px] h-[12px] w-[12px] rounded-full border-2 border-accent-500" />
      </span>
    </span>
  );
}

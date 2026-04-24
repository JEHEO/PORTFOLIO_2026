/**
 * 프로젝트 상세의 기술 스택 목록.
 *
 * - 카드 · 구분선 없이 CSS `columns-2` 레이아웃으로 2열 균형 배치.
 *   → 10개 카테고리의 세로 길이가 반으로 줄고, 각 카테고리는 `break-inside-avoid` 로 한 덩어리로 유지됩니다.
 * - accent uppercase 카테고리 헤더가 시각 앵커 역할을 해 구분선 없이도 블록이 구별됩니다.
 * - 각 item 은 라이브러리 이름(굵게) 위, 설명(연한색) 아래 **세로 스택** 으로 배치 —
 *   라이브러리 이름 길이가 다양해도 설명 시작 위치가 모두 왼쪽 정렬돼 정돈된 인상.
 * - 각 item 의 설명문은 `lang` 에 따라 `desc`(ko) / `descEn`(en) 로 스위칭됩니다.
 */

import React from "react";

import type { Lang } from "@/lib/stores/uiStore";
import type { TechCategory } from "@/lib/types/portfolio";

export function TechStackGrid({
  stack,
  performanceLabel,
  lang,
}: {
  stack: TechCategory[];
  performanceLabel: string;
  lang: Lang;
}) {
  return (
    <div className="mt-6 space-y-5">
      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
        {performanceLabel}
      </p>
      <div className="sm:columns-2 sm:gap-x-8">
        {stack.map((cat) => (
          <div key={cat.category} className="mb-6 break-inside-avoid">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-accent-500">
              {cat.category}
            </p>
            <div className="space-y-3">
              {cat.items.map((item) => {
                const desc = lang === "ko" ? item.desc : item.descEn;
                return (
                  <div key={item.name}>
                    <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                      {item.name}
                    </p>
                    {desc && (
                      <p className="mt-0.5 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                        {desc}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

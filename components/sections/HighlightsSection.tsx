/**
 * Expertise & Leadership 카드 리스트.
 *
 * - 각 카드는 번역본(`t.highlights[i].slug`) 을 통해 상세 페이지와 결합됩니다
 *   (index 기반 결합 제거).
 * - 카드 클릭 시 현재 `window.scrollY` 를 sessionStorage 에 저장.
 *   → 상세 페이지에서 "돌아가기" 로 홈에 돌아오면 `app/page.tsx` 가
 *     sessionStorage 값을 읽어 원래 스크롤 위치로 복원합니다.
 */

"use client";

import Link from "next/link";
import React from "react";

import { ArrowRightIcon } from "@/components/icons";
import { Section, SectionTitle } from "@/components/ui/Section";
import type { Translation } from "@/lib/types/portfolio";

/** 홈 스크롤 위치 저장 키 — 상세 진입 시 save, 홈 복귀 시 restore. */
export const HOME_SCROLL_KEY = "home-scroll-y";

export function HighlightsSection({ t }: { t: Translation }) {
  const handleCardClick = () => {
    try {
      sessionStorage.setItem(HOME_SCROLL_KEY, String(window.scrollY));
    } catch {
      /* sessionStorage 불가 환경 (프라이빗 등) 은 무시 */
    }
  };

  return (
    <Section id="highlights">
      <SectionTitle>{t.highlightsLabel}</SectionTitle>
      <div className="grid gap-4">
        {t.highlights.map((item) => (
          <Link
            key={item.slug}
            href={`/highlights/${item.slug}`}
            onClick={handleCardClick}
            className="group relative rounded-xl border border-zinc-200 p-5 transition-all hover:border-accent-500/50 hover:bg-accent-50/30 dark:border-zinc-800 dark:hover:bg-accent-900/10"
          >
            {/* 자세히 보기 — hover 시에만 등장. absolute 로 띄워 평상시 공간 미점유 */}
            <span className="pointer-events-none absolute top-5 right-5 inline-flex items-center text-[11px] font-medium text-accent-500 opacity-0 transition-opacity group-hover:opacity-100">
              {t.viewMore}
              <ArrowRightIcon className="ml-1 h-3 w-3" />
            </span>
            <div className="mb-2 flex gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-bold uppercase tracking-tight text-accent-500"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <h3 className="mb-2 font-bold transition-colors group-hover:text-accent-500">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    </Section>
  );
}

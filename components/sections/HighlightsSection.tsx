// Expertise & Leadership 카드 리스트.
// 카드는 번역본의 slug 로 상세 페이지와 매칭되고, 클릭 직전에 현재 스크롤 위치를
// sessionStorage 에 적어둔다. 돌아갈 때 app/page.tsx 가 그 값을 읽어 위치를 복원함.

"use client";

import Link from "next/link";
import React from "react";

import { ArrowRightIcon } from "@/components/icons";
import { Section, SectionTitle } from "@/components/ui/Section";
import type { Translation } from "@/lib/types/portfolio";

// 홈 → 상세 → 홈 사이클에서 스크롤 위치를 들고 다닐 키
export const HOME_SCROLL_KEY = "home-scroll-y";

export function HighlightsSection({ t }: { t: Translation }) {
  const handleCardClick = () => {
    try {
      sessionStorage.setItem(HOME_SCROLL_KEY, String(window.scrollY));
    } catch {
      // 프라이빗 모드 등 sessionStorage 가 막힌 경우는 그냥 넘어감
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
            {/* "자세히 보기" 는 hover 시에만 보이도록. absolute 라 평소엔 자리 안 차지함. */}
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

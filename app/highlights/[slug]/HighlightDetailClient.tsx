// 하이라이트 상세 페이지의 클라이언트 렌더러.
// 서버 컴포넌트 page.tsx 에서 slug 만 받아오고, 실제 콘텐츠는 여기서 lib/highlights.ts
// 의 HIGHLIGHTS 에서 찾아 그린다. 언어/테마 토글이 필요해 use client.
// "돌아가기" 는 항상 홈으로 가도록 router.push("/") — 홈에서 sessionStorage 로
// 스크롤 위치를 복원해줘.

"use client";

import { useRouter } from "next/navigation";
import React from "react";

import {
  ApproachIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ContextIcon,
  MoonIcon,
  ProblemIcon,
  ResultIcon,
  SunIcon,
  TakeawayIcon,
} from "@/components/icons";
import {
  toggleLang as doToggleLang,
  toggleTheme as doToggleTheme,
  useIsDark,
  useLang,
} from "@/hooks/useUiState";
import { T } from "@/lib/i18n/translations";
import { findHighlight, type HighlightSection } from "@/lib/highlights";
import type { Lang } from "@/lib/stores/uiStore";

// 섹션 제목 앞에 붙는 아이콘 매핑.
// "배경 · 사람 레이어" 처럼 뒤에 부연이 붙어도 prefix 로 매칭.
function getSectionIcon(heading: string): React.ReactNode {
  const h = heading.trim();
  if (h.startsWith("배경") || h.startsWith("Context")) {
    return <ContextIcon className="h-4 w-4" />;
  }
  if (h.startsWith("문제") || h.startsWith("Problem")) {
    return <ProblemIcon className="h-4 w-4" />;
  }
  if (h.startsWith("접근") || h.startsWith("Approach")) {
    return <ApproachIcon className="h-4 w-4" />;
  }
  if (h.startsWith("결과") || h.startsWith("Result")) {
    return <ResultIcon className="h-4 w-4" />;
  }
  if (h.startsWith("회고") || h.startsWith("Takeaway")) {
    return <TakeawayIcon className="h-4 w-4" />;
  }
  return null;
}

// 이 페이지에서만 쓰는 짧은 카피들.

const COPY: Record<
  Lang,
  {
    back: string;
    next: string;
    notFoundTitle: string;
    notFoundBody: string;
  }
> = {
  ko: {
    back: "돌아가기",
    next: "다음 하이라이트",
    notFoundTitle: "페이지를 찾을 수 없습니다",
    notFoundBody: "요청하신 하이라이트가 존재하지 않거나 이동되었습니다.",
  },
  en: {
    back: "Back",
    next: "Next highlight",
    notFoundTitle: "Page not found",
    notFoundBody: "The highlight you requested doesn't exist or has been moved.",
  },
};

// 본문 한 섹션을 그리는 작은 컴포넌트.

function Section({ section }: { section: HighlightSection }) {
  const isList = Array.isArray(section.body);
  const icon = getSectionIcon(section.heading);
  return (
    <section className="space-y-3">
      <h2 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-accent-500">
        {icon}
        <span>{section.heading}</span>
      </h2>
      {isList ? (
        <ul className="space-y-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          {(section.body as string[]).map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          {section.body as string}
        </p>
      )}
    </section>
  );
}

// ─── 상단 바 (간소화 버전) ────────────────────────────────────────────────────

function TopBar({
  lang,
  isDark,
  onToggleLang,
  onToggleTheme,
  onBack,
}: {
  lang: Lang;
  isDark: boolean;
  onToggleLang: () => void;
  onToggleTheme: () => void;
  onBack: () => void;
}) {
  const backLabel = COPY[lang].back;
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-black/80">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex cursor-pointer items-center gap-1.5 text-xs font-medium text-zinc-600 transition-colors hover:text-accent-500 dark:text-zinc-400"
        >
          <ArrowLeftIcon />
          {backLabel}
        </button>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleLang}
            aria-label="Toggle language"
            className="flex h-7 w-14 items-center justify-center rounded-full border border-zinc-200 text-[11px] font-bold text-zinc-600 transition-all hover:border-accent-400 hover:text-accent-500 dark:border-zinc-700 dark:text-zinc-400"
          >
            {lang === "ko" ? "EN" : "KO"}
          </button>
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle dark mode"
            className="flex h-7 w-7 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-all hover:border-accent-400 hover:text-accent-500 dark:border-zinc-700 dark:text-zinc-400"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export function HighlightDetailClient({ slug }: { slug: string }) {
  const highlight = findHighlight(slug);
  const router = useRouter();

  const lang = useLang();
  const isDark = useIsDark();

  const onToggleTheme = () => doToggleTheme(isDark);
  const onToggleLang = () => doToggleLang(lang);

  // 돌아가기는 무조건 홈으로. 상세 사이를 돌아다닌 이력이 있어도 항상 / 로 가도록.
  const onBack = React.useCallback(() => {
    router.push("/");
  }, [router]);

  // 다음 하이라이트는 홈에 노출된 카드 순서 그대로. 마지막이면 첫 번째로 순환.
  const homeOrder = T[lang].highlights;
  const currentIdx = homeOrder.findIndex((h) => h.slug === slug);
  const nextHighlight =
    currentIdx >= 0
      ? homeOrder[(currentIdx + 1) % homeOrder.length]
      : null;

  const onNext = React.useCallback(() => {
    if (!nextHighlight) return;
    router.push(`/highlights/${nextHighlight.slug}`);
  }, [router, nextHighlight]);

  // 잘못된 slug 면 간단한 404 화면
  if (!highlight) {
    const c = COPY[lang];
    return (
      <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
        <TopBar
          lang={lang}
          isDark={isDark}
          onToggleLang={onToggleLang}
          onToggleTheme={onToggleTheme}
          onBack={onBack}
        />
        <main className="mx-auto max-w-3xl px-4 pt-28 pb-20">
          <h1 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-white">
            {c.notFoundTitle}
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {c.notFoundBody}
          </p>
        </main>
      </div>
    );
  }

  const content = highlight[lang];

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <TopBar
        lang={lang}
        isDark={isDark}
        onToggleLang={onToggleLang}
        onToggleTheme={onToggleTheme}
        onBack={onBack}
      />

      <main className="mx-auto max-w-3xl px-4 pt-28 pb-20">
        {/* 히어로 영역 */}
        <header className="mb-12 border-b border-zinc-200 pb-8 dark:border-zinc-800">
          <div className="mb-3 flex flex-wrap gap-2">
            {highlight.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-bold uppercase tracking-tight text-accent-500"
              >
                #{tag}
              </span>
            ))}
          </div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {content.title}
          </h1>
          <p className="mb-6 text-xs font-medium uppercase tracking-widest text-zinc-400">
            {content.meta}
          </p>
          <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
            {content.summary}
          </p>
        </header>

        {/* 본문 섹션들 */}
        <div className="space-y-10">
          {content.sections.map((section) => (
            <Section key={section.heading} section={section} />
          ))}
        </div>

        {/* 좌측 돌아가기 · 우측 다음 하이라이트. 제목이 길어도 우측 영역 안에서만
            말줄임이 일어나 돌아가기 버튼을 침범하지 않게 했음. */}
        <div className="mt-16 flex items-center justify-between gap-4 border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 text-sm font-medium text-zinc-600 transition-colors hover:text-accent-500 dark:text-zinc-400"
          >
            <ArrowLeftIcon />
            {COPY[lang].back}
          </button>

          {nextHighlight && (
            <button
              type="button"
              onClick={onNext}
              // min-w-0 안 주면 flex 자식이 콘텐츠 너비대로 부풀어서 truncate 가 안 먹음
              className="group flex min-w-0 cursor-pointer items-center gap-3 text-right transition-colors"
            >
              <span className="flex min-w-0 flex-col items-end">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                  {COPY[lang].next}
                </span>
                {/* 모바일에서만 한글 기준 8자 정도까지 보이고 말줄임. sm 이상은 폭 제한 해제 */}
                <span className="block max-w-[7rem] truncate text-sm font-medium text-zinc-600 transition-colors group-hover:text-accent-500 sm:max-w-none sm:overflow-visible sm:whitespace-normal dark:text-zinc-400">
                  {nextHighlight.title}
                </span>
              </span>
              <ArrowRightIcon className="h-3.5 w-3.5 shrink-0 text-zinc-400 transition-all group-hover:translate-x-0.5 group-hover:text-accent-500" />
            </button>
          )}
        </div>
      </main>
    </div>
  );
}

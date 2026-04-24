"use client";

/**
 * 홈 페이지 — 섹션 조립 레이어.
 *
 * - 상세 구현은 `components/sections/` 하위 파일로 분리되어 있습니다.
 *   이 파일의 책임은 "언어/테마 상태 구독 + 섹션 순서 결정" 뿐입니다.
 * - 섹션 순서: About → Impact → Expertise → Experience → Code Showcase
 *   → Education → Certifications → Skills → 2020 Portfolio → Contact
 *   "누구인가 → 무엇을 했나 → 어떻게 구현했나 → 정규 자격 → 스킬" 흐름.
 */

import React from "react";

import { TopNav } from "@/components/layout/TopNav";
import { AboutSection } from "@/components/sections/AboutSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { CodeShowcaseSection } from "@/components/sections/CodeShowcaseSection";
import { ColophonFooter } from "@/components/sections/ColophonFooter";
import { ContactSection } from "@/components/sections/ContactSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeaderSection } from "@/components/sections/HeaderSection";
// import { IntroSection } from "@/components/sections/IntroSection"; // 인트로 섹션 임시 비활성
import {
  HighlightsSection,
  HOME_SCROLL_KEY,
} from "@/components/sections/HighlightsSection";
import { ImpactStrip } from "@/components/sections/ImpactStrip";
import { LegacyPortfolioSection } from "@/components/sections/LegacyPortfolioSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import {
  toggleLang as doToggleLang,
  toggleTheme as doToggleTheme,
  useIsDark,
  useLang,
} from "@/hooks/useUiState";
import { T } from "@/lib/i18n/translations";

export default function Home() {
  const lang = useLang();
  const isDark = useIsDark();

  const onToggleTheme = () => doToggleTheme(isDark);
  const onToggleLang = () => doToggleLang(lang);

  const t = T[lang];

  /**
   * 상세 페이지에서 "돌아가기" 로 홈에 돌아왔을 때 스크롤 위치 복원.
   *
   * - `HighlightsSection` 이 카드 클릭 시 `sessionStorage` 에 저장해둔
   *   `window.scrollY` 값을 마운트 직후 읽어 그 위치로 스크롤합니다.
   * - Next.js 의 기본 동작은 push 시 맨 위로 이동하므로, 한 번의 rAF 로
   *   레이아웃이 완료된 뒤 scrollTo 를 호출합니다.
   * - 복원 후에는 키를 제거해 새로고침 · 재진입 시 혼선을 방지합니다.
   */
  React.useEffect(() => {
    try {
      const saved = sessionStorage.getItem(HOME_SCROLL_KEY);
      if (!saved) return;
      const y = parseInt(saved, 10);
      sessionStorage.removeItem(HOME_SCROLL_KEY);
      if (Number.isNaN(y)) return;
      // 레이아웃이 그려진 다음 프레임에 스크롤 — 콘텐츠 높이가 확보되기 전에
      // scrollTo 를 호출하면 최대 스크롤 가능 지점까지만 이동하기 때문.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo(0, y);
        });
      });
    } catch {
      /* sessionStorage 불가 환경은 무시 */
    }
  }, []);

  return (
    <div id="top" className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <TopNav
        lang={lang}
        isDark={isDark}
        onToggleLang={onToggleLang}
        onToggleTheme={onToggleTheme}
        t={t}
      />

      <main className="mx-auto max-w-3xl px-4 pt-28 pb-20">
        {/* <IntroSection /> */}
        <HeaderSection t={t} />
        <AboutSection t={t} />
        <ImpactStrip t={t} />
        <HighlightsSection t={t} />
        <ExperienceSection t={t} lang={lang} />
        <CodeShowcaseSection t={t} lang={lang} />
        <EducationSection t={t} />
        <CertificationsSection t={t} />
        <SkillsSection t={t} />
        <LegacyPortfolioSection t={t} />
        <ContactSection t={t} />
        <ColophonFooter t={t} />
      </main>
    </div>
  );
}

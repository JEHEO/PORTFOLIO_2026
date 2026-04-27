"use client";

// 홈. 실제 콘텐츠는 components/sections/ 아래 파일들로 나눠놨고,
// 여기서는 언어/테마만 가져와서 섹션 순서대로 끼워 맞추는 역할.
// 흐름: 누구인가 → 무엇을 했나 → 어떻게 구현했나 → 정규 자격 → 스킬.

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
// IntroSection 은 임시로 빼둔 상태
// import { IntroSection } from "@/components/sections/IntroSection";
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

  // 하이라이트 상세에서 돌아왔을 때 스크롤 위치를 그대로 복원.
  // HighlightsSection 이 카드 클릭 시점에 sessionStorage 로 위치를 저장해두고,
  // 여기서 마운트되자마자 그 값을 읽어서 스크롤한다. rAF 두 번을 거치는 건
  // 콘텐츠가 다 그려지기 전에 scrollTo 를 호출하면 최대 스크롤 가능 지점까지만
  // 가버리기 때문.
  React.useEffect(() => {
    try {
      const saved = sessionStorage.getItem(HOME_SCROLL_KEY);
      if (!saved) return;
      const y = parseInt(saved, 10);
      sessionStorage.removeItem(HOME_SCROLL_KEY);
      if (Number.isNaN(y)) return;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo(0, y);
        });
      });
    } catch {
      // 프라이빗 모드 등 sessionStorage 가 막힌 환경은 그냥 넘어감
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

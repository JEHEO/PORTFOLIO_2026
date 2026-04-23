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
import { HighlightsSection } from "@/components/sections/HighlightsSection";
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

/**
 * Experience 섹션 — 회사 요약 카드 + 프로젝트 리스트.
 *
 * - 진행 중인 Next.js 프로젝트(`hasDetail: true`) 는 기본적으로 "상세 보기"
 *   디스클로저로 접혀 있습니다. Bomulsen 과의 시각적 무게 역전을 방지하기 위한 조치.
 */

import React from "react";

import { TouchTargetIcon } from "@/components/icons";
import { AtomicDesignDiagram } from "@/components/sections/code-showcase/AtomicDesignDiagram";
import { ArchitectureTree } from "@/components/sections/experience/ArchitectureTree";
import { CommitConventionSection } from "@/components/sections/experience/CommitConventionSection";
import { ScreenshotGallery } from "@/components/sections/experience/ScreenshotGallery";
import { TechStackGrid } from "@/components/sections/experience/TechStackGrid";
import { Section, SectionTitle } from "@/components/ui/Section";
import { StatBadge } from "@/components/ui/StatBadge";
import { PROJECT_DETAIL } from "@/lib/data/project-detail";
import type { Lang } from "@/lib/stores/uiStore";
import type { Project, Translation } from "@/lib/types/portfolio";

/**
 * 디스클로저 CTA summary — "클릭 가능" 어포던스 강화 버전.
 *
 * - 아이콘 + 타이틀 + 힌트 + 우측에 "탭 / 클릭" 손 아이콘.
 * - 평상시엔 손이 살짝 눌렀다 뗐다 반복하면서 "눌러보세요" 신호를 줌.
 * - hover 시 카드가 살짝 떠오르고(shadow + translate-y) 손 모션은 멈춤.
 * - 열린 상태(`group-open/detail`) 에서는 손 아이콘 모션 자동 정지.
 *
 * 반드시 `<details className="group/detail ...">` 내부의 `<summary>` 로만 사용.
 */
function DisclosureSummary({
  icon,
  label,
  hint,
}: {
  icon: React.ReactNode;
  label: string;
  hint: string;
}) {
  return (
    <summary className="group/summary border-accent-500/40 bg-accent-50/60 hover:border-accent-500 hover:bg-accent-50 hover:shadow-md dark:border-accent-500/30 dark:bg-accent-950/20 dark:hover:border-accent-500/60 dark:hover:bg-accent-950/30 flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl border p-5 transition-all hover:-translate-y-0.5 [&::-webkit-details-marker]:hidden">
      <div className="flex items-center gap-4">
        <div className="bg-accent-500 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white shadow-sm transition-transform group-hover/summary:scale-105">
          {icon}
        </div>
        <div className="min-w-0">
          <p className="text-accent-700 dark:text-accent-300 text-sm font-bold">
            {label}
          </p>
          <p className="text-accent-600/70 dark:text-accent-400/70 mt-0.5 text-xs leading-relaxed">
            {hint}
          </p>
        </div>
      </div>
      {/* 우측 어포던스 — 터치 타겟 아이콘 (중심 점 + 퍼지는 동심원 2개).
          동심원 자체가 sonar ping 처럼 바깥으로 퍼지며 "여기를 누르세요" 신호를
          준다. 별도 hand 나 ripple 오버레이가 필요없이 한 SVG 로 완결.
          디스클로저가 열리면(=이미 클릭됨) 아이콘 전체가 페이드아웃. */}
      <span className="text-accent-500 inline-flex shrink-0 transition-opacity duration-200 group-open/detail:opacity-0">
        <TouchTargetIcon className="h-[30px] w-[30px]" />
      </span>
    </summary>
  );
}

function ProjectCard({
  project,
  index,
  t,
  lang,
}: {
  project: Project;
  index: number;
  t: Translation;
  lang: Lang;
}) {
  return (
    <article className="group">
      {/* 프로젝트 번호 구분선 */}
      <div className="mb-5 flex items-center gap-3">
        <span className="text-accent-500 font-mono text-[11px] font-bold">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
      </div>

      {/* 프로젝트 헤더 */}
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
        <h4 className="group-hover:text-accent-500 text-base font-bold text-zinc-900 transition-colors dark:text-white">
          {project.title}
        </h4>
        <span className="rounded border border-zinc-200 px-2 py-0.5 text-[10px] font-bold text-zinc-400 uppercase dark:border-zinc-800">
          {project.tag}
        </span>
      </div>
      <p
        className={
          project.period
            ? "mb-1 text-sm font-medium text-zinc-500"
            : "mb-4 text-sm font-medium text-zinc-500"
        }
      >
        {project.sub}
      </p>
      {project.period && (
        <p className="mb-4 font-mono text-[11px] text-zinc-400">
          {project.period}
        </p>
      )}
      <ul className={"mb-6 space-y-2 text-sm text-zinc-600 dark:text-zinc-300"}>
        {project.details.map((detail) => (
          <li key={detail} className="flex gap-2">
            <span className="text-zinc-400">•</span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>

      {/* 스크린샷/영상 — 데이터 없으면 회색 placeholder 로 대체 */}
      {project.screenshots && project.screenshots.length > 0 ? (
        <ScreenshotGallery groups={project.screenshots} />
      ) : (
        <div className="flex gap-3 overflow-x-auto pb-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-48 w-28 shrink-0 rounded-lg border border-zinc-200 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800"
            />
          ))}
        </div>
      )}

      {/* 보물선 브랜치 전략 디스클로저 */}
      {project.hasBranchStrategy && <BranchStrategyDetail t={t} />}

      {/* Next.js 프로젝트 상세 — 디스클로저로 접을 수 있게 */}
      {project.hasDetail && <NextJsProjectDetail t={t} lang={lang} />}
    </article>
  );
}

function BranchStrategyDetail({ t }: { t: Translation }) {
  return (
    <details className="group/detail mt-4">
      <DisclosureSummary
        label={t.branchStrategyLabel}
        hint={t.branchStrategyHint}
        icon={
          /* Git branch 아이콘 */
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <line x1="6" y1="3" x2="6" y2="15" />
            <circle cx="18" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <path d="M18 9a9 9 0 0 1-9 9" />
          </svg>
        }
      />
      <div className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50/50 p-5 dark:border-zinc-800 dark:bg-zinc-900/30">
        {/* 5단계 flow — 번호 chip + 설명 */}
        <ol className="space-y-4">
          {t.branchStrategySteps.map((step, i) => (
            <li key={step.label} className="flex gap-4">
              <span className="bg-accent-100 text-accent-700 dark:bg-accent-950/40 dark:text-accent-300 flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold">
                {i + 1}
              </span>
              <div className="min-w-0 flex-1 pt-0.5">
                <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                  {step.label}
                </p>
                <p className="mt-0.5 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {step.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </details>
  );
}

function NextJsProjectDetail({ t, lang }: { t: Translation; lang: Lang }) {
  return (
    <details className="group/detail mt-4">
      <DisclosureSummary
        label={t.projectDetailLabel}
        hint={t.projectDetailHint}
        icon={
          /* Lightning bolt — "자세히/심층" 상징 */
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        }
      />
      <div className="mt-4 space-y-4 rounded-xl border border-zinc-200 bg-zinc-50/50 p-5 dark:border-zinc-800 dark:bg-zinc-900/30">
        {/* Stats — CI/CD · Branches 2종. 증거 스크린샷은 Atomic Design · CI/CD 그룹에 포함됨 */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <StatBadge
            icon={<span aria-hidden>✅</span>}
            value={t.cicdValue}
            label={t.statsLabels.cicd}
          />
          <StatBadge
            icon={<span aria-hidden>🌿</span>}
            value={t.branchesValue}
            label={t.statsLabels.branches}
          />
        </div>
        <CommitConventionSection
          label={t.commitConventionLabel}
          desc={t.commitConventionDesc}
          lang={lang}
        />
        <TechStackGrid
          stack={PROJECT_DETAIL.techStack}
          performanceLabel={t.performanceLabel}
          lang={lang}
        />
        <ArchitectureTree architecture={PROJECT_DETAIL.architecture} />
        <div className="mt-6">
          <p className="mb-3 text-xs font-semibold tracking-widest text-zinc-400 uppercase">
            Atomic Design 구조 예시
          </p>
          <AtomicDesignDiagram desc={t.atomicDesignDesc} />
        </div>
      </div>
    </details>
  );
}

export function ExperienceSection({
  t,
  lang,
}: {
  t: Translation;
  lang: Lang;
}) {
  const prior = t.experience.priorCareer;
  return (
    <Section id="experience">
      <SectionTitle>{t.experienceLabel}</SectionTitle>

      {/* Prior career — 현재 커리어 이전 타임라인 맥락 (세부사항 생략). 없으면 자동 숨김. */}
      {prior && (
        <div className="mb-8 border-l-2 border-zinc-300 pl-4 dark:border-zinc-700">
          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
            Prior Career
          </p>
          <div className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {prior.role}
            </p>
            <span className="font-mono text-[11px] text-zinc-400">
              {prior.period}
            </span>
          </div>
          {prior.note && (
            <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
              {prior.note}
            </p>
          )}
        </div>
      )}

      {/* 회사 요약 — 두 블록 구조:
          (1) 회사 블록: 이름 + 한 줄 회사 설명 + 재직 기간
          (2) 역할 블록: 내 직급 + 내 업무 설명
          '회사 → 내 역할' 논리 순서로 읽히도록 분리. */}
      <div className="mb-10">
        {/* (1) 회사 블록 */}
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
            {t.experience.company}
          </h3>
          <span className="text-xs font-medium text-zinc-400">
            {t.experience.period}
          </span>
        </div>
        {t.experience.companyDesc && (
          <p className="mt-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
            {t.experience.companyDesc}
          </p>
        )}

        {/* (2) 역할 블록 */}
        <div className="mt-5">
          <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
            {t.experience.position}
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {t.experience.description}
          </p>
        </div>
      </div>

      {/* 프로젝트 리스트 */}
      <div className="space-y-12">
        {t.experience.projects.map((project, pIdx) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={pIdx}
            t={t}
            lang={lang}
          />
        ))}
      </div>
    </Section>
  );
}

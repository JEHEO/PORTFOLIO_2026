"use client";

import React, { useEffect, useState, useSyncExternalStore } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Lang = "ko" | "en";
type TechItem = { name: string; desc: string };
type TechCategory = { category: string; items: TechItem[] };
type ProjectDetail = {
  stats: { commits: string; cicd: string; branches: string };
  techStack: TechCategory[];
  architecture: { label: string; items: string[] }[];
};
type Project = {
  title: string;
  tag: string;
  sub: string;
  details: string[];
  hasDetail?: boolean;
  hasRN076Evidence?: boolean;
};
type ExperienceData = {
  company: string;
  position: string;
  period: string;
  description: string;
  projects: Project[];
};
type HighlightItem = { title: string; description: string; tags: string[] };
type Translation = {
  role: string;
  title: string;
  nav: { label: string; href: string }[];
  contributionsLabel: string;
  contributionsNote: string;
  highlightsLabel: string;
  viewMore: string;
  experienceLabel: string;
  codeShowcaseLabel: string;
  codeShowcaseDesc: string;
  codeShowcaseBtnLabel: string;
  atomicDesignDesc: string;
  hooksDesc: string;
  performanceLabel: string;
  commitConventionLabel: string;
  commitConventionDesc: string;
  skillsLabel: string;
  githubStatsLabel: string;
  portfolioLabel: string;
  statsLabels: { commits: string; cicd: string; branches: string };
  cicdValue: string;
  branchesValue: string;
  viewCodeLabel: string;
  privateRepoNote: string;
  evidenceAddHint: string;
  rn076EvidenceLabel: string;
  conventionEvidenceLabel: string;
  experience: ExperienceData;
  highlights: HighlightItem[];
};

// ─── Static / Language-Independent Data ──────────────────────────────────────

const PROFILE = { name: "허정은", email: "heo940122@gmail.com" };
const GITHUB_USERNAME = "JEHEO";

const SKILLS = [
  { name: "React", color: "#61DAFB" },
  { name: "React Native", color: "#61DAFB" },
  { name: "Next.js", color: "current" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Tailwind CSS", color: "#06B6D4" },
  { name: "Figma", color: "#F24E1E" },
  { name: "Storybook", color: "#FF4785" },
];

const HIGHLIGHT_LINKS = [
  "https://github.com/JEHEO/store5000/issues/1",
  "#",
];

const PORTFOLIO_LINKS = {
  github: "https://github.com/JEHEO/PORTFOLIO_2020",
  demo: "https://jeheo.github.io/PORTFOLIO_2020/",
};

/**
 * TODO: Replace "#" with actual GitHub directory URLs for each project.
 * Example: "https://github.com/org/repo/tree/main/src/features/dashboard"
 */
const PROJECT_CODE_LINKS = {
  bomulsen: "#", // TODO: GitHub URL for Bomulsen core logic
  gopang: "#",   // TODO: GitHub URL for GOPANG core logic
  nextjs: "#",   // TODO: GitHub URL for Next.js project src/
};

/**
 * Key files that showcase Clean Code patterns.
 * TODO: Replace href values with actual GitHub file URLs.
 */
const CODE_FILES = [
  {
    label: "useAsyncList.ts",
    path: "src/hooks/useAsyncList.ts",
    href: "#", // TODO: direct GitHub file link
    patterns: ["Custom Hook", "SRP"],
    desc: "서버 데이터 비동기 fetch + 로딩/에러 상태를 단일 훅으로 추상화",
    descEn: "Abstracts async server fetch + loading/error state into a single hook",
  },
  {
    label: "useDataTable.ts",
    path: "src/hooks/useDataTable.ts",
    href: "#", // TODO: direct GitHub file link
    patterns: ["Custom Hook", "Separation of Concerns"],
    desc: "TanStack Table 설정·컬럼·정렬·페이지네이션 로직 캡슐화",
    descEn: "Encapsulates TanStack Table config, columns, sorting, and pagination logic",
  },
  {
    label: "Button.stories.tsx",
    path: "src/components/atoms/button/Button.stories.tsx",
    href: "#", // TODO: direct GitHub file link
    patterns: ["Atomic Design", "Storybook"],
    desc: "variants · size · disabled 상태를 Storybook으로 문서화한 Atom 컴포넌트",
    descEn: "Atom component with variants, size, and disabled states documented via Storybook",
  },
  {
    label: "useSearchStore.ts",
    path: "src/stores/useSearchStore.ts",
    href: "#", // TODO: direct GitHub file link
    patterns: ["Zustand", "Global State"],
    desc: "Zustand persist + shallow compare로 불필요한 리렌더링 차단",
    descEn: "Zustand store with persist + shallow compare to prevent unnecessary re-renders",
  },
  {
    label: "http.ts",
    path: "src/api/http.ts",
    href: "#", // TODO: direct GitHub file link
    patterns: ["Axios Interceptor", "Error Handling"],
    desc: "토큰 갱신·에러 핸들링을 인터셉터로 중앙화한 HTTP 클라이언트",
    descEn: "Centralized HTTP client with token refresh and error handling via interceptors",
  },
];

/** Commit samples from the actual pipeline history (screenshot-sourced) */
const COMMIT_SAMPLES = [
  { type: "fix", message: "ReviewListPage import 순서 자동 수정", num: 19 },
  { type: "fix", message: "Next.js 15 params async 타입 대응", num: 17 },
  { type: "fix", message: "upgrade Next.js to fix security vulnerability", num: 10 },
  { type: "feat", message: "dashboard 작업중", num: 20 },
  { type: "chore", message: "build warnings 제거 및 hydration 오류 수정", num: 24 },
  { type: "chore", message: "lint test 정리", num: 23 },
];

const COMMIT_COLORS: Record<string, string> = {
  feat: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400",
  fix: "bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400",
  refactor: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-400",
  style: "bg-pink-100 text-pink-600 dark:bg-pink-900/40 dark:text-pink-400",
  docs: "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400",
  test: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-600",
  chore: "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",
};

const PROJECT_DETAIL: ProjectDetail = {
  stats: { commits: "415+", cicd: "", branches: "" },
  techStack: [
    {
      category: "Styling",
      items: [
        { name: "Tailwind CSS", desc: "JIT 컴파일로 미사용 클래스 zero — 최소 CSS 번들" },
        { name: "shadcn/ui", desc: "Radix UI 기반 접근성 + 완전한 커스터마이징" },
        { name: "TanStack Table", desc: "가상화(virtualization) 지원 — 대용량 데이터 무한스크롤" },
      ],
    },
    {
      category: "State",
      items: [
        {
          name: "Zustand",
          desc: "Redux 대비 90% 보일러플레이트 감소. shallow compare로 리렌더링 최소화",
        },
      ],
    },
    {
      category: "Auth",
      items: [
        {
          name: "Auth.js",
          desc: "Next.js middleware 통합 → API Route 없이 서버사이드 세션 검증",
        },
      ],
    },
    {
      category: "Utilities & Forms",
      items: [
        { name: "Zod + React Hook Form", desc: "런타임 타입 검증 + 비제어 컴포넌트로 리렌더링 0" },
        { name: "CASL", desc: "역할 기반 UI 분기를 컴포넌트 외부에서 선언형으로 처리" },
        { name: "Day.js", desc: "Moment.js 대비 번들 크기 97% 절감 (2 kB vs 67 kB)" },
        { name: "Vercel", desc: "PR마다 Preview URL 자동 생성 → 빠른 디자인 피드백 루프" },
      ],
    },
    {
      category: "Code Quality",
      items: [
        { name: "ESLint + simple-import-sort", desc: "import 순서 자동 정렬 → diff 노이즈 제거" },
        { name: "Prettier + tailwindcss plugin", desc: "Tailwind 클래스 순서 자동 정렬 → 일관된 코드베이스" },
        { name: "Storybook", desc: "Atom · Molecule 단위 격리 개발 → 사이드 이펙트 없는 UI 변경" },
      ],
    },
  ],
  architecture: [
    { label: "src/app/", items: ["(auth) — login, signup", "(main) — admin, dashboard, operate, users", "(popup)"] },
    { label: "src/components/", items: ["atoms — button, checkbox, dialog, dropdown, input, loadingSpinner, popover, radio, text", "molecules", "organism", "templates"] },
    { label: "src/features/", items: ["admin", "dashboard", "operate"] },
    { label: "src/hooks/", items: ["use-mobile.ts", "useAsyncList.ts", "useDataTable.ts"] },
    { label: "src/lib/ · stores/ · api/", items: ["date.ts, utils.ts", "useSearchStore.ts", "client.ts, http.ts"] },
  ],
};

/** Evidence placeholder items — replace `src` with actual image path after adding screenshot files */
const EVIDENCE_RN076 = [
  { label: "package.json 버전 변경 이력", hint: "public/evidence/package-diff.png 로 저장 후 src 교체", src: "" },
  { label: "Hermes 프로파일러 메모리 개선", hint: "public/evidence/hermes-memory.png 로 저장 후 src 교체", src: "" },
  { label: "patch-package 파일 목록", hint: "public/evidence/patch-package.png 로 저장 후 src 교체", src: "" },
];

const EVIDENCE_CONVENTION = [
  { label: "ESLint 설정 파일", hint: "public/evidence/eslint-config.png 로 저장 후 src 교체", src: "" },
  { label: "Storybook 컴포넌트 목록", hint: "public/evidence/storybook-sidebar.png 로 저장 후 src 교체", src: "" },
  { label: "컴포넌트 명명 규칙 문서", hint: "Notion 링크 또는 public/evidence/naming-convention.png", src: "" },
];

// ─── Translations ─────────────────────────────────────────────────────────────

const T: Record<Lang, Translation> = {
  ko: {
    role: "Frontend Developer",
    title: "근성 있는 디자인 전공\n프론트엔드 리더",
    nav: [
      { label: "기여", href: "#contributions" },
      { label: "역량", href: "#highlights" },
      { label: "경력", href: "#experience" },
      { label: "코드", href: "#code-showcase" },
      { label: "기술", href: "#skills" },
    ],
    contributionsLabel: "GitHub Contributions",
    contributionsNote: "개 기여 · 최근 1년간 커밋 현황",
    highlightsLabel: "Expertise & Leadership",
    viewMore: "자세히 보기",
    experienceLabel: "Experience",
    codeShowcaseLabel: "Clean Code Showcase",
    codeShowcaseDesc: "실무에서 작성한 핵심 파일들입니다. Atomic Design · Custom Hook · 단일 책임 원칙을 어떻게 적용했는지 확인하세요.",
    codeShowcaseBtnLabel: "GitHub에서 파일 보기",
    atomicDesignDesc: "UI를 Atoms → Molecules → Organisms → Templates → Pages 5계층으로 분리해 재사용성과 테스트 용이성을 확보했습니다.",
    hooksDesc: "비즈니스 로직을 Custom Hook으로 분리해 컴포넌트는 UI 렌더링에만 집중합니다.",
    performanceLabel: "왜 이 라이브러리? — 기술 선택 근거 & 성능 최적화",
    commitConventionLabel: "Commit Convention",
    commitConventionDesc: "feat · fix · refactor · chore · style · docs · test 타입을 일관되게 적용합니다.",
    skillsLabel: "Technical Skills",
    githubStatsLabel: "GitHub Stats",
    portfolioLabel: "2020 Portfolio",
    statsLabels: { commits: "누적 커밋", cicd: "CI/CD 파이프라인", branches: "브랜치 전략" },
    cicdValue: "전 파이프라인 성공",
    branchesValue: "bugfix / feature 브랜치 전략",
    viewCodeLabel: "코드 보기",
    privateRepoNote: "비공개 저장소 · URL 설정 후 활성화",
    evidenceAddHint: "스크린샷을 public/evidence/ 에 저장 후 src를 교체하세요",
    rn076EvidenceLabel: "RN 0.76 업그레이드 증거",
    conventionEvidenceLabel: "팀 컨벤션 증거",
    experience: {
      company: "(주)에이치투비즈",
      position: "개발팀 책임연구원",
      period: "2021.03 — 재직 중",
      description: "리뉴얼 및 유지보수 담당, 신규 프로젝트 제작, 실질적인 파트 리더 역할 수행, 부사수 매니지먼트 및 프로젝트 스케줄링 전담",
      projects: [
        {
          title: "보물선 — 리뉴얼 및 유지보수",
          tag: "프론트 메인 담당",
          sub: "국내 랜덤박스 플랫폼",
          details: [
            "jQuery 기반 노후 서비스를 React Native로 전면 리뉴얼",
            "회원 수 7,700% 성장(약 13.7만 명) 전 과정 프론트엔드 관리",
            "이벤트/프로모션 페이지를 React로 전환하여 동적 인터랙션 및 재사용성 강화",
            "Google Play 16kb 정책 대응을 위한 RN 버전업(v0.70 → v0.76) 및 OS 환경 대응",
            "관리자 페이지 개발 및 유지보수",
          ],
          hasRN076Evidence: true,
        },
        {
          title: "GOPANG — 신규 제작",
          tag: "메인 담당자",
          sub: "인도네시아향 랜덤박스 플랫폼",
          details: [
            "현지화에 최적화된 UI/UX 퍼블리싱 및 성능 안정화",
            "고팡 관리자 페이지 UI/UX 디자인 1인 전담",
          ],
        },
        {
          title: "Next.js 기반 신규 프로젝트",
          tag: "리드 개발자 · 진행 중",
          sub: "차세대 웹 서비스 구축",
          details: [
            "Atomic Design Pattern 도입으로 코드 유지보수성 및 일관성 확보",
            "Storybook 활용한 컴포넌트 주도 개발(CDD) 환경 구축",
            "Next.js App Router 기반 아키텍처 설계 및 SSR 사용자 경험 최적화",
          ],
          hasDetail: true,
        },
      ],
    },
    highlights: [
      {
        title: "React Native 0.76 업그레이드 트러블슈팅",
        description: "Google Play 16kb 정책 대응을 위한 신규 아키텍처 도입 및 라이브러리 호환성 해결 과정을 기록했습니다.",
        tags: ["Technical", "Problem Solving"],
      },
      {
        title: "프론트엔드 팀 컨벤션 수립",
        description: "실질적 파트 리더로서 코드 리뷰 프로세스와 Atomic Design 도입을 통해 협업 효율을 30% 개선했습니다.",
        tags: ["Leadership", "Process"],
      },
    ],
  },
  en: {
    role: "Frontend Developer",
    title: "Design Graduate with a\nFrontend Leader Mindset",
    nav: [
      { label: "Contributions", href: "#contributions" },
      { label: "Expertise", href: "#highlights" },
      { label: "Experience", href: "#experience" },
      { label: "Code", href: "#code-showcase" },
      { label: "Skills", href: "#skills" },
    ],
    contributionsLabel: "GitHub Contributions",
    contributionsNote: "contributions · past year",
    highlightsLabel: "Expertise & Leadership",
    viewMore: "View details",
    experienceLabel: "Experience",
    codeShowcaseLabel: "Clean Code Showcase",
    codeShowcaseDesc: "Key files from production. See how Atomic Design, Custom Hooks, and Single Responsibility Principle are applied in practice.",
    codeShowcaseBtnLabel: "View file on GitHub",
    atomicDesignDesc: "UI is split into 5 layers — Atoms → Molecules → Organisms → Templates → Pages — for reusability and testability.",
    hooksDesc: "Business logic is extracted into Custom Hooks so components focus solely on rendering.",
    performanceLabel: "Why This Library? — Tech Choices & Performance Optimizations",
    commitConventionLabel: "Commit Convention",
    commitConventionDesc: "Consistent use of feat · fix · refactor · chore · style · docs · test prefixes.",
    skillsLabel: "Technical Skills",
    githubStatsLabel: "GitHub Stats",
    portfolioLabel: "2020 Portfolio",
    statsLabels: { commits: "Total Commits", cicd: "CI/CD Pipeline", branches: "Branch Strategy" },
    cicdValue: "All Pipelines Passing",
    branchesValue: "bugfix / feature branch strategy",
    viewCodeLabel: "View Code",
    privateRepoNote: "Private repo · Set URL to activate",
    evidenceAddHint: "Save screenshots to public/evidence/ and replace the src value",
    rn076EvidenceLabel: "RN 0.76 Upgrade Evidence",
    conventionEvidenceLabel: "Team Convention Evidence",
    experience: {
      company: "H2Biz Co., Ltd.",
      position: "Senior Research Engineer, Dev Team",
      period: "Mar 2021 — Present",
      description: "In charge of renewal & maintenance, new project development, acting frontend tech lead, junior mentoring, and project scheduling.",
      projects: [
        {
          title: "Bomulsen — Renewal & Maintenance",
          tag: "Frontend Lead",
          sub: "Domestic random-box platform",
          details: [
            "Fully migrated legacy jQuery service to React Native",
            "Managed frontend through 7,700% member growth (~137K users)",
            "Migrated event/promo pages to React for dynamic interactions and reusability",
            "Upgraded RN (v0.70 → v0.76) to meet Google Play 16KB policy; handled OS compatibility",
            "Developed and maintained the admin dashboard",
          ],
          hasRN076Evidence: true,
        },
        {
          title: "GOPANG — New Build",
          tag: "Main Developer",
          sub: "Indonesian random-box platform",
          details: [
            "Published localization-optimized UI/UX and stabilized performance",
            "Solo-designed GOPANG admin page UI/UX end-to-end",
          ],
        },
        {
          title: "Next.js-based New Project",
          tag: "Lead Developer · In Progress",
          sub: "Next-generation web service",
          details: [
            "Adopted Atomic Design Pattern to improve maintainability and consistency",
            "Set up Component-Driven Development (CDD) environment with Storybook",
            "Designed App Router architecture; optimized SSR user experience",
          ],
          hasDetail: true,
        },
      ],
    },
    highlights: [
      {
        title: "React Native 0.76 Upgrade Troubleshooting",
        description: "Documented the new architecture adoption for the Google Play 16KB policy and library compatibility resolution process.",
        tags: ["Technical", "Problem Solving"],
      },
      {
        title: "Establishing Frontend Team Conventions",
        description: "As acting tech lead, improved collaboration efficiency by 30% through code review processes and Atomic Design adoption.",
        tags: ["Leadership", "Process"],
      },
    ],
  },
};

// ─── GitHub Contribution Calendar ─────────────────────────────────────────────

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const WEEK_DAYS = ["", "Mon", "", "Wed", "", "Fri", ""];

function seededRand(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}
function getLevel(seed: number) {
  const r = seededRand(seed);
  if (r < 0.45) return 0;
  if (r < 0.65) return 1;
  if (r < 0.80) return 2;
  if (r < 0.92) return 3;
  return 4;
}
const LEVEL_CLS = [
  "bg-zinc-100 dark:bg-zinc-800",
  "bg-[#b3ecfb]", "bg-[#61dafb]", "bg-[#29c4f5]", "bg-[#0ea5e9]",
];

function GitHubContributionCalendar({ totalContributions, note }: { totalContributions: number; note: string }) {
  const WEEKS = 53;
  const today = new Date(2026, 3, 15);
  const startDate = new Date(today);
  startDate.setDate(startDate.getDate() - WEEKS * 7 + 1);
  const weeks: { date: Date; level: number }[][] = [];
  const cur = new Date(startDate);
  for (let w = 0; w < WEEKS; w++) {
    const week: { date: Date; level: number }[] = [];
    for (let d = 0; d < 7; d++) {
      const seed = w * 7 + d;
      week.push({ date: new Date(cur), level: cur <= today ? getLevel(seed) : 0 });
      cur.setDate(cur.getDate() + 1);
    }
    weeks.push(week);
  }
  const monthLabels: { label: string; col: number }[] = [];
  weeks.forEach((week, wi) => {
    const fd = week[0].date;
    if (fd.getDate() <= 7) monthLabels.push({ label: MONTHS[fd.getMonth()], col: wi });
  });
  return (
    <div>
      <div className="mb-1 ml-7 flex gap-1 text-[10px] text-zinc-400">
        {monthLabels.map(({ label, col }) => (
          <span key={`${label}-${col}`} style={{ minWidth: 28 }}>{label}</span>
        ))}
      </div>
      <div className="flex gap-1">
        <div className="mr-1 flex flex-col justify-between gap-[3px] py-0.5 text-[10px] text-zinc-400">
          {WEEK_DAYS.map((d, i) => <span key={i} className="h-[11px] leading-[11px]">{d}</span>)}
        </div>
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-[3px]">
            {week.map((day, di) => (
              <div key={di} title={day.date.toDateString()} className={`h-[11px] w-[11px] rounded-sm ${LEVEL_CLS[day.level]}`} />
            ))}
          </div>
        ))}
      </div>
      <p className="mt-3 text-right text-xs text-zinc-400">{totalContributions.toLocaleString()}{note}</p>
    </div>
  );
}

// ─── Base Components ──────────────────────────────────────────────────────────

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-8 flex items-center gap-3">
    <div className="h-4 w-0.5 shrink-0 rounded-full bg-blue-500" />
    <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
      {children}
    </h2>
    <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
  </div>
);

/** 섹션 공통 래퍼: 상단 구분선 + 일관된 여백 */
function Section({
  id,
  first = false,
  children,
}: {
  id: string;
  first?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 pb-20 ${
        first ? "" : "border-t border-zinc-200 pt-14 dark:border-zinc-800"
      }`}
    >
      {children}
    </section>
  );
}

const SkillBadge = ({ name, color }: { name: string; color: string }) => {
  const isCustom = color !== "current";
  return (
    <div
      className={`flex items-center gap-2 rounded-lg px-3 py-2 ${isCustom ? "" : "bg-zinc-100 dark:bg-zinc-800"}`}
      style={isCustom ? { backgroundColor: `${color}1A` } : {}}
    >
      <img
        src={`https://cdn.simpleicons.org/${name.toLowerCase().replace(".", "dot").replace(" ", "")}/${isCustom ? color.replace("#", "") : "888"}`}
        alt={name}
        className="h-5 w-5"
      />
      <span
        className={`text-sm font-medium ${isCustom ? "" : "text-zinc-900 dark:text-white"}`}
        style={isCustom ? { color } : {}}
      >
        {name}
      </span>
    </div>
  );
};

// ─── GitHub Code Button ───────────────────────────────────────────────────────

function GithubCodeBtn({ href, label, privateNote }: { href: string; label: string; privateNote: string }) {
  const isPlaceholder = !href || href === "#";
  return (
    <a
      href={isPlaceholder ? undefined : href}
      target={isPlaceholder ? undefined : "_blank"}
      rel="noreferrer"
      aria-disabled={isPlaceholder}
      title={isPlaceholder ? privateNote : undefined}
      className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-all ${
        isPlaceholder
          ? "cursor-default border-zinc-200 text-zinc-300 dark:border-zinc-800 dark:text-zinc-600"
          : "border-zinc-200 text-zinc-600 hover:border-blue-400 hover:text-blue-500 dark:border-zinc-700 dark:text-zinc-400"
      }`}
    >
      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
      {label}
      {isPlaceholder && <span className="ml-0.5 text-[10px] opacity-60">🔒</span>}
    </a>
  );
}

// ─── Project Detail Components ────────────────────────────────────────────────

const StatBadge = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => (
  <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900/50">
    <span className="text-lg">{icon}</span>
    <div>
      <p className="text-sm font-bold text-zinc-900 dark:text-white">{value}</p>
      <p className="text-xs text-zinc-500">{label}</p>
    </div>
  </div>
);

function TechStackGrid({ stack, performanceLabel }: { stack: TechCategory[]; performanceLabel: string }) {
  return (
    <div className="mt-6 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">{performanceLabel}</p>
      <div className="grid gap-3">
        {stack.map((cat) => (
          <div key={cat.category} className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-blue-500">{cat.category}</p>
            <div className="space-y-2">
              {cat.items.map((item) => (
                <div key={item.name} className="flex items-start gap-2 text-sm">
                  <span className="mt-0.5 shrink-0 font-semibold text-zinc-800 dark:text-zinc-100">{item.name}</span>
                  {item.desc && (
                    <>
                      <span className="text-zinc-300 dark:text-zinc-600">—</span>
                      <span className="text-zinc-500 dark:text-zinc-400">{item.desc}</span>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const ArchitectureTree = ({ architecture }: { architecture: { label: string; items: string[] }[] }) => (
  <div className="mt-6 space-y-3">
    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Project Architecture</p>
    <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-xs dark:border-zinc-800 dark:bg-zinc-900/50">
      <p className="mb-2 text-zinc-400">src/</p>
      {architecture.map((dir) => (
        <div key={dir.label} className="mb-2 ml-3">
          <p className="font-semibold text-blue-500">{dir.label}</p>
          {dir.items.map((item) => (
            <p key={item} className="ml-3 text-zinc-500 dark:text-zinc-400">└ {item}</p>
          ))}
        </div>
      ))}
    </div>
  </div>
);

// ─── Commit Convention ────────────────────────────────────────────────────────

function CommitConventionSection({ label, desc }: { label: string; desc: string }) {
  return (
    <div className="mt-6 space-y-3">
      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">{label}</p>
      <p className="text-xs text-zinc-500 dark:text-zinc-400">{desc}</p>
      {/* Type legend */}
      <div className="flex flex-wrap gap-2">
        {Object.entries(COMMIT_COLORS).map(([type, cls]) => (
          <span key={type} className={`rounded px-2 py-0.5 text-[11px] font-bold ${cls}`}>{type}</span>
        ))}
      </div>
      {/* Actual commit samples */}
      <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
        {COMMIT_SAMPLES.map((c, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 px-4 py-2.5 text-sm ${i < COMMIT_SAMPLES.length - 1 ? "border-b border-zinc-100 dark:border-zinc-800" : ""}`}
          >
            <span className={`shrink-0 rounded px-1.5 py-0.5 text-[11px] font-bold ${COMMIT_COLORS[c.type] ?? COMMIT_COLORS.chore}`}>
              {c.type}
            </span>
            <span className="text-zinc-700 dark:text-zinc-300">{c.message}</span>
            <span className="ml-auto shrink-0 font-mono text-[11px] text-zinc-400">#{c.num}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Evidence Placeholder ─────────────────────────────────────────────────────

function EvidencePlaceholder({ label, hint, src }: { label: string; hint: string; src: string }) {
  if (src) {
    return (
      <div className="space-y-1">
        <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400">{label}</p>
        <img src={src} alt={label} className="w-full rounded-lg border border-zinc-200 dark:border-zinc-700" />
      </div>
    );
  }
  return (
    <div className="space-y-1">
      <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400">{label}</p>
      <div className="flex min-h-[100px] flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-900/30">
        <svg className="h-6 w-6 text-zinc-300 dark:text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p className="text-center text-[11px] text-zinc-400 dark:text-zinc-500">{hint}</p>
      </div>
    </div>
  );
}

function EvidenceSection({ sectionLabel, items }: { sectionLabel: string; items: { label: string; hint: string; src: string }[] }) {
  return (
    <div className="mt-6 space-y-3">
      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">{sectionLabel}</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {items.map((item) => (
          <EvidencePlaceholder key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
}

// ─── Code Showcase Section ────────────────────────────────────────────────────

function AtomicDesignDiagram({ desc }: { desc: string }) {
  const layers = [
    { label: "Atoms", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300", examples: "Button, Input, Badge" },
    { label: "Molecules", color: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300", examples: "SearchBar, FormField" },
    { label: "Organisms", color: "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300", examples: "Header, DataTable" },
    { label: "Templates", color: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300", examples: "DashboardLayout" },
    { label: "Pages", color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300", examples: "AdminPage, LoginPage" },
  ];
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/50">
      <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-blue-500">Atomic Design</p>
      <p className="mb-4 text-xs text-zinc-500 dark:text-zinc-400">{desc}</p>
      <div className="flex flex-col gap-2">
        {layers.map((l, i) => (
          <div key={l.label} className="flex items-center gap-3">
            <div
              className="flex h-7 items-center justify-center rounded font-bold text-[11px]"
              style={{ minWidth: `${56 + i * 20}px` }}
            >
              <span className={`rounded px-2 py-0.5 ${l.color}`}>{l.label}</span>
            </div>
            <span className="text-xs text-zinc-400">{l.examples}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CodeFileRow({
  label, path, href, patterns, desc, descEn, lang, btnLabel,
}: {
  label: string; path: string; href: string; patterns: string[]; desc: string; descEn: string; lang: Lang; btnLabel: string;
}) {
  const isPlaceholder = !href || href === "#";
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/50 sm:flex-row sm:items-center">
      <div className="flex-1 space-y-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-sm font-semibold text-zinc-800 dark:text-zinc-100">{label}</span>
          {patterns.map((p) => (
            <span key={p} className="rounded bg-zinc-100 px-1.5 py-0.5 text-[10px] font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">{p}</span>
          ))}
        </div>
        <p className="font-mono text-[10px] text-zinc-400">{path}</p>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">{lang === "ko" ? desc : descEn}</p>
      </div>
      <a
        href={isPlaceholder ? undefined : href}
        target={isPlaceholder ? undefined : "_blank"}
        rel="noreferrer"
        aria-disabled={isPlaceholder}
        className={`inline-flex shrink-0 items-center gap-1 rounded-lg border px-3 py-1.5 text-xs font-medium transition-all ${
          isPlaceholder
            ? "cursor-default border-zinc-200 text-zinc-300 dark:border-zinc-800 dark:text-zinc-600"
            : "border-zinc-200 text-zinc-600 hover:border-blue-400 hover:text-blue-500 dark:border-zinc-700 dark:text-zinc-400"
        }`}
      >
        <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
        {btnLabel}
        {isPlaceholder && <span className="ml-0.5 opacity-50">🔒</span>}
      </a>
    </div>
  );
}

// ─── GitHub Stats ─────────────────────────────────────────────────────────────


// ─── Icons ────────────────────────────────────────────────────────────────────

const SunIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <circle cx="12" cy="12" r="5" />
    <path strokeLinecap="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);
const MoonIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

// ─── Fixed Navigation ─────────────────────────────────────────────────────────

function TopNav({ lang, isDark, onToggleLang, onToggleTheme, t }: {
  lang: Lang; isDark: boolean;
  onToggleLang: () => void; onToggleTheme: () => void;
  t: Translation;
}) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-black/80" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-3xl items-center justify-between px-8 py-3">
        <a href="#top" className="text-sm font-bold text-zinc-900 transition-colors hover:text-blue-500 dark:text-white">
          {PROFILE.name}
        </a>
        <div className="hidden items-center gap-5 sm:flex">
          {t.nav.map((item) => (
            <a key={item.href} href={item.href} className="text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-white">
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={onToggleLang} aria-label="Toggle language" className="flex h-7 w-14 items-center justify-center rounded-full border border-zinc-200 text-[11px] font-bold text-zinc-600 transition-all hover:border-blue-400 hover:text-blue-500 dark:border-zinc-700 dark:text-zinc-400">
            {lang === "ko" ? "EN" : "KO"}
          </button>
          <button onClick={onToggleTheme} aria-label="Toggle dark mode" className="flex h-7 w-7 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-all hover:border-blue-400 hover:text-blue-500 dark:border-zinc-700 dark:text-zinc-400">
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </nav>
  );
}

// ─── localStorage 스토어 (useSyncExternalStore 용) ────────────────────────────
// SSR snapshot은 서버 기본값을 반환하고, 클라이언트에서는 localStorage를 직접 읽어
// hydration mismatch 없이 초기값을 동기화합니다.

const langStore = {
  get: (): Lang => {
    const s = localStorage.getItem("lang");
    return s === "en" ? "en" : "ko";
  },
  set: (lang: Lang) => {
    localStorage.setItem("lang", lang);
    window.dispatchEvent(new Event("lang-update"));
  },
  subscribe: (cb: () => void) => {
    window.addEventListener("lang-update", cb);
    return () => window.removeEventListener("lang-update", cb);
  },
};

const themeStore = {
  get: (): boolean => {
    const s = localStorage.getItem("theme");
    return s === "dark" || (!s && window.matchMedia("(prefers-color-scheme: dark)").matches);
  },
  set: (dark: boolean) => {
    localStorage.setItem("theme", dark ? "dark" : "light");
    window.dispatchEvent(new Event("theme-update"));
  },
  subscribe: (cb: () => void) => {
    window.addEventListener("theme-update", cb);
    return () => window.removeEventListener("theme-update", cb);
  },
};

// ─── Main Page ────────────────────────────────────────────────────────────────

const PROJECT_LINKS = [PROJECT_CODE_LINKS.bomulsen, PROJECT_CODE_LINKS.gopang, PROJECT_CODE_LINKS.nextjs];

export default function Home() {
  // useSyncExternalStore: 서버는 getServerSnapshot(기본값), 클라이언트는 getSnapshot(localStorage) 사용
  // → SSR/CSR 불일치 없이 hydration 후 자동으로 올바른 값으로 전환됩니다.
  const lang = useSyncExternalStore(langStore.subscribe, langStore.get, () => "ko" as Lang);
  const isDark = useSyncExternalStore(themeStore.subscribe, themeStore.get, () => false);

  // isDark 변경 시 <html> 클래스 동기화 (DOM 외부 시스템 업데이트 — setState 없음)
  useEffect(() => { document.documentElement.classList.toggle("dark", isDark); }, [isDark]);

  const toggleTheme = () => {
    themeStore.set(!isDark);
  };
  const toggleLang = () => {
    langStore.set(lang === "ko" ? "en" : "ko");
  };

  const t = T[lang];

  return (
    <div id="top" className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <TopNav lang={lang} isDark={isDark} onToggleLang={toggleLang} onToggleTheme={toggleTheme} t={t} />

      <main className="mx-auto max-w-3xl px-8 pt-28 pb-20">

        {/* ── Header ── */}
        <header className="mb-16 border-b pb-8">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-zinc-400">{t.role}</p>
          <h1 className="mb-6 whitespace-pre-line text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">{t.title}</h1>
          <div className="space-y-1 text-sm text-zinc-500">
            <p className="font-medium text-zinc-900 dark:text-zinc-100">{PROFILE.name}</p>
            <p>{PROFILE.email}</p>
          </div>
        </header>

        {/* ── GitHub Contributions ── */}
        <Section id="contributions" first>
          <SectionTitle>{t.contributionsLabel}</SectionTitle>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
            <GitHubContributionCalendar totalContributions={415} note={t.contributionsNote} />
          </div>
        </Section>

        {/* ── Expertise & Leadership ── */}
        <Section id="highlights">
          <SectionTitle>{t.highlightsLabel}</SectionTitle>
          <div className="grid gap-4">
            {t.highlights.map((item, idx) => (
              <a key={idx} href={HIGHLIGHT_LINKS[idx]} target="_blank" rel="noreferrer"
                className="group relative rounded-xl border border-zinc-200 p-5 transition-all hover:border-blue-500/50 hover:bg-blue-50/30 dark:border-zinc-800 dark:hover:bg-blue-900/10">
                <div className="mb-2 flex gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-tight text-blue-500">#{tag}</span>
                  ))}
                </div>
                <h3 className="mb-2 font-bold transition-colors group-hover:text-blue-500">{item.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{item.description}</p>
                <div className="mt-3 flex items-center text-xs font-medium text-blue-500 opacity-0 transition-opacity group-hover:opacity-100">
                  {t.viewMore}
                  <svg className="ml-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </Section>

        {/* ── Experience ── */}
        <Section id="experience">
          <SectionTitle>{t.experienceLabel}</SectionTitle>
          <div className="space-y-12">
            {/* Company card */}
            <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white">{t.experience.company}</h3>
                  <p className="text-sm text-zinc-500">{t.experience.position}</p>
                </div>
                <span className="text-xs font-medium text-zinc-400">{t.experience.period}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{t.experience.description}</p>
            </div>

            {/* Projects */}
            {t.experience.projects.map((project, pIdx) => (
              <article key={pIdx} className="group">
                {/* Project number divider */}
                <div className="mb-5 flex items-center gap-3">
                  <span className="font-mono text-[11px] font-bold text-blue-500">
                    0{pIdx + 1}
                  </span>
                  <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
                </div>
                {/* Project header */}
                <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="text-base font-bold text-zinc-900 transition-colors group-hover:text-blue-500 dark:text-white">{project.title}</h4>
                  <div className="flex items-center gap-2">
                    <GithubCodeBtn href={PROJECT_LINKS[pIdx]} label={t.viewCodeLabel} privateNote={t.privateRepoNote} />
                    <span className="rounded border border-zinc-200 px-2 py-0.5 text-[10px] font-bold uppercase text-zinc-400 dark:border-zinc-800">{project.tag}</span>
                  </div>
                </div>
                <p className="mb-4 text-sm font-medium text-zinc-500">{project.sub}</p>
                <ul className="mb-6 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                  {project.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex gap-2">
                      <span className="text-zinc-400">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Screenshot placeholders */}
                <div className="flex gap-3 overflow-x-auto pb-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-48 w-28 shrink-0 rounded-lg border border-zinc-200 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800" />
                  ))}
                </div>

                {/* RN 0.76 evidence (Bomulsen) */}
                {project.hasRN076Evidence && (
                  <EvidenceSection sectionLabel={t.rn076EvidenceLabel} items={EVIDENCE_RN076} />
                )}

                {/* Next.js project detail */}
                {project.hasDetail && (
                  <div className="mt-2 space-y-2">
                    {/* Stats */}
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                      <StatBadge icon="🔖" value={PROJECT_DETAIL.stats.commits} label={t.statsLabels.commits} />
                      <StatBadge icon="✅" value={t.cicdValue} label={t.statsLabels.cicd} />
                      <StatBadge icon="🌿" value={t.branchesValue} label={t.statsLabels.branches} />
                    </div>
                    {/* Commit convention */}
                    <CommitConventionSection label={t.commitConventionLabel} desc={t.commitConventionDesc} />
                    {/* Performance & library rationale */}
                    <TechStackGrid stack={PROJECT_DETAIL.techStack} performanceLabel={t.performanceLabel} />
                    {/* Architecture */}
                    <ArchitectureTree architecture={PROJECT_DETAIL.architecture} />
                    {/* Team convention evidence */}
                    <EvidenceSection sectionLabel={t.conventionEvidenceLabel} items={EVIDENCE_CONVENTION} />
                  </div>
                )}
              </article>
            ))}
          </div>
        </Section>

        {/* ── Clean Code Showcase ── */}
        <Section id="code-showcase">
          <SectionTitle>{t.codeShowcaseLabel}</SectionTitle>
          <p className="mb-6 text-sm text-zinc-500 dark:text-zinc-400">{t.codeShowcaseDesc}</p>
          <div className="space-y-6">
            <AtomicDesignDiagram desc={t.atomicDesignDesc} />
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">{t.hooksDesc}</p>
              {CODE_FILES.map((file) => (
                <CodeFileRow key={file.label} {...file} lang={lang} btnLabel={t.codeShowcaseBtnLabel} />
              ))}
            </div>
          </div>
        </Section>

        {/* ── Technical Skills ── */}
        <Section id="skills">
          <SectionTitle>{t.skillsLabel}</SectionTitle>
          <div className="flex flex-wrap gap-3">
            {SKILLS.map((skill) => <SkillBadge key={skill.name} {...skill} />)}
          </div>
        </Section>

        {/* ── GitHub Stats ── */}
        <Section id="stats">
          <SectionTitle>{t.githubStatsLabel}</SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&hide_border=true&bg_color=00000000&title_color=3b82f6&text_color=71717a&icon_color=3b82f6&show_icons=true&count_private=true&include_all_commits=true&rank_icon=github`}
                alt="GitHub Stats"
                className="w-full"
              />
            </div>
            <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&hide_border=true&bg_color=00000000&title_color=3b82f6&text_color=71717a&icon_color=3b82f6&layout=compact&langs_count=8&hide=html,css`}
                alt="Top Languages"
                className="w-full"
              />
            </div>
          </div>
        </Section>

        {/* ── 2020 Portfolio ── */}
        <Section id="portfolio">
          <SectionTitle>{t.portfolioLabel}</SectionTitle>
          <div className="flex gap-4">
            <a href={PORTFOLIO_LINKS.github} target="_blank" rel="noreferrer"
              className="rounded-lg bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-zinc-700 dark:bg-white dark:text-black">
              GitHub
            </a>
            <a href={PORTFOLIO_LINKS.demo} target="_blank" rel="noreferrer"
              className="rounded-lg border border-zinc-300 px-6 py-3 text-sm font-medium transition-all hover:bg-zinc-50 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-900">
              Live Demo
            </a>
          </div>
        </Section>

      </main>
    </div>
  );
}

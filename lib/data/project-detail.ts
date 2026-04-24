/**
 * Next.js 프로젝트 상세 블록(stats·techStack·architecture).
 *
 * stats 의 표시 값(CI/CD · Branches) 은 번역본에서 주입됩니다.
 * techStack 의 `desc` (ko) / `descEn` (en) 은 TechStackGrid 가 lang 에 따라 스위칭합니다.
 * 실제 증거는 Experience 섹션의 "Atomic Design · 아키텍처 · CI/CD" 스크린샷 그룹에서 확인할 수 있습니다.
 */

import type { ProjectDetail } from "@/lib/types/portfolio";

export const PROJECT_DETAIL: ProjectDetail = {
  stats: { cicd: "", branches: "" },
  techStack: [
    {
      category: "Framework & Runtime",
      items: [
        {
          name: "Next.js 16 (App Router)",
          desc: "Server Components 기반 렌더링 · Route Handlers · Middleware 일원화",
          descEn:
            "Server Components-based rendering · unified Route Handlers · Middleware",
        },
        {
          name: "React 19",
          desc: "Actions / use() · Suspense 기본 활용",
          descEn: "Actions / use() and Suspense used by default",
        },
        {
          name: "TypeScript 5 (strict)",
          desc: "런타임 + 컴파일 타임 타입 안전성",
          descEn: "Runtime + compile-time type safety",
        },
      ],
    },
    {
      category: "Styling",
      items: [
        {
          name: "Tailwind CSS 4",
          desc: "JIT 컴파일로 미사용 클래스 zero — 최소 CSS 번들",
          descEn:
            "JIT compilation produces zero unused classes — minimal CSS bundle",
        },
        {
          name: "shadcn/ui",
          desc: "Radix UI 기반 접근성 + 완전한 커스터마이징",
          descEn:
            "Radix UI-based accessibility with full customization freedom",
        },
      ],
    },
    {
      category: "UI & Data",
      items: [
        {
          name: "TanStack Table",
          desc: "가상화(virtualization) 지원 — 대용량 데이터 무한스크롤",
          descEn:
            "Virtualization support — infinite scroll over large datasets",
        },
      ],
    },
    {
      category: "State",
      items: [
        {
          name: "Zustand",
          desc: "클라이언트 상태 — Redux 대비 ~90% 보일러플레이트 감소. shallow compare 로 리렌더 최소화",
          descEn:
            "Client state — ~90% less boilerplate than Redux; shallow compare minimizes re-renders",
        },
        {
          name: "TanStack Query",
          desc: "서버 상태 — 자동 캐싱 · stale-while-revalidate · 자동 리페치 · 무한스크롤 · 낙관적 업데이트",
          descEn:
            "Server state — auto caching · stale-while-revalidate · auto refetch · infinite scroll · optimistic updates",
        },
      ],
    },
    {
      category: "Auth",
      items: [
        {
          name: "Auth.js v5",
          desc: "Next.js middleware 통합으로 서버사이드 세션 검증 일원화",
          descEn:
            "Unified server-side session verification via Next.js middleware integration",
        },
      ],
    },
    {
      category: "Forms & Validation",
      items: [
        {
          name: "Zod + React Hook Form",
          desc: "런타임 타입 검증 + 비제어 입력으로 리렌더 최소화",
          descEn:
            "Runtime type validation + uncontrolled inputs minimize re-renders",
        },
      ],
    },
    {
      category: "Permissions",
      items: [
        {
          name: "CASL",
          desc: "역할 기반 UI 분기를 컴포넌트 외부에서 선언형으로 처리",
          descEn:
            "Role-based UI branching handled declaratively outside components",
        },
      ],
    },
    {
      category: "Utilities",
      items: [
        {
          name: "Day.js",
          desc: "Moment.js 대비 번들 크기 ~97% 절감 (~2 kB vs ~67 kB)",
          descEn:
            "~97% smaller bundle than Moment.js (~2 kB vs ~67 kB)",
        },
      ],
    },
    {
      category: "Infrastructure",
      items: [
        {
          name: "Vercel",
          desc: "PR 마다 Preview URL 자동 생성 → 빠른 디자인 피드백 루프",
          descEn:
            "Auto-generates a Preview URL per PR → faster design feedback loop",
        },
        {
          name: "GitHub Actions",
          desc: "lint · type check · build 3단계 자동화",
          descEn: "3-stage automation: lint · type check · build",
        },
      ],
    },
    {
      category: "Code Quality",
      items: [
        {
          name: "ESLint + simple-import-sort",
          desc: "import 순서 자동 정렬 → diff 노이즈 제거",
          descEn: "Auto-sorts imports → eliminates diff noise",
        },
        {
          name: "Prettier + tailwindcss plugin",
          desc: "Tailwind 클래스 순서 자동 정렬 → 일관된 코드베이스",
          descEn:
            "Auto-sorts Tailwind class order → consistent codebase",
        },
        {
          name: "Storybook",
          desc: "Atom · Molecule 격리 개발 → 사이드 이펙트 없는 UI 변경",
          descEn:
            "Isolated Atom / Molecule development → side-effect-free UI changes",
        },
      ],
    },
  ],
  architecture: [
    {
      label: "src/app/",
      items: [
        "(auth) — login, signup",
        "(main) — admin, dashboard, operate, users",
        "(popup)",
      ],
    },
    {
      label: "src/components/",
      items: [
        "atoms — button, checkbox, dialog, dropdown, input, loadingSpinner, popover, radio, text",
        "molecules",
        "organisms",
        "templates",
      ],
    },
    {
      label: "src/features/",
      items: ["admin", "dashboard", "operate"],
    },
    {
      label: "src/hooks/",
      items: ["use-mobile.ts", "useAsyncList.ts", "useDataTable.ts"],
    },
    {
      label: "src/lib/",
      items: ["date.ts", "utils.ts"],
    },
    {
      label: "src/stores/",
      items: ["useSearchStore.ts"],
    },
    {
      label: "src/api/",
      items: ["client.ts", "http.ts"],
    },
  ],
};


/**
 * 포트폴리오 데이터 타입.
 *
 * - 홈 페이지(`app/page.tsx`) 와 섹션 컴포넌트(`components/sections/`) 가 공유합니다.
 * - 상세 페이지(`app/highlights/[slug]/page.tsx`) 쪽 타입은 `lib/highlights.ts` 에 정의돼 있습니다.
 */

/**
 * 기술 스택 아이템.
 * - `desc` 한국어, `descEn` 영어. 렌더러가 lang 에 따라 스위칭합니다.
 * - `name` 은 브랜드명이라 언어 공통.
 */
export type TechItem = { name: string; desc: string; descEn: string };
export type TechCategory = { category: string; items: TechItem[] };

export type ProjectDetail = {
  /** `cicd` / `branches` 의 실제 표시 값은 번역본(Translation.cicdValue / branchesValue) 에서 주입됩니다.
   * 이 객체는 `ProjectDetail` 에 추가 stat 이 생길 때의 확장 지점으로 남겨둡니다. */
  stats: { cicd: string; branches: string };
  techStack: TechCategory[];
  architecture: { label: string; items: string[] }[];
};

/**
 * 스크린샷/영상 아이템.
 * - `video: true` 이면 `<video>` 태그로 렌더됩니다. `poster` 는 재생 전 썸네일.
 */
export type ScreenshotItem = {
  src: string;
  alt: string;
  video?: boolean;
  poster?: string;
};

/**
 * 스크린샷 그룹.
 * - 한 프로젝트에 여러 문맥(예: "주요 화면" vs "월간 이벤트 WebView") 의 스크린샷이 섞여 있을 때 사용합니다.
 * - `layout` 기본값은 "cylinder" (3D 원통 카루셀). 다이어그램/영상 처럼 그냥 가로 스크롤이 더 잘 맞는
 *   그룹은 "scroll" 로 지정하세요.
 * - `orientation` 은 카드의 가로/세로 비율 프리셋. 모바일 스크린샷이면 "portrait" (기본),
 *   웹 스크린샷이면 "landscape" 로 설정하세요.
 * - `itemWidth` 는 "scroll" 레이아웃 전용 — 각 아이템 컨테이너의 가로폭(px)을 강제로 통일합니다.
 *   폴더 구조/아키텍처 다이어그램처럼 세로 비율이 다양한 이미지들을 나란히 정렬해야 할 때 유용합니다.
 *   값이 없으면 기존 동작(w-auto) 유지.
 */
export type ScreenshotGroup = {
  label?: string;
  items: ScreenshotItem[];
  layout?: "cylinder" | "scroll";
  orientation?: "portrait" | "landscape";
  itemWidth?: number;
};

export type Project = {
  title: string;
  tag: string;
  sub: string;
  /**
   * 프로젝트 진행 기간. 회사 전체 재직 기간과 구분되는 프로젝트 단위 타임라인.
   * 예) "2021.03 — 재직 중 (2023.11 전면 리뉴얼)"
   */
  period?: string;
  details: string[];
  /** `hasDetail` 이 true 인 프로젝트에만 상세 블록(stats·techStack·architecture) 이 붙습니다. */
  hasDetail?: boolean;
  /** `hasBranchStrategy` 가 true 이면 브랜치 전략 디스클로저가 노출됩니다 (보물선 프로젝트 용). */
  hasBranchStrategy?: boolean;
  /**
   * 프로젝트 스크린샷/영상. 그룹 단위로 라벨과 함께 렌더됩니다.
   * - 값이 없거나 빈 배열이면 placeholder(회색 박스) 로 대체됩니다.
   */
  screenshots?: ScreenshotGroup[];
};

/**
 * 현재 커리어 이전의 경력 요약 (세부사항은 생략).
 * - Experience 섹션 최상단에 "Prior Career" 라벨과 함께 한 줄로 렌더됩니다.
 * - 편집디자인 → 프론트엔드처럼 트랙이 바뀐 경우 타임라인 맥락 제공용.
 */
export type PriorCareer = {
  role: string;
  period: string;
  note?: string;
};

export type ExperienceData = {
  company: string;
  position: string;
  /** 회사에 대한 한두 줄 맥락 설명 (업태 · 운영 서비스 등). 채용 담당자가 회사를 모를 때 배경 제공용. */
  companyDesc?: string;
  period: string;
  description: string;
  projects: Project[];
  /** 현재 회사 이전 커리어. 없으면 블록 자동 숨김. */
  priorCareer?: PriorCareer;
};

export type HighlightItem = {
  /** 홈 카드 → 상세 페이지 라우트. `/highlights/${slug}` 로 이동합니다. */
  slug: string;
  title: string;
  description: string;
  tags: string[];
};

/**
 * About 섹션의 문단 조각.
 * - 일반 텍스트는 `{ text }`, 강조는 `{ text, emphasis: true }`.
 * - 문단 단위로 segment 배열을 만들어 파서 없이도 부분 강조가 가능합니다.
 */
export type AboutParagraphSegment = { text: string; emphasis?: boolean };

export type AboutContent = {
  heading: string;
  paragraphs: AboutParagraphSegment[][];
};

export type ContactContent = {
  links: { label: string; href: string; description?: string }[];
};

export type NavItem = { label: string; href: string };

export type EducationItem = {
  school: string;
  degree: string;
  major: string;
  period: string;
  /** 주요 활동/논문/프로젝트 등 부가 정보 (선택) */
  notes?: string[];
};

export type CertificationItem = {
  name: string;
  issuer: string;
  date: string;
  /** 공식 링크 (검증 가능한 경우) */
  href?: string;
};

export type AwardItem = {
  title: string;
  issuer: string;
  date: string;
  description?: string;
};

export type ImpactMetric = {
  /** 큰 숫자 / 핵심 값. 예) "137K", "7,700%", "0.70 → 0.76" */
  value: string;
  /** 한 줄 설명 */
  label: string;
  /** 보조 문구 (선택) */
  hint?: string;
};

/** 브랜치 전략 디스클로저 안의 한 단계 */
export type BranchStrategyStep = {
  label: string;
  desc: string;
};

export type Translation = {
  role: string;
  roleSub: string;
  title: string;
  /** 헤더 우측 하단 "구직 상태" 칩 라벨 */
  availability: string;
  nav: NavItem[];
  aboutLabel: string;
  about: AboutContent;
  impactLabel: string;
  impactMetrics: ImpactMetric[];
  highlightsLabel: string;
  viewMore: string;
  experienceLabel: string;
  educationLabel: string;
  education: EducationItem[];
  certificationsLabel: string;
  certifications: CertificationItem[];
  awardsLabel: string;
  awards: AwardItem[];
  projectDetailLabel: string;
  projectDetailHint: string;
  branchStrategyLabel: string;
  branchStrategyHint: string;
  branchStrategySteps: BranchStrategyStep[];
  codeShowcaseLabel: string;
  codeShowcaseDesc: string;
  /** NDA · 인터뷰 시 시연 가능 안내 문구 (섹션 하단) */
  codeShowcaseNdaNote: string;
  atomicDesignDesc: string;
  hooksDesc: string;
  performanceLabel: string;
  commitConventionLabel: string;
  commitConventionDesc: string;
  skillsLabel: string;
  portfolioLabel: string;
  /** Legacy Portfolio 섹션 보조 설명 */
  portfolioDesc: string;
  contactLabel: string;
  contact: ContactContent;
  /** 맨 아래 footer 에 들어가는 meta 시그널 (이 포트폴리오가 어떻게 빌드됐는지). */
  colophon: string;
  statsLabels: { cicd: string; branches: string };
  cicdValue: string;
  branchesValue: string;
  experience: ExperienceData;
  highlights: HighlightItem[];
};

/**
 * 포트폴리오 전역 번역본 (`ko` / `en`).
 *
 * - 홈 페이지와 상세 페이지 모두이 모듈을 단일 소스로 사용합니다.
 * - 신규 번역 키는 반드시 `Translation` 타입(`lib/types/portfolio.ts`)에 먼저 선언한 뒤 추가하세요.
 * - `highlights[i].slug` 는 `lib/highlights.ts` 의 HIGHLIGHTS 배열 slug 와 반드시 일치해야 합니다.
 *
 * 고유 데이터(학력·자격증·수상 등)는 본인의 실제 정보로 교체해야 하는 자리입니다.
 * 각 자리에 `TODO:` 주석으로 명시해 두었습니다.
 */

import type { Lang } from "@/lib/stores/uiStore";
import type { Translation } from "@/lib/types/portfolio";

export const T: Record<Lang, Translation> = {
  ko: {
    role: "Frontend Developer",
    roleSub: "Design → Engineering",
    title: "감각과 구현력을\n함께 만들어내는 프론트엔드",
    availability: "새로운 기회 탐색 중",
    nav: [
      { label: "소개", href: "#about" },
      { label: "역량", href: "#highlights" },
      { label: "경력", href: "#experience" },
      { label: "학력", href: "#education" },
      { label: "코드", href: "#code-showcase" },
      { label: "기술", href: "#skills" },
      { label: "문의", href: "#contact" },
    ],
    aboutLabel: "About",
    about: {
      heading: "디자인과 엔지니어링 사이에서",
      paragraphs: [
        [
          {
            text: "시각디자인 전공 후 ",
          },
          {
            text: "편집 디자이너로 약 6년간 현장 경험(2014 – 2020)",
            emphasis: true,
          },
          {
            text: "을 쌓은 뒤, 웹디자인기능사 → SQL 개발자 → 정보처리기사 → 학점은행제 컴퓨터공학 학사까지 ",
          },
          {
            text: "의도적인 디자인-엔지니어링 전환 경로",
            emphasis: true,
          },
          {
            text: "를 밟아 왔습니다. 2021년부터 (주)에이치투비즈에서 프론트엔드 개발자로 성장하며 React Native 모바일 앱과 Next.js 웹 서비스를 설계·구현하고, ",
          },
          {
            text: "파트 리더",
            emphasis: true,
          },
          {
            text: "로서 팀 컨벤션 수립과 주니어 멘토링을 함께 수행하고 있습니다.",
          },
        ],
        [
          {
            text: "디자이너·기획자의 언어를 이해하는 개발자로서, 컴포넌트 구조·상태 설계·코드 품질을 ",
          },
          {
            text: "사용자 경험과 같은 기준",
            emphasis: true,
          },
          {
            text: "으로 다룹니다. 디자인 시안을 단순 구현하는 게 아니라 시안 리뷰 · 디자인 시스템 · 상호작용 단계부터 함께 의사결정하고, ",
          },
          {
            text: "관리자 페이지는 UI/UX 디자인부터 구현까지 1인 전담",
            emphasis: true,
          },
          {
            text: "한 경험이 있습니다.",
          },
        ],
      ],
    },
    impactLabel: "Impact at a Glance",
    impactMetrics: [
      {
        value: "137K",
        label: "운영 · 유지보수",
        hint: "보물선 누적 회원 · 7,700% 회원 증가 기간 동안 프론트엔드 담당",
      },
      {
        value: "0.70 → 0.76",
        label: "React Native 메이저 버전업",
        hint: "Google Play 16KB 정책 대응 · 약 2개월",
      },
      {
        value: "70+ 페이지",
        label: "단독 구축 · 6개월",
        hint: "GOPANG · 사용자 40+ · 관리자 30+ 페이지",
      },
      {
        value: "10+ 종",
        label: "인터랙티브 이벤트 게임",
        hint: "보물선 월간 이벤트 · CSS 3D · 다이스/RPS/슬롯 등 직접 구현",
      },
    ],
    highlightsLabel: "Expertise & Leadership",
    viewMore: "자세히 보기",
    experienceLabel: "Experience",
    educationLabel: "Education",
    education: [
      {
        school: "학점은행제",
        degree: "학사",
        major: "컴퓨터공학과",
        period: "2023.08 — 2024.10 졸업",
        notes: ["학점 4.13 / 4.5"],
      },
      {
        school: "충청대학",
        degree: "전문학사",
        major: "시각디자인",
        period: "2012.03 — 2014.02 졸업",
        notes: ["학점 4.06 / 4.5"],
      },
      {
        school: "충북여자고등학교",
        degree: "고등학교 졸업",
        major: "이과계열",
        period: "2012 졸업",
      },
    ],
    certificationsLabel: "Certifications",
    certifications: [
      {
        name: "정보처리기사",
        issuer: "한국산업인력공단",
        date: "2024.12",
      },
      {
        name: "SQL 개발자 (SQLD)",
        issuer: "한국데이터산업진흥원",
        date: "2023.10",
      },
      {
        name: "웹디자인기능사",
        issuer: "한국산업인력공단",
        date: "2020.12",
      },
    ],
    awardsLabel: "Awards & Recognition",
    // 의도적으로 비워둠 — 섹션이 자동 숨김됩니다.
    awards: [],
    projectDetailLabel: "상세 스택 & 아키텍처 보기",
    projectDetailHint:
      "Next.js 16 · React 19 · TypeScript · 10+ 라이브러리 선택 근거와 폴더 구조",
    branchStrategyLabel: "브랜치 전략 & 배포 플로우 보기",
    branchStrategyHint:
      "Jira → feature/bugfix → development → master · 버전별 브랜치 유지",
    branchStrategySteps: [
      {
        label: "Jira 이슈 · 신기능 등록",
        desc: '이슈나 신기능이 Jira 에 등록되면 해당 작업에서 "브랜치 만들기" 기능을 이용해 origin 에서 분기합니다.',
      },
      {
        label: "feature / bugfix 타입별 브랜치 생성",
        desc: "작업 유형에 따라 feature/* 또는 bugfix/* 프리픽스로 구분해 브랜치를 생성합니다.",
      },
      {
        label: "development 브랜치 병합 · 통합 테스트",
        desc: "개별 브랜치를 development 에 병합한 뒤 통합 테스트를 진행합니다.",
      },
      {
        label: "master 브랜치 병합 (운영 반영)",
        desc: "검증이 끝나면 master 브랜치로 병합해 운영 환경에 배포합니다.",
      },
      {
        label: "버전별 브랜치 유지",
        desc: "버전별로 브랜치를 별도 생성해두어 해당 버전에 적용된 변경 내역을 브랜치 단위로 추적할 수 있습니다.",
      },
    ],
    codeShowcaseLabel: "Clean Code Showcase",
    codeShowcaseDesc:
      "실무에서 작성한 핵심 파일들입니다. Atomic Design · Custom Hook · 단일 책임 원칙을 어떻게 적용했는지 확인하세요.",
    codeShowcaseNdaNote:
      "실제 구현 코드에서 비즈니스 로직만 제거한 공개용 버전입니다.",
    atomicDesignDesc:
      "UI를 Atoms → Molecules → Organisms → Templates → Pages 5계층으로 분리해 재사용성과 테스트 용이성을 확보했습니다.",
    hooksDesc:
      "비즈니스 로직을 Custom Hook으로 분리해 컴포넌트는 UI 렌더링에만 집중합니다.",
    performanceLabel: "왜이 라이브러리? — 기술 선택 근거 및 성능 최적화",
    commitConventionLabel: "Commit Convention",
    commitConventionDesc: "feat · fix · chore  타입을 일관되게 적용합니다.",
    skillsLabel: "Technical Skills",
    portfolioLabel: "2020 Portfolio",
    portfolioDesc: "초기 커리어 작업물 — HTML/CSS/JS 기반 정적 포트폴리오 (2020)",
    contactLabel: "Contact",
    contact: {
      links: [
        {
          label: "Email",
          href: "mailto:heo940122@gmail.com",
          description: "heo940122@gmail.com",
        },
        {
          label: "Phone",
          href: "tel:+821056831315",
          description: "010-5683-1315",
        },
      ],
    },
    colophon:
      "이 포트폴리오는 Next.js 16 · React 19 · Tailwind 4 로 빌드하고, Claude Code 워크플로우로 유지 · GitHub Actions 로 자동 배포됩니다.",
    statsLabels: {
      cicd: "CI/CD 파이프라인",
      branches: "브랜치 전략",
    },
    cicdValue: "lint · type check · build 자동화",
    branchesValue: "bugfix / feature 브랜치 전략",
    experience: {
      company: "(주)에이치투비즈",
      position: "개발팀 책임연구원",
      companyDesc:
        "기획 · 디자인 · 개발 · 운영 · 마케팅을 자체 수행하는 인하우스 플랫폼 기업. 보물선 (랜덤박스 앱) · GOPANG (해외향 웹 플랫폼) · 이사로 (이사 서비스 앱) 운영.",
      period: "2021.03 — 재직 중",
      priorCareer: {
        role: "편집 디자이너",
        period: "2014.09 — 2020.05",
        note: "출판·편집 디자인 실무",
      },
      description:
        "리뉴얼 및 유지보수 담당, 신규 프로젝트 제작, 프로젝트 일정 관리. 후임이 합류한 시기에는 3인 프론트엔드 팀의 파트 리더 역할로 멘토링까지 수행했습니다.",
      projects: [
        {
          title: "Next.js 기반 신규 프로젝트",
          tag: "리드 개발자 · 진행 중",
          sub: "차세대 웹 서비스 구축",
          period: "2026.01 — 진행 중",
          details: [
            "팀원과 함께 논의해 Atomic Design Pattern 도입 — 코드 유지보수성 및 일관성 확보",
            "Zustand · TanStack Query 도입으로 fetch · 로딩 · 에러 처리를 추상화하고 캐싱 / 자동 리페치를 표준화 — 컴포넌트는 UI 렌더링에만 집중",
            "Next.js App Router 기반 아키텍처 · 폴더 구조 설계",
            "Bitbucket Pipelines 기반 CI/CD 파이프라인 구축 — push 시 lint · type check · build 자동화 후 Vercel CLI 로 자동 배포",
            "회사 도입 Claude Code 기반 AI 페어 프로그래밍 워크플로우 활용 — CLAUDE.md로 프로젝트 컨텍스트 문서화, 커스텀 커맨드(/review · /lint-check)와 코드 생성 템플릿 5종(Component · Hook · Screen · ViewModel · RouteHandler) 보유, 컨벤션 준수·리뷰·린트를 에이전트와 함께 수행",
          ],
          hasDetail: true,
          screenshots: [
            {
              label: "신규 웹 서비스 주요 화면",
              orientation: "landscape",
              items: [
                { src: "/experience/nextjs/01.png", alt: "Next.js 화면 01" },
                { src: "/experience/nextjs/02.png", alt: "Next.js 화면 02" },
                { src: "/experience/nextjs/03.png", alt: "Next.js 화면 03" },
                { src: "/experience/nextjs/04.png", alt: "Next.js 화면 04" },
                { src: "/experience/nextjs/05.png", alt: "Next.js 화면 05" },
              ],
            },
            {
              label: "Atomic Design · 아키텍처 · CI/CD 파이프라인",
              layout: "scroll",
              itemWidth: 150,
              items: [
                {
                  src: "/experience/nextjs/Architecture_01.png",
                  alt: "아키텍처 다이어그램 01",
                },
                {
                  src: "/experience/nextjs/Architecture_02.png",
                  alt: "아키텍처 다이어그램 02",
                },
                {
                  src: "/experience/nextjs/Architecture_03.png",
                  alt: "아키텍처 다이어그램 03",
                },
                {
                  src: "/experience/nextjs/Architecture_04.png",
                  alt: "아키텍처 다이어그램 04",
                },
                {
                  src: "/experience/nextjs/Architecture_05.png",
                  alt: "아키텍처 다이어그램 05",
                },
                {
                  src: "/experience/nextjs/Architecture_06.png",
                  alt: "아키텍처 다이어그램 06",
                },
                {
                  src: "/experience/nextjs/Architecture_07.png",
                  alt: "아키텍처 다이어그램 07",
                },
              ],
            },
          ],
        },
        {
          title: "보물선 — 리뉴얼 및 유지보수",
          tag: "프론트 메인 담당",
          sub: "국내 랜덤박스 플랫폼",
          period: "2021.03 — 재직 중 (2023.11 전면 리뉴얼 · 이후 유지보수 지속)",
          details: [
            "jQuery 기반 노후 서비스를 React Native로 전면 리뉴얼",
            "누적 회원 13.7만 규모 서비스를 사용자 영향 없이 운영 · 회원 수 7,700% 증가 기간 동안 프론트엔드 담당",
            "Google Play 16KB 정책 준수를 위한 RN v0.70 → v0.76 업그레이드 및 OS 호환성 확보",
            "사내 공통 HTTP 클라이언트(인증 토큰 · 파라미터 직렬화 · 응답 처리 · 토큰 스토리지 동기화 일원화) 를 활용해 RESTful API 기반 서버-클라이언트 통신 구현",
            "보물함 화면 개발 — 탭·검색·필터·정렬·잠금 토글이 결합된 복합 리스트 UI 및 페이지네이션 구현",
            "FlatList 가상 스크롤 + useCallback · React.memo · FastImage 조합으로 수백 개 아이템 무한스크롤 성능 유지",
            "아이템 상태별 버튼 활성/문구/이동 분기 설계 — 배송·거래·분해·환급 4개 액션을 한 화면에서 일관되게 처리",
            "거래취소·포인트 환급 등 위험한 액션을 위한 공통 확인 모달 플로우 구현",
            "월간 이벤트/프로모션 페이지 개발 — 백엔드 저장소(EJS 템플릿) + WebView 구조 위에서 매달 새 이벤트 페이지를 직접 작성, 반응형 UI 로 앱 스토어 검수 없이 즉시 배포",
            "이벤트 페이지에 순수 CSS 3D transform 기반 인터랙티브 게임 (다이스 보드 · RPS 토너먼트 · 슬롯 머신) 직접 구현, RN ↔ WebView postMessage 로 게임 단계별 네이티브 양방향 연동",
            "관리자 페이지 개발 및 유지보수",
          ],
          hasBranchStrategy: true,
          screenshots: [
            {
              label: "보물선 앱 주요 화면",
              items: [
                {
                  src: "/experience/bomulsen/01.png",
                  alt: "보물선 앱 화면 01",
                },
                {
                  src: "/experience/bomulsen/02.png",
                  alt: "보물선 앱 화면 02",
                },
                {
                  src: "/experience/bomulsen/03.png",
                  alt: "보물선 앱 화면 03",
                },
                {
                  src: "/experience/bomulsen/04.png",
                  alt: "보물선 앱 화면 04",
                },
                {
                  src: "/experience/bomulsen/05.png",
                  alt: "보물선 앱 화면 05",
                },
                {
                  src: "/experience/bomulsen/06.png",
                  alt: "보물선 앱 화면 06",
                },
                {
                  src: "/experience/bomulsen/07.png",
                  alt: "보물선 앱 화면 07",
                },
                {
                  src: "/experience/bomulsen/08.png",
                  alt: "보물선 앱 화면 08",
                },
                {
                  src: "/experience/bomulsen/09.png",
                  alt: "보물선 앱 화면 09",
                },
                {
                  src: "/experience/bomulsen/10.png",
                  alt: "보물선 앱 화면 10",
                },
              ],
            },
            {
              label: "관리자 페이지",
              layout: "scroll",
              orientation: "landscape",
              items: [
                {
                  src: "/experience/bomulsen/admin_01.png",
                  alt: "보물선 관리자 페이지 01",
                },
                {
                  src: "/experience/bomulsen/admin_02.png",
                  alt: "보물선 관리자 페이지 02",
                },
                {
                  src: "/experience/bomulsen/admin_03.png",
                  alt: "보물선 관리자 페이지 03",
                },
              ],
            },
            {
              label: "월간 이벤트 WebView (EJS · 반응형)",
              layout: "scroll",
              items: [
                {
                  src: "/experience/bomulsen/event_01.mp4",
                  alt: "월간 이벤트 WebView 인터랙션 영상 01",
                  video: true,
                  poster: "/experience/bomulsen/event_01.png",
                },
                {
                  src: "/experience/bomulsen/event_02.png",
                  alt: "월간 이벤트 화면 02",
                },
                {
                  src: "/experience/bomulsen/event_03.png",
                  alt: "월간 이벤트 화면 03",
                },
                {
                  src: "/experience/bomulsen/event_04.mp4",
                  alt: "월간 이벤트 WebView 인터랙션 영상 02",
                  video: true,
                },
                {
                  src: "/experience/bomulsen/event_05.png",
                  alt: "월간 이벤트 화면 05",
                },
                {
                  src: "/experience/bomulsen/event_06.png",
                  alt: "월간 이벤트 화면 06",
                },
                {
                  src: "/experience/bomulsen/event_07.mp4",
                  alt: "월간 이벤트 WebView 인터랙션 영상 03",
                  video: true,
                },
              ],
            },
          ],
        },
        {
          title: "GOPANG — 신규 제작",
          tag: "단독 프론트 개발",
          sub: "인도네시아향 랜덤박스 웹 플랫폼",
          period:
            "2024.06 — 2025.10 (6개월 내 퍼블리싱 · 프론트 개발 완료 → 2025.02 출시, 이후 유지보수)",
          details: [
            "보물선(React Native) 서비스 구조를 기반으로, 인도네시아향 랜덤박스 React 웹앱을 단독 신규 구축",
            "디자인 시안 퍼블리싱부터 React 컴포넌트 구현 · 상태 관리 · API 연동까지 프론트엔드 전 과정 1인 전담",
            "6개월 내 사용자 화면 40+ · 관리자 화면 30+ 총 70+ 페이지 단독 구축",
            "다양한 모바일 단말 · 해상도에서 일관된 경험을 제공하는 반응형 퍼블리싱 + 인도네시아 현지 사용자 맥락에 맞춘 UI/UX 설계",
            "관리자 페이지 UI/UX 디자인 · 퍼블리싱 · 구현 1인 전담 — 시안부터 엔드투엔드",
            "2025.02 정식 출시 이후 유지보수 및 개선 작업 지속",
          ],
          screenshots: [
            {
              label: "GOPANG 앱 주요 화면",
              items: [
                { src: "/experience/gopang/01.png", alt: "GOPANG 화면 01" },
                { src: "/experience/gopang/02.png", alt: "GOPANG 화면 02" },
                { src: "/experience/gopang/03.png", alt: "GOPANG 화면 03" },
                { src: "/experience/gopang/04.png", alt: "GOPANG 화면 04" },
                { src: "/experience/gopang/05.png", alt: "GOPANG 화면 05" },
                { src: "/experience/gopang/06.png", alt: "GOPANG 화면 06" },
                { src: "/experience/gopang/07.png", alt: "GOPANG 화면 07" },
                { src: "/experience/gopang/08.png", alt: "GOPANG 화면 08" },
                { src: "/experience/gopang/09.png", alt: "GOPANG 화면 09" },
                { src: "/experience/gopang/10.png", alt: "GOPANG 화면 10" },
              ],
            },
            {
              label: "관리자 페이지",
              layout: "scroll",
              orientation: "landscape",
              items: [
                {
                  src: "/experience/gopang/admin_01.png",
                  alt: "GOPANG 관리자 페이지 01",
                },
                {
                  src: "/experience/gopang/admin_02.png",
                  alt: "GOPANG 관리자 페이지 02",
                },
                {
                  src: "/experience/gopang/admin_03.png",
                  alt: "GOPANG 관리자 페이지 03",
                },
              ],
            },
          ],
        },
      ],
    },
    highlights: [
      {
        slug: "design-engineering-crosskill",
        title: "디자인-엔지니어링 크로스 스킬",
        description:
          "디자인 커리어 배경이 프론트엔드 업무에 어떻게 녹아드는지 — 시안 리뷰 · 디자인 시스템 · 관리자 페이지 1인 UI/UX 담당 경험을 중심으로 정리했습니다.",
        tags: ["Design", "Frontend", "Collaboration"],
      },
      {
        slug: "team-process-automation",
        title: "팀 프로세스 & 자동화",
        description:
          "파트 리더로서 Atomic Design · 코드 리뷰 프로세스를 정착시켰고, Claude Code 기반 AI 페어 프로그래밍을 팀 워크플로우에 통합해 사람과 에이전트가 함께 컨벤션을 자동 강제하도록 설계했습니다.",
        tags: ["Leadership", "Process", "AI"],
      },
      {
        slug: "rn-upgrade",
        title: "React Native 0.76 업그레이드 트러블슈팅",
        description:
          "Google Play 16KB 정책 대응을 위한 RN 아키텍처 업그레이드와 라이브러리 호환성 문제 해결 과정을 다뤘습니다.",
        tags: ["Technical", "Problem Solving"],
      },
      {
        slug: "bomulsen-treasure-box",
        title: "보물함 화면 — 복합 상태 리스트 설계",
        description:
          "탭 · 검색 · 필터 · 정렬 · 잠금 토글이 동시에 작동하는 단일 화면에서 11종 상태코드 × 타입코드 × 잠금 여부 조합에 따른 버튼 분기 로직과 6종 모달을 하나의 패턴으로 정리했습니다.",
        tags: ["Technical", "State Machine", "UX"],
      },
      {
        slug: "event-webview-games",
        title: "월간 이벤트 — CSS 3D · 인터랙티브 게임",
        description:
          "앱 스토어 검수를 우회하기 위해 백엔드 EJS 로 분리한 월간 이벤트 페이지에서, 순수 CSS 3D transform 과 jQuery 기반 게임 로직으로 다이스 보드 · RPS 토너먼트 · 슬롯 머신 등 인터랙티브 게임을 라이브러리 없이 직접 구현했습니다.",
        tags: ["Frontend", "Interaction", "WebView"],
      },
    ],
  },
  en: {
    role: "Frontend Developer",
    roleSub: "Design → Engineering",
    title: "Taste and Engineering,\nShaped Into Frontend",
    availability: "Open to new roles",
    nav: [
      { label: "About", href: "#about" },
      { label: "Expertise", href: "#highlights" },
      { label: "Experience", href: "#experience" },
      { label: "Education", href: "#education" },
      { label: "Code", href: "#code-showcase" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
    aboutLabel: "About",
    about: {
      heading: "Working at the seam of design and engineering",
      paragraphs: [
        [
          {
            text: "I studied Visual Communication Design and ",
          },
          {
            text: "worked as an editorial designer for ~6 years (2014 – 2020)",
            emphasis: true,
          },
          {
            text: " before ",
          },
          {
            text: "taking an intentional path into engineering",
            emphasis: true,
          },
          {
            text: " — Craftsman Web Design, SQL Developer, Engineer Information Processing, and a Bachelor in Computer Science through Korea's Academic Credit Bank System. Since 2021 at H2Biz, I've been growing as a frontend developer who designs and ships React Native mobile apps and Next.js web services, while serving as ",
          },
          {
            text: "an acting tech lead",
            emphasis: true,
          },
          {
            text: " — formalizing team conventions and mentoring juniors.",
          },
        ],
        [
          {
            text: "I speak the languages of designers and PMs, and I treat component structure, state design, and code quality ",
          },
          {
            text: "on the same bar as UX",
            emphasis: true,
          },
          {
            text: ". I don't just implement design mocks — I co-decide on design systems, component boundaries, and interaction specs from the review stage, and I've ",
          },
          {
            text: "owned full UI/UX end-to-end (design through implementation) for admin surfaces",
            emphasis: true,
          },
          {
            text: ".",
          },
        ],
      ],
    },
    impactLabel: "Impact at a Glance",
    impactMetrics: [
      {
        value: "137K",
        label: "Operations & maintenance",
        hint: "Bomulsen registered members · frontend lead through a 7,700% member-growth period",
      },
      {
        value: "0.70 → 0.76",
        label: "React Native major upgrade",
        hint: "Google Play 16KB policy · ~2 months",
      },
      {
        value: "70+ pages",
        label: "Solo build · 6 months",
        hint: "GOPANG · 40+ user + 30+ admin pages",
      },
      {
        value: "10+ games",
        label: "Interactive event games",
        hint: "Bomulsen monthly events · CSS 3D · dice / RPS / slot built from scratch",
      },
    ],
    highlightsLabel: "Expertise & Leadership",
    viewMore: "View details",
    experienceLabel: "Experience",
    educationLabel: "Education",
    education: [
      {
        school: "Academic Credit Bank System (Republic of Korea)",
        degree: "Bachelor of Engineering",
        major: "Computer Science & Engineering",
        period: "Aug 2023 — Oct 2024",
        notes: ["GPA 4.13 / 4.5"],
      },
      {
        school: "Chungcheong University",
        degree: "Associate Degree",
        major: "Visual Communication Design",
        period: "Mar 2012 — Feb 2014",
        notes: ["GPA 4.06 / 4.5"],
      },
      {
        school: "Chungbuk Girls' High School",
        degree: "High School Diploma",
        major: "Science Track",
        period: "Graduated 2012",
      },
    ],
    certificationsLabel: "Certifications",
    certifications: [
      {
        name: "Engineer Information Processing",
        issuer: "HRD Korea (Human Resources Development Service of Korea)",
        date: "Dec 2024",
      },
      {
        name: "SQL Developer (SQLD)",
        issuer: "Korea Data Agency",
        date: "Oct 2023",
      },
      {
        name: "Craftsman Web Design",
        issuer: "HRD Korea (Human Resources Development Service of Korea)",
        date: "Dec 2020",
      },
    ],
    awardsLabel: "Awards & Recognition",
    // Intentionally empty — the subsection auto-hides.
    awards: [],
    projectDetailLabel: "View detailed stack & architecture",
    projectDetailHint:
      "Next.js 16 · React 19 · TypeScript · rationale for 10+ library choices and the folder layout",
    branchStrategyLabel: "View branch strategy & deployment flow",
    branchStrategyHint:
      "Jira → feature/bugfix → development → master · version branches retained",
    branchStrategySteps: [
      {
        label: "Jira issue / feature registration",
        desc: 'When an issue or new feature is registered in Jira, branches are created off origin via Jira\'s "Create branch" action.',
      },
      {
        label: "feature / bugfix branch creation",
        desc: "Branches are prefixed with feature/* or bugfix/* depending on the type of work.",
      },
      {
        label: "Merge to development · integration testing",
        desc: "Individual branches merge into development, where integration testing runs.",
      },
      {
        label: "Merge to master (production release)",
        desc: "Once verification passes, branches merge into master to deploy to production.",
      },
      {
        label: "Version branches retained",
        desc: "A dedicated branch per version is kept, so each version's applied changes can be traced at the branch level.",
      },
    ],
    codeShowcaseLabel: "Clean Code Showcase",
    codeShowcaseDesc:
      "Key files from production. See how Atomic Design, Custom Hooks, and Single Responsibility Principle are applied in practice.",
    codeShowcaseNdaNote:
      "Public-safe versions of production code with business logic removed.",
    atomicDesignDesc:
      "UI is split into 5 layers — Atoms → Molecules → Organisms → Templates → Pages — for reusability and testability.",
    hooksDesc:
      "Business logic is extracted into Custom Hooks so components focus solely on rendering.",
    performanceLabel:
      "Why This Library? — Tech Choices & Performance Optimizations",
    commitConventionLabel: "Commit Convention",
    commitConventionDesc: "Consistent use of feat · fix · chore prefixes.",
    skillsLabel: "Technical Skills",
    portfolioLabel: "2020 Portfolio",
    portfolioDesc: "Early-career work — a static HTML/CSS/JS portfolio (2020)",
    contactLabel: "Contact",
    contact: {
      links: [
        {
          label: "Email",
          href: "mailto:heo940122@gmail.com",
          description: "heo940122@gmail.com",
        },
        {
          label: "Phone",
          href: "tel:+821056831315",
          description: "+82 10-5683-1315",
        },
      ],
    },
    colophon:
      "This portfolio is built with Next.js 16 · React 19 · Tailwind 4, maintained via a Claude Code workflow, and auto-deployed via GitHub Actions.",
    statsLabels: {
      cicd: "CI/CD Pipeline",
      branches: "Branch Strategy",
    },
    cicdValue: "lint · type check · build automated",
    branchesValue: "bugfix / feature branch strategy",
    experience: {
      company: "H2Biz Co., Ltd.",
      position: "Senior Research Engineer, Dev Team",
      companyDesc:
        "In-house platform company covering planning, design, development, operations, and marketing end-to-end. Operates Bomulsen (random-box app), GOPANG (overseas web platform), and Isaro (moving-services app).",
      period: "Mar 2021 — Present",
      priorCareer: {
        role: "Editorial Designer",
        period: "Sep 2014 — May 2020",
        note: "Publishing / editorial design practice",
      },
      description:
        "Owns renewal & maintenance, new project development, and project scheduling. When juniors are on the team, also acts as tech lead of the 3-person frontend group and handles mentoring.",
      projects: [
        {
          title: "Next.js-based New Project",
          tag: "Lead Developer · In Progress",
          sub: "Next-generation web service",
          period: "Jan 2026 — Present",
          details: [
            "Co-decided with the team to adopt the Atomic Design Pattern — improves maintainability and consistency",
            "Adopted Zustand and TanStack Query to abstract fetch · loading · error handling and standardize caching / auto-refetch — components focus purely on UI rendering",
            "Designed the App Router-based architecture and folder structure",
            "Built a CI/CD pipeline on Bitbucket Pipelines — every push runs lint, type check, and build, then ships to Vercel via the Vercel CLI",
            "Active user of the company-adopted Claude Code AI pair-programming workflow — documented project context in CLAUDE.md, defined custom commands (/review · /lint-check), and maintain 5 code-generation templates (Component · Hook · Screen · ViewModel · RouteHandler) so convention checks, reviews, and lint runs happen alongside the agent",
          ],
          hasDetail: true,
          screenshots: [
            {
              label: "New web service — key screens",
              orientation: "landscape",
              items: [
                { src: "/experience/nextjs/01.png", alt: "Next.js screen 01" },
                { src: "/experience/nextjs/02.png", alt: "Next.js screen 02" },
                { src: "/experience/nextjs/03.png", alt: "Next.js screen 03" },
                { src: "/experience/nextjs/04.png", alt: "Next.js screen 04" },
                { src: "/experience/nextjs/05.png", alt: "Next.js screen 05" },
              ],
            },
            {
              label: "Atomic Design · architecture · CI/CD pipeline",
              layout: "scroll",
              itemWidth: 150,
              items: [
                {
                  src: "/experience/nextjs/Architecture_01.png",
                  alt: "Architecture diagram 01",
                },
                {
                  src: "/experience/nextjs/Architecture_02.png",
                  alt: "Architecture diagram 02",
                },
                {
                  src: "/experience/nextjs/Architecture_03.png",
                  alt: "Architecture diagram 03",
                },
                {
                  src: "/experience/nextjs/Architecture_04.png",
                  alt: "Architecture diagram 04",
                },
                {
                  src: "/experience/nextjs/Architecture_05.png",
                  alt: "Architecture diagram 05",
                },
                {
                  src: "/experience/nextjs/Architecture_06.png",
                  alt: "Architecture diagram 06",
                },
                {
                  src: "/experience/nextjs/Architecture_07.png",
                  alt: "Architecture diagram 07",
                },
              ],
            },
          ],
        },
        {
          title: "Bomulsen — Renewal & Maintenance",
          tag: "Frontend Lead",
          sub: "Domestic random-box platform",
          period: "Mar 2021 — Present (Nov 2023 full rebuild · ongoing maintenance)",
          details: [
            "Fully migrated legacy jQuery service to React Native",
            "Owned the frontend for a service with ~137K registered members through a 7,700% member-growth period, with no impact on end users",
            "Upgraded RN (v0.70 → v0.76) to meet Google Play 16KB policy; handled OS compatibility",
            "Implemented RESTful API-based client-server integration on top of the in-house shared HTTP client (auth tokens, parameter serialization, response handling, auth-storage sync)",
            "Built the Treasure Box screen — a complex list UI combining tab, search, filter, sort, and a lock toggle with pagination",
            "Tuned scroll performance for hundreds-of-items infinite list — FlatList virtualization with useCallback · React.memo · FastImage to keep frames smooth",
            "Item-level button branching for Ship / Trade / Dismantle / Refund — 4 actions handled consistently on one screen",
            "Built a shared confirm-modal flow for irreversible actions like trade-cancel and point refund",
            "Built monthly event / promo pages on top of the existing backend EJS template + WebView setup — wrote each new responsive event page so it could ship without an app-store review cycle",
            "Built interactive games (dice board, RPS tournament, slot machine) directly in event pages with pure CSS 3D transforms — no game library — and wired stage-by-stage RN ↔ WebView postMessage for native-side effects",
            "Developed and maintained the admin dashboard",
          ],
          hasBranchStrategy: true,
          screenshots: [
            {
              label: "Bomulsen — key app screens",
              items: [
                {
                  src: "/experience/bomulsen/01.png",
                  alt: "Bomulsen screen 01",
                },
                {
                  src: "/experience/bomulsen/02.png",
                  alt: "Bomulsen screen 02",
                },
                {
                  src: "/experience/bomulsen/03.png",
                  alt: "Bomulsen screen 03",
                },
                {
                  src: "/experience/bomulsen/04.png",
                  alt: "Bomulsen screen 04",
                },
                {
                  src: "/experience/bomulsen/05.png",
                  alt: "Bomulsen screen 05",
                },
                {
                  src: "/experience/bomulsen/06.png",
                  alt: "Bomulsen screen 06",
                },
                {
                  src: "/experience/bomulsen/07.png",
                  alt: "Bomulsen screen 07",
                },
                {
                  src: "/experience/bomulsen/08.png",
                  alt: "Bomulsen screen 08",
                },
                {
                  src: "/experience/bomulsen/09.png",
                  alt: "Bomulsen screen 09",
                },
                {
                  src: "/experience/bomulsen/10.png",
                  alt: "Bomulsen screen 10",
                },
              ],
            },
            {
              label: "Admin dashboard",
              layout: "scroll",
              orientation: "landscape",
              items: [
                {
                  src: "/experience/bomulsen/admin_01.png",
                  alt: "Bomulsen admin dashboard 01",
                },
                {
                  src: "/experience/bomulsen/admin_02.png",
                  alt: "Bomulsen admin dashboard 02",
                },
                {
                  src: "/experience/bomulsen/admin_03.png",
                  alt: "Bomulsen admin dashboard 03",
                },
              ],
            },
            {
              label: "Monthly event WebView (EJS · responsive)",
              layout: "scroll",
              items: [
                {
                  src: "/experience/bomulsen/event_01.mp4",
                  alt: "Monthly event WebView interaction 01",
                  video: true,
                  poster: "/experience/bomulsen/event_01.png",
                },
                {
                  src: "/experience/bomulsen/event_02.png",
                  alt: "Monthly event screen 02",
                },
                {
                  src: "/experience/bomulsen/event_03.png",
                  alt: "Monthly event screen 03",
                },
                {
                  src: "/experience/bomulsen/event_04.mp4",
                  alt: "Monthly event WebView interaction 02",
                  video: true,
                },
                {
                  src: "/experience/bomulsen/event_05.png",
                  alt: "Monthly event screen 05",
                },
                {
                  src: "/experience/bomulsen/event_06.png",
                  alt: "Monthly event screen 06",
                },
                {
                  src: "/experience/bomulsen/event_07.mp4",
                  alt: "Monthly event WebView interaction 03",
                  video: true,
                },
              ],
            },
          ],
        },
        {
          title: "GOPANG — New Build",
          tag: "Solo Frontend",
          sub: "Indonesian random-box web platform",
          period:
            "Jun 2024 — Oct 2025 (6-month publishing + frontend build → launched Feb 2025, ongoing maintenance)",
          details: [
            "Built the Indonesian random-box React web app from scratch as the only frontend engineer, adapting Bomulsen's (React Native) service patterns to a web context",
            "Sole frontend ownership across the full stack: design-mock publishing, React component implementation, state management, and API integration",
            "Delivered 70+ pages end-to-end in 6 months — 40+ user screens and 30+ admin screens, single-handed",
            "Responsive publishing for consistent experience across mobile devices and resolutions, with UI/UX tailored to the Indonesian market context",
            "Owned the admin page UI/UX end-to-end — design, publishing, and implementation, solo",
            "Continued maintenance and iteration after the official launch in Feb 2025",
          ],
          screenshots: [
            {
              label: "GOPANG — key app screens",
              items: [
                { src: "/experience/gopang/01.png", alt: "GOPANG screen 01" },
                { src: "/experience/gopang/02.png", alt: "GOPANG screen 02" },
                { src: "/experience/gopang/03.png", alt: "GOPANG screen 03" },
                { src: "/experience/gopang/04.png", alt: "GOPANG screen 04" },
                { src: "/experience/gopang/05.png", alt: "GOPANG screen 05" },
                { src: "/experience/gopang/06.png", alt: "GOPANG screen 06" },
                { src: "/experience/gopang/07.png", alt: "GOPANG screen 07" },
                { src: "/experience/gopang/08.png", alt: "GOPANG screen 08" },
                { src: "/experience/gopang/09.png", alt: "GOPANG screen 09" },
                { src: "/experience/gopang/10.png", alt: "GOPANG screen 10" },
              ],
            },
            {
              label: "Admin dashboard",
              layout: "scroll",
              orientation: "landscape",
              items: [
                {
                  src: "/experience/gopang/admin_01.png",
                  alt: "GOPANG admin dashboard 01",
                },
                {
                  src: "/experience/gopang/admin_02.png",
                  alt: "GOPANG admin dashboard 02",
                },
                {
                  src: "/experience/gopang/admin_03.png",
                  alt: "GOPANG admin dashboard 03",
                },
              ],
            },
          ],
        },
      ],
    },
    highlights: [
      {
        slug: "design-engineering-crosskill",
        title: "Design–Engineering Cross-Skill",
        description:
          "How a design career shapes my frontend work — design reviews, design systems, and solo UI/UX ownership for admin surfaces.",
        tags: ["Design", "Frontend", "Collaboration"],
      },
      {
        slug: "team-process-automation",
        title: "Team Process & Automation",
        description:
          "As part lead, formalized Atomic Design and code review processes, and integrated Claude Code-based AI pair programming — human and agent now enforce conventions together automatically.",
        tags: ["Leadership", "Process", "AI"],
      },
      {
        slug: "rn-upgrade",
        title: "React Native 0.76 Upgrade Troubleshooting",
        description:
          "Documented the new architecture adoption for the Google Play 16KB policy and library compatibility resolution process.",
        tags: ["Technical", "Problem Solving"],
      },
      {
        slug: "bomulsen-treasure-box",
        title: "Treasure Box Screen — Complex State List Design",
        description:
          "Documented how I unified per-button enable/label/navigation rules across 11 states × type code × lock flag, and corralled six distinct modals into one pattern on a single screen where tab, search, filter, sort, and a lock toggle all operate at once.",
        tags: ["Technical", "State Machine", "UX"],
      },
      {
        slug: "event-webview-games",
        title: "Monthly Event — CSS 3D · Interactive Games",
        description:
          "On monthly event pages separated into the backend repo as EJS (to bypass app-store reviews), built interactive games (dice board, RPS tournament, slot machine) from scratch with pure CSS 3D transforms and jQuery — no game library required.",
        tags: ["Frontend", "Interaction", "WebView"],
      },
    ],
  },
};

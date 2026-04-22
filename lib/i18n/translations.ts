/**
 * 포트폴리오 전역 번역본 (`ko` / `en`).
 *
 * - 홈 페이지와 상세 페이지 모두 이 모듈을 단일 소스로 사용합니다.
 * - 신규 번역 키는 반드시 `Translation` 타입(`lib/types/portfolio.ts`) 에 먼저 선언한 뒤 추가하세요.
 * - `highlights[i].slug` 는 `lib/highlights.ts` 의 HIGHLIGHTS 배열 slug 와 반드시 일치해야 합니다.
 *
 * 고유 데이터(학력·자격증·수상 등) 는 본인의 실제 정보로 교체해야 하는 자리입니다.
 * 각 자리에 `TODO:` 주석으로 명시해 두었습니다.
 */

import type { Lang } from "@/lib/stores/uiStore";
import type { Translation } from "@/lib/types/portfolio";

export const T: Record<Lang, Translation> = {
  ko: {
    role: "Frontend Developer",
    roleSub: "Design → Engineering · 크로스 스킬 포지션",
    title: "근성 있는 디자인 전공\n프론트엔드 리더",
    availability: "새로운 기회 탐색 중",
    nav: [
      { label: "소개", href: "#about" },
      { label: "역량", href: "#highlights" },
      { label: "경력", href: "#experience" },
      { label: "학력", href: "#education" },
      { label: "코드", href: "#code-showcase" },
      { label: "기술", href: "#skills" },
      { label: "연락", href: "#contact" },
    ],
    aboutLabel: "About",
    about: {
      heading: "디자인과 엔지니어링 사이에서",
      paragraphs: [
        [
          {
            text: "시각디자인 전공자로 출발해 웹디자인기능사 → SQL 개발자 → 정보처리기사 → 학점은행제 컴퓨터공학 학사까지, ",
          },
          {
            text: "의도적인 디자인-엔지니어링 전환 경로",
            emphasis: true,
          },
          {
            text: "를 밟아 왔습니다. 2021년부터 (주)에이치투비즈에서 프론트엔드 개발자로 성장하며 React Native 모바일 앱과 Next.js 웹 서비스를 설계·구현하고, ",
          },
          {
            text: "실질적 파트 리더",
            emphasis: true,
          },
          {
            text: "로서 팀 컨벤션 수립과 부사수 매니지먼트를 함께 수행하고 있습니다.",
          },
        ],
        [
          {
            text: "디자이너·기획자의 언어를 함께 이해하는 개발자로서, 컴포넌트 구조·상태 설계·코드 품질을 ",
          },
          {
            text: "사용자 경험과 같은 기준",
            emphasis: true,
          },
          {
            text: "으로 다룹니다. Figma 시안을 단순 구현하는 게 아니라 디자인 시스템·토큰·상호작용 단계에서 함께 의사결정하고, ",
          },
          {
            text: "관리자 페이지는 UI/UX 디자인부터 구현까지 1인 전담",
            emphasis: true,
          },
          {
            text: "한 경험이 있습니다.",
          },
        ],
        [
          {
            text: "반복 작업은 자동화하고, 사람이 판단해야 할 부분만 리뷰에 남기는 워크플로우를 선호합니다. ",
          },
          {
            text: "Claude Code 기반 AI 페어 프로그래밍을 팀 워크플로우에 정착",
            emphasis: true,
          },
          {
            text: "시켜 컨벤션 준수·셀프 리뷰·린트 체크를 에이전트가 일관되게 수행하도록 설계했습니다.",
          },
        ],
      ],
    },
    impactLabel: "Impact at a Glance",
    impactMetrics: [
      {
        value: "137K",
        label: "MAU 서비스 무중단 관리",
        hint: "보물선 · 7,700% 회원 성장기 전 과정",
      },
      {
        value: "0.70 → 0.76",
        label: "React Native 메이저 버전업",
        hint: "Google Play 16KB 정책 대응 · 약 4주",
      },
      {
        value: "11 × 2 × 2",
        label: "상태 × 타입 × 잠금 매트릭스 통합",
        hint: "보물함 단일 화면 · 6종 모달 일원화",
      },
      {
        value: "~30%",
        label: "리뷰 사이클 체감 단축",
        hint: "Atomic Design + 린터 자동화 도입",
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
    // TODO: 수상/사내 기여 인정을 여기에 추가하세요. 없으면 빈 배열로 두면 섹션이 자동 숨겨집니다.
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
      "실제 구현 코드에서 비즈니스 로직만 마스킹한 sanitize 버전입니다.",
    atomicDesignDesc:
      "UI를 Atoms → Molecules → Organisms → Templates → Pages 5계층으로 분리해 재사용성과 테스트 용이성을 확보했습니다.",
    hooksDesc:
      "비즈니스 로직을 Custom Hook으로 분리해 컴포넌트는 UI 렌더링에만 집중합니다.",
    performanceLabel: "왜 이 라이브러리? — 기술 선택 근거 & 성능 최적화",
    commitConventionLabel: "Commit Convention",
    commitConventionDesc: "feat · fix · chore  타입을 일관되게 적용합니다.",
    skillsLabel: "Technical Skills",
    portfolioLabel: "2020 Portfolio",
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
    statsLabels: {
      cicd: "CI/CD 파이프라인",
      branches: "브랜치 전략",
    },
    cicdValue: "lint · type check · build 자동화",
    branchesValue: "bugfix / feature 브랜치 전략",
    evidencePendingLabel: "준비 중",
    rn076EvidenceLabel: "RN 0.76 업그레이드 증거",
    conventionEvidenceLabel: "팀 컨벤션 증거",
    experience: {
      company: "(주)에이치투비즈",
      position: "개발팀 책임연구원",
      period: "2021.03 — 재직 중",
      description:
        "리뉴얼 및 유지보수 담당, 신규 프로젝트 제작, 실질적인 파트 리더 역할 수행, 부사수 매니지먼트 및 프로젝트 스케줄링 전담",
      projects: [
        {
          title: "보물선 — 리뉴얼 및 유지보수",
          tag: "프론트 메인 담당",
          sub: "국내 랜덤박스 플랫폼",
          details: [
            "jQuery 기반 노후 서비스를 React Native로 전면 리뉴얼",
            "사용자 13.7만 명 규모 서비스를 무중단 운영 (회원 수 7,700% 성장기 전 과정 프론트엔드 관리)",
            "Google Play 16kb 정책 대응을 위한 RN 버전업(v0.70 → v0.76) 및 OS 환경 대응",
            "RESTful API 기반 서버-클라이언트 통신 구현 — 공통 HTTP 클라이언트로 인증 · 파라미터 직렬화 · 응답 핸들링 · 인증 스토리지 동기화를 일원화",
            "보물함 화면 개발 — 탭·검색·필터·정렬·잠금 토글이 결합된 복합 리스트 UI 및 페이지네이션 구현",
            "아이템 상태별 버튼 매트릭스 설계 — 배송·거래·분해·환급 액션 분기 처리",
            "거래취소·포인트 환급 등 위험한 액션을 위한 공통 확인 모달 플로우 구현",
            "월간 이벤트/프로모션 페이지 개발 — 앱 내 WebView에 React 기반 반응형 UI를 띄워 다양한 단말·해상도에서 일관된 경험 제공",
            "관리자 페이지 개발 및 유지보수",
          ],
          hasRN076Evidence: true,
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
              label: "월간 이벤트 WebView (React · 반응형)",
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
          tag: "단독 개발",
          sub: "인도네시아향 랜덤박스 웹 플랫폼",
          details: [
            "보물선(React Native) 의 서비스 구조를 기반으로, 인도네시아향 랜덤박스 플랫폼을 React 웹앱으로 처음부터 단독 구축",
            "디자인 시안 퍼블리싱부터 React 컴포넌트 구현 · 상태 관리 · API 연동까지 프론트엔드 전 과정 1인 전담",
            "다양한 모바일 단말 · 해상도에서 일관된 경험을 내기 위한 반응형 퍼블리싱 + 현지(인도네시아) 사용자 맥락에 맞춘 UI/UX 설계",
            "관리자 페이지 UI/UX 디자인 · 퍼블리싱 · 구현 1인 전담 — 시안부터 엔드투엔드",
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
            "GitHub Actions 기반 CI/CD 파이프라인 구축 — lint · type check · build 자동화 및 Vercel 자동 배포 연동",
            "Claude Code 기반 AI 페어 프로그래밍 워크플로우 정착 — CLAUDE.md로 프로젝트 컨텍스트 문서화, 커스텀 커맨드(/review · /lint-check)와 코드 생성 템플릿 5종(Component · Hook · Screen · ViewModel · RouteHandler)으로 컨벤션 자동 준수 · 리뷰 · 린트까지 에이전트가 일관되게 수행",
          ],
          hasDetail: true,
          screenshots: [
            {
              label: "신규 웹 서비스 주요 화면",
              orientation: "landscape",
              items: [
                { src: "/experience/nextjs/01.png", alt: "Next.js 화면 01" },
                {
                  src: "/experience/nextjs/01-1.png",
                  alt: "Next.js 화면 01 상세",
                },
                { src: "/experience/nextjs/02.png", alt: "Next.js 화면 02" },
                { src: "/experience/nextjs/03.png", alt: "Next.js 화면 03" },
                { src: "/experience/nextjs/04.png", alt: "Next.js 화면 04" },
                { src: "/experience/nextjs/05.png", alt: "Next.js 화면 05" },
              ],
            },
            {
              label: "Atomic Design · 아키텍처 · CI/CD 파이프라인",
              layout: "scroll",
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
                {
                  src: "/experience/nextjs/Architecture_08.png",
                  alt: "아키텍처 다이어그램 08",
                },
              ],
            },
          ],
        },
      ],
    },
    highlights: [
      {
        slug: "rn-upgrade",
        title: "React Native 0.76 업그레이드 트러블슈팅",
        description:
          "Google Play 16kb 정책 대응을 위한 신규 아키텍처 도입 및 라이브러리 호환성 해결 과정을 기록했습니다.",
        tags: ["Technical", "Problem Solving"],
      },
      {
        slug: "team-convention",
        title: "프론트엔드 팀 컨벤션 수립",
        description:
          "실질적 파트 리더로서 코드 리뷰 프로세스와 Atomic Design 도입을 통해 협업 효율을 체감상 약 30% 개선했습니다.",
        tags: ["Leadership", "Process"],
      },
      {
        slug: "bomulsen-treasure-box",
        title: "보물함 화면 — 복합 상태 리스트 설계",
        description:
          "탭 · 검색 · 필터 · 정렬 · 잠금 토글이 동시에 작동하는 단일 화면에서 11종 상태코드 × 타입코드 × 잠금 여부 버튼 매트릭스와 6종 모달을 하나의 패턴으로 정리한 과정을 기록했습니다.",
        tags: ["Technical", "State Machine", "UX"],
      },
      {
        slug: "design-engineering-crosskill",
        title: "디자인-엔지니어링 크로스 스킬",
        description:
          "디자인 전공 배경이 프론트엔드 업무에 어떻게 작용하는지 — Figma 프로토타입 · 디자인 시스템 · 1인 UI/UX 담당 경험을 중심으로 정리했습니다.",
        tags: ["Design", "Frontend", "Collaboration"],
      },
      {
        slug: "ai-workflow",
        title: "AI 기반 개발 워크플로우 설계",
        description:
          "Claude Code 를 팀 워크플로우에 통합해 컨벤션 준수 · 셀프 리뷰 · 린트/타입 체크를 에이전트가 일관되게 수행하도록 설계했습니다.",
        tags: ["AI", "Automation", "Process"],
      },
    ],
  },
  en: {
    role: "Frontend Developer",
    roleSub: "Design → Engineering · Cross-skill position",
    title: "A Design-Trained\nFrontend Lead Who Ships with Grit",
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
            text: "I started out as a Visual Communication Design major and ",
          },
          {
            text: "took an intentional path into engineering",
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
            text: ". I don't just implement Figma mocks — I co-own the design system, tokens, and interaction spec, and I've ",
          },
          {
            text: "owned full UI/UX end-to-end (design through implementation) for admin surfaces",
            emphasis: true,
          },
          {
            text: ".",
          },
        ],
        [
          {
            text: "I lean on automation for repetitive work and reserve review for decisions that actually need human judgment. I built a ",
          },
          {
            text: "Claude Code–powered team workflow",
            emphasis: true,
          },
          {
            text: " where the agent consistently enforces conventions, performs self-review, and runs lint checks before code even reaches human eyes.",
          },
        ],
      ],
    },
    impactLabel: "Impact at a Glance",
    impactMetrics: [
      {
        value: "137K",
        label: "MAU service kept running with zero downtime",
        hint: "Bomulsen · through a 7,700% member-growth period",
      },
      {
        value: "0.70 → 0.76",
        label: "React Native major upgrade",
        hint: "Google Play 16KB policy · ~4 weeks",
      },
      {
        value: "11 × 2 × 2",
        label: "State × type × lock matrix unified",
        hint: "Single Treasure Box screen · 6 modals consolidated",
      },
      {
        value: "~30%",
        label: "Review cycle perceived reduction",
        hint: "Atomic Design + linter automation adoption",
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
    // TODO: Add awards here. Keep empty to hide the subsection.
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
      "The snippets below are sanitized versions of the actual implementation with business logic masked.",
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
    statsLabels: {
      cicd: "CI/CD Pipeline",
      branches: "Branch Strategy",
    },
    cicdValue: "lint · type check · build automated",
    branchesValue: "bugfix / feature branch strategy",
    evidencePendingLabel: "Coming soon",
    rn076EvidenceLabel: "RN 0.76 Upgrade Evidence",
    conventionEvidenceLabel: "Team Convention Evidence",
    experience: {
      company: "H2Biz Co., Ltd.",
      position: "Senior Research Engineer, Dev Team",
      period: "Mar 2021 — Present",
      description:
        "In charge of renewal & maintenance, new project development, acting frontend tech lead, junior mentoring, and project scheduling.",
      projects: [
        {
          title: "Bomulsen — Renewal & Maintenance",
          tag: "Frontend Lead",
          sub: "Domestic random-box platform",
          details: [
            "Fully migrated legacy jQuery service to React Native",
            "Kept a 137K-user service running with zero downtime throughout a 7,700% member-growth period",
            "Upgraded RN (v0.70 → v0.76) to meet Google Play 16KB policy; handled OS compatibility",
            "Implemented RESTful API-based client-server integration — unified a shared HTTP client covering auth, parameter serialization, response handling, and auth-storage sync",
            "Built the Treasure Box screen — a complex list UI combining tab, search, filter, sort, and a lock toggle with pagination",
            "Designed an item-level button matrix branching Ship / Trade / Dismantle / Refund actions by state",
            "Built a shared confirm-modal flow for irreversible actions like trade-cancel and point refund",
            "Built monthly event / promo pages as React-based responsive UIs loaded in an in-app WebView — consistent experience across devices and resolutions",
            "Developed and maintained the admin dashboard",
          ],
          hasRN076Evidence: true,
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
              label: "Monthly event WebView (React · responsive)",
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
          tag: "Solo Developer",
          sub: "Indonesian random-box web platform",
          details: [
            "Built an Indonesian random-box React web app from scratch — alone — adapting Bomulsen's (React Native) service patterns to a web context",
            "Sole frontend ownership across the full stack: design-mock publishing, React component implementation, state management, and API integration",
            "Responsive publishing for consistent experience across mobile devices and resolutions, with UI/UX tailored to the Indonesian market context",
            "Owned the admin page UI/UX end-to-end — design, publishing, and implementation, solo",
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
            "Built a CI/CD pipeline with GitHub Actions — automated lint, type check, and build; integrated Vercel auto-deploy",
            "Established a Claude Code-powered AI pair-programming workflow — documented project context in CLAUDE.md, defined custom commands (/review · /lint-check), and maintained 5 code-generation templates (Component · Hook · Screen · ViewModel · RouteHandler) so the agent consistently enforces conventions, performs reviews, and runs lint checks",
          ],
          hasDetail: true,
          screenshots: [
            {
              label: "New web service — key screens",
              orientation: "landscape",
              items: [
                { src: "/experience/nextjs/01.png", alt: "Next.js screen 01" },
                {
                  src: "/experience/nextjs/01-1.png",
                  alt: "Next.js screen 01 detail",
                },
                { src: "/experience/nextjs/02.png", alt: "Next.js screen 02" },
                { src: "/experience/nextjs/03.png", alt: "Next.js screen 03" },
                { src: "/experience/nextjs/04.png", alt: "Next.js screen 04" },
                { src: "/experience/nextjs/05.png", alt: "Next.js screen 05" },
              ],
            },
            {
              label: "Atomic Design · architecture · CI/CD pipeline",
              layout: "scroll",
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
                {
                  src: "/experience/nextjs/Architecture_08.png",
                  alt: "Architecture diagram 08",
                },
              ],
            },
          ],
        },
      ],
    },
    highlights: [
      {
        slug: "rn-upgrade",
        title: "React Native 0.76 Upgrade Troubleshooting",
        description:
          "Documented the new architecture adoption for the Google Play 16KB policy and library compatibility resolution process.",
        tags: ["Technical", "Problem Solving"],
      },
      {
        slug: "team-convention",
        title: "Establishing Frontend Team Conventions",
        description:
          "As acting tech lead, improved collaboration efficiency by a perceived ~30% through code review processes and Atomic Design adoption.",
        tags: ["Leadership", "Process"],
      },
      {
        slug: "bomulsen-treasure-box",
        title: "Treasure Box Screen — Complex State List Design",
        description:
          "Documented how I unified the 11-state × type-code × lock-flag button matrix and six distinct modals into one pattern on a screen where tab, search, filter, sort, and a lock toggle all operate at once.",
        tags: ["Technical", "State Machine", "UX"],
      },
      {
        slug: "design-engineering-crosskill",
        title: "Design–Engineering Cross-Skill",
        description:
          "How a design background actively shapes my frontend work — Figma prototyping, design systems, and solo UI/UX ownership for admin surfaces.",
        tags: ["Design", "Frontend", "Collaboration"],
      },
      {
        slug: "ai-workflow",
        title: "Designing an AI-Powered Dev Workflow",
        description:
          "Integrated Claude Code into the team workflow so the agent consistently enforces conventions, runs self-reviews, and executes lint / type checks.",
        tags: ["AI", "Automation", "Process"],
      },
    ],
  },
};

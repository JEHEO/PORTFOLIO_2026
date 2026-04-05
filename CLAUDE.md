# CLAUDE.md — 프로젝트 요약

> AI 에이전트 및 기여자를 위한 프로젝트 컨텍스트 문서입니다.
> 상세 규칙은 `docs/FRAMEWORK.md`, API 스펙은 `docs/API_SPEC.md`를 참조하세요.

---

## 기술 스택

| 분류 | 버전 |
|------|------|
| Framework | Next.js 16.2.1 (App Router) |
| Runtime | React 19.2.4 |
| Language | TypeScript 5.x |
| Styling | Tailwind CSS 4.x |
| Linter | ESLint 9 (eslint-config-next) |
| Node | >=20 |

---

## 패키지 구조

```
portfolio/
├── app/                    # Next.js App Router 루트
│   ├── layout.tsx          # 루트 레이아웃 (메타데이터, 전역 스타일)
│   ├── page.tsx            # 홈 페이지 (/)
│   ├── globals.css         # 전역 CSS (Tailwind base)
│   └── api/                # Route Handlers
│       └── [...]/route.ts
├── components/             # 공유 컴포넌트
│   ├── ui/                 # 원자 UI (Button, Card, Input 등)
│   ├── layout/             # 레이아웃 (Header, Footer, Nav)
│   └── sections/           # 포트폴리오 섹션 (Hero, About, Projects 등)
├── hooks/                  # 커스텀 React 훅
├── lib/                    # 유틸리티, 상수, 타입
│   ├── utils/
│   ├── constants/
│   └── types/
├── public/                 # 정적 파일 (이미지, 폰트 등)
├── docs/                   # 프로젝트 문서
│   ├── FRAMEWORK.md        # 규칙·컨벤션·패턴 가이드
│   ├── ROADMAP.md          # 피처 히스토리 + 의존관계 + 진행 상태
│   ├── API_SPEC.md         # 서버 API 스펙 (Swagger 기반)
│   └── BACKLOG.md          # 별도 티켓 후보 추적
├── .claude/
│   ├── commands/           # 커스텀 커맨드 정의
│   │   ├── review.md       # 코드 리뷰 기준
│   │   └── lint-check.md   # 린트/타입 체크 절차
│   └── templates/          # 코드 생성 템플릿 5종
├── next.config.ts          # Next.js 설정
├── tsconfig.json           # TypeScript 설정
├── postcss.config.mjs      # PostCSS (Tailwind)
└── eslint.config.mjs       # ESLint 설정
```

---

## 빌드 명령어

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행 (빌드 후)
npm run start

# 린트 검사
npm run lint
```

---

## 작업 규칙

### 필수 준수 사항
- **App Router** 전용 사용. Pages Router(`pages/`) 금지.
- 모든 컴포넌트는 TypeScript strict mode 통과 필수.
- 스타일은 **Tailwind CSS** 유틸리티 클래스만 사용. 인라인 style 속성 금지.
- 신규 파일 생성 시 `.claude/templates/`의 템플릿 참조.

### 파일 네이밍
- 컴포넌트: `PascalCase.tsx` (예: `UserCard.tsx`)
- 훅: `use` 접두사 + `camelCase.ts` (예: `useUserData.ts`)
- 유틸: `camelCase.ts` (예: `formatDate.ts`)
- 라우트 세그먼트: `kebab-case/` (예: `user-profile/`)

### 커밋 컨벤션
```
<type>(<scope>): <subject>

type: feat | fix | refactor | style | docs | test | chore
```

### 참고 문서
- 상세 규칙/컨벤션 → `docs/FRAMEWORK.md`
- 피처 진행 상태 → `docs/ROADMAP.md`
- API 스펙 → `docs/API_SPEC.md`
- 백로그 → `docs/BACKLOG.md`
- 코드 템플릿 → `.claude/templates/`

> **⚠️ Next.js 16은 breaking changes 포함.** 코드 작성 전 `node_modules/next/dist/docs/`의 관련 가이드를 먼저 확인하세요.

---

## 워크플로우

> 프론트엔드 포트폴리오 개발 기준 표준 작업 순서입니다.

### 워크플로우 순서

1. **코드 작성** — 요청된 UI/기능 구현 또는 수정
   - `.claude/templates/` 템플릿을 참조하여 파일 생성
   - Server / Client Component 구분 명확히 적용
   - Tailwind 클래스만 사용, 인라인 style 금지

2. **코드 리뷰** — `.claude/commands/review.md` 기준으로 셀프 리뷰 수행
   - 컨벤션 준수 여부 (네이밍, 파일 위치, 컴포넌트 분리)
   - 접근성(a11y): 시맨틱 태그, alt 속성, 키보드 포커스
   - 반응형 처리: 모바일 퍼스트 Tailwind 클래스 적용 여부
   - 성능: 불필요한 `"use client"`, 이미지 최적화(`next/image`) 누락 여부
   - 문제 발견 시 즉시 수정 후 재리뷰

3. **린트 / 타입 체크** — `.claude/commands/lint-check.md` 기준으로 실행
   - `npm run lint` — ESLint 오류/경고 확인
   - TypeScript strict 오류 확인 (빌드 오류와 동일 기준)
   - 실패 시 원인 분석 → 수정 → 재실행 (전체 통과까지)

4. **빌드 검증** — 중요한 변경이 있을 경우 `npm run build` 실행
   - 빌드 오류 발생 시 원인 분석 → 수정 → 재빌드
   - 실행 결과를 사용자에게 보고

### 워크플로우 예외

- 정적 파일(이미지, 폰트, favicon 등)만 변경한 경우: 린트/빌드 검증 생략
- `docs/`, `CLAUDE.md` 등 문서만 변경한 경우: 전체 워크플로우 생략
- Tailwind 클래스 미세 조정 / 오탈자 수정: 빌드 검증 선택사항
- 사용자가 명시적으로 특정 단계를 생략 요청한 경우: 해당 단계만 생략

### Custom Commands

- `/review` — 수동 코드 리뷰 실행 (`.claude/commands/review.md` 기준)
- `/lint-check` — 수동 린트 + 타입 체크 실행 (`.claude/commands/lint-check.md` 기준)

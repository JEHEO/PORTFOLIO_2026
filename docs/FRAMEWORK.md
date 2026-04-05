# FRAMEWORK.md — 상세 규칙 / 컨벤션 / 패턴 가이드

> 이 문서는 코드 품질과 일관성을 위한 모든 규칙을 정의합니다.
> 신규 기여자는 작업 시작 전 전체를 숙지하세요.

---

## 1. 프로젝트 아키텍처

### App Router 구조 원칙
- `app/` 디렉토리만 사용. `pages/` 디렉토리 생성 금지.
- 라우트 세그먼트는 `kebab-case` 폴더명 사용.
- 공통 레이아웃은 `layout.tsx`, 로딩 UI는 `loading.tsx`, 에러 핸들링은 `error.tsx` 사용.

### 디렉토리 역할 정의

```
app/
├── (auth)/             # 인증 관련 라우트 그룹 (URL에 영향 없음)
├── (main)/             # 메인 앱 라우트 그룹
├── api/                # Route Handlers (서버 API 엔드포인트)
│   └── [...]/route.ts
components/             # 공유 컴포넌트
├── ui/                 # 기본 UI 원자 컴포넌트 (Button, Input 등)
├── layout/             # 레이아웃 컴포넌트 (Header, Footer 등)
└── features/           # 도메인별 복합 컴포넌트
hooks/                  # 커스텀 React 훅
lib/                    # 유틸리티, 헬퍼, 설정
├── utils/
├── constants/
└── types/              # 공유 TypeScript 타입/인터페이스
```

---

## 2. 컴포넌트 패턴

### Server Component vs Client Component

| 기준 | Server Component | Client Component |
|------|-----------------|-----------------|
| 데이터 페칭 | async/await 직접 사용 | SWR / React Query |
| 이벤트 핸들러 | 불가 | 가능 |
| 상태(State) | 불가 | useState / useReducer |
| 파일 선언 | 기본값 (별도 선언 불필요) | 파일 최상단 `"use client"` |

**규칙:**
- 기본적으로 Server Component로 작성. 인터랙션이 필요한 경우만 `"use client"` 추가.
- Client Component는 컴포넌트 트리의 최대한 **말단(leaf)**에 배치.

### 컴포넌트 작성 규칙
```tsx
// ✅ 올바른 예
export default function UserCard({ name, role }: UserCardProps) {
  return (
    <div className="rounded-lg bg-white p-4 shadow">
      <p className="text-sm font-semibold">{name}</p>
      <p className="text-xs text-gray-500">{role}</p>
    </div>
  )
}

// ❌ 금지: 인라인 style
<div style={{ padding: '16px' }}>...</div>

// ❌ 금지: any 타입
function Foo(props: any) { ... }
```

---

## 3. TypeScript 규칙

- `strict: true` 필수 (tsconfig.json에서 변경 금지).
- `any` 타입 사용 금지. 불가피한 경우 `unknown` + 타입 가드 사용.
- Props 인터페이스는 컴포넌트 파일 내 상단에 선언.
- 공유 타입은 `lib/types/` 에 위치.

```ts
// ✅ Props 인터페이스 선언 위치
interface UserCardProps {
  name: string
  role: 'admin' | 'user' | 'guest'
  avatarUrl?: string
}

export default function UserCard({ name, role, avatarUrl }: UserCardProps) { ... }
```

---

## 4. 스타일링 규칙 (Tailwind CSS v4)

- 인라인 `style` 속성 사용 금지.
- CSS 모듈(`.module.css`) 사용 금지. Tailwind 클래스만 사용.
- 반응형: `sm:` `md:` `lg:` `xl:` 순서로 작성 (모바일 퍼스트).
- 클래스 정렬: 레이아웃 → 박스모델 → 타이포그래피 → 색상 → 기타 순.
- 다크모드: `dark:` 변형자 사용.

```tsx
// ✅ 올바른 클래스 정렬 예시
<button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 dark:bg-blue-500">
```

---

## 5. 데이터 페칭 패턴

### Server Component에서 fetch
> ⚠️ Server Component에서 자체 Route Handler를 호출할 때는 **절대 URL** 필수.
> 상대 경로(`/api/...`)는 브라우저 환경에서만 동작합니다.

```tsx
// app/users/page.tsx
async function getUsers() {
  // 환경변수로 base URL 관리 (로컬: http://localhost:3000)
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'
  const res = await fetch(`${baseUrl}/api/users`, { next: { revalidate: 60 } })
  if (!res.ok) throw new Error('Failed to fetch users')
  return res.json()
}

export default async function UsersPage() {
  const users = await getUsers()
  return <UserList users={users} />
}
```

### Route Handler (API)
```ts
// app/api/users/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  // 데이터 로직
  return NextResponse.json({ users: [] })
}
```

---

## 6. 에러 핸들링

- 각 라우트 세그먼트에 `error.tsx` 작성 권장.
- `error.tsx`는 반드시 `"use client"` 선언.
- API Route Handler는 항상 적절한 HTTP 상태 코드 반환.

```tsx
// app/error.tsx
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h2 className="text-lg font-semibold text-red-600">문제가 발생했습니다</h2>
      <button onClick={() => reset()} className="rounded bg-blue-600 px-4 py-2 text-white">
        다시 시도
      </button>
    </div>
  )
}
```

---

## 7. 커밋 & PR 컨벤션

### 커밋 메시지
```
<type>(<scope>): <subject>

[optional body]
[optional footer]
```

| type | 용도 |
|------|------|
| `feat` | 새로운 기능 |
| `fix` | 버그 수정 |
| `refactor` | 리팩토링 (기능 변경 없음) |
| `style` | 코드 포맷/스타일 (기능 변경 없음) |
| `docs` | 문서 변경 |
| `test` | 테스트 추가/수정 |
| `chore` | 빌드 설정, 패키지 업데이트 등 |

### PR 규칙
- PR 제목은 커밋 메시지 형식 동일 적용.
- 관련 이슈 번호 반드시 링크 (`Closes #123`).
- 셀프 리뷰 후 최소 1인 리뷰어 지정.

---

## 8. 금지 사항 요약

| 금지 | 대안 |
|------|------|
| `any` 타입 | `unknown` + 타입가드 |
| 인라인 `style` | Tailwind 클래스 |
| `pages/` 디렉토리 | `app/` 디렉토리 |
| `console.log` (프로덕션) | 로거 유틸 또는 제거 |
| 하드코딩된 URL/문자열 | `lib/constants/` |
| 비동기 컴포넌트에 `"use client"` | Server Component로 분리 |

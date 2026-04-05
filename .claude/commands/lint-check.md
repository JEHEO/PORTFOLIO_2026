# /lint-check — 린트 & 타입 체크 커맨드

> 이 커맨드는 ESLint + TypeScript 타입 검사를 순서대로 실행합니다.
> CLAUDE.md 워크플로우 3단계에서 자동 실행, 또는 `/lint-check`로 수동 실행.

---

## 실행 순서

### Step 1. ESLint 실행

```bash
npm run lint
```

**판정 기준:**
- `error` — 반드시 수정. 빌드 차단 수준.
- `warning` — 가능하면 수정. 포트폴리오 코드 품질 기준 `warning`도 해소 권장.

**자주 발생하는 오류 유형:**

| 규칙 | 원인 | 해결 |
|------|------|------|
| `@typescript-eslint/no-unused-vars` | 선언만 하고 사용 안 한 변수 | 제거 또는 `_` 접두사 사용 |
| `react/no-unescaped-entities` | JSX에서 `'`, `"`, `>` 직접 사용 | `&apos;`, `&quot;`, `&gt;` 또는 `{'>'}` 로 대체 |
| `@next/next/no-img-element` | `<img>` 직접 사용 | `next/image`의 `<Image>`로 교체 |
| `react-hooks/exhaustive-deps` | useEffect deps 배열 누락 | 의존성 배열 올바르게 추가 |
| `@typescript-eslint/no-explicit-any` | `any` 타입 사용 | 구체적인 타입 또는 `unknown` 으로 변경 |

---

### Step 2. TypeScript 타입 체크

```bash
npx tsc --noEmit
```

> `noEmit`: JS 파일 출력 없이 타입 오류만 확인.
> `npm run build`에 포함되어 있으나, 빠른 피드백 목적으로 별도 실행.

**자주 발생하는 오류 유형:**

| 오류 | 원인 | 해결 |
|------|------|------|
| `Type 'X' is not assignable to type 'Y'` | 잘못된 타입 전달 | Props/함수 시그니처 타입 수정 |
| `Object is possibly 'null'` | null 체크 누락 | optional chaining(`?.`) 또는 early return 추가 |
| `Property 'X' does not exist on type 'Y'` | 타입 미정의 필드 접근 | 타입/인터페이스에 필드 추가 또는 타입 가드 적용 |
| `Parameter 'X' implicitly has 'any' type` | 파라미터 타입 미선언 | 명시적 타입 추가 |

---

### Step 3. (선택) 빌드 검증

중요한 구조 변경이 있을 때만 실행:

```bash
npm run build
```

**빌드 실패 주요 원인:**
- `params`/`searchParams` async 미처리 (Next.js 16 breaking change)
- Server Component에서 client-only API 사용 (`useState`, `useEffect` 등)
- 동적 Route에서 `generateStaticParams` 누락 (static export 사용 시)

---

## 결과 보고 형식

```
[lint-check 결과]
- ESLint: ✅ 통과 / ❌ N개 오류, M개 경고
- TypeScript: ✅ 통과 / ❌ N개 오류
- 빌드: ✅ 통과 / ❌ 실패 / ⏭️ 생략

수정 사항:
- (수정한 내용 간략히 기술)
```

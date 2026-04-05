/**
 * 공유 UI 컴포넌트 템플릿
 *
 * 사용법:
 *   1. 파일명: `<ComponentName>.tsx` (PascalCase)
 *   2. `COMPONENT_NAME` 을 실제 컴포넌트 이름으로 치환
 *   3. Props 인터페이스에 필요한 필드 정의
 *
 * 위치:
 *   - 기본 UI 원자: `components/ui/`
 *   - 도메인 컴포넌트: `components/features/<domain>/`
 */

// ─── 타입 정의 ────────────────────────────────────────────────────────────────

interface COMPONENT_NAMEProps {
  /** 컴포넌트 내용 */
  children?: React.ReactNode
  /** 추가 CSS 클래스 */
  className?: string
  // TODO: 추가 props 정의
}

// ─── 컴포넌트 ────────────────────────────────────────────────────────────────

export function COMPONENT_NAME({
  children,
  className = '',
}: COMPONENT_NAMEProps) {
  return (
    <div className={`/* 기본 클래스 */ ${className}`.trim()}>
      {children}
    </div>
  )
}

// ─── 변형(Variant) 예시 ───────────────────────────────────────────────────────

// variant가 필요한 경우 아래 패턴 사용

// const variantClasses = {
//   primary: 'bg-blue-600 text-white hover:bg-blue-700',
//   secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
//   danger: 'bg-red-600 text-white hover:bg-red-700',
// } as const
//
// type Variant = keyof typeof variantClasses
//
// interface COMPONENT_NAMEProps {
//   variant?: Variant
// }

export default COMPONENT_NAME

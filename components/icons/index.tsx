/**
 * 페이지 전반에서 사용하는 라인 아이콘 모음.
 * - 외부 아이콘 라이브러리를 쓰지 않고 SVG 한 파일로 유지합니다.
 */

import React from "react";

export const SunIcon = () => (
  <svg
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden
  >
    <circle cx="12" cy="12" r="5" />
    <path
      strokeLinecap="round"
      d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
    />
  </svg>
);

export const MoonIcon = () => (
  <svg
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
    />
  </svg>
);

export const ArrowLeftIcon = () => (
  <svg
    className="h-3.5 w-3.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

export const ArrowRightIcon = (
  { className }: { className?: string } = {},
) => (
  <svg
    className={className ?? "h-3 w-3"}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
);

export const EmailIcon = ({ className }: { className?: string }) => (
  <svg
    className={className ?? "h-4 w-4"}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const PhoneIcon = ({ className }: { className?: string }) => (
  <svg
    className={className ?? "h-4 w-4"}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const GitHubIcon = ({ className }: { className?: string }) => (
  <svg
    className={className ?? "h-3.5 w-3.5"}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden
  >
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const CertificateIcon = ({ className }: { className?: string }) => (
  <svg
    className={className ?? "h-5 w-5"}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden
  >
    {/* 방패 + 체크마크 — "검증된 공식 자격" 아이콘 */}
    <path d="M12 3 4 6v6c0 4.5 3.2 7.8 8 9 4.8-1.2 8-4.5 8-9V6z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

// ─── Highlight 상세 페이지의 섹션 헤딩 아이콘 (배경/문제/접근/결과/회고) ──────

export const ContextIcon = ({ className }: { className?: string }) => (
  <svg
    className={className ?? "h-4 w-4"}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden
  >
    {/* 책 — "맥락/배경" */}
    <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v16H6.5A2.5 2.5 0 0 0 4 20.5v-16z" />
    <path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5H6.5A2.5 2.5 0 0 0 4 20.5z" />
  </svg>
);

export const ProblemIcon = ({ className }: { className?: string }) => (
  <svg
    className={className ?? "h-4 w-4"}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden
  >
    {/* 물음표 원 — "문제 정의" */}
    <circle cx="12" cy="12" r="9" />
    <path d="M9.5 9a2.5 2.5 0 1 1 4 2l-1.5 1v1.5" />
    <circle cx="12" cy="17" r="0.5" fill="currentColor" />
  </svg>
);

export const ApproachIcon = ({ className }: { className?: string }) => (
  <svg
    className={className ?? "h-4 w-4"}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden
  >
    {/* 나침반 — "접근/방향" */}
    <circle cx="12" cy="12" r="9" />
    <path d="m15.5 8.5-2.5 5.5-5.5 2.5 2.5-5.5z" />
  </svg>
);

export const ResultIcon = ({ className }: { className?: string }) => (
  <svg
    className={className ?? "h-4 w-4"}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden
  >
    {/* 체크 원 — "결과/완료" */}
    <circle cx="12" cy="12" r="9" />
    <path d="m8 12 3 3 6-6" />
  </svg>
);

export const TakeawayIcon = ({ className }: { className?: string }) => (
  <svg
    className={className ?? "h-4 w-4"}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden
  >
    {/* 전구 — "회고/통찰" */}
    <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.5.5 1 1.2 1 2V16h6v-.5c0-.8.5-1.5 1-2A6 6 0 0 0 12 3z" />
  </svg>
);

// ─── CTA 디스클로저용 "터치 타겟" 아이콘 ─────────────────────────────────────
//
// 중심 점 + 바깥으로 퍼지는 2개 동심원의 sonar ping 모양. Experience 섹션의
// "상세 스택/브랜치 전략" 카드에서 어포던스로 사용합니다.
//
// - 중심 dot 은 정적 (탭 포인트 = 이 자리를 누르세요).
// - 2개의 `touch-ring` 은 `globals.css` 에서 scale + opacity 로
//   바깥쪽으로 퍼지며 사라지는 애니메이션 (sonar 느낌) 을 가집니다.
// - 두 번째 ring 은 animation-delay 로 지연돼 ping 이 연달아 터지는 효과.

export const TouchTargetIcon = ({ className }: { className?: string }) => (
  <svg
    className={className ?? "h-5 w-5"}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    overflow="visible"
    aria-hidden
  >
    {/* 중심 탭 포인트 — 평상시 정적, hover 시 살짝 커짐 */}
    <circle cx="12" cy="12" r="3" fill="currentColor" className="touch-dot" />
    {/* 퍼지는 ring 1 — 바로 시작 */}
    <circle cx="12" cy="12" r="8" className="touch-ring" />
    {/* 퍼지는 ring 2 — 지연 시작으로 double-ping */}
    <circle
      cx="12"
      cy="12"
      r="8"
      className="touch-ring touch-ring-delayed"
    />
  </svg>
);

export const TrophyIcon = ({ className }: { className?: string }) => (
  <svg
    className={className ?? "h-5 w-5"}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden
  >
    {/* 트로피 — Awards 용 */}
    <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4Z" />
    <path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3" />
  </svg>
);

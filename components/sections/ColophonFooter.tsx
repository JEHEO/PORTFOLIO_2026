/**
 * 포트폴리오 하단 Colophon 푸터.
 *
 * - "이 포트폴리오 자체가 무엇으로 빌드되고 어떻게 유지되는지" 를 명시해,
 *   프로필에서 주장하는 스택(Next.js, Claude Code 워크플로우) 이 meta 레벨에서 증명되도록 합니다.
 * - 구조적으로는 Contact 섹션 바로 아래, main 끝단에 위치합니다.
 */

import React from "react";

import type { Translation } from "@/lib/types/portfolio";

export function ColophonFooter({ t }: { t: Translation }) {
  return (
    <footer className="mt-16 border-t border-zinc-200 pt-6 dark:border-zinc-800">
      <p className="text-center text-[11px] leading-relaxed text-zinc-400 dark:text-zinc-500">
        {t.colophon}
      </p>
    </footer>
  );
}

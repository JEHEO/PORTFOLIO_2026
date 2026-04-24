/**
 * 페이지 최상단 헤더 (히어로).
 *
 * 구성
 * - Role 라인: "Frontend Developer · Design → Engineering · 크로스 스킬 포지션"
 * - Title: 2줄. 첫 줄은 기본, 두 번째 줄은 블루 액센트로 강조해 히어로 무게감 강화.
 *   title 문자열은 `\n` 으로 라인을 구분합니다.
 * - 이름 + 이메일 (GitHub 아이콘 링크 포함) 와 우측 "구직 상태" 칩.
 * - 상태 칩은 펄스 애니메이션 점으로 "현재 구직 중" 시그널을 시각화합니다.
 */

import React from "react";

import { GitHubIcon } from "@/components/icons";
// import { ChipGrabPeek } from "@/components/ui/ChipGrabPeek"; // 실제 캐릭터 SVG 교체 대기 중 — 임시 비활성
import { GITHUB_USERNAME, PROFILE } from "@/lib/data/profile";
import type { Translation } from "@/lib/types/portfolio";

export function HeaderSection({ t }: { t: Translation }) {
  // title 을 \n 기준으로 2줄 이하로 분해. 없으면 전체가 한 줄로 들어옵니다.
  const [titleLine1, ...restLines] = t.title.split("\n");
  const titleLine2 = restLines.join(" ");

  return (
    <header className="mb-16">
      {/* Role · roleSub */}
      <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-400">
          {t.role}
        </p>
        {t.roleSub && (
          <>
            <span className="text-zinc-300 dark:text-zinc-600">·</span>
            <p className="text-xs font-medium uppercase tracking-widest text-accent-500">
              {t.roleSub}
            </p>
          </>
        )}
      </div>

      {/* Title — 두 번째 라인을 accent 색상으로 강조.
          `break-keep` 으로 한글 단어 중간 끊김 방지 (예: 프론트엔/드). */}
      <h1 className="mb-8 text-4xl font-bold leading-[1.15] tracking-tight break-keep text-zinc-900 sm:text-5xl dark:text-white">
        {titleLine1}
        {titleLine2 && (
          <>
            <br />
            <span className="text-accent-500 dark:text-accent-400">
              {titleLine2}
            </span>
          </>
        )}
      </h1>

      {/* 이름 + 연락 + 구직 상태 */}
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div className="space-y-1 text-sm text-zinc-500">
          <p className="font-medium text-zinc-900 dark:text-zinc-100">
            {PROFILE.name}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${PROFILE.email}`}
              className="transition-colors hover:text-accent-500"
            >
              {PROFILE.email}
            </a>
            <span className="text-zinc-300 dark:text-zinc-700">·</span>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="inline-flex items-center gap-1 transition-colors hover:text-accent-500"
            >
              <GitHubIcon className="h-3.5 w-3.5" />
              <span className="font-mono text-xs">
                @{GITHUB_USERNAME}
              </span>
            </a>
          </div>
        </div>

        {/* 구직 상태 chip — 실제 캐릭터 SVG 준비 전까지 ChipGrabPeek 임시 비활성.
            (뒤에서 손·얼굴이 올라와 chip 위로 얹히는 peek 연출 담당) */}
        <span className="relative inline-flex isolate">
          {/* <ChipGrabPeek /> */}
          {/* dark:bg-accent-950 를 불투명으로 — 뒤에서 등장하는 손이 반투명 bg 너머로 비쳐 보이는 현상 방지 */}
          <span className="relative inline-flex items-center gap-1.5 rounded-full bg-accent-50 px-3 py-1.5 text-xs font-medium text-accent-700 ring-1 ring-accent-500/20 dark:bg-accent-950 dark:text-accent-300 dark:ring-accent-500/30">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
            </span>
            {t.availability}
          </span>
        </span>
      </div>
    </header>
  );
}

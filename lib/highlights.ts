/**
 * Expertise & Leadership 상세 페이지 데이터.
 *
 * - 홈의 카드 미리보기(title · description · tags)는 `app/page.tsx` 의 번역본 `T.highlights`
 *   를 사용하고, 본 모듈은 각 카드의 상세 페이지에 필요한 전체 콘텐츠를 제공합니다.
 * - `slug` 는 `/highlights/[slug]` 라우트 세그먼트에 그대로 대응됩니다.
 */

export type HighlightSection = {
  /** 섹션 헤딩. 예) "Context", "Approach" */
  heading: string;
  /** 문단(paragraph) 또는 불릿 리스트. 배열이면 <ul> 로 렌더됨 */
  body: string | string[];
};

export type HighlightLangContent = {
  title: string;
  /** 상단 메타 라인. 예) "2025 · 4주 · Bomulsen" */
  meta: string;
  /** 리드(요약) 문단. Hero 바로 아래에 한 문단으로 노출 */
  summary: string;
  sections: HighlightSection[];
};

export type Highlight = {
  slug: string;
  tags: string[];
  ko: HighlightLangContent;
  en: HighlightLangContent;
};

export const HIGHLIGHTS: Highlight[] = [
  // ─── 01. React Native 0.76 업그레이드 ─────────────────────────────────────
  {
    slug: "rn-upgrade",
    tags: ["Technical", "Problem Solving"],
    ko: {
      title: "React Native 0.76 업그레이드 트러블슈팅",
      meta: "2025 · 약 2개월 · Bomulsen (React Native · Hermes)",
      summary:
        "Google Play 의 새 16KB 정책에 맞추기 위해 React Native 를 0.70 에서 0.76 으로 업그레이드했습니다. 누적 회원 13.7만 규모 서비스를 사용자 영향 없이 단계적으로 롤아웃한 프로젝트입니다.",
      sections: [
        {
          heading: "배경",
          body: "2025년 하반기부터 Google Play 는 새로 올라오는 앱에 '16KB 페이지 정렬' 이라는 조건을 요구하기 시작했습니다. 정책을 통과하지 못하면 앱을 더 이상 업데이트할 수 없어 대응이 시급했어요. 보물선은 네이티브 라이브러리를 많이 쓰는 RN 0.70 기반이었고 누적 회원이 13.7만 규모였기 때문에, 정책 통과뿐 아니라 기존 사용자의 서비스 안정성까지 함께 지켜야 하는 상황이었습니다.",
        },
        {
          heading: "문제 정의",
          body: [
            "기존에 쓰던 서드파티 라이브러리 일부가 새 RN 버전과 맞지 않아 빌드 또는 실행 중에 에러가 났음",
            "RN 0.71부터 0.76까지 쌓여 있는 Gradle · Xcode 빌드 설정 변경을 한 번에 흡수해야 했음",
            "iOS 에서 팝업을 닫자마자 다음 팝업을 열면, 두 번째 팝업이 렌더되지 않는 타이밍 문제",
            "(추가 개선) 상단 상태바·하단 홈 인디케이터 영역까지 콘텐츠가 넘쳐 표시되던 기존 이슈를 함께 정리",
          ],
        },
        {
          heading: "접근",
          body: [
            "RN Upgrade Helper 도구로 0.70 → 0.76 구간을 작은 버전 단위로 쪼개, 파일별 변경 체크리스트를 만들어 순차 적용",
            "본 배포 전 스테이징 환경에서 로그인 · 결제 · 박스 오픈 같은 핵심 흐름을 회귀 테스트한 뒤 단계적으로 사용자에게 롤아웃",
            "상태바 영역 문제는 react-native-safe-area-context 의 useSafeAreaInsets 훅으로 상단/하단 여백 값을 받아, 모든 화면에 일관되게 적용해 해결",
            "iOS 팝업 문제는 이전 팝업의 onDismiss 콜백 안에서 다음 팝업을 열도록 순서를 바꿔, 타이밍 경합을 원천 차단",
          ],
        },
        {
          heading: "결과",
          body: [
            "Play Store 16KB ELF alignment 정책 통과 — 앱 정식 재업로드 성공",
            "크래시율이 기존과 동일하게 유지된 상태로 전체 사용자 롤아웃 완료",
          ],
        },
        {
          heading: "회고",
          body: "메이저 버전업은 코드 자체의 변경보다 Gradle · Xcode 같은 빌드 시스템의 변화에서 실제 공수가 훨씬 크다는 걸 몸으로 배웠습니다. 이후로는 팀 프로세스에 RN 코어 업데이트뿐 아니라 Android · iOS SDK 업데이트 사이클까지 분기마다 함께 챙기는 루틴을 넣었어요.",
        },
      ],
    },
    en: {
      title: "React Native 0.76 Upgrade Troubleshooting",
      meta: "2025 · ~2 months · Bomulsen (React Native · Hermes)",
      summary:
        "Led the RN 0.70 → 0.76 migration to comply with Google Play's 16KB alignment policy, rolling it out gradually to a 137K-member service with no impact on end users.",
      sections: [
        {
          heading: "Context",
          body: "In late 2025, Google Play started requiring 16KB page alignment for newly uploaded apps. Bomulsen was an RN 0.70 service with heavy native dependencies and ~137K registered members, so we had to satisfy the policy and preserve stability at the same time.",
        },
        {
          heading: "Problem",
          body: [
            "Third-party library compatibility — handling libraries that broke at build or runtime under the new RN version",
            "Absorb accumulated Gradle / Xcode build config changes between 0.71 and 0.76",
            "On iOS, opening a second Modal immediately after the previous one closed caused the second popup to fail to render (stacking timing race)",
            "(Adjacent fix) Cleaned up a pre-existing layout issue where content overflowed into the status bar and home indicator areas",
          ],
        },
        {
          heading: "Approach",
          body: [
            "Broke the 0.70 → 0.76 jump into step-wise diffs using RN Upgrade Helper and a per-file checklist",
            "Ran critical user-flow regression tests (login · payment · box open) on staging, then rolled out in phases",
            "Safe-area regression — adopted `react-native-safe-area-context`'s `useSafeAreaInsets` consistently across every root screen, using the top/bottom inset values to eliminate status-bar and home-indicator overlap",
            "iOS chained-popup bug — orchestrated consecutive Modals by opening the next one inside the previous one's `onDismiss` callback, resolving the stacking timing race",
          ],
        },
        {
          heading: "Result",
          body: [
            "Passed the Play Store 16KB ELF alignment policy · successful production upload",
            "Rolled out to 100% of users with no increase in crash rate",
          ],
        },
        {
          heading: "Takeaway",
          body: "Major upgrades cost far more at the build-system layer than at the source-diff layer. After this, we added quarterly tracking of Android / iOS SDK update cycles — not just the RN core — into our team process.",
        },
      ],
    },
  },

  // ─── 02. 팀 프로세스 & 자동화 (컨벤션 수립 + AI 워크플로우 통합) ─────────────
  {
    slug: "team-process-automation",
    tags: ["Leadership", "Process", "AI"],
    ko: {
      title: "팀 프로세스 & 자동화",
      meta: "2023 – 2026 · 지속 개선 · 팀 규모 3명",
      summary:
        "팀에 Atomic Design 과 코드 리뷰 프로세스를 정착시키고, Claude Code 기반 AI 페어 프로그래밍을 워크플로우에 통합했습니다. 컨벤션 준수 · 셀프 리뷰 · 린트 · 타입 체크를 사람과 에이전트가 함께 자동으로 처리하는 구조를 만들었어요.",
      sections: [
        {
          heading: "배경",
          body: "팀이 빠르게 성장하는 동안 신규 입사자 온보딩과 레거시 유지보수가 동시에 진행되다 보니 코드 스타일의 일관성이 조금씩 무너지기 시작했어요. 얼마 뒤에는 Next.js 16 이라는 비교적 새로운 스택으로 신규 프로젝트를 시작하게 되면서 컨벤션을 빠르게 안착시켜야 했습니다. '사람이 직접 봐야 할 것' 과 '자동화에 맡겨도 되는 것' 을 또렷하게 나누는 것이 목표였어요.",
        },
        {
          heading: "문제 정의",
          body: [
            "컴포넌트를 어떻게 나눌지 기준이 개발자마다 달라서 재사용성이 떨어짐",
            "스타일 · 상태 관리 · 폴더 구조의 일관성이 부족했음",
            "코드 리뷰가 '의미 있는 논의' 보다 '형식 지적' 에 치우침",
            "컨벤션 문서가 있어도 새 파일을 만들 때 실제로는 잘 지켜지지 않음",
            "린트와 타입 체크를 빌드 전에 매번 수동으로 돌리고 있었음",
            "신규 입사자의 초기 1~2주 생산성이 눈에 띄게 낮았음",
          ],
        },
        {
          heading: "접근 · 사람 레이어",
          body: [
            "팀원과 함께 논의해 Atomic Design 5계층 구조(Atoms / Molecules / Organisms / Templates / Pages) 를 도입하고 분리 기준을 문서로 정리",
            "ESLint · Prettier · simple-import-sort · tailwindcss plugin 을 표준으로 묶어, 포맷 논쟁은 린터에 맡김",
            "Storybook 환경을 셋업해 Atom · Molecule 단위 컴포넌트의 격리 개발 기반을 마련 (현재 신규 프로젝트에서 본격 활용 준비 중)",
            "PR 템플릿에 접근성 · 반응형 · 성능 체크리스트를 넣어 작성자와 리뷰어가 같은 기준으로 보도록 함",
            "격주로 코드 리뷰 회고를 돌려 규칙 자체를 팀이 함께 다듬는 구조 마련",
          ],
        },
        {
          heading: "접근 · 자동화 레이어",
          body: [
            "CLAUDE.md 한 파일에 기술 스택 · 패키지 구조 · 네이밍 · 커밋 컨벤션 · 워크플로우 4단계를 담아, 에이전트가 항상 같은 맥락으로 작동하도록 구성",
            ".claude/commands/ 에 /review (리뷰 기준 자동 적용), /lint-check (ESLint + tsc 일괄 실행) 같은 커스텀 커맨드 정의",
            ".claude/templates/ 에 Component · Hook · Screen · ViewModel · RouteHandler 5종 템플릿 관리 — 새 파일이 자동으로 컨벤션을 따르게",
            "표준 워크플로우: 코드 작성 → /review → /lint-check → 중요 변경 시 빌드 검증",
            "문서나 정적 파일만 바꾸는 경우처럼 자동화가 과도하게 개입하면 안 되는 예외는 문서에 명시해 가드레일 설정",
          ],
        },
        {
          heading: "결과",
          body: [
            "리뷰 사이클이 체감상 빨라짐 — 팀 안에서 '같은 기준' 으로 본다는 합의가 생김",
            "리뷰 단계에서 '스타일 지적' 이 줄어 본질적인 설계 논의에 시간을 쓸 수 있게 됨",
            "린트 에러로 인한 빌드 실패를 사전에 차단",
          ],
        },
        {
          heading: "회고",
          body: "컨벤션은 '문서' 만으로는 유지되지 않고, 사람의 합의 · 자동화 · 팀 문화 세 축이 함께 돌아갈 때만 살아남는다는 걸 배웠습니다. 린터로 막을 수 있는 건 린터에, 에이전트가 강제할 수 있는 건 에이전트에, 사람이 꼭 판단해야 할 것만 리뷰에 남기는 구조가 장기적으로 지속 가능했어요. 에이전트를 '더 빠른 개발자' 가 아니라 '컨벤션을 자동으로 지켜주는 장치' 로 쓰는 쪽이 실질 ROI 가 훨씬 높았습니다.",
        },
      ],
    },
    en: {
      title: "Team Process & Automation",
      meta: "2023 – 2026 · Continuous improvement · Team of 3",
      summary:
        "Formalized Atomic Design and code review processes, and integrated Claude Code-based AI pair programming into the team workflow — so conventions, self-reviews, and lint / type checks run automatically by human + agent together.",
      sections: [
        {
          heading: "Context",
          body: "During a period of fast growth, onboarding new engineers and maintaining legacy code happened in parallel, and code style started drifting. Later, entering a new Next.js 16 project required landing conventions quickly on a relatively new stack. The goal was to clearly separate 'what a human must review' from 'what automation can handle'.",
        },
        {
          heading: "Problem",
          body: [
            "Component boundaries differed per developer, hurting reusability",
            "Inconsistent styling / state management / folder structure",
            "Code reviews focused on 'form' rather than 'intent'",
            "Even with written conventions, new files didn't consistently follow them",
            "Lint and type checks were run manually over and over before builds",
            "New hires were ~1–2 weeks less productive during onboarding",
          ],
        },
        {
          heading: "Approach · Human layer",
          body: [
            "Co-decided with the team to adopt a 5-layer Atomic Design structure (Atoms / Molecules / Organisms / Templates / Pages) and documented the boundaries",
            "Standardized ESLint · Prettier · simple-import-sort · tailwindcss plugin to delegate formatting debates to the linter",
            "Set up Storybook to enable isolated Atom / Molecule development (foundation in place; full adoption underway in the current Next.js project)",
            "Added accessibility / responsive / performance checklists to the PR template so reviewer and author share the same bar",
            "Held biweekly review retros to let the team iterate on the rules themselves",
          ],
        },
        {
          heading: "Approach · Automation layer",
          body: [
            "Consolidated tech stack · package structure · naming · commit conventions · the 4-step workflow into CLAUDE.md — so the agent always operates with the same context",
            "Defined custom commands under .claude/commands/ — `/review` (apply review criteria) and `/lint-check` (run ESLint + tsc together)",
            "Maintained 5 code-generation templates (Component · Hook · Screen · ViewModel · RouteHandler) under .claude/templates/ so new files follow conventions by default",
            "Formalized the workflow: write code → /review → /lint-check → build verification (for significant changes)",
            "Documented exceptions (docs-only changes, minor style tweaks, static assets) so the agent doesn't over-intervene — guardrails, not shackles",
          ],
        },
        {
          heading: "Result",
          body: [
            "Review cycles felt faster — the team reached a shared sense of 'we're judging by the same bar'",
            "Fewer style / structure nits in review — more room for real design discussion",
            "Lint errors caught before they broke the build",
          ],
        },
        {
          heading: "Takeaway",
          body: "Conventions survive only when 'team agreement + automation + team culture' all work together. Let the linter enforce what it can, let the agent enforce what it can, and leave reviews for decisions that truly need human judgment — that's the sustainable shape. Using the agent as 'a tool that automatically enforces team conventions' delivered better ROI than using it as 'a faster developer'.",
        },
      ],
    },
  },

  // ─── 03. 보물함 화면 — 복합 상태 리스트 설계 (Bomulsen) ─────────────────────
  {
    slug: "bomulsen-treasure-box",
    tags: ["Technical", "State Machine", "UX"],
    ko: {
      title: "보물함 화면 — 복합 상태 리스트 설계",
      meta: "2024 · Bomulsen (React Native · FlatList)",
      summary:
        "탭 · 검색 · 필터 · 정렬 · 잠금 토글이 동시에 돌아가는 한 화면 안에서, 11종 상태코드 × 2종 타입코드 × 잠금 여부가 교차하는 버튼 상태와 6종 모달을 하나의 일관된 패턴으로 정리한 프로젝트입니다.",
      sections: [
        {
          heading: "배경",
          body: "보물선은 사용자가 랜덤박스에서 얻은 보물을 보관 · 배송 요청 · 거래소 출품 · 분해 · 판매중단 상품 포인트 환급까지 처리하는 서비스입니다. 이 모든 과정이 '내 보물함' 이라는 한 화면에 모이다 보니, 상태코드(00·01·02·03·40·41·43·45·70·-100·-200) × 타입코드(일반 / 쿠칩 기프티콘) × 잠금 여부가 복잡하게 교차하는 UI를 설계해야 했습니다.",
        },
        {
          heading: "문제 정의",
          body: [
            "6개 탭 · 4종 정렬 · 검색어 · 카테고리 필터 · 잠금 토글이 동시에 작동하는 와중에도 무한스크롤 페이지네이션이 깨지면 안 됨",
            "배송 · 거래 · 분해 · 환급 4개 액션의 활성 여부 · 버튼 문구 · 이동 경로가 아이템 상태마다 다름",
            "6종 모달(이미지 알림 · 확인 · 단순 알림 · 환급 완료 · 필터 · 일반 알림)이 한 화면에서 서로 간섭 없이 동작해야 함",
            "쿠칩 기프티콘 발송 제한, 판매중단 상품 포인트 환급 등 서버 쪽 도메인 규칙이 UI 에서 즉시 반영돼야 함",
            "아이템이 수백 개가 쌓여도 스크롤이 부드럽게 유지되어야 함",
            "푸시나 알림센터에서 딥링크로 들어오면 자동으로 배송 상세 페이지로 이동시켜야 함",
          ],
        },
        {
          heading: "접근",
          body: [
            "탭 · 검색 · 필터 · 정렬 · 잠금 값을 한 개의 fetch 쿼리 파라미터로 모으고, 리스트 상태 리셋은 listResetAction 한 곳에서만 일어나도록 정리 — '지금 리스트가 어떤 조건으로 그려지는지' 를 코드 한 지점에서 읽을 수 있게 함",
            "state_code × type_code × lock_yn 조합에 따라 배송 / 거래 / 분해 등 액션 버튼의 활성 여부 · 문구 · 이동 경로를 한 화면에서 일관되게 분기 처리",
            "6종 모달을 공통 goEvent 콜백 패턴으로 묶어, 거래 취소 · 포인트 환급처럼 되돌릴 수 없는 액션도 '확인 → 실행 → 피드백 → 리스트 리셋' 순서로 동일하게 흐르게 함",
            "쿠칩 발송 전 서버 제한 API 를 먼저 호출하고, 판매중단 기프티콘은 1,000원 단위 올림 포인트로 환급하는 등 도메인 규칙을 UI 레이어에서 안전하게 처리",
            "useCallback(renderItem) · React.memo(LockBtn) · FastImage · 페이지 끝에서 fetch 중단 가드 · pull-to-refresh 를 조합해 수백 개 아이템에서도 스크롤 성능 유지",
            "푸시와 알림센터 진입은 route.params 기반 자동 내비게이션으로 처리하고, 안드로이드 물리 뒤로가기 버튼은 useFocusEffect + BackHandler 로 가로채 홈으로 리셋",
          ],
        },
        {
          heading: "결과",
          body: [
            "한 화면에서 보물의 전체 생애주기(보관 → 배송 → 거래 → 분해 → 환급) 를 모두 관리할 수 있게 됨",
            "상태별 버튼·모달 분기 로직을 한 화면 안에 모아둔 덕분에 새 상태코드가 추가돼도 고쳐야 할 지점이 최소화",
            "모달 오케스트레이션과 리스트 파라미터 수렴 패턴을 거래소 · 구매 내역 같은 다른 복합 리스트 화면에 그대로 재사용",
            "거래 취소나 포인트 환급처럼 되돌릴 수 없는 액션에서 '확인 모달 누락' 같은 사용자 실수 경로를 원천 차단",
          ],
        },
        {
          heading: "회고",
          body: "상태가 많은 UI 는 화면을 그리기 전에 '데이터 흐름과 버튼 활성화 조건' 을 먼저 정리해두는 편이 디버깅 비용을 크게 줄여준다는 걸 배웠습니다. 특히 '이 버튼이 어떤 조건에서 활성화되는가' 를 한곳에 모으니 QA 사이클도 눈에 띄게 짧아졌고, 이후 거래소나 구매 내역처럼 상태가 많은 화면을 만들 때 그대로 가져다 쓸 수 있는 템플릿이 되어주었습니다.",
        },
      ],
    },
    en: {
      title: "Treasure Box Screen — Complex State List Design",
      meta: "2024 · Bomulsen (React Native · FlatList)",
      summary:
        "On a single screen where tab, search, filter, sort, and a lock toggle all operate at once, I unified the per-button enable / label / navigation rules across 11 state codes × 2 type codes × lock-flag combinations — and corralled six different modals into a single pattern.",
      sections: [
        {
          heading: "Context",
          body: "Bomulsen lets users store, ship, list, dismantle, and point-refund treasures obtained from random boxes. The entire lifecycle lives on one screen — 'My Treasure Box' — so the UI has to cross state codes (00·01·02·03·40·41·43·45·70·-100·-200) × type codes (regular / gift voucher) × the lock flag.",
        },
        {
          heading: "Problem",
          body: [
            "6 tabs × 4 sort options × search × category filter × lock toggle all had to coexist without breaking pagination",
            "Four actions (Ship, Trade, Dismantle, Refund) each had different enabled/disabled/label/navigation behaviour per item state",
            "Six distinct modals (image alert, confirm, simple alert, refund-complete, filter, info) had to operate on one screen without interfering",
            "Server-side domain rules — gift-voucher send limits, point refunds for discontinued products — had to surface directly in the UI",
            "Infinite scroll over hundreds of items required careful re-render and scroll-performance tuning",
            "Push / notification-center entry had to deep-link straight into the correct delivery-detail page",
          ],
        },
        {
          heading: "Approach",
          body: [
            "Collapsed tab × search × filter × sort × lock into a single fetch-query parameter, funnelling every state reset through one listResetAction — so 'what conditions the list is currently rendered with' can be read in one place",
            "Branched the Ship / Trade / Dismantle action buttons by state_code × type_code × lock_yn — enabled state, label, and navigation target are all decided from item data on the same screen",
            "Unified all six modals behind a shared goEvent callback pattern — even irreversible actions like trade-cancel and point refund follow the same 'confirm → execute → feedback → list reset' flow",
            "Called the server limit endpoint (couchipSendPriceLimitCheck) before sending vouchers and rounded discontinued-product point refunds up to the nearest 1,000-won — keeping domain rules safe inside the UI layer",
            "Combined useCallback(renderItem) · React.memo(LockBtn) · FastImage · an end-of-list stop-fetching guard · pull-to-refresh to keep scrolling smooth on large item sets",
            "Handled push / notification-center entry via route.params.params auto-navigation, and intercepted the Android hardware back button with useFocusEffect + BackHandler to reset to home",
          ],
        },
        {
          heading: "Result",
          body: [
            "One screen covers the full treasure lifecycle — store → ship → trade → dismantle → refund",
            "Keeping the per-state button and modal branching in one place minimised the number of change sites when new state codes were added",
            "The modal-orchestration and list-parameter-funnelling patterns were reused on other complex list screens (marketplace, purchase history)",
            "Removed 'missing confirm modal' classes of user-error paths for irreversible actions like trade-cancel and point refund",
          ],
        },
        {
          heading: "Takeaway",
          body: "For state-heavy UIs, mapping out the data flow and the button enable / label rules first — before drawing the UI — dramatically cut debugging overhead. Pulling 'when is this button active?' into one source shortened QA cycles, and the pattern became a reusable template for subsequent state-rich screens.",
        },
      ],
    },
  },

  // ─── 04. 디자인-엔지니어링 크로스 스킬 (NEW) ───────────────────────────────
  {
    slug: "design-engineering-crosskill",
    tags: ["Design", "Frontend", "Collaboration"],
    ko: {
      title: "디자인-엔지니어링 크로스 스킬",
      meta: "2012 – 현재 · 시각디자인 전공 → 편집 디자이너 6년 → 프론트엔드 리드",
      summary:
        "시각디자인 전공 후 편집 디자이너로 약 6년간 현장 경험을 쌓은 뒤, 웹디자인기능사 · SQL 개발자 · 정보처리기사 · 컴퓨터공학 학사까지 의도적으로 엔지니어링 전환 경로를 밟았습니다. 지금은 시안 리뷰 · 디자인 시스템 · 관리자 페이지 1인 UI/UX 담당까지 수행하는 프론트엔드 개발자로 일하고 있어요.",
      sections: [
        {
          heading: "배경",
          body: "2014년 충청대학 시각디자인 전공을 졸업한 뒤 2014.09 부터 2020.05 까지 약 6년간 편집 디자이너로 현장 경험을 쌓았습니다. 이 시기에 웹 퍼블리싱 쪽으로 접점이 옮겨지면서 '디자인을 직접 구현하는 쪽' 의 언어가 더 잘 맞는다고 느꼈어요. 그 뒤로 웹디자인기능사(2020) → SQL 개발자(2023) → 정보처리기사(2024) → 학점은행제 컴퓨터공학 학사(2024) 순으로, 취미 전환이 아니라 정식 자격과 학위로 프론트엔드 엔지니어 정체성을 증명하는 경로를 택했습니다.",
        },
        {
          heading: "접근",
          body: [
            "이벤트·신기능 리뷰 회의에 개발팀 프론트 대표로 참석해 구현 가능 여부와 일정 조율을 맡으며, 시안 단계에서 인터랙션 · 상태 변화 · 엣지 케이스까지 같이 정의",
            "디자인 시스템과 컴포넌트 분리 기준에 디자인 단계부터 의견을 보태, 시안이 곧바로 구현 단위(작은 → 큰 컴포넌트) 로 떨어지도록 정리",
            "GOPANG (인도네시아향 React 웹앱) — 사용자·관리자 화면 모두 1인 구현, 관리자 페이지는 UI/UX 디자인까지 자체 담당",
            "타이포그래피 · 여백 · 컬러 팔레트 기준을 Tailwind 클래스 · CSS 변수로 코드 레벨에서 바로 적용",
            "[공식 자격 · 학위]  정보처리기사(2024.12) · SQL 개발자 SQLD(2023.10) · 웹디자인기능사(2020.12) · 컴퓨터공학 학사(학점은행제, 2023.08 – 2024.10, 4.13 / 4.5)",
          ],
        },
        {
          heading: "결과",
          body: [
            "디자인 리뷰와 개발 리뷰가 분리되지 않고, 한 자리에서 함께 이뤄지는 협업 루프가 정착됨",
            "관리자 페이지 같은 '디자이너 리소스가 부족한 영역' 을 내부에서 직접 소화 — 전체 일정 단축",
            "기획·디자인 회의에서 '구현 가능한 안' 을 같이 제안할 수 있어, 뒤늦게 시안을 갈아엎는 경우가 줄어드는 흐름",
            "시각 디자인 감각 + CS 기초 자격을 함께 갖춰, 디자인 쪽이든 엔지니어링 쪽이든 어느 조직에 배치돼도 컨텍스트 스위치 비용이 낮음",
          ],
        },
        {
          heading: "회고",
          body: "'디자인도 할 줄 아는 프론트엔드' 라는 포지션은 자칫 구현 깊이를 희생하는 것처럼 읽히기 쉬워서, 정반대 방향 — 정식 자격과 학위로 엔지니어링 정체성을 먼저 명확히 세우는 쪽 — 을 선택했습니다. 지금은 디자인 감각을 그대로 가지고 있으되, 그것이 엔지니어링 품질을 대체하는 게 아니라 강화하는 조합으로 스스로를 포지셔닝하고 있어요.",
        },
      ],
    },
    en: {
      title: "Design–Engineering Cross-Skill",
      meta: "2012 – present · Design major → 6 years as editorial designer → frontend lead",
      summary:
        "After studying Visual Communication Design, I worked as an editorial designer for ~6 years before taking an intentional path into engineering — Craftsman Web Design, SQL Developer, Engineer Information Processing, and a Bachelor in Computer Science. Today I work as a frontend engineer who also co-owns design systems and runs solo UI/UX ownership for admin surfaces.",
      sections: [
        {
          heading: "Context",
          body: "I graduated in Visual Communication Design from Chungcheong University in 2014 and spent ~6 years in editorial design practice (Sep 2014 – May 2020). During that time, as I moved closer to web publishing, I realized I fit better on the 'implementation' side of the design/dev seam. From there I took a formal route — Craftsman Web Design (2020) → SQL Developer (2023) → Engineer Information Processing (2024) → a BEng in Computer Science through Korea's Academic Credit Bank System (2024) — not as a hobby switch, but to formally certify a frontend engineer identity.",
        },
        {
          heading: "Approach",
          body: [
            "Attend event / new-feature review meetings as the frontend team's representative — own feasibility judgment and schedule alignment, and pull interactions, state transitions, and edge cases into the design conversation early",
            "Contribute to design systems and component boundaries from the design phase — so mocks land cleanly into implementation-ready units (smaller → larger components)",
            "GOPANG (Indonesian React web app) — built both user-facing and admin screens solo, and additionally owned the UI/UX design for the admin dashboard",
            "Typography, spacing, and palette judgments translate directly into Tailwind classes and CSS variables at the code level",
            "[Formal credentials]  Engineer Information Processing (Dec 2024) · SQLD (Oct 2023) · Craftsman Web Design (Dec 2020) · B.Eng. in Computer Science (Aug 2023 – Oct 2024, ACBS, GPA 4.13 / 4.5)",
          ],
        },
        {
          heading: "Result",
          body: [
            "Design review and engineering review happen in the same conversation rather than as separate passes",
            "'Design-resource-limited' surfaces like admin dashboards are absorbed in-house, shortening total timelines",
            "Earlier feasibility feedback at the idea stage helped avoid late-stage redesigns",
            "I fit either into a design-leaning team or an engineering-leaning team with low context-switch cost",
          ],
        },
        {
          heading: "Takeaway",
          body: "A 'designer who can code' positioning often sacrifices engineering depth. I chose the opposite — formal credentials and a BEng to cement the engineering identity first. Design sensibility doesn't replace engineering quality; it reinforces it.",
        },
      ],
    },
  },

  // ─── 05. 이벤트 WebView 인터랙티브 게임 ─────────────────────────────────────
  {
    slug: "event-webview-games",
    tags: ["Frontend", "Interaction", "WebView"],
    ko: {
      title: "월간 이벤트 — CSS 3D · 인터랙티브 게임",
      meta: "2023 – 2025 · Bomulsen 월간 이벤트 · EJS · jQuery · CSS 3D",
      summary:
        "앱 스토어 검수를 우회하기 위해 백엔드 저장소에 EJS 로 분리한 월간 이벤트 페이지에서, 순수 CSS 3D transform 과 jQuery 기반 게임 로직으로 다이스 보드 · RPS 토너먼트 · 슬롯 머신 등 인터랙티브 게임을 라이브러리 의존 없이 직접 구현했습니다.",
      sections: [
        {
          heading: "배경",
          body: "보물선은 React Native 기반 모바일 앱이라, 매월 바뀌는 마케팅 이벤트를 앱 안에 포함시키면 매번 앱 스토어 검수 사이클(평균 1~2일 + 거절 가능성)을 거쳐야 했습니다. 이를 우회하기 위해 사내에는 이벤트 페이지를 백엔드 저장소(EJS 템플릿)로 두고 앱이 WebView 로 띄우는 구조가 이미 갖춰져 있었고, 저는 그 구조 위에서 매월 새 이벤트 페이지를 직접 작성했습니다. 단순 정적 페이지가 아니라 다이스 보드, RPS 토너먼트, 슬롯 머신 등 사용자 참여형 인터랙티브 게임이 매월 다른 디자인으로 들어갔습니다.",
        },
        {
          heading: "문제 정의",
          body: [
            "three.js · P5.js 같은 외부 게임 라이브러리를 쓰면 번들이 커져서 WebView 초기 로딩이 느려짐",
            "iOS · Android, 노치 · 홈 인디케이터, 다양한 종횡비(세로 · 가로 · 태블릿 · 폴더블) 어디에서도 레이아웃이 깨지지 않아야 했음",
            "게임 단계별로 결과를 앱에 알려서, 사운드 · 햅틱 · 모달 닫기 같은 네이티브 기능을 트리거해야 함",
            "카운트다운과 여러 단계의 결과 공개 같은 시간 기반 게임 흐름을 한 곳에서 일관되게 관리해야 함",
            "매달 게임 종류가 달라져도 공통 패턴(EJS 변수 주입 · RN 통신 · 반응형 · 닫기 버튼) 은 재사용할 수 있어야 함",
          ],
        },
        {
          heading: "접근",
          body: [
            "순수 CSS 3D 트랜스폼 — transform-style: preserve-3d 와 rotateX/Y/Z · translateZ 만으로 정육면체 다이스, 원통형 슬롯 머신, 보드 셀 토글을 라이브러리 없이 구현. 슬롯 머신은 CodePen 의 원통 회전 패턴을 참고해 프로젝트 환경에 맞춰 다듬어 적용",
            "min(Nvw, Nvh) 패턴을 써서 가로/세로 중 짧은 쪽에 맞춰 사이징 — 어떤 종횡비에서도 화면을 벗어나거나 잘리지 않도록 이중 제약",
            "env(safe-area-inset-top/bottom) 와 @supports not (constant(...)) fallback 을 함께 써서 iOS 노치와 Android 홈 인디케이터를 양쪽 모두 대응",
            "window.ReactNativeWebView.postMessage 로 게임 단계별 이벤트(webMessage: gold_choice/confirm/result, rspEnd: win/lose 등) 를 앱에 전달 → 앱은 받은 메시지로 사운드 · 햅틱 · 모달 닫기를 트리거",
            "setInterval 카운트다운 + 음수 시간 분기로 '5초 선택 → 3초 선장 확정 → 3초 결과 공개 → 결과 팝업' 단계를 한 함수에서 오케스트레이션",
            "게임 시작 시점에 티켓 소진 API 를 먼저 호출해 서버 상태를 선점하고, 이후 결과 처리가 실패하면 안전하게 롤백되도록 흐름을 설계",
            "게임마다 EJS 파일을 따로 두되 공통 패턴(EJS 변수 주입 · RN 통신 · 닫기 버튼 · 반응형 base) 은 표준화 — 디자이너가 새 자산만 교체해도 게임 페이지를 빠르게 찍어낼 수 있음",
          ],
        },
        {
          heading: "결과",
          body: [
            "매월 이벤트 페이지를 앱 스토어 검수 없이 백엔드 배포만으로 즉시 출시할 수 있게 됨",
            "다이스 보드 게임 · RPS 토너먼트(Gold/Silver 두 모드, 주간 랭킹 포함) · 슬롯 머신 등 인터랙티브 게임 10종 이상을 누적 운영",
            "외부 게임 라이브러리 의존성이 0 이라 WebView 초기 로딩이 빠르고 번들 크기도 작음",
            "공통 패턴이 표준화되어 있어 디자이너가 시안과 자산만 전달해도 새 게임 페이지를 빠르게 만들 수 있음",
          ],
        },
        {
          heading: "회고",
          body: "'앱 스토어 검수 사이클 vs 운영 속도' 라는 모바일 앱의 구조적 제약을, 사내에 이미 마련된 백엔드 분리 + WebView + 양방향 메시지 구조 위에서 풀어본 경험이었습니다. 단순 정적 페이지가 아닌 인터랙티브 게임을 라이브러리 없이 직접 구현한 덕분에 디자인 자유도와 성능을 동시에 잡을 수 있었고, 모바일과 웹 경계의 협업 흐름 위에서 일해본 경험은 이후 어떤 프레임워크를 쓰더라도 그대로 응용할 수 있는 자산이 되었습니다.",
        },
      ],
    },
    en: {
      title: "Monthly Event — CSS 3D · Interactive Games",
      meta: "2023 – 2025 · Bomulsen monthly events · EJS · jQuery · CSS 3D",
      summary:
        "On monthly event pages separated into the backend repo as EJS templates (to bypass app-store review cycles), built interactive games — dice board, RPS tournament, slot machine — from scratch with pure CSS 3D transforms and jQuery, no game library required.",
      sections: [
        {
          heading: "Context",
          body: "Bomulsen is an RN-based mobile app, so every monthly marketing event embedded in the app would trigger an app-store review cycle (~1–2 days + possible rejection). To work around that, the in-house setup already kept event pages in the backend repo as EJS templates loaded via in-app WebView — and I wrote each new monthly event page on top of that setup. These weren't simple static pages: every month brought a different interactive game (dice board, RPS tournament, slot machine, etc.).",
        },
        {
          heading: "Problem",
          body: [
            "Adopting external game libraries (three.js, P5.js, etc.) would inflate the bundle and slow WebView initial load",
            "The layout had to survive iOS / Android, notches / home indicators, and varied aspect ratios (portrait, landscape, tablet, foldable)",
            "Stage-by-stage game outcomes had to reach the app so native effects (sound, haptics, modal close) could fire",
            "Time-based game flow (countdowns, staged result reveals) needed consistent orchestration in one place",
            "Games differed month to month, but common patterns (EJS variable injection, RN messaging, responsive base, close button) had to be reusable",
          ],
        },
        {
          heading: "Approach",
          body: [
            "Pure CSS 3D transforms — `transform-style: preserve-3d` + `rotateX/Y/Z` + `translateZ` to build the dice cube and toggling board cells; the cylindrical slot reel was adapted from a CodePen reference and tuned to the project context, all without a game library",
            "Responsive double-constraint — `min(Nvw, Nvh)` sizes to whichever axis is shorter so layouts never overflow regardless of aspect ratio",
            "Safe-area handling — `env(safe-area-inset-top/bottom)` with `@supports not (constant(...))` fallback covers iOS notches and Android home indicators",
            "Bidirectional RN messaging — `window.ReactNativeWebView.postMessage(JSON.stringify({...}))` dispatches staged events (`webMessage: gold_choice/confirm/result`, `rspEnd: win/lose`) to the app, which triggers sound, haptics, and modal close",
            "Time-driven state machine — setInterval countdown with negative-time branches orchestrates '5s pick → 3s lock-in → 3s reveal → result popup' in one place",
            "Ticket pre-deduction + rollback — call the ticket API on game start to reserve server state, then converge safely via the result flow",
            "Each game ships as its own EJS file, while common patterns (EJS variable injection, RN messaging, close button, responsive base) are standardized — so a new game ships fast just by swapping designer assets",
          ],
        },
        {
          heading: "Result",
          body: [
            "Each monthly event page ships through a backend deploy alone, with no app-store review",
            "Operated 10+ interactive games — dice board, RPS tournament (Gold / Silver modes with weekly ranking), slot machine, and more",
            "Zero external game-library dependency → fast WebView initial load and small bundle",
            "Standardized patterns let new game pages ship quickly from designer assets alone",
          ],
        },
        {
          heading: "Takeaway",
          body: "Working within the in-house architecture (backend EJS templates + WebView + bidirectional messaging) that already addresses the 'app-store review cycle vs. ops velocity' tension, I built interactive games from scratch — rather than pulling in a game library — preserving both design freedom and performance. The experience of operating across the mobile/web collaboration boundary became a transferable asset that holds up under any framework.",
        },
      ],
    },
  },
];

export const HIGHLIGHT_SLUGS = HIGHLIGHTS.map((h) => h.slug);

export function findHighlight(slug: string): Highlight | undefined {
  return HIGHLIGHTS.find((h) => h.slug === slug);
}

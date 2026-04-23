import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Instrument_Serif,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Instrument Serif — 모던 디스플레이 serif (2023+ 트렌드).
 * 인트로 히어로의 커리어 경로처럼 "엘레강트 액센트" 용도로만 사용.
 * 본문은 Geist sans 유지.
 */
const instrumentSerif = Instrument_Serif({
  variable: "--font-serif-display",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

/**
 * 사이트 공통 메타데이터.
 * - title / description 은 검색 · OG · Twitter 카드 에서 공통 사용됩니다.
 * - `metadataBase` 는 OG/Twitter 이미지 경로를 절대 URL 로 풀 때 쓰입니다.
 *   GitHub Pages 배포 URL 에 맞춰 설정.
 * - 파비콘/OG 이미지는 `app/icon.*` · `app/opengraph-image.*` 규약 파일로
 *   자동 인식되므로 여기서 별도 설정할 필요 없음.
 */
const SITE_TITLE = "허정은 — Frontend Developer Portfolio";
const SITE_DESC =
  "디자이너 출신 프론트엔드 리더. 감각과 구현력을 함께 만들어내는 프론트엔드 — 허정은의 포트폴리오.";

export const metadata: Metadata = {
  metadataBase: new URL("https://jeheo.github.io/PORTFOLIO_2026"),
  title: SITE_TITLE,
  description: SITE_DESC,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESC,
    type: "website",
    locale: "ko_KR",
    siteName: "허정은 Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
  },
};

/**
 * FOUC 방지 스크립트.
 *
 * - hydration 전에 localStorage / prefers-color-scheme 을 동기적으로 읽어
 *   `<html>` 에 `.dark` 클래스와 `lang` 속성을 먼저 반영합니다.
 * - 클라이언트 uiStore 와 동일한 키(`theme`, `lang`) 를 사용하므로
 *   hydration 이후 값이 튀지 않습니다.
 */
const UI_INIT_SCRIPT = `
(function () {
  try {
    var ls = window.localStorage;
    var theme = ls.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var isDark = theme === 'dark' || (!theme && prefersDark);
    if (isDark) document.documentElement.classList.add('dark');
    var lang = ls.getItem('lang');
    document.documentElement.lang = lang === 'en' ? 'en' : 'ko';
  } catch (_) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: UI_INIT_SCRIPT }} />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}

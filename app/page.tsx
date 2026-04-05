import React from "react";
import { GitHubCalendar } from "react-github-calendar";

// --- Types & Constants ---
const DATA = {
  profile: {
    title: "근성 있는 디자인 전공\n프론트엔드 리더",
    name: "허정은",
    email: "heo940122@gmail.com",
    role: "Frontend Developer",
  },
  experience: [
    {
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
            "회원 수 7,700% 성장(약 13.7만 명) 전 과정 프론트엔드 관리",
            "이벤트/프로모션 페이지를 React로 전환하여 동적 인터랙션 및 재사용성 강화",
            "Google Play 16kb 정책 대응을 위한 RN 버전업(v0.70 → v0.76) 및 OS 환경 대응",
            "관리자 페이지 개발 및 유지보수",
          ],
        },
        {
          title: "GOPANG — 신규 제작",
          tag: "메인 담당자",
          sub: "인도네시아향 랜덤박스 플랫폼",
          details: [
            "현지화에 최적화된 UI/UX 퍼블리싱 및 성능 안정화",
            "고팡 관리자 페이지 UI/UX 디자인 1인 전담",
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
          ],
        },
      ],
    },
  ],
  skills: [
    { name: "React", color: "#61DAFB" },
    { name: "React Native", color: "#61DAFB" },
    { name: "Next.js", color: "current" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "Tailwind CSS", color: "#06B6D4" },
    { name: "Figma", color: "#F24E1E" },
    { name: "Storybook", color: "#FF4785" },
  ],
  githubUsername: "JEHEO", // 본인의 GitHub ID로 변경하세요
  highlights: [
    {
      title: "React Native 0.76 업그레이드 트러블슈팅",
      description:
        "Google Play 16kb 정책 대응을 위한 신규 아키텍처 도입 및 라이브러리 호환성 해결 과정을 기록했습니다.",
      link: "https://github.com/JEHEO/store5000/issues/1", // 실제 이슈나 블로그 링크
      tags: ["Technical", "Problem Solving"],
    },
    {
      title: "프론트엔드 팀 컨벤션 수립",
      description:
        "실질적 파트 리더로서 코드 리뷰 프로세스와 Atomic Design 도입을 통해 협업 효율을 30% 개선했습니다.",
      link: "#",
      tags: ["Leadership", "Process"],
    },
  ],
};

// --- Sub Components ---

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-8 text-xs font-semibold tracking-widest text-zinc-400 uppercase">
    {children}
  </h2>
);

const SkillBadge = ({ name, color }: { name: string; color: string }) => {
  const isCustomColor = color !== "current";
  return (
    <div
      className={`flex items-center gap-2 rounded-lg px-3 py-2 ${isCustomColor ? "" : "bg-zinc-100 dark:bg-zinc-800"}`}
      style={isCustomColor ? { backgroundColor: `${color}1A` } : {}}
    >
      <img
        src={`https://cdn.simpleicons.org/${name.toLowerCase().replace(".", "dot").replace(" ", "")}/${isCustomColor ? color.replace("#", "") : "888"}`}
        alt={name}
        className="h-5 w-5"
      />
      <span
        className={`text-sm font-medium ${isCustomColor ? "" : "text-zinc-900 dark:text-white"}`}
        style={isCustomColor ? { color } : {}}
      >
        {name}
      </span>
    </div>
  );
};

// --- Main Page ---

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto max-w-3xl px-8 py-20">
        {/* Header */}
        <header className="mb-16 border-b pb-8">
          <p className="mb-2 text-sm font-medium tracking-widest text-zinc-400 uppercase">
            {DATA.profile.role}
          </p>
          <h1 className="mb-6 text-3xl font-bold tracking-tight whitespace-pre-line text-zinc-900 dark:text-white">
            {DATA.profile.title}
          </h1>
          <div className="space-y-1 text-sm text-zinc-500">
            <p className="font-medium text-zinc-900 dark:text-zinc-100">
              {DATA.profile.name}
            </p>
            <p>{DATA.profile.email}</p>
          </div>
        </header>

        {/* 1. 실시간 GitHub Contribution Section */}
        <section className="mb-20">
          <h2 className="mb-6 text-xs font-semibold tracking-widest text-zinc-400 uppercase">
            GitHub Contributions
          </h2>
          <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
            <GitHubCalendar
              username={DATA.githubUsername}
              blockSize={12}
              blockMargin={4}
              fontSize={12}
              theme={{
                light: ["#f4f4f5", "#61dafb"], // Tailwind zinc-100 to React Blue
                dark: ["#18181b", "#61dafb"], // Tailwind zinc-900 to React Blue
              }}
            />
            <p className="mt-4 text-right text-xs text-zinc-400">
              * 최근 1년간의 실시간 커밋 상태입니다.
            </p>
          </div>
        </section>

        {/* 2. 시니어 역량 증명 (Leadership & Troubleshooting Highlights) */}
        <section className="mb-20">
          <h2 className="mb-6 text-xs font-semibold tracking-widest text-zinc-400 uppercase">
            Expertise & Leadership
          </h2>
          <div className="grid gap-4">
            {DATA.highlights.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                className="group relative rounded-xl border border-zinc-200 p-5 transition-all hover:border-blue-500/50 hover:bg-blue-50/30 dark:border-zinc-800 dark:hover:bg-blue-900/10"
              >
                <div className="mb-2 flex gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold tracking-tight text-blue-500 uppercase"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <h3 className="mb-2 font-bold transition-colors group-hover:text-blue-500">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {item.description}
                </p>
                <div className="mt-3 flex items-center text-xs font-medium text-blue-500 opacity-0 transition-opacity group-hover:opacity-100">
                  자세히 보기
                  <svg
                    className="ml-1 h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-20">
          <SectionTitle>Experience</SectionTitle>

          {DATA.experience.map((exp, idx) => (
            <div key={idx} className="space-y-12">
              <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
                <div className="flex items-baseline justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-zinc-500">{exp.position}</p>
                  </div>
                  <span className="text-xs font-medium text-zinc-400">
                    {exp.period}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {exp.description}
                </p>
              </div>

              {exp.projects.map((project, pIdx) => (
                <article key={pIdx} className="group">
                  <div className="mb-3 flex items-baseline justify-between">
                    <h4 className="text-base font-bold text-zinc-900 transition-colors group-hover:text-blue-500 dark:text-white">
                      {project.title}
                    </h4>
                    <span className="rounded border border-zinc-200 px-2 py-0.5 text-[10px] font-bold text-zinc-400 uppercase dark:border-zinc-800">
                      {project.tag}
                    </span>
                  </div>
                  <p className="mb-4 text-sm font-medium text-zinc-500">
                    {project.sub}
                  </p>
                  <ul className="mb-6 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                    {project.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex gap-2">
                        <span className="text-zinc-400">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Placeholder for Screenshots */}
                  <div className="scrollbar-hide flex gap-3 overflow-x-auto pb-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="h-48 w-28 shrink-0 rounded-lg border border-zinc-200 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800"
                      />
                    ))}
                  </div>
                </article>
              ))}
            </div>
          ))}
        </section>

        {/* Technical Skills */}
        <section className="mb-20">
          <SectionTitle>Technical Skills</SectionTitle>
          <div className="mb-8 flex flex-wrap gap-3">
            {DATA.skills.map((skill) => (
              <SkillBadge key={skill.name} {...skill} />
            ))}
          </div>
        </section>

        {/* Footer Links */}
        <section className="border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <SectionTitle>2020 PORTFOLIO</SectionTitle>
          <div className="flex gap-4">
            <a
              href="https://github.com/JEHEO/PORTFOLIO_2020"
              target="_blank"
              className="rounded-lg bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-zinc-700 dark:bg-white dark:text-black"
            >
              GitHub
            </a>
            <a
              href="https://jeheo.github.io/PORTFOLIO_2020/"
              target="_blank"
              className="rounded-lg border border-zinc-300 px-6 py-3 text-sm font-medium transition-all hover:bg-zinc-50 dark:border-zinc-700 dark:text-white"
            >
              Live Demo
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

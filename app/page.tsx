import ProjectGallery from "./_components/ProjectGallery";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const skillGroups = [
  {
    title: "Frontend",
    number: "01",
    skills: ["JavaScript", "TypeScript", "React", "Angular", "Next.js", "HTML", "CSS", "Tailwind CSS", "Angular Material"],
  },
  {
    title: "Backend & Data",
    number: "02",
    skills: ["Node.js", "Express", "REST APIs", "MongoDB", "Mongoose", "PostgreSQL", "Firebase", "Supabase"],
  },
  {
    title: "State & Architecture",
    number: "03",
    skills: ["Redux Toolkit", "NgRx", "RxJS", "React Context", "App Router", "Server Components", "Authentication"],
  },
  {
    title: "Tools & Deployment",
    number: "04",
    skills: ["Git", "GitHub", "GitHub Actions", "Vite", "Vercel", "Render", "Firebase Hosting", "Azure Portal", "Jenkins"],
  },
];

const projects = [
  {
    number: "01",
    title: "AutoCrest",
    type: "Vehicle platform",
    description:
      "A personal digital garage designed to bring each vehicle's mileage, maintenance, repairs, expenses, documents and ownership history into one clear workspace.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
    ],
    highlights: [
      "Multi-vehicle profiles with mileage and key deadlines",
      "Lifecycle timeline for services, repairs and inspections",
      "Expense tracking and total cost of ownership summaries",
      "Documents and reminders for important vehicle deadlines",
      "Restricted vehicle-history reports for potential buyers",
    ],
    featureLabel: "Planned MVP",
    live: "https://autocrest-web.vercel.app/",
    images: [
      { src: "/projects/autocrest-home.png", alt: "AutoCrest product landing page" },
      { src: "/projects/autocrest-login.png", alt: "AutoCrest login page" },
      { src: "/projects/autocrest-register.png", alt: "AutoCrest registration page" },
    ],
    architecture: "Next.js App Router with Server Components for data-heavy views and focused Client Components for interactive workflows.",
    deployment: "Vercel · Supabase planned for Auth, PostgreSQL and Storage",
    engineering: [
      "Next.js Route Handlers and Server Actions for controlled operations",
      "Server-side validation and authorization as the security boundary",
      "Row Level Security for strict user-data isolation",
      "Short-lived signed URLs for protected vehicle documents",
    ],
    status: "In development",
    tone: "lime",
  },
  {
    number: "02",
    title: "Job Board",
    type: "Full-stack platform",
    description:
      "A production-ready job platform built for both candidates and employers, covering the complete flow from discovering a position to managing applications, companies and hiring teams.",
    technologies: [
      "React 19",
      "TypeScript",
      "Vite",
      "Redux Toolkit",
      "React Router",
      "Lingui",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Passport.js",
      "SendGrid",
      "FullCalendar",
    ],
    highlights: [
      "Search, filters, pagination, saved jobs and detailed listings",
      "Applications with CV links, cover letters and status tracking",
      "Access and refresh token authentication with Google OAuth",
      "Employer dashboards for jobs, applicants and statistics",
      "Company invitations, member roles and ownership transfer",
      "Real-time notifications and direct member messaging",
      "Profile, avatar, password and account management",
      "Company calendar for job-related events",
    ],
    github: "https://github.com/Troth99/Job-Board-app",
    live: "https://job-board-three-omega.vercel.app",
    images: [
      { src: "/projects/job-board.png", alt: "Job Board homepage with job search" },
      { src: "/projects/job-board-jobs.png", alt: "Job Board open positions page" },
      { src: "/projects/job-board-companies.png", alt: "Job Board company directory" },
      { src: "/projects/job-board-login.png", alt: "Job Board login page" },
      { src: "/projects/job-board-register.png", alt: "Job Board registration page" },
    ],
    architecture: "React SPA connected to a layered Express REST API with controllers, services, middleware and Mongoose models.",
    deployment: "Vercel · Render · MongoDB Atlas",
    engineering: [
      "Redux Toolkit, Context API and reusable custom hooks",
      "English and Bulgarian localization with Lingui",
      "Protected routes, role guards and server-side validation",
      "Rate limiting for authentication and password recovery",
      "SEO metadata management with React Helmet Async",
      "Read-only safeguards for the public demo account",
    ],
    tone: "cyan",
  },
  {
    number: "03",
    title: "Quiz App",
    type: "Interactive learning platform",
    description:
      "A full-featured learning platform where users can create, discover and complete quizzes, track their progress and compete through achievements, streaks and leaderboard rankings.",
    technologies: [
      "Angular 20",
      "TypeScript",
      "RxJS",
      "NgRx",
      "AngularFire",
      "Firebase Auth",
      "Firestore",
      "Firebase Storage",
      "Angular Material",
      "Reactive Forms",
    ],
    highlights: [
      "Quiz creation, editing, deletion and category browsing",
      "Timed quiz sessions, score evaluation and result summaries",
      "Firebase authentication and protected profile routes",
      "Comments, search and public guest access",
      "User history, statistics and progress tracking",
      "Achievements, activity streaks and leaderboard rankings",
      "Public user profiles and created-quiz management",
      "Bug reporting with Firebase image uploads",
    ],
    github: "https://github.com/Troth99/quiz-app-angular",
    live: "https://quiz-app-3471b.web.app/",
    images: [
      { src: "/projects/quiz-app-home.png", alt: "Quiz App homepage" },
      { src: "/projects/quiz-app-categories.png", alt: "Quiz App category browser" },
      { src: "/projects/quiz-app-login.png", alt: "Quiz App login page" },
      { src: "/projects/quiz-app-register.png", alt: "Quiz App registration page" },
    ],
    architecture: "Angular standalone components with lazy-loaded feature routes, route guards, injectable services and reactive NgRx state flows.",
    deployment: "Firebase Hosting · Firestore · Authentication · Storage",
    engineering: [
      "NgRx actions, reducers, effects and selectors",
      "Real-time Firestore streams with AngularFire and RxJS",
      "Lazy-loaded routes and reusable standalone components",
      "Auth, guest, active-quiz and quiz-start route guards",
      "Reactive forms with reusable custom validators",
      "Custom pipes and services for scoring, timers and streaks",
    ],
    tone: "violet",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-none stroke-current stroke-2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-current">
      <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.02c-3.23.7-3.91-1.37-3.91-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.74-1.55-2.58-.3-5.29-1.29-5.29-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.16 1.18A10.98 10.98 0 0 1 12 6.32c.98 0 1.95.13 2.87.39 2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.41-2.72 5.39-5.3 5.68.42.36.79 1.07.79 2.16v3.04c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-current">
      <path d="M5.37 3.5A2.18 2.18 0 1 1 1 3.5a2.18 2.18 0 0 1 4.37 0ZM1.37 8h3.99v12.83H1.37V8Zm6.49 0h3.82v1.75h.05c.53-1.01 1.83-2.08 3.77-2.08 4.03 0 4.78 2.65 4.78 6.1v7.06H16.3v-6.26c0-1.5-.03-3.42-2.08-3.42-2.09 0-2.41 1.63-2.41 3.31v6.37H7.86V8Z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-none stroke-current stroke-2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5h5v5m0-5-9 9M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070a0d] text-white">
      <div className="portfolio-grid absolute inset-0" />
      <div className="absolute -left-40 top-24 size-[32rem] rounded-full bg-cyan-400/8 blur-[130px]" />
      <div className="absolute -right-40 top-0 size-[34rem] rounded-full bg-lime-300/10 blur-[150px]" />

      <header className="relative z-20 mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#" className="group flex items-center gap-3" aria-label="Svezhen Bratanov - Home">
          <span className="flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] font-mono text-sm font-bold text-lime-300 transition-colors group-hover:border-lime-300/40">SB</span>
          <span className="hidden text-sm font-semibold tracking-wide text-zinc-200 sm:block">Svezhen Bratanov</span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-zinc-400 transition-colors hover:text-white">{item.label}</a>
          ))}
        </nav>

        <a href="#contact" className="hidden rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-zinc-200 backdrop-blur transition hover:border-lime-300/50 hover:text-lime-300 sm:block">Let&apos;s talk</a>

        <details className="group relative md:hidden">
          <summary className="flex size-10 cursor-pointer list-none items-center justify-center rounded-full border border-white/15 bg-white/[0.04] [&::-webkit-details-marker]:hidden" aria-label="Open navigation">
            <span className="space-y-1.5"><span className="block h-px w-4 bg-white" /><span className="block h-px w-4 bg-white" /><span className="block h-px w-4 bg-white" /></span>
          </summary>
          <nav className="absolute right-0 top-12 flex w-48 flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0d1318]/95 p-2 shadow-2xl backdrop-blur-xl" aria-label="Mobile navigation">
            {navigation.map((item) => <a key={item.label} href={item.href} className="rounded-lg px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/[0.06] hover:text-white">{item.label}</a>)}
          </nav>
        </details>
      </header>

      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-5rem)] w-full min-w-0 max-w-7xl items-center gap-16 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-12">
        <div className="min-w-0">
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-lime-300/20 bg-lime-300/[0.06] px-4 py-2 text-xs font-medium tracking-wide text-lime-200">
            <span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-lime-300 opacity-60" /><span className="relative inline-flex size-2 rounded-full bg-lime-300" /></span>
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <p className="mb-4 font-mono text-sm tracking-[0.2em] text-cyan-300">HI, I&apos;M SVEZHEN BRATANOV</p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-balance sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
            I build modern <span className="hero-gradient">web experiences.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">Full-Stack Developer focused on creating responsive, accessible and scalable applications with React, Next.js, Angular and Node.js.</p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-300 px-6 py-3.5 text-sm font-semibold text-[#0a0d08] transition hover:-translate-y-0.5 hover:bg-lime-200 hover:shadow-[0_12px_40px_rgba(190,242,100,0.2)]">View my work <ArrowIcon /></a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.07]">Contact me</a>
          </div>

          <div className="mt-12 flex items-center gap-5 text-zinc-500">
            <span className="text-xs uppercase tracking-[0.16em]">Find me on</span><span className="h-px w-8 bg-white/10" />
            <a href="https://github.com/Troth99" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-lime-300"><GitHubIcon /></a>
            <a href="https://linkedin.com/in/svezhen-bratanov" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-cyan-300"><LinkedInIcon /></a>
          </div>
        </div>

        <div className="relative mx-auto min-w-0 w-full max-w-full sm:max-w-lg lg:mx-0 lg:justify-self-end">
          <div className="absolute -inset-10 rounded-full bg-lime-300/[0.06] blur-3xl" />
          <div className="code-card relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c1117]/90 shadow-2xl shadow-black/60 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
              <div className="flex gap-2"><span className="size-2.5 rounded-full bg-[#ff5f57]" /><span className="size-2.5 rounded-full bg-[#febc2e]" /><span className="size-2.5 rounded-full bg-[#28c840]" /></div>
              <span className="font-mono text-[11px] text-zinc-600">developer.ts</span><span className="w-12" />
            </div>

            <div className="overflow-x-auto p-6 font-mono text-[13px] leading-7 sm:p-8 sm:text-sm">
              <p><span className="text-fuchsia-400">const</span> <span className="text-cyan-300">developer</span> <span className="text-zinc-500">=</span> <span className="text-zinc-300">{'{'}</span></p>
              <p className="pl-5"><span className="text-sky-300">name</span><span className="text-zinc-500">:</span> <span className="text-lime-300">&quot;Svezhen Bratanov&quot;</span><span className="text-zinc-500">,</span></p>
              <p className="pl-5"><span className="text-sky-300">role</span><span className="text-zinc-500">:</span> <span className="text-lime-300">&quot;Full-Stack Developer&quot;</span><span className="text-zinc-500">,</span></p>
              <p className="pl-5"><span className="text-sky-300">skills</span><span className="text-zinc-500">:</span> <span className="text-zinc-300">[</span></p>
              <p className="pl-10 text-lime-300">&quot;React&quot;<span className="text-zinc-500">,</span> &quot;Next.js&quot;<span className="text-zinc-500">,</span></p>
              <p className="pl-10 text-lime-300">&quot;Angular&quot;<span className="text-zinc-500">,</span> &quot;Node.js&quot;</p>
              <p className="pl-5 text-zinc-300">]<span className="text-zinc-500">,</span></p>
              <p className="pl-5"><span className="text-sky-300">passion</span><span className="text-zinc-500">:</span> <span className="text-lime-300">&quot;Building useful things&quot;</span><span className="text-zinc-500">,</span></p>
              <p className="pl-5"><span className="text-sky-300">available</span><span className="text-zinc-500">:</span> <span className="text-fuchsia-400">true</span></p>
              <p className="text-zinc-300">{'};'}</p>
              <p className="mt-5 text-zinc-600">{"// Let's create something great."}</p>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-4 rounded-xl border border-white/10 bg-[#11171e]/90 px-4 py-3 font-mono text-xs text-zinc-400 shadow-xl backdrop-blur sm:-left-8"><span className="mr-2 inline-block size-2 rounded-full bg-lime-300" /> Open to work</div>
        </div>
      </section>

      <section id="about" className="relative z-10 scroll-mt-20 border-t border-white/[0.06]">
        <div className="absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-lime-300/50 to-transparent" />
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
          <div className="mb-14 flex items-center gap-4">
            <span className="font-mono text-xs text-lime-300">01.</span>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">About me</p>
            <span className="h-px flex-1 bg-white/[0.07]" />
          </div>

          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <div>
              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-balance sm:text-5xl">
                Curious by nature.<br />
                <span className="text-zinc-500">Driven by the craft.</span>
              </h2>
              <div className="mt-8 flex items-center gap-3 font-mono text-xs text-zinc-500">
                <span className="size-2 rounded-full bg-cyan-300" />
                BASED IN BULGARIA
              </div>
            </div>

            <div className="space-y-6 text-base leading-8 text-zinc-400 sm:text-lg">
              <p>
                I&apos;m Svezhen, a developer based in Bulgaria. I graduated in Applied
                Linguistics and Information Technology—a combination that shaped both
                the way I communicate and the way I approach complex problems.
              </p>
              <p>
                After graduating, I chose to focus fully on software development and turn
                a growing interest in programming into my professional direction. Since
                then, I&apos;ve been learning through focused training and hands-on projects,
                continuously developing my skills and building ideas into real applications.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-3">
            <article className="group bg-[#0a0e12] p-7 transition-colors hover:bg-[#0d1318] sm:p-8">
              <span className="font-mono text-xs text-cyan-300">FRONTEND</span>
              <h3 className="mt-5 text-lg font-semibold text-zinc-100">Thoughtful interfaces</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-500">Responsive experiences built with React, Angular, Next.js and TypeScript.</p>
            </article>
            <article className="group bg-[#0a0e12] p-7 transition-colors hover:bg-[#0d1318] sm:p-8">
              <span className="font-mono text-xs text-lime-300">BACKEND</span>
              <h3 className="mt-5 text-lg font-semibold text-zinc-100">Complete solutions</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-500">APIs, authentication, databases and real-time features that work together.</p>
            </article>
            <article className="group bg-[#0a0e12] p-7 transition-colors hover:bg-[#0d1318] sm:p-8">
              <span className="font-mono text-xs text-fuchsia-300">MINDSET</span>
              <h3 className="mt-5 text-lg font-semibold text-zinc-100">Always improving</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-500">Self-directed learning, attention to detail and a strong drive to solve real problems.</p>
            </article>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6">
              <p className="text-3xl font-semibold tracking-tight text-white">3</p>
              <p className="mt-2 text-sm text-zinc-500">Full-stack projects</p>
            </div>
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6">
              <p className="text-3xl font-semibold tracking-tight text-white">SoftUni</p>
              <p className="mt-2 text-sm text-zinc-500">Professional JavaScript Program</p>
            </div>
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6">
              <p className="hero-gradient w-fit text-3xl font-semibold tracking-tight">Full-Stack</p>
              <p className="mt-2 text-sm text-zinc-500">From idea to deployment</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="relative z-10 scroll-mt-20 border-t border-white/[0.06] bg-[#080c10]">
        <div className="absolute right-0 top-24 size-96 rounded-full bg-cyan-400/[0.035] blur-[120px]" />
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span className="font-mono text-xs text-lime-300">02.</span>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">Selected work</p>
              </div>
              <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Projects with purpose.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-zinc-500 sm:text-right">
              A selection of applications where I&apos;ve worked through real product challenges—from architecture and UI to authentication and deployment.
            </p>
          </div>

          <div className="mt-16 space-y-6">
            {projects.map((project) => {
              const accent = project.tone === "lime" ? "text-lime-300" : project.tone === "cyan" ? "text-cyan-300" : "text-violet-300";
              const glow = project.tone === "lime" ? "from-lime-300/15" : project.tone === "cyan" ? "from-cyan-300/15" : "from-violet-400/15";

              return (
                <article key={project.title} className="group grid overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0b0f14] transition duration-300 hover:border-white/[0.15] lg:grid-cols-[0.85fr_1.15fr]">
                  <div className={`relative min-h-72 overflow-hidden border-b border-white/[0.07] bg-gradient-to-br ${glow} via-[#0b1015] to-[#080b0e] p-6 lg:min-h-[30rem] lg:border-r lg:border-b-0 sm:p-9`}>
                    <div className="project-dots absolute inset-0 opacity-40" />
                    <div className="relative flex items-center justify-between">
                      <span className={`font-mono text-xs ${accent}`}>PROJECT / {project.number}</span>
                      {project.status && <span className="rounded-full border border-lime-300/20 bg-lime-300/[0.06] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-lime-200">{project.status}</span>}
                    </div>

                    <div className="absolute inset-x-6 bottom-6 top-20 overflow-hidden rounded-2xl border border-white/10 bg-[#0d1319]/90 shadow-2xl shadow-black/30 sm:inset-x-9 sm:bottom-9">
                      <div className="flex items-center gap-2 border-b border-white/[0.07] px-4 py-3">
                        <span className="size-2 rounded-full bg-white/15" /><span className="size-2 rounded-full bg-white/10" /><span className="size-2 rounded-full bg-white/10" />
                        <span className="ml-auto font-mono text-[9px] text-zinc-600">{project.title.toLowerCase().replace(" ", "-")}.app</span>
                      </div>
                      {project.images ? (
                        <ProjectGallery images={project.images} />
                      ) : (
                        <div className="p-5 sm:p-7">
                          <div className={`mb-5 h-2 w-20 rounded-full bg-gradient-to-r ${glow} to-transparent`} />
                          <div className="h-5 w-3/4 rounded bg-white/10" />
                          <div className="mt-3 h-3 w-full rounded bg-white/[0.05]" />
                          <div className="mt-2 h-3 w-4/5 rounded bg-white/[0.05]" />
                          <div className="mt-7 grid grid-cols-3 gap-3">
                            <div className="h-20 rounded-lg border border-white/[0.06] bg-white/[0.025]" />
                            <div className="h-20 rounded-lg border border-white/[0.06] bg-white/[0.025]" />
                            <div className="h-20 rounded-lg border border-white/[0.06] bg-white/[0.025]" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                    <p className={`font-mono text-xs uppercase tracking-[0.2em] ${accent}`}>{project.type}</p>
                    <h3 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">{project.title}</h3>
                    <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">{project.description}</p>

                    <p className="mt-8 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">{project.featureLabel ?? "Core functionality"}</p>
                    <ul className="mt-4 grid gap-x-8 gap-y-3 xl:grid-cols-2">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-3 text-sm text-zinc-400">
                          <span className={`size-1.5 rounded-full bg-current ${accent}`} />{highlight}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span key={technology} className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] text-zinc-400">{technology}</span>
                      ))}
                    </div>

                    {(project.architecture || project.deployment) && (
                      <div className="mt-8 grid gap-3 sm:grid-cols-2">
                        {project.architecture && (
                          <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
                            <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-cyan-300">Architecture</p>
                            <p className="mt-2 text-xs leading-5 text-zinc-500">{project.architecture}</p>
                          </div>
                        )}
                        {project.deployment && (
                          <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
                            <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-lime-300">Deployment</p>
                            <p className="mt-2 text-xs leading-5 text-zinc-500">{project.deployment}</p>
                          </div>
                        )}
                      </div>
                    )}

                    {project.engineering && (
                      <div className="mt-4 rounded-xl border border-white/[0.07] bg-white/[0.025] p-5">
                        <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-violet-300">Engineering highlights</p>
                        <ul className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                          {project.engineering.map((item) => (
                            <li key={item} className="flex gap-2.5 text-xs leading-5 text-zinc-500">
                              <span className="mt-2 size-1 shrink-0 rounded-full bg-violet-300" />{item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {(project.github || project.live) && (
                      <div className="mt-9 flex flex-wrap gap-5 border-t border-white/[0.07] pt-7">
                        {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-lime-300">Live demo <ExternalLinkIcon /></a>}
                        {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition hover:text-white"><GitHubIcon /> View code</a>}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="skills" className="relative z-10 scroll-mt-20 border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span className="font-mono text-xs text-lime-300">03.</span>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">Skills</p>
              </div>
              <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Tools I use to<br /><span className="text-zinc-500">build for the web.</span></h2>
              <p className="mt-6 max-w-md text-sm leading-7 text-zinc-500">A practical toolkit developed through complete applications—from interface and state management to APIs, data and deployment.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <article key={group.title} className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition hover:border-white/[0.15] hover:bg-white/[0.04]">
                  <div className="flex items-center justify-between"><h3 className="font-semibold text-zinc-100">{group.title}</h3><span className="font-mono text-[10px] text-zinc-600">{group.number}</span></div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => <span key={skill} className="rounded-md border border-white/[0.07] bg-black/20 px-2.5 py-1.5 font-mono text-[11px] text-zinc-400">{skill}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="relative z-10 scroll-mt-20 border-t border-white/[0.06] bg-[#080c10]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
          <div className="mb-14 flex items-center gap-4"><span className="font-mono text-xs text-lime-300">04.</span><p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">Education</p><span className="h-px flex-1 bg-white/[0.07]" /></div>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-white/[0.08] bg-[#0b1015] p-7 sm:p-9">
              <div className="flex flex-wrap items-start justify-between gap-4"><div><p className="font-mono text-xs text-cyan-300">SOFTWARE UNIVERSITY</p><h3 className="mt-4 text-2xl font-semibold text-white">Professional JavaScript Program</h3></div><span className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[10px] text-zinc-500">2024 — 2026</span></div>
              <p className="mt-6 text-sm leading-7 text-zinc-500">Professional training focused on JavaScript, TypeScript, React, Angular and modern application development through practical coursework and projects.</p>
            </article>
            <article className="rounded-3xl border border-white/[0.08] bg-[#0b1015] p-7 sm:p-9">
              <div className="flex flex-wrap items-start justify-between gap-4"><div><p className="font-mono text-xs text-violet-300">VELIKO TARNOVO UNIVERSITY</p><h3 className="mt-4 text-2xl font-semibold text-white">Bachelor&apos;s Degree</h3></div><span className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[10px] text-zinc-500">2018 — 2024</span></div>
              <p className="mt-6 text-sm leading-7 text-zinc-500">Applied Linguistics and Information Technology—a foundation that combines communication, analytical thinking and technology.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 scroll-mt-20 border-t border-white/[0.06]">
        <div className="absolute left-1/2 top-1/2 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-300/[0.05] blur-[140px]" />
        <div className="relative mx-auto max-w-5xl px-5 py-28 text-center sm:px-8 sm:py-36">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-lime-300">05. Let&apos;s work together</p>
          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-6xl">Have a project or an opportunity in mind?</h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-zinc-400">I&apos;m currently looking for an entry-level Full-Stack Developer role and would be happy to hear from you.</p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="mailto:s.bratanoww@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-300 px-7 py-3.5 text-sm font-semibold text-[#0a0d08] transition hover:-translate-y-0.5 hover:bg-lime-200">Send me an email <ArrowIcon /></a>
            <a href="/svezhen-bratanov-cv.pdf" download className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.07]">Download CV</a>
          </div>
          <a href="mailto:s.bratanoww@gmail.com" className="mt-8 inline-block font-mono text-sm text-zinc-500 transition hover:text-cyan-300">s.bratanoww@gmail.com</a>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-8 text-center sm:px-8 md:flex-row md:text-left lg:px-12">
          <p className="text-xs text-zinc-600">© 2026 Svezhen Bratanov. Built with Next.js and TypeScript.</p>
          <div className="flex items-center gap-5 text-zinc-500">
            <a href="https://github.com/Troth99" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-lime-300"><GitHubIcon /></a>
            <a href="https://linkedin.com/in/svezhen-bratanov" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-cyan-300"><LinkedInIcon /></a>
            <a href="#" className="font-mono text-[10px] uppercase tracking-wider transition hover:text-white">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

import { useEffect } from "react";

const LINKS = {
  email: "mailto:sangameshlingshetty@gmail.com",
  roleEmail:
    "mailto:sangameshlingshetty@gmail.com?subject=SDE-2%20Opportunity",
  linkedin: "https://linkedin.com/in/sangamesh-lingshetty-5a6647279",
  github: "https://github.com/sangamesh-Lingshetty",
  x: "https://x.com/SanguLingshetty",
  portfolio: "https://sangamesh.vercel.app",
  getquest: "https://getquest.cloud",
  nextoffer: "https://nextjoboffer.vercel.app",
  deeplock: "https://deeplock.tech",
  deeplockStore: "https://play.google.com/store/apps/details?id=com.deeplock.app",
  shapeart: "https://www.3dshapeart.com/",
  topmate: "https://topmate.io/sangamesh_lingshetty",
};

const tickerItems = [
  ["green", "DeepLock live on Play Store · Android app"],
  ["indigo", "GetQuest: AI fills vendor questionnaires in 30 min"],
  ["amber", "NextOffer: 9,500+ jobs scanned daily via ATS"],
  ["green", "AqueraLabs: API latency cut 45% in production"],
  ["indigo", "DevInsights: 10K+ GitHub events/day processed"],
  ["amber", "My Habit: 100+ users, 95% Telegram delivery"],
  ["green", "DeepLock CI/CD: 2hr→15min deploy time"],
  ["indigo", "Redis cache cut DB load 60% on monitoring tool"],
];

const stats = [
  { num: "1.5", suffix: "yr", label: "Production exp." },
  { num: "3", label: "Live SaaS products" },
  { num: "9.5", suffix: "k", label: "Jobs scanned/day (NextOffer)" },
  { num: "500", suffix: "+", label: "DSA problems solved" },
];

const products = [
  {
    featured: true,
    tagClass: "tag-live",
    tag: "● LIVE · GDPR SaaS",
    name: "GetQuest",
    desc:
      "AI-driven SaaS that auto-fills vendor security questionnaires (50–200 questions) from your SOC2 and GDPR policy documents. What used to take 6–8 hours now takes 30 minutes. Secure multi-tenant backend, full audit trails, JWT auth.",
    metrics: [
      ["2hr → 30min", "Turnaround time"],
      ["85–90%", "Answer accuracy"],
      ["SOC2 + GDPR", "Compliance support"],
    ],
    stack: [
      "TypeScript",
      "Next.js",
      "Supabase",
      "LLM APIs",
      "JWT",
      "Multi-tenant",
    ],
    link: LINKS.getquest,
    linkLabel: "getquest.cloud",
    panel: [
      ["6→8", "Hours saved per questionnaire"],
      ["AES-256", "Docs encrypted at rest"],
      ["$299", "Professional plan / mo"],
    ],
  },
  {
    tagClass: "tag-live",
    tag: "● LIVE · Android + Chrome",
    name: "DeepLock",
    desc:
      "Focus & screen control app that intelligently blocks time-wasting apps and tracks usage patterns. Auto Block + Sleep Guard. Live on the Play Store. Originally a Chrome Extension, now a full Android app.",
    metrics: [
      ["Play Store", "Live now"],
      ["Chrome WS", "Published extension"],
    ],
    stack: ["React Native", "Android", "Chrome Extension", "JS"],
    links: [
      { href: LINKS.deeplock, label: "deeplock.tech" },
      { href: LINKS.deeplockStore, label: "View on Play Store" },
    ],
  },
  {
    tagClass: "tag-new",
    tag: "● LIVE · Job Agent",
    name: "NextOffer",
    desc:
      "Scans 287 company ATS career pages directly — no LinkedIn noise, no stale reposts, no location traps. Finds jobs before the crowd and delivers a filtered shortlist to Telegram daily.",
    metrics: [
      ["9,500+", "Jobs scanned daily"],
      ["287", "Companies monitored"],
    ],
    stack: ["Node.js", "Telegram Bot", "ATS Scraper", "Vercel"],
    link: LINKS.nextoffer,
    linkLabel: "nextjoboffer.vercel.app",
  },
  {
    tagClass: "tag-wip",
    tag: "◐ ACTIVE DEV",
    name: "DevInsights AI",
    desc:
      "Multi-tenant SaaS that analyses GitHub activity across teams. LLM integration for burnout risk detection and code quality insights. 10K+ events/day, 90% API call reduction via intelligent caching.",
    metrics: [
      ["10K+", "Events/day processed"],
      ["90%", "API call reduction"],
    ],
    stack: ["Node.js", "AWS Lambda", "GitHub API", "LLM", "RBAC"],
  },
  {
    tagClass: "tag-client",
    tag: "● CLIENT WORK",
    name: "3D Shape Art",
    desc:
      "Premium business website for a Bangalore custom 3D printing brand. Built product categories, real-work gallery, customer reviews, quote flow, and WhatsApp-first contact so online and offline orders feel simple and trustworthy.",
    metrics: [
      ["500+", "Orders showcased"],
      ["WhatsApp", "Quote-first flow"],
    ],
    stack: ["Business Website", "Responsive UI", "Lead Capture", "Gallery", "Client Work"],
    link: LINKS.shapeart,
    linkLabel: "3dshapeart.com",
  },
];

const impact = [
  ["–45%", "API latency"],
  ["–60%", "DB load (Redis)"],
  ["2h→15m", "Deploy time"],
  ["–70%", "Incident response"],
];

const expPoints = [
  "Built and maintained REST APIs and backend services in production — core product and customer-facing features.",
  "Designed MySQL schemas and AWS infra (Lambda, EC2, S3, IAM) for a multi-tenant SaaS platform.",
  "Built internal monitoring tool with Slack/email alerts and AI-based log summarisation — 70% faster incident response.",
  "Implemented Redis caching layer that cut DB query load by 60% on high-traffic read paths.",
  "Reduced deploy time from 2 hours to 15 minutes by building CI/CD pipelines on GitHub Actions + Docker.",
  "Received Special Appreciation Award for technical contributions and innovation.",
];

const decisions = [
  {
    label: "GetQuest infra decision",
    title: "Lambda over EC2 for bursty traffic",
    body:
      "GetQuest has clustered traffic — vendor reviews happen in bursts. Lambda auto-scales to zero between bursts, pay-per-request, no instance management at early stage. The ops savings alone justified it.",
    tags: ["AWS Lambda", "Cost", "Scale"],
  },
  {
    label: "GetQuest auth + data isolation",
    title: "Supabase RLS over raw Postgres",
    body:
      "Needed row-level security for multi-tenant isolation and GDPR compliance without building auth from scratch. Traded some query control for roughly 3 weeks of engineering time. Worth it at solo-founder speed.",
    tags: ["Supabase", "GDPR", "Multi-tenant"],
  },
  {
    label: "AqueraLabs monitoring tool",
    title: "Redis TTL cache to protect MySQL",
    body:
      "Log aggregation was hammering MySQL on every dashboard page load. Redis with a 30-second TTL cut DB load 60% — monitoring doesn't need millisecond freshness and the read cost was killing perf.",
    tags: ["Redis", "MySQL", "Performance"],
  },
];

const skillGroups = [
  {
    title: "Backend & Runtime",
    items: [
      ["Node.js", "primary runtime, production"],
      ["TypeScript", "all new projects"],
      ["Express.js", "REST API design"],
      ["Microservices", "event-driven, SQS/SNS"],
      ["LLM / GenAI APIs", "OpenAI, integrated in prod"],
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      ["AWS Lambda", "serverless prod workloads"],
      ["EC2 · S3 · IAM", "multi-tenant SaaS infra"],
      ["Docker", "containerised services"],
      ["GitHub Actions", "CI/CD pipelines"],
      ["Terraform", "infra as code"],
    ],
  },
  {
    title: "Databases & Caching",
    items: [
      ["MySQL · PostgreSQL", "production schemas"],
      ["Redis", "caching, 60% query reduction"],
      ["DynamoDB", "serverless persistence"],
      ["MongoDB", "document storage"],
      ["Supabase / RLS", "multi-tenant isolation"],
    ],
  },
];

const testimonials = [
  {
    initial: "A",
    name: "Abhishek",
    role: "Startup Founder",
    quote:
      "Delivered a clean, fast backend API within the week. No back-and-forth — just shipped. Exactly what an early-stage team needs.",
  },
  {
    initial: "A",
    name: "Anjali",
    role: "Product Manager",
    quote:
      "He doesn't just write code — he thinks through the problem first. The monitoring tool he built saved us hours every week in incident response.",
  },
  {
    initial: "V",
    name: "Vivek",
    role: "Co-Founder, 3DShapeArt",
    quote:
      "Communication was clear, deadlines were met, and the code was clean enough that we could maintain it easily.",
  },
];

const contactLinks = [
  {
    icon: "mail",
    label: "sangameshlingshetty@gmail.com",
    href: LINKS.email,
  },
  { icon: "linkedin", label: "LinkedIn", href: LINKS.linkedin },
  { icon: "github", label: "GitHub", href: LINKS.github },
  { icon: "x", label: "@SanguLingshetty", href: LINKS.x },
];

const sideProfileLinks = [
  { icon: "linkedin", label: "LinkedIn profile", href: LINKS.linkedin },
  { icon: "github", label: "GitHub profile", href: LINKS.github },
];

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path
      d="M2 12L12 2M12 2H6M12 2v6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ContactIcon = ({ type }) => {
  if (type === "mail") {
    return (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
        <path
          d="M1 3h13v9H1V3zm0 0l6.5 5.5L14 3"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.3" />
        <path
          d="M4 6v5M4 4v.5M7 11V8.5C7 7.1 8.3 6 9.5 6S12 7.1 12 8.5V11M7 6v5"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "github") {
    return (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
        <path
          d="M7.5 1C3.91 1 1 3.91 1 7.5c0 2.87 1.86 5.3 4.44 6.16.32.06.44-.14.44-.31v-1.08c-1.8.39-2.18-.87-2.18-.87-.3-.75-.72-.95-.72-.95-.59-.4.04-.39.04-.39.65.05 1 .67 1 .67.58 1 1.53.71 1.9.54.06-.42.23-.71.41-.87-1.44-.16-2.95-.72-2.95-3.2 0-.71.25-1.29.67-1.74-.07-.16-.29-.82.06-1.72 0 0 .55-.17 1.79.67.52-.14 1.07-.21 1.63-.21.55 0 1.1.07 1.62.21 1.24-.84 1.79-.67 1.79-.67.35.9.13 1.56.06 1.72.42.45.67 1.03.67 1.74 0 2.49-1.52 3.04-2.96 3.2.23.2.44.59.44 1.19v1.77c0 .17.11.37.44.31A6.51 6.51 0 0014 7.5C14 3.91 11.09 1 7.5 1z"
          stroke="currentColor"
          strokeWidth="1.1"
          fill="currentColor"
          fillOpacity="0.08"
        />
      </svg>
    );
  }

  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <path
        d="M13 2L8.5 7.5 13.5 13H11l-3.5-4.3L4 13H2l4.8-5.8L1.5 2H4l3.2 3.9L11 2h2z"
        fill="currentColor"
        fillOpacity="0.7"
      />
    </svg>
  );
};

const Divider = () => <div className="divider" aria-hidden="true" />;

const SectionIntro = ({ eyebrow, title, lead }) => (
  <>
    <div className="section-eyebrow">{eyebrow}</div>
    <h2 dangerouslySetInnerHTML={{ __html: title }} />
    {lead ? <p className="section-lead">{lead}</p> : null}
  </>
);

const ProductCard = ({ product }) => (
  <article className={`product-card${product.featured ? " featured" : ""}`}>
    <div className="product-body">
      <div className={`product-tag ${product.tagClass}`}>{product.tag}</div>
      <h3 className="product-name">{product.name}</h3>
      <p className="product-desc">{product.desc}</p>
      <div className="product-metrics" aria-label={`${product.name} metrics`}>
        {product.metrics.map(([value, key]) => (
          <div className="metric" key={key}>
            <span className="metric-val">{value}</span>
            <span className="metric-key">{key}</span>
          </div>
        ))}
      </div>
      <div className="product-stack" aria-label={`${product.name} technology stack`}>
        {product.stack.map((item) => (
          <span className="chip" key={item}>
            {item}
          </span>
        ))}
      </div>
      {product.links?.length ? (
        <div className="product-links">
          {product.links.map((link) => (
            <a
              className="product-link"
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${product.name}: ${link.label}`}
              key={link.href}
            >
              {link.label}
              <ExternalIcon />
            </a>
          ))}
        </div>
      ) : product.link ? (
        <a
          className="product-link"
          href={product.link}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${product.name}: ${product.linkLabel}`}
        >
          {product.linkLabel}
          <ExternalIcon />
        </a>
      ) : null}
    </div>

    {product.panel ? (
      <aside className="featured-panel" aria-label="GetQuest business metrics">
        {product.panel.map(([value, key]) => (
          <div className="panel-metric" key={key}>
            <span className="panel-metric-val">{value}</span>
            <span className="panel-metric-key">{key}</span>
          </div>
        ))}
      </aside>
    ) : null}
  </article>
);

export default function Portfolio() {
  useEffect(() => {
    const cards = document.querySelectorAll(".product-card");
    const cleanups = [];

    cards.forEach((card) => {
      const onMove = (event) => {
        const rect = card.getBoundingClientRect();
        const x = (((event.clientX - rect.left) / rect.width) * 100).toFixed(1);
        const y = (((event.clientY - rect.top) / rect.height) * 100).toFixed(1);
        card.style.setProperty("--mx", `${x}%`);
        card.style.setProperty("--my", `${y}%`);
      };

      card.addEventListener("mousemove", onMove);
      cleanups.push(() => card.removeEventListener("mousemove", onMove));
    });

    const statNums = document.querySelectorAll(".stat-num");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    statNums.forEach((stat) => observer.observe(stat));

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      observer.disconnect();
    };
  }, []);

  return (
    <div id="top">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #0B0F1A;
          --bg-card: #131827;
          --bg-card-hover: #1A2038;
          --border: #1E2640;
          --accent: #6366F1;
          --accent-dim: rgba(99,102,241,0.15);
          --accent-dim2: rgba(99,102,241,0.08);
          --amber: #F59E0B;
          --amber-dim: rgba(245,158,11,0.12);
          --green: #22C55E;
          --text: #F0EFEA;
          --text-sec: #8B8FA8;
          --text-dim: #4A4F68;
          --mono: 'JetBrains Mono', monospace;
          --display: 'Space Grotesk', sans-serif;
          --body: 'Inter', sans-serif;
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: var(--body);
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
        }

        a { color: inherit; text-decoration: none; }
        a:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }

        .ticker-wrap {
          position: sticky;
          top: 0;
          z-index: 100;
          height: 40px;
          background: var(--bg);
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .ticker-label {
          position: sticky;
          left: 0;
          z-index: 2;
          height: 100%;
          display: flex;
          align-items: center;
          flex-shrink: 0;
          padding: 0 16px;
          border-right: 1px solid var(--border);
          background: var(--bg);
          color: var(--accent);
          font-family: var(--mono);
          font-size: 11px;
          white-space: nowrap;
        }

        .ticker-track-wrap {
          flex: 1;
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent 0%, black 60px, black calc(100% - 60px), transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 60px, black calc(100% - 60px), transparent 100%);
        }

        .ticker-track {
          display: flex;
          width: max-content;
          white-space: nowrap;
          animation: ticker 28s linear infinite;
        }

        .ticker-track:hover { animation-play-state: paused; }

        .ticker-item {
          flex-shrink: 0;
          padding-right: 32px;
          color: var(--text-sec);
          font-family: var(--mono);
          font-size: 11.5px;
        }

        .dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          margin-right: 8px;
          vertical-align: middle;
        }

        .dot.green { background: var(--green); }
        .dot.indigo { background: var(--accent); }
        .dot.amber { background: var(--amber); }

        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .nav {
          max-width: 1100px;
          margin: 0 auto;
          padding: 20px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo {
          color: var(--text-sec);
          font-family: var(--mono);
          font-size: 13px;
        }

        .nav-logo span { color: var(--accent); }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
          list-style: none;
        }

        .nav-links a {
          color: var(--text-sec);
          font-size: 14px;
          transition: color 0.2s;
        }

        .nav-links a:hover { color: var(--text); }

        .nav-links .nav-cta {
          background: var(--accent);
          color: #fff;
          padding: 8px 18px;
          border-radius: 6px;
          font-weight: 500;
        }

        .hero {
          max-width: 1100px;
          margin: 0 auto;
          padding: 80px 40px 64px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 32px;
          padding: 5px 12px;
          border: 1px solid rgba(245,158,11,0.3);
          border-radius: 20px;
          background: var(--amber-dim);
          color: var(--amber);
          font-family: var(--mono);
          font-size: 12px;
          font-weight: 500;
        }

        .hero-badge::before {
          content: "";
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--amber);
          animation: pulse 1.8s ease infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .commit-line {
          margin-bottom: 16px;
          color: var(--text-dim);
          font-family: var(--mono);
          font-size: 13px;
          letter-spacing: 0.02em;
        }

        .commit-line .hash { color: var(--accent); }
        .commit-line .msg { color: var(--text-sec); }

        h1 {
          max-width: 780px;
          margin-bottom: 20px;
          color: var(--text);
          font-family: var(--display);
          font-size: clamp(42px, 6vw, 72px);
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: -0.03em;
        }

        h1 .accent { color: var(--accent); }

        .hero-sub {
          max-width: 560px;
          margin-bottom: 40px;
          color: var(--text-sec);
          font-size: 18px;
          line-height: 1.65;
        }

        .hero-sub strong {
          color: var(--text);
          font-weight: 500;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 64px;
        }

        .btn-primary,
        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 26px;
          border-radius: 8px;
          font-family: var(--display);
          font-size: 15px;
          transition: border-color 0.15s, color 0.15s, opacity 0.15s, transform 0.15s;
        }

        .btn-primary {
          background: var(--accent);
          color: #fff;
          font-weight: 600;
        }

        .btn-ghost {
          border: 1px solid var(--border);
          background: transparent;
          color: var(--text-sec);
          font-weight: 500;
        }

        .btn-primary:hover,
        .btn-ghost:hover {
          transform: translateY(-1px);
        }

        .btn-primary:hover { opacity: 0.9; }
        .btn-ghost:hover { border-color: var(--accent); color: var(--text); }

        .stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          overflow: hidden;
          border: 1px solid var(--border);
          border-radius: 12px;
          background: var(--border);
        }

        .stat-cell {
          background: var(--bg-card);
          padding: 22px 24px;
          text-align: center;
        }

        .stat-num {
          display: block;
          color: var(--text);
          font-family: var(--mono);
          font-size: 28px;
          font-weight: 500;
          line-height: 1.1;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .stat-num.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .stat-num .accent { color: var(--accent); }

        .stat-label {
          display: block;
          margin-top: 4px;
          color: var(--text-sec);
          font-size: 12px;
        }

        section {
          max-width: 1100px;
          margin: 0 auto;
          padding: 80px 40px;
        }

        .section-eyebrow {
          margin-bottom: 16px;
          color: var(--accent);
          font-family: var(--mono);
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        h2 {
          margin-bottom: 12px;
          color: var(--text);
          font-family: var(--display);
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.025em;
        }

        .section-lead {
          max-width: 540px;
          margin-bottom: 48px;
          color: var(--text-sec);
          font-size: 17px;
          line-height: 1.6;
        }

        .divider {
          max-width: 1100px;
          height: 1px;
          margin: 0 auto;
          background: var(--border);
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .product-card {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 16px;
          overflow: hidden;
          padding: 28px;
          border: 1px solid var(--border);
          border-radius: 12px;
          background: var(--bg-card);
          transition: border-color 0.2s, background 0.2s, transform 0.2s;
        }

        .product-card::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 12px;
          background: radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), rgba(99,102,241,0.07) 0%, transparent 60%);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s;
        }

        .product-card:hover {
          border-color: rgba(99,102,241,0.4);
          background: var(--bg-card-hover);
          transform: translateY(-2px);
        }

        .product-card:hover::after { opacity: 1; }

        .product-card.featured {
          grid-column: span 2;
          flex-direction: row;
          align-items: flex-start;
          gap: 32px;
        }

        .product-body {
          position: relative;
          z-index: 1;
          display: flex;
          flex: 1;
          flex-direction: column;
          gap: 16px;
        }

        .product-tag {
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border-radius: 4px;
          font-family: var(--mono);
          font-size: 11px;
          font-weight: 500;
        }

        .tag-live {
          border: 1px solid rgba(34,197,94,0.25);
          background: rgba(34,197,94,0.12);
          color: var(--green);
        }

        .tag-wip {
          border: 1px solid rgba(245,158,11,0.2);
          background: rgba(245,158,11,0.1);
          color: var(--amber);
        }

        .tag-new {
          border: 1px solid rgba(99,102,241,0.3);
          background: var(--accent-dim);
          color: var(--accent);
        }

        .tag-client {
          border: 1px solid rgba(240,239,234,0.18);
          background: rgba(240,239,234,0.07);
          color: var(--text);
        }

        .product-name {
          color: var(--text);
          font-family: var(--display);
          font-size: 21px;
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .product-desc {
          color: var(--text-sec);
          font-size: 14px;
          line-height: 1.6;
        }

        .product-metrics {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }

        .metric {
          display: flex;
          flex-direction: column;
        }

        .metric-val {
          color: var(--text);
          font-family: var(--mono);
          font-size: 18px;
          font-weight: 500;
          line-height: 1.1;
        }

        .metric-key {
          margin-top: 2px;
          color: var(--text-dim);
          font-size: 11px;
        }

        .product-stack,
        .think-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .chip {
          padding: 3px 8px;
          border: 1px solid var(--border);
          border-radius: 4px;
          background: rgba(255,255,255,0.04);
          color: var(--text-dim);
          font-family: var(--mono);
          font-size: 11px;
        }

        .product-links {
          align-self: flex-start;
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: auto;
        }

        .product-link {
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--accent);
          font-size: 13px;
          font-weight: 500;
        }

        .product-link svg { transition: transform 0.15s; }
        .product-link:hover svg { transform: translate(2px, -2px); }
        .product-body > .product-link { margin-top: auto; }

        .featured-panel {
          position: relative;
          z-index: 1;
          flex-shrink: 0;
          width: 200px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 20px;
          border: 1px solid rgba(99,102,241,0.18);
          border-radius: 10px;
          background: var(--accent-dim2);
        }

        .panel-metric { text-align: center; }

        .panel-metric-val {
          display: block;
          color: var(--accent);
          font-family: var(--mono);
          font-size: 24px;
          font-weight: 500;
        }

        .panel-metric-key {
          color: var(--text-sec);
          font-size: 11px;
        }

        .exp-card {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 24px;
          padding: 32px;
          border: 1px solid var(--border);
          border-radius: 12px;
          background: var(--bg-card);
        }

        .exp-role {
          margin-bottom: 4px;
          color: var(--text);
          font-family: var(--display);
          font-size: 20px;
          font-weight: 600;
        }

        .exp-company {
          margin-bottom: 16px;
          color: var(--accent);
          font-size: 14px;
          font-weight: 500;
        }

        .exp-points {
          display: flex;
          flex-direction: column;
          gap: 10px;
          list-style: none;
        }

        .exp-points li {
          position: relative;
          padding-left: 20px;
          color: var(--text-sec);
          font-size: 14px;
          line-height: 1.55;
        }

        .exp-points li::before {
          content: "→";
          position: absolute;
          left: 0;
          color: var(--accent);
          font-size: 13px;
        }

        .exp-impact {
          display: flex;
          flex-direction: column;
          gap: 12px;
          min-width: 160px;
        }

        .impact-item {
          padding: 12px 14px;
          border: 1px solid rgba(99,102,241,0.15);
          border-radius: 8px;
          background: var(--accent-dim2);
        }

        .impact-val {
          display: block;
          color: var(--accent);
          font-family: var(--mono);
          font-size: 20px;
          font-weight: 500;
          line-height: 1;
        }

        .impact-key {
          display: block;
          margin-top: 4px;
          color: var(--text-sec);
          font-size: 11px;
        }

        .thinking-grid,
        .testi-grid,
        .skills-cols {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .think-card,
        .skill-group,
        .testi-card {
          border: 1px solid var(--border);
          border-radius: 12px;
          background: var(--bg-card);
        }

        .think-card {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 24px;
          transition: border-color 0.2s, transform 0.15s;
        }

        .think-card:hover {
          border-color: rgba(99,102,241,0.3);
          transform: translateY(-2px);
        }

        .think-q {
          margin-bottom: 4px;
          color: var(--accent);
          font-family: var(--mono);
          font-size: 12px;
        }

        .think-decision {
          color: var(--text);
          font-family: var(--display);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: -0.01em;
        }

        .think-body {
          color: var(--text-sec);
          font-size: 13.5px;
          line-height: 1.6;
        }

        .think-tags { margin-top: auto; }

        .skill-group { padding: 24px; }

        .skill-group-title {
          margin-bottom: 16px;
          color: var(--accent);
          font-family: var(--mono);
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .skill-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          list-style: none;
        }

        .skill-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--text-sec);
          font-size: 14px;
        }

        .skill-dot {
          flex-shrink: 0;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent);
        }

        .skill-item strong {
          color: var(--text);
          font-weight: 500;
        }

        .testi-card {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 24px;
        }

        .testi-stars {
          color: var(--amber);
          font-size: 14px;
          letter-spacing: 2px;
        }

        .testi-quote {
          flex: 1;
          color: var(--text-sec);
          font-size: 14px;
          font-style: italic;
          line-height: 1.65;
        }

        .testi-by {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .testi-avatar {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(99,102,241,0.3);
          border-radius: 50%;
          background: var(--accent-dim);
          color: var(--accent);
          font-family: var(--mono);
          font-size: 14px;
          font-weight: 600;
        }

        .testi-name {
          display: block;
          color: var(--text);
          font-size: 14px;
          font-weight: 500;
        }

        .testi-role {
          color: var(--text-dim);
          font-size: 12px;
        }

        .dual-cta {
          display: grid;
          grid-template-columns: 1fr 1fr;
          overflow: hidden;
          border: 1px solid var(--border);
          border-radius: 16px;
          background: var(--bg-card);
        }

        .cta-half {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 48px 40px;
        }

        .cta-half:first-child { border-right: 1px solid var(--border); }

        .cta-eyebrow {
          color: var(--accent);
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .cta-title {
          color: var(--text);
          font-family: var(--display);
          font-size: 26px;
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }

        .cta-body {
          color: var(--text-sec);
          font-size: 14px;
          line-height: 1.65;
        }

        .cta-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          list-style: none;
        }

        .cta-list li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          color: var(--text-sec);
          font-size: 13.5px;
        }

        .cta-list li::before {
          content: "✓";
          flex-shrink: 0;
          margin-top: 1px;
          color: var(--green);
          font-weight: 600;
        }

        .cta-actions { margin-top: 8px; }

        .contact-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          padding: 64px 48px;
          border: 1px solid rgba(99,102,241,0.2);
          border-radius: 16px;
          background: linear-gradient(135deg, var(--accent-dim2) 0%, transparent 100%);
          text-align: center;
        }

        .contact-tagline {
          max-width: 600px;
          color: var(--text);
          font-family: var(--display);
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.025em;
        }

        .contact-sub {
          max-width: 480px;
          color: var(--text-sec);
          font-size: 16px;
        }

        .contact-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
        }

        .contact-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border: 1px solid var(--border);
          border-radius: 8px;
          background: rgba(255,255,255,0.04);
          color: var(--text-sec);
          font-family: var(--mono);
          font-size: 13px;
          transition: border-color 0.15s, color 0.15s, transform 0.15s;
        }

        .contact-item:hover {
          border-color: var(--accent);
          color: var(--text);
          transform: translateY(-1px);
        }

        .footer {
          max-width: 1100px;
          margin: 0 auto;
          padding: 32px 40px;
          border-top: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .footer p {
          color: var(--text-dim);
          font-family: var(--mono);
          font-size: 12px;
        }

        .footer-links {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
        }

        .footer-links a {
          color: var(--text-dim);
          font-size: 13px;
          transition: color 0.15s;
        }

        .footer-links a:hover { color: var(--text); }

        .side-profile {
          position: fixed;
          left: 24px;
          top: 50%;
          z-index: 80;
          display: flex;
          flex-direction: column;
          gap: 10px;
          transform: translateY(-50%);
        }

        .side-profile a {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border);
          border-radius: 10px;
          background: rgba(19,24,39,0.82);
          color: var(--text-sec);
          backdrop-filter: blur(10px);
          transition: border-color 0.15s, color 0.15s, transform 0.15s, background 0.15s;
        }

        .side-profile a:hover {
          border-color: var(--accent);
          background: var(--bg-card-hover);
          color: var(--text);
          transform: translateY(-1px);
        }

        @media (max-width: 768px) {
          .nav {
            padding: 16px 20px;
          }

          .nav-links { display: none; }

          .hero {
            padding: 48px 20px 40px;
          }

          .hero-actions {
            margin-bottom: 44px;
          }

          .btn-primary,
          .btn-ghost {
            width: 100%;
            justify-content: center;
          }

          .stats-row {
            grid-template-columns: repeat(2, 1fr);
          }

          section {
            padding: 60px 20px;
          }

          .products-grid {
            grid-template-columns: 1fr;
          }

          .product-card.featured {
            grid-column: span 1;
            flex-direction: column;
          }

          .featured-panel {
            width: 100%;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
          }

          .exp-card {
            grid-template-columns: 1fr;
          }

          .exp-impact {
            flex-direction: row;
            flex-wrap: wrap;
          }

          .impact-item {
            flex: 1 1 130px;
          }

          .thinking-grid,
          .testi-grid,
          .skills-cols {
            grid-template-columns: 1fr;
          }

          .dual-cta {
            grid-template-columns: 1fr;
          }

          .cta-half:first-child {
            border-right: none;
            border-bottom: 1px solid var(--border);
          }

          .cta-half {
            padding: 36px 24px;
          }

          .contact-block {
            padding: 40px 24px;
          }

          .contact-item {
            width: 100%;
            justify-content: center;
            overflow-wrap: anywhere;
          }

          .footer {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }

          .side-profile {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ticker-track { animation: none; }
          * { transition: none !important; }
        }
      `}</style>

      <div className="ticker-wrap" aria-hidden="true">
        <div className="ticker-label">SHIP LOG</div>
        <div className="ticker-track-wrap">
          <div className="ticker-track">
            {[...tickerItems, ...tickerItems].map(([color, text], index) => (
              <span className="ticker-item" key={`${text}-${index}`}>
                <span className={`dot ${color}`} />
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>

      <nav className="nav" aria-label="Main navigation">
        <a className="nav-logo" href="#top" aria-label="Go to top">
          <span>sangamesh</span> lingshetty
        </a>
        <ul className="nav-links">
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a className="nav-cta" href="#hire">
              Hire me
            </a>
          </li>
        </ul>
      </nav>

      <aside className="side-profile" aria-label="Profile links">
        {sideProfileLinks.map((link) => (
          <a href={link.href} target="_blank" rel="noreferrer" aria-label={link.label} key={link.href}>
            <ContactIcon type={link.icon} />
          </a>
        ))}
      </aside>

      <main>
        <header className="hero">
          <div className="hero-badge">OPEN TO WORK · SDE-2 · Immediate Joiner</div>
          <p className="commit-line">
            <span className="hash">a3f91b2</span>{" "}
            <span className="msg">feat: available for hire — bengaluru · remote OK</span>
          </p>
          <h1>
            Backend engineer
            <br />
            who <span className="accent">actually ships</span>.
          </h1>
          <p className="hero-sub">
            1.5 years production at AqueraLabs. Built{" "}
            <strong>3 live SaaS products</strong> and <strong>1 Android app</strong>{" "}
            solo, after hours. Node.js · AWS Serverless · LLM integrations.
            Looking for SDE-2 at AI-first startups, or a backend contract worth
            doing right.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="#hire">
              I'm looking to hire →
            </a>
            <a className="btn-ghost" href="#products">
              See what I've built ↓
            </a>
            <a className="btn-ghost" href={LINKS.email}>
              Email me
            </a>
          </div>
          <div className="stats-row" aria-label="Professional stats">
            {stats.map((item) => (
              <div className="stat-cell" key={item.label}>
                <span className="stat-num">
                  {item.num}
                  {item.suffix ? <span className="accent">{item.suffix}</span> : null}
                </span>
                <span className="stat-label">{item.label}</span>
              </div>
            ))}
          </div>
        </header>

        <Divider />

        <section id="products">
          <SectionIntro
            eyebrow="SHIPPED PRODUCTS"
            title={"Things that are live,<br />not just on GitHub."}
            lead="Solo products and client work that are live in production, with real users, real leads, or real data flowing."
          />
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard product={product} key={product.name} />
            ))}
          </div>
        </section>

        <Divider />

        <section id="experience">
          <SectionIntro
            eyebrow="WHERE I'VE WORKED"
            title="Production. Not demos."
            lead="Every number below came from something that was actually serving customers."
          />
          <article className="exp-card">
            <div>
              <h3 className="exp-role">Backend Software Engineer</h3>
              <p className="exp-company">
                AqueraLabs Pvt. Ltd. · Feb 2025 – Present · Bengaluru
              </p>
              <ul className="exp-points">
                {expPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
            <aside className="exp-impact" aria-label="AqueraLabs impact metrics">
              {impact.map(([value, key]) => (
                <div className="impact-item" key={key}>
                  <span className="impact-val">{value}</span>
                  <span className="impact-key">{key}</span>
                </div>
              ))}
            </aside>
          </article>
        </section>

        <Divider />

        <section>
          <SectionIntro
            eyebrow="REAL DECISIONS"
            title="Why I chose what I chose."
            lead="Trade-offs from real projects. Not what I would have answered in theory."
          />
          <div className="thinking-grid">
            {decisions.map((decision) => (
              <article className="think-card" key={decision.title}>
                <div className="think-q">{decision.label}</div>
                <h3 className="think-decision">{decision.title}</h3>
                <p className="think-body">{decision.body}</p>
                <div className="think-tags">
                  {decision.tags.map((tag) => (
                    <span className="chip" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <Divider />

        <section id="skills">
          <SectionIntro
            eyebrow="TECHNICAL STACK"
            title="What I work with daily."
            lead="Not a checklist — the things I've actually used in production or shipped products with."
          />
          <div className="skills-cols">
            {skillGroups.map((group) => (
              <article className="skill-group" key={group.title}>
                <h3 className="skill-group-title">{group.title}</h3>
                <ul className="skill-list">
                  {group.items.map(([skill, context]) => (
                    <li className="skill-item" key={skill}>
                      <span className="skill-dot" />
                      <span>
                        <strong>{skill}</strong> — {context}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <Divider />

        <section>
          <SectionIntro
            eyebrow="CLIENT FEEDBACK"
            title={"What people say<br />after working with me."}
          />
          <div className="testi-grid">
            {testimonials.map((testimonial) => (
              <article className="testi-card" key={testimonial.name}>
                <div className="testi-stars" aria-label="5 star rating">
                  ★★★★★
                </div>
                <p className="testi-quote">"{testimonial.quote}"</p>
                <div className="testi-by">
                  <div className="testi-avatar">{testimonial.initial}</div>
                  <div>
                    <span className="testi-name">{testimonial.name}</span>
                    <span className="testi-role">{testimonial.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <Divider />

        <section id="hire">
          <div className="dual-cta">
            <div className="cta-half">
              <div className="cta-eyebrow">FULL-TIME · SDE-2</div>
              <h2 className="cta-title">AI startup looking for a backend engineer?</h2>
              <p className="cta-body">
                I want to be the engineer who owns the backend, not just closes
                tickets. Ideal role: early-stage AI product where reliability
                and shipping speed both matter.
              </p>
              <ul className="cta-list">
                <li>Immediate joiner — 1 week notice</li>
                <li>Bengaluru · Open to remote</li>
                <li>Target: SDE-2, ₹18–20L range</li>
                <li>Can own backend end-to-end including infra</li>
              </ul>
              <div className="cta-actions">
                <a className="btn-primary" href={LINKS.roleEmail}>
                  Email me about a role
                </a>
              </div>
            </div>
            <div className="cta-half">
              <div className="cta-eyebrow">CONTRACT · FREELANCE</div>
              <h2 className="cta-title">
                Need a backend shipped without the back-and-forth?
              </h2>
              <p className="cta-body">
                Open to 3-month+ backend contracts. I work async, flag blockers
                early, and push working code before asking for feedback.
              </p>
              <ul className="cta-list">
                <li>REST API design and build</li>
                <li>AWS serverless architecture</li>
                <li>SaaS backend from scratch</li>
                <li>LLM / AI integrations into production</li>
              </ul>
              <div className="cta-actions">
                <a className="btn-ghost" href={LINKS.topmate} target="_blank" rel="noreferrer">
                  Book a free 1:1 call
                  <ExternalIcon />
                </a>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        <section>
          <div className="contact-block">
            <h2 className="contact-tagline">
              Let's build something
              <br />
              that actually ships.
            </h2>
            <p className="contact-sub">
              Backend · AWS Serverless · LLM integrations · Bengaluru · Remote OK
            </p>
            <div className="contact-links">
              {contactLinks.map((link) => (
                <a
                  className="contact-item"
                  href={link.href}
                  key={link.label}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={`Contact Sangamesh on ${link.label}`}
                >
                  <ContactIcon type={link.icon} />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Sangamesh Lingshetty · Built in Bengaluru</p>
        <div className="footer-links">
          <a href={LINKS.portfolio} target="_blank" rel="noreferrer">
            Portfolio
          </a>
          <a href={LINKS.getquest} target="_blank" rel="noreferrer">
            GetQuest
          </a>
          <a href={LINKS.nextoffer} target="_blank" rel="noreferrer">
            NextOffer
          </a>
          <a href={LINKS.deeplock} target="_blank" rel="noreferrer">
            DeepLock
          </a>
        </div>
      </footer>
    </div>
  );
}

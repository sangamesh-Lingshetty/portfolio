import React, { useState, useEffect, useRef } from "react";
import {
  Sun,
  Moon,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Code,
  BookOpen,
  User,
  MessageSquare,
  Briefcase,
  ExternalLink,
  Heart,
  Terminal,
  Globe,
  ArrowRight,
  Quote,
  Database,
  Monitor,
  FileText,
  Home,
  Coffee,
  Award,
  TrendingUp,
  Users,
  Target,
  Rocket,
  CheckCircle,
} from "lucide-react";

const Port = () => {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [slideIn, setSlideIn] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = document.querySelectorAll("[data-scroll]");

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;

        if (isVisible && !slideIn[section.id]) {
          setSlideIn((prev) => ({ ...prev, [section.id]: true }));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [slideIn]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const baseStyles = {
    bg: isDark ? "bg-gray-900" : "bg-gray-50",
    text: isDark ? "text-gray-100" : "text-gray-900",
    accent: isDark ? "text-teal-400" : "text-teal-600",
    card: isDark ? "bg-gray-800/50" : "bg-white",
    border: isDark ? "border-gray-700" : "border-gray-200",
    hover: isDark ? "hover:bg-gray-700" : "hover:bg-gray-100",
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-32 h-32 mb-6 mx-auto">
            <div className="w-full h-full rounded-full bg-teal-500/20 animate-pulse flex items-center justify-center">
              <Code className="w-16 h-16 text-teal-400 animate-bounce" />
            </div>
          </div>
          <div className="text-teal-400 text-xl font-bold animate-pulse">
            Loading Portfolio...
          </div>
        </div>
      </div>
    );
  }

  const navItems = [
    { id: "home", icon: <Home size={16} />, label: "Home" },
    { id: "about", icon: <User size={16} />, label: "About" },
    { id: "experience", icon: <Briefcase size={16} />, label: "Experience" },
    { id: "projects", icon: <Code size={16} />, label: "Projects" },
    { id: "skills", icon: <Terminal size={16} />, label: "Skills" },
    { id: "articles", icon: <FileText size={16} />, label: "Articles" },
    { id: "contact", icon: <MessageSquare size={16} />, label: "Contact" },
  ];

  const handleClick = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`${baseStyles.bg} ${baseStyles.text} min-h-screen transition-colors duration-500`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 md:top-6 left-0 md:left-1/2 w-full md:w-auto transform md:-translate-x-1/2 z-50 px-2 md:px-4 py-2 md:rounded-full border ${
          baseStyles.border
        } ${baseStyles.card} backdrop-blur-lg transition-all duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="w-full flex items-center justify-between sm:justify-center gap-1 sm:gap-2 md:gap-4 overflow-x-auto px-2 py-1 sm:px-4 sm:py-2 no-scrollbar">
          {navItems.map(({ id, icon, label }) => (
            <button
              key={id}
              onClick={() => handleClick(id)}
              className={`min-w-fit px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-1 sm:gap-1.5 md:gap-2 whitespace-nowrap ${
                activeSection === id
                  ? `${
                      isDark
                        ? "bg-teal-500/20 text-teal-400"
                        : "bg-teal-500/10 text-teal-600"
                    }`
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <span className="w-4 sm:w-5">{icon}</span>
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
          <button
            onClick={() => setIsDark(!isDark)}
            className="min-w-fit p-1.5 sm:p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isDark ? (
              <Sun size={16} className="sm:w-5 sm:h-5" />
            ) : (
              <Moon size={16} className="sm:w-5 sm:h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Social Links */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
        {[
          {
            Icon: Github,
            label: "GitHub",
            href: "https://github.com/sangamesh-Lingshetty",
          },
          {
            Icon: Linkedin,
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/sangamesh-lingshetty-5a6647279",
          },
          {
            Icon: Twitter,
            label: "Twitter",
            href: "https://x.com/Sangamesh9819",
          },
          {
            Icon: Mail,
            label: "Email",
            href: "mailto:sangameshlingshetty@gmail.com",
          },
        ].map(({ Icon, label, href }) => (
          <a
            key={label}
            target="_blank"
            href={href}
            className={`p-3 rounded-full border ${baseStyles.border} ${baseStyles.card} ${baseStyles.hover} transition-all duration-300 hover:scale-110 group relative`}
          >
            <Icon size={20} />
            <span className="absolute left-14 px-2 py-1 text-sm rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {label}
            </span>
          </a>
        ))}
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-20 md:pt-32 pb-20">
        {/* Hero Section */}
        <section id="home" className="py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2" />
                <span className="text-sm text-green-500">
                  Open to Backend roles (SDE-1/2) | Remote
                </span>
              </div>

              <div>
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                  SANGAMESH
                  <span className="block text-teal-400">LINGSHETTY</span>
                </h1>
                <p className="text-xl md:text-2xl opacity-80">
                  Backend Engineer Building Scalable Systems
                </p>
                <p className="text-lg opacity-60 mt-2">
                  Currently at Aquera | 11 months production experience
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div
                  className={`${baseStyles.card} p-4 rounded-xl border ${baseStyles.border} text-center`}
                >
                  <div className="text-3xl font-bold text-teal-400">10+</div>
                  <div className="text-sm opacity-60 mt-1">
                    Real Users in Production
                  </div>
                </div>
                <div
                  className={`${baseStyles.card} p-4 rounded-xl border ${baseStyles.border} text-center`}
                >
                  <div className="text-3xl font-bold text-teal-400">50K+</div>
                  <div className="text-sm opacity-60 mt-1">
                    API Requests Daily
                  </div>
                </div>
                <div
                  className={`${baseStyles.card} p-4 rounded-xl border ${baseStyles.border} text-center`}
                >
                  <div className="text-3xl font-bold text-teal-400">99%+</div>
                  <div className="text-sm opacity-60 mt-1">
                    Uptime Maintained
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="/SANGAMESH_ENG22CS1040.pdf"
                  target="_blank"
                  className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Download Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/sangamesh-lingshetty-5a6647279"
                  target="_blank"
                  className={`px-6 py-3 border ${baseStyles.border} rounded-lg ${baseStyles.hover} transition-all duration-300`}
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/sangamesh-Lingshetty"
                  target="_blank"
                  className={`px-6 py-3 border ${baseStyles.border} rounded-lg ${baseStyles.hover} transition-all duration-300`}
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full blur-2xl opacity-20 animate-pulse" />
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-teal-500/50">
                  <img
                    src="/Gemini_Generated_Image_rk0rmmrk0rmmrk0r.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          data-scroll
          className={`py-20 transform transition-all duration-1000 ${
            slideIn.about
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div
            className={`${baseStyles.card} p-8 rounded-xl border ${baseStyles.border}`}
          >
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Backend Engineer at Aquera with{" "}
                <strong>11 months of hands-on experience</strong> building
                production-grade systems using Node.js, Express, PostgreSQL, and
                AWS. I specialize in building scalable APIs, microservices
                architecture, and automation tools.
              </p>

              <div>
                <h3 className="text-xl font-bold text-teal-400 mb-3 flex items-center gap-2">
                  <Target size={24} />
                  What I Do Best:
                </h3>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      className="text-teal-400 mt-1 flex-shrink-0"
                      size={20}
                    />
                    Design RESTful APIs handling 50K+ daily requests
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      className="text-teal-400 mt-1 flex-shrink-0"
                      size={20}
                    />
                    Architect backend systems for enterprise SaaS applications
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      className="text-teal-400 mt-1 flex-shrink-0"
                      size={20}
                    />
                    Optimize database queries and implement caching strategies
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      className="text-teal-400 mt-1 flex-shrink-0"
                      size={20}
                    />
                    Automate workflows using GitHub Actions, cron jobs, webhooks
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      className="text-teal-400 mt-1 flex-shrink-0"
                      size={20}
                    />
                    Build developer tools and productivity solutions
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-teal-400 mb-3 flex items-center gap-2">
                  <Briefcase size={24} />
                  At Aquera:
                </h3>
                <ul className="space-y-2 ml-6">
                  <li>
                    • Building backend infrastructure for 1000+ enterprise
                    customers
                  </li>
                  <li>• Processing 100K+ transactions monthly</li>
                  <li>• Improved system performance by 40%</li>
                  <li>
                    • Working with: Node.js, Express, PostgreSQL, AWS, Docker
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-teal-400 mb-3 flex items-center gap-2">
                  <Rocket size={24} />
                  Side Projects:
                </h3>
                <ul className="space-y-2 ml-6">
                  <li>• Habit Tracker - 10+ active daily users via Telegram</li>
                  <li>
                    • Dev Insight - Enterprise developer analytics (in progress)
                  </li>
                  <li>• Multiple full-stack apps with production deployment</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-teal-400 mb-3 flex items-center gap-2">
                  <TrendingUp size={24} />
                  Technical Foundation:
                </h3>
                <ul className="space-y-2 ml-6">
                  <li>• 500+ DSA problems solved</li>
                  <li>• Strong system design understanding</li>
                  <li>• CI/CD pipelines experience</li>
                  <li>• Active open source contributor</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" data-scroll className="py-20">
          <h2 className="text-3xl font-bold mb-12">Professional Experience</h2>

          {/* Aquera */}
          <div
            className={`${baseStyles.card} p-8 rounded-xl border-2 border-teal-500/30 mb-8`}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-teal-400">
                  Backend Engineer @ AQUERA
                </h3>
                <p className="text-lg opacity-80 mt-1">
                  June 2024 - Present | Bengaluru (11 months)
                </p>
              </div>
              <Briefcase className="text-teal-400" size={32} />
            </div>

            <p className="text-lg opacity-90 mb-6">
              Building scalable backend systems for enterprise SaaS platform
              serving 1000+ customers.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-lg mb-2">
                  Key Responsibilities:
                </h4>
                <ul className="space-y-2 ml-4">
                  <li>
                    • Design and develop RESTful APIs using Node.js & Express
                  </li>
                  <li>
                    • Architect database schemas and optimize query performance
                  </li>
                  <li>• Implement caching strategies using Redis</li>
                  <li>• Build automation tools for internal workflows</li>
                  <li>• Deploy and maintain services on AWS infrastructure</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2 text-teal-400">
                  Impact & Achievements:
                </h4>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-500 mt-1 flex-shrink-0"
                      size={20}
                    />
                    Built features processing 100K+ monthly transactions
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-500 mt-1 flex-shrink-0"
                      size={20}
                    />
                    Reduced API response time by 40%
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-500 mt-1 flex-shrink-0"
                      size={20}
                    />
                    Implemented automated testing reducing bugs by 30%
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-500 mt-1 flex-shrink-0"
                      size={20}
                    />
                    Contributed to architecture serving 50K+ daily requests
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-500 mt-1 flex-shrink-0"
                      size={20}
                    />
                    Maintained 99%+ uptime across all services
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Node.js",
                    "Express.js",
                    "PostgreSQL",
                    "AWS",
                    "Docker",
                    "Redis",
                    "Git",
                    "GitHub Actions",
                    "REST APIs",
                    "Microservices",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Previous Experience */}
          <div className="space-y-6">
            <div
              className={`${baseStyles.card} p-6 rounded-xl border ${baseStyles.border}`}
            >
              <div className="flex items-start gap-4">
                <Code className="text-teal-400 mt-1" size={24} />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold">
                        Web Developer Intern
                      </h3>
                      <p className="opacity-80">CODE CLAUSE</p>
                    </div>
                    <span className="text-sm opacity-60">July 2023</span>
                  </div>
                  <p className="opacity-80 text-sm">
                    Enhanced e-commerce site performance by 20%, implemented
                    real-time data features using WebSockets, and developed
                    real-time order tracking system using Firebase.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`${baseStyles.card} p-6 rounded-xl border ${baseStyles.border}`}
            >
              <div className="flex items-start gap-4">
                <BookOpen className="text-teal-400 mt-1" size={24} />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold">
                        Bachelor's in Computer Science and Engineering
                      </h3>
                      <p className="opacity-80">Dayananda Sagar University</p>
                    </div>
                    <span className="text-sm opacity-60">2022 - 2025</span>
                  </div>
                  <p className="opacity-80 text-sm">
                    Developed hands-on projects including drone technology and
                    database management systems. Strong foundation in
                    algorithms, system design, and software engineering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" data-scroll className="py-20">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>

          {/* Habit Tracker - Highlighted */}
          <div
            className={`${baseStyles.card} p-8 rounded-xl border-2 border-teal-500 mb-12`}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-3xl font-bold text-teal-400 mb-2">
                  HABIT TRACKER
                </h3>
                <p className="text-lg opacity-80">Real-World SaaS Product</p>
              </div>
              <Users className="text-teal-400" size={40} />
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg mb-2 text-red-400">
                  THE PROBLEM:
                </h4>
                <p className="opacity-80">
                  People struggle with habit consistency. Traditional habit
                  trackers require app downloads, logins, manual entry - too
                  much friction.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2 text-green-400">
                  THE SOLUTION:
                </h4>
                <p className="opacity-80">
                  Built automated habit tracking via Telegram bot integration,
                  eliminating all friction.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">Key Features:</h4>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-teal-400 mt-1" size={20} />
                    Telegram Bot Integration - Track via simple messages
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-teal-400 mt-1" size={20} />
                    GitHub Cron Jobs - Automated daily reminders
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-teal-400 mt-1" size={20} />
                    Kanban Board - Visual progress tracking
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-teal-400 mt-1" size={20} />
                    Real-time Analytics - Streak tracking
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-teal-400 mt-1" size={20} />
                    Zero-friction UX - No app downloads needed
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "Node.js",
                    "Express.js",
                    "PostgreSQL",
                    "Telegram Bot API",
                    "GitHub Actions",
                    "Webhooks",
                    "Vercel",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-500/10 to-purple-500/10 p-6 rounded-lg border border-teal-500/30">
                <h4 className="font-bold text-lg mb-4 text-teal-400">
                  THE IMPACT:
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-400">10+</div>
                    <div className="text-sm opacity-80">Active Daily Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-400">500+</div>
                    <div className="text-sm opacity-80">Habits Tracked</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-400">85%</div>
                    <div className="text-sm opacity-80">User Retention</div>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-400">100+</div>
                    <div className="text-sm opacity-80">Daily Reminders</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-400">
                      &lt;200ms
                    </div>
                    <div className="text-sm opacity-80">API Response</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-400">99%+</div>
                    <div className="text-sm opacity-80">Uptime (3 mo)</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://habit-frontend-psi.vercel.app/"
                  target="_blank"
                  className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-all"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/sangamesh-Lingshetty"
                  target="_blank"
                  className={`px-6 py-3 border ${baseStyles.border} rounded-lg ${baseStyles.hover} transition-all`}
                >
                  View Code
                </a>
              </div>
            </div>
          </div>

          {/* Dev Insight Project */}
          <div
            className={`${baseStyles.card} p-8 rounded-xl border ${baseStyles.border} mb-8`}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">DEV INSIGHT</h3>
                <p className="text-lg opacity-80">
                  Enterprise Developer Analytics
                </p>
                <span className="inline-block px-3 py-1 bg-yellow-500/10 text-yellow-400 rounded-full text-sm mt-2">
                  40% Complete - In Progress
                </span>
              </div>
              <TrendingUp className="text-teal-400" size={32} />
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-bold mb-2">The Problem:</h4>
                <p className="opacity-80 text-sm">
                  Engineering teams lack visibility into development patterns,
                  bottlenecks, and productivity metrics across repositories.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-2">The Solution:</h4>
                <p className="opacity-80 text-sm">
                  Building comprehensive developer analytics platform that
                  integrates with GitHub for actionable insights.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-2">Key Features (In Progress):</h4>
                <ul className="space-y-1 ml-4 text-sm">
                  <li>• GitHub Integration - Automatic data collection</li>
                  <li>• Commit Analytics - Track patterns and productivity</li>
                  <li>• Code Quality Metrics - Analyze complexity</li>
                  <li>• Team Insights - Collaboration patterns</li>
                  <li>• Smart Alerts - Detect anomalies</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Node.js",
                    "Express",
                    "GraphQL",
                    "PostgreSQL",
                    "Redis",
                    "React",
                    "GitHub API",
                    "Docker",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mt-4">
                <a
                  href="https://github.com/sangamesh-Lingshetty"
                  target="_blank"
                  className={`px-6 py-3 border ${baseStyles.border} rounded-lg ${baseStyles.hover} transition-all text-sm`}
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>

          {/* Other Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* RBAC */}
            <div
              className={`${baseStyles.card} p-6 rounded-xl border ${baseStyles.border} hover:scale-105 transition-all duration-300`}
            >
              <h3 className="text-xl font-bold mb-3">
                RBAC (Role-Based Access Control)
              </h3>
              <p className="opacity-80 text-sm mb-4">
                Admin panel with JWT authentication. Admins perform CRUD
                operations on roles, manage users and permissions. Fully
                responsive design.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React.js", "JWT", "MockApi", "Tailwind CSS"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://frontend-assignment-vrv.onrender.com/"
                target="_blank"
                className="inline-flex items-center gap-2 text-sm text-teal-400 hover:underline"
              >
                View Project <ArrowRight size={16} />
              </a>
            </div>

            {/* Abhi Book Karo */}
            <div
              className={`${baseStyles.card} p-6 rounded-xl border ${baseStyles.border} hover:scale-105 transition-all duration-300`}
            >
              <h3 className="text-xl font-bold mb-3">Abhi Book Karo</h3>
              <p className="opacity-80 text-sm mb-4">
                Home rental platform like Airbnb. Users find affordable homes,
                book properties, negotiate with owners. Payment via Razorpay,
                notifications via WebSocket.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["MERN Stack", "WebSocket", "Razorpay", "Firebase"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-purple-500/10 text-purple-400 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <a
                href="https://github.com/sangamesh-Lingshetty"
                target="_blank"
                className="inline-flex items-center gap-2 text-sm text-teal-400 hover:underline"
              >
                View Project <ArrowRight size={16} />
              </a>
            </div>

            {/* Movie Recommendation */}
            <div
              className={`${baseStyles.card} p-6 rounded-xl border ${baseStyles.border} hover:scale-105 transition-all duration-300`}
            >
              <h3 className="text-xl font-bold mb-3">
                Movie Recommendation System using GAN
              </h3>
              <p className="opacity-80 text-sm mb-4">
                ML-based movie recommendation system utilizing GAN model for
                personalized suggestions based on user preferences.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "GAN", "Machine Learning", "Jupyter"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <a
                href="https://github.com/sangamesh-Lingshetty"
                target="_blank"
                className="inline-flex items-center gap-2 text-sm text-teal-400 hover:underline"
              >
                View Project <ArrowRight size={16} />
              </a>
            </div>

            {/* E-Waste Management */}
            <div
              className={`${baseStyles.card} p-6 rounded-xl border ${baseStyles.border} hover:scale-105 transition-all duration-300`}
            >
              <h3 className="text-xl font-bold mb-3">
                E-Waste Management System
              </h3>
              <p className="opacity-80 text-sm mb-4">
                Platform for users to report and drop electronic waste items.
                BBMP collects waste after receiving details from users.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "PHP", "Google API"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-green-500/10 text-green-400 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/sangamesh-Lingshetty"
                target="_blank"
                className="inline-flex items-center gap-2 text-sm text-teal-400 hover:underline"
              >
                View Project <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" data-scroll className="py-20">
          <h2 className="text-3xl font-bold mb-12">Technical Skills</h2>

          <div className="space-y-8">
            {/* Backend & APIs */}
            <div
              className={`${baseStyles.card} p-6 rounded-xl border ${baseStyles.border}`}
            >
              <h3 className="text-xl font-bold mb-6 text-teal-400">
                Backend & APIs
              </h3>
              <div className="space-y-4">
                {[
                  {
                    name: "Node.js",
                    level: 85,
                    desc: "Production at Aquera + 5 projects",
                  },
                  {
                    name: "Express.js",
                    level: 85,
                    desc: "All backend projects",
                  },
                  { name: "Python", level: 60, desc: "Automation scripts" },
                  { name: "REST APIs", level: 90, desc: "Built 20+ endpoints" },
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm opacity-60">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-1">
                      <div
                        className="bg-teal-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <p className="text-xs opacity-60">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Databases & Caching */}
            <div
              className={`${baseStyles.card} p-6 rounded-xl border ${baseStyles.border}`}
            >
              <h3 className="text-xl font-bold mb-6 text-teal-400">
                Databases & Caching
              </h3>
              <div className="space-y-4">
                {[
                  { name: "PostgreSQL", level: 80, desc: "Primary database" },
                  { name: "MongoDB", level: 70, desc: "NoSQL projects" },
                  { name: "Redis", level: 60, desc: "Caching layer" },
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm opacity-60">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-1">
                      <div
                        className="bg-purple-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <p className="text-xs opacity-60">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div
              className={`${baseStyles.card} p-6 rounded-xl border ${baseStyles.border}`}
            >
              <h3 className="text-xl font-bold mb-6 text-teal-400">
                Cloud & DevOps
              </h3>
              <div className="space-y-4">
                {[
                  { name: "AWS", level: 70, desc: "EC2, S3, Lambda" },
                  { name: "Docker", level: 65, desc: "Containerization" },
                  {
                    name: "Git/GitHub",
                    level: 95,
                    desc: "Version control + CI/CD",
                  },
                  { name: "Vercel", level: 80, desc: "Deployment" },
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm opacity-60">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-1">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <p className="text-xs opacity-60">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Currently Learning */}
            <div
              className={`${baseStyles.card} p-6 rounded-xl border ${baseStyles.border} border-yellow-500/30`}
            >
              <h3 className="text-xl font-bold mb-4 text-yellow-400 flex items-center gap-2">
                <Rocket size={24} />
                Currently Learning
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Microservices Architecture",
                  "Kubernetes & Container Orchestration",
                  "GraphQL APIs",
                  "Event-Driven Architecture (Kafka, RabbitMQ)",
                  "Advanced System Design Patterns",
                  "Distributed Systems",
                ].map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* My Journey Section */}
        <section id="journey" data-scroll className="py-20">
          <h2 className="text-3xl font-bold mb-12">My Journey</h2>

          <div
            className={`${baseStyles.card} p-8 rounded-xl border ${baseStyles.border}`}
          >
            <h3 className="text-2xl font-bold text-teal-400 mb-6">
              From Curiosity to Production Code
            </h3>

            <div className="space-y-8">
              <p className="text-lg opacity-90">
                Started coding with simple scripts and curiosity about how web
                applications work. Today, I'm building systems that serve
                thousands of users.
              </p>

              <div className="space-y-6">
                <div className="border-l-4 border-teal-500 pl-6">
                  <h4 className="font-bold text-lg mb-2">
                    2022-2023: The Foundation
                  </h4>
                  <ul className="space-y-1 opacity-80 text-sm">
                    <li>• JavaScript, HTML, CSS fundamentals</li>
                    <li>• Built first CRUD application</li>
                    <li>• Learned Git and GitHub basics</li>
                  </ul>
                </div>

                <div className="border-l-4 border-teal-500 pl-6">
                  <h4 className="font-bold text-lg mb-2">
                    2024: The Breakthrough
                  </h4>
                  <ul className="space-y-1 opacity-80 text-sm">
                    <li>• Dove deep into backend development</li>
                    <li>• Mastered Node.js, Express, PostgreSQL</li>
                    <li>• Got first job at Aquera</li>
                    <li>• Deployed first production feature</li>
                  </ul>
                </div>

                <div className="border-l-4 border-teal-500 pl-6">
                  <h4 className="font-bold text-lg mb-2">
                    2024-2025: Building & Growing
                  </h4>
                  <ul className="space-y-1 opacity-80 text-sm">
                    <li>• Built Habit Tracker with 10 real users</li>
                    <li>• Started Dev Insight enterprise project</li>
                    <li>• Solved 500+ DSA problems</li>
                    <li>• Active open source contributor</li>
                  </ul>
                </div>

                <div className="border-l-4 border-yellow-500 pl-6">
                  <h4 className="font-bold text-lg mb-2 text-yellow-400">
                    2025: What's Next
                  </h4>
                  <ul className="space-y-1 opacity-80 text-sm">
                    <li>• Exploring microservices architecture</li>
                    <li>• Learning system design at scale</li>
                    <li>• Building in public</li>
                    <li>• Seeking next challenge</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-500/10 to-purple-500/10 p-6 rounded-lg border border-teal-500/30 mt-8">
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Target size={24} className="text-teal-400" />
                  What Drives Me
                </h4>
                <p className="opacity-90 mb-4">
                  I don't just write code. I build products that people actually
                  use and love. That's why my Habit Tracker has 10 real users -
                  not imaginary ones.
                </p>
                <p className="opacity-90 mb-4">
                  Every project I build solves a real problem. Every line of
                  code I write, I ask: "Will this create value?"
                </p>
                <blockquote className="border-l-4 border-teal-500 pl-4 italic text-teal-400">
                  "Code is cheap. Impact is expensive."
                </blockquote>
                <div className="mt-4 space-y-2">
                  <p className="font-medium">I focus on:</p>
                  <ul className="space-y-1 ml-4 text-sm">
                    <li>• Solving real problems, not building for portfolio</li>
                    <li>• Writing maintainable code, not clever code</li>
                    <li>• Shipping features, not perfect features</li>
                    <li>• Learning by building, not just tutorials</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" data-scroll className="py-20">
          <h2 className="text-3xl font-bold mb-12">Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Full Stack Development",
                issuer: "Udemy",
                date: "July 2024",
                link: "/starbugs.pdf",
              },
              {
                title: "Problem Solving",
                issuer: "GeeksforGeeks",
                date: "June 2024",
                link: "/coding.pdf",
              },
              {
                title: "Amazon Web Services",
                issuer: "AWS Academy",
                date: "May 2023",
                link: "/AWS..pdf",
              },
              {
                title: "Web Development",
                issuer: "Code Clause",
                date: "Sep 2023",
                link: "/code clause.pdf",
              },
              {
                title: "Web Stack Academy",
                issuer: "Full Stack Development",
                date: "Dec 2023",
                link: "/masai.pdf",
              },
              {
                title: "Computer Vision",
                issuer: "Great Learning",
                date: "Oct 2024",
                link: "/great_learning.PNG",
              },
            ].map((cert) => (
              <div
                key={cert.title}
                className={`${baseStyles.card} p-6 rounded-xl border ${baseStyles.border} hover:scale-105 transition-all duration-300`}
              >
                <Award className="text-teal-400 mb-3" size={32} />
                <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                <p className="text-sm opacity-80 mb-1">{cert.issuer}</p>
                <p className="text-xs opacity-60 mb-4">{cert.date}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm text-teal-400 hover:underline"
                >
                  View Certificate <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Articles Section */}
        <section id="articles" data-scroll className="py-20">
          <h2 className="text-3xl font-bold mb-12">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Creating an Email OTP System with React.js",
                date: "Jan 2024",
                readTime: "7 min read",
                description:
                  "A step-by-step guide to implementing a secure and efficient email OTP system using React.js.",
                tags: ["React", "Authentication", "Security"],
              },
              {
                title: "Leveraging Firebase Real-Time Database",
                date: "Dec 2023",
                readTime: "6 min read",
                description:
                  "Learn how to use Firebase Real-Time Database for building dynamic and responsive web applications.",
                tags: ["Firebase", "Real-Time", "Database"],
              },
              {
                title: "Connecting to MongoDB: A Beginner's Guide",
                date: "Nov 2023",
                readTime: "5 min read",
                description:
                  "A simple walkthrough on setting up your first database connection with MongoDB and understanding its core concepts.",
                tags: ["MongoDB", "Databases", "Backend"],
              },
            ].map((article) => (
              <div
                key={article.title}
                className={`${baseStyles.card} p-6 rounded-xl border ${baseStyles.border} hover:scale-105 transition-all duration-300`}
              >
                <div className="flex items-center gap-2 text-sm opacity-60 mb-3">
                  <FileText size={16} />
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                <p className="text-sm opacity-80 mb-4">{article.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-teal-500/10 text-teal-400 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="https://hashnode.com/@SangameshLingshetty"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm text-teal-400 hover:underline"
                >
                  Read More <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section id="cta" data-scroll className="py-20">
          <div
            className={`${baseStyles.card} p-8 md:p-12 rounded-xl border-2 border-teal-500 text-center`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Build Something Together
            </h2>

            <div className="max-w-3xl mx-auto space-y-8">
              <div>
                <h3 className="text-xl font-bold text-teal-400 mb-4 flex items-center justify-center gap-2">
                  <Target size={24} />
                  What I'm Looking For
                </h3>
                <p className="text-lg opacity-90 mb-4">
                  Backend Engineer or Full-Stack Engineer role (SDE-1/2) at
                  product-based companies where I can:
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-start gap-2">
                    <CheckCircle
                      className="text-teal-400 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span>Work on systems serving millions of users</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle
                      className="text-teal-400 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span>Learn from experienced engineers</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle
                      className="text-teal-400 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span>Build features with measurable impact</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle
                      className="text-teal-400 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span>Grow technically and professionally</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div
                  className={`${baseStyles.card} p-4 rounded-lg border ${baseStyles.border}`}
                >
                  <Briefcase className="text-teal-400 mx-auto mb-2" size={32} />
                  <h4 className="font-bold mb-1">Role Preference</h4>
                  <p className="text-sm opacity-80">
                    Backend-heavy or Full-Stack
                  </p>
                  <p className="text-xs opacity-60 mt-1">
                    Startup or mid-size companies
                  </p>
                </div>
                <div
                  className={`${baseStyles.card} p-4 rounded-lg border ${baseStyles.border}`}
                >
                  <Globe className="text-teal-400 mx-auto mb-2" size={32} />
                  <h4 className="font-bold mb-1">Expected CTC</h4>
                  <p className="text-sm opacity-80">---- LPA</p>
                  <p className="text-xs opacity-60 mt-1">
                    Negotiable based on role
                  </p>
                </div>
                <div
                  className={`${baseStyles.card} p-4 rounded-lg border ${baseStyles.border}`}
                >
                  <Rocket className="text-teal-400 mx-auto mb-2" size={32} />
                  <h4 className="font-bold mb-1">Availability</h4>
                  <p className="text-sm opacity-80">Immediate Joiner</p>
                  <p className="text-xs opacity-60 mt-1">
                    1-week notice period
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="mailto:sangameshlingshetty@gmail.com"
                    className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-all hover:scale-105 flex items-center gap-2"
                  >
                    <Mail size={20} />
                    Email Me
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sangamesh-lingshetty-5a6647279"
                    target="_blank"
                    className={`px-6 py-3 border ${baseStyles.border} rounded-lg ${baseStyles.hover} transition-all hover:scale-105 flex items-center gap-2`}
                  >
                    <Linkedin size={20} />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/sangamesh-Lingshetty"
                    target="_blank"
                    className={`px-6 py-3 border ${baseStyles.border} rounded-lg ${baseStyles.hover} transition-all hover:scale-105 flex items-center gap-2`}
                  >
                    <Github size={20} />
                    GitHub
                  </a>
                </div>
              </div>

              <div className="text-sm opacity-60">
                <p className="mb-2">🤝 Open to:</p>
                <p>
                  Full-time roles • Contract/Freelance (3+ months) • Technical
                  consulting • Collaboration on interesting problems
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" data-scroll className="py-20">
          <div
            className={`max-w-2xl mx-auto ${baseStyles.card} rounded-xl border ${baseStyles.border} p-8`}
          >
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Heart className="text-red-500" />
              Send Me a Message
            </h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 rounded-lg bg-transparent border ${baseStyles.border} focus:border-teal-500 transition-colors outline-none`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className={`w-full px-4 py-3 rounded-lg bg-transparent border ${baseStyles.border} focus:border-teal-500 transition-colors outline-none`}
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg bg-transparent border ${baseStyles.border} focus:border-teal-500 transition-colors outline-none resize-none`}
                  placeholder="Your message..."
                />
              </div>
              <button
                onClick={() => alert("Thank you! I'll get back to you soon.")}
                className="w-full px-6 py-3 rounded-lg bg-teal-500 hover:bg-teal-600 text-white transition-all hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center border-t border-gray-800">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} All Rights Reserved. Developed with{" "}
            <Heart size={14} className="inline text-red-500" /> by SANGAMESH
            LINGSHETTY
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Port;

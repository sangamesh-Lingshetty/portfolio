import React, { useState, useEffect, useRef } from "react";
import {
  Sun,
  Moon,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Instagram,
  Code,
  BookOpen,
  User,
  MessageSquare,
  Briefcase,
  ExternalLink,
  ChevronRight,
  Heart,
  Terminal,
  Star,
  Globe,
  Book,
  ArrowRight,
  Quote,
  Database,
  Monitor,
  FileText,
  Home,
  Coffee,
  Code2,
  FileJson,
  Hammer,
  Layout,
  Library,
  TestTube,
  Workflow,
  Award,
  UserCircle,
} from "lucide-react";

const Port = () => {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [slideIn, setSlideIn] = useState({});
  const [isVisible, setIsVisible] = useState({});
  const testimonialsRef = useRef(null);

  // Previous useEffect code remains the same
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = document.querySelectorAll("[data-scroll]");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        setIsVisible((prev) => ({ ...prev, [section.id]: isVisible }));
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll animations
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
          <div className="w-40 h-40 mb-8 mx-auto">
            <img
              src="/kung-fu-panda-png-filename-kung-fu-panda-3-po-png-1600.png"
              alt="Loading"
              className="rounded-full animate-bounce"
            />
          </div>
          <div className="text-teal-400 text-xl font-bold animate-pulse">
            Welcome to SANGAMESH's Portfolio
          </div>
        </div>
      </div>
    );
  }

  const timeline = [
    {
      year: "2018 - 2022",
      title: "Diploma in Computer Science",
      company: "Diploma Technology Education Board",
      details:
        "Engaged in comprehensive coursework covering computer architecture, algorithms, web development, and database management.gaining practical experience in tools like SQL, JavaScript, and basic server-side programming.",
      side: "left",
      icon: <BookOpen size={22} />,
    },

    {
      year: "2022 - 2025",
      title: "Bachelor's in Computer Science and Engineering",
      company: "Dayananda Sagar University",
      details:
        "Developed and worked on several hands-on projects including a drone technology initiative focused on autonomous navigation and real-time data processing. Also, contributed to a database management system project designed to handle large-scale real-time data, strengthening skills in data storage, retrieval, and optimization.",
      side: "right",
      icon: <BookOpen size={20} />,
    },

    {
      year: "July 2023",
      title: "Web Developer Intern",
      company: "CODE CLAUSE",
      details:
        "As a Web Developer Intern at CODE CLAUSE, I enhanced the performance of an e-commerce site, boosting user engagement by 20% and improving page load time by 10%. I implemented real-time data features using WebSockets, improving application responsiveness. Additionally, I worked on optimizing the product search functionality and developed a real-time order tracking system using Firebase.",
      side: "left",
      icon: <Code size={22} />,
    },
    {
      year: "2023",
      title: "CryptoGo Hackathon",
      company: "Competitive Achievement",
      details:
        "Participated in the CryptoGo Hackathon focused on blockchain technology, where I collaborated with a team to develop a decentralized application (DApp). The project aimed at streamlining cryptocurrency transactions with enhanced security features. I gained hands-on experience in smart contracts, Ethereum, and blockchain consensus algorithms.",
      side: "right",
      icon: <Award size={22} />,
    },
  ];

  // const skills = [
  //   { name: "Frontend Development", icon: <Monitor size={24} />, level: 90 },
  //   { name: "Backend Development", icon: <Database size={24} />, level: 85 },
  //   { name: "Cloud Computing", icon: <Globe size={24} />, level: 80 },
  //   { name: "System Design", icon: <Terminal size={24} />, level: 75 },
  // ];

  const skills = [
    {
      name: "Languages",
      icon: <Code2 className="w-12 h-12" />,
      description: "JavaScript, HTML, CSS, Java",
      color: "text-blue-500",
    },
    {
      name: "Frameworks & Libraries",
      icon: <Library className="w-12 h-12" />,
      description: "React, Bootstrap, Node.js, Express.js",
      color: "text-green-500",
    },
    {
      name: "Databases",
      icon: <Database className="w-12 h-12" />,
      description: "MySQL, MongoDB",
      color: "text-purple-500",
    },
    {
      name: "Web Services",
      icon: <FileJson className="w-12 h-12" />,
      description: "RESTful APIs, SOAP",
      color: "text-yellow-500",
    },
    {
      name: "Tools & Platforms",
      icon: <Hammer className="w-12 h-12" />,
      description: "Git, GitHub, Firebase",
      color: "text-red-500",
    },
    {
      name: "Testing & Automation",
      icon: <TestTube className="w-12 h-12" />,
      description: "Postman",
      color: "text-indigo-500",
    },
    {
      name: "Development Methods",
      icon: <Workflow className="w-12 h-12" />,
      description: "Agile, Scrum",
      color: "text-teal-500",
    },
    {
      name: "UI/UX Design",
      icon: <Layout className="w-12 h-12" />,
      description: "Problem-solving, Debugging, UI/UX Design",
      color: "text-orange-500",
    },
  ];

  const codeSnippet = `
function DeveloperLife() {
  const developer = "Sangamesh 🧑‍💻";
  const habits = [
    { name: "Coding", icon: "💻" },
    { name: "Singing", icon: "🎤" },
    { name: "Gym", icon: "🏋️" },
    { name: "Learning", icon: "📚" }
  ];

  while (alive) {
    console.log(\`👨‍💻 Developer: \${developer}\`);
    habits.forEach((habit) =>
      console.log(\`🔹 Enjoying: \${habit.name}\`)
    );
    console.log("☕Motivation:Code,Chai,Repeat!");
    sleep();
  }
}
`;

  const certificates = [
    {
      title: "Full Stack Development",
      issuer: "Udemy",
      date: "July 2024",
      description:
        "Comprehensive certification in modern web development technologies",
      link: "/starbugs.pdf",
    },
    {
      title: "Problem Solving",
      issuer: "GeeksforGeeks",
      date: "June 2024",
      description:
        "Certification in algorithmic problem-solving and data structures",
      link: "/coding.pdf",
    },
    {
      title: "Amazon Web Services",
      issuer: "AWS Academy",
      date: "May 2023",
      description: "Mastery of core web development concepts and practices",
      link: "/AWS..pdf",
    },
    {
      title: "Web Development",
      issuer: "Code Clause",
      date: "Sep 2023",
      description: "Mastery of core web development concepts and practices",
      link: "/code clause.pdf",
    },
    {
      title: "Web Stack Academy",
      issuer: "Full stack development",
      date: "Dec 2023",
      description: "Mastery of core Full stack development course",
      link: "/masai.pdf",
    },
    {
      title: "Greate learning",
      issuer: "Computer vision",
      date: "Oct 2024",
      description: "Mastery of core computer vision stack development course",
      link: "/great_learning.PNG",
    },
  ];

  const projects = [
    {
      title: "RBCT (Role-Based Access Control and Admin Panel)",
      description:
        "A project featuring an admin panel with strong authentication using JWT tokens. Admins can perform CRUD operations on roles and manage users and permissions. The design is fully responsive and optimized for all devices.",
      tech: [
        "React.js",
        "Javascript",
        "MockApi",
        "JWT Tokens",
        "Css",
        "Tailwind CSS",
      ],
      image: "/Role-Based-Access-Control.jpg",
      gradient: "from-teal-500 to-blue-500",
      link: "https://frontend-assignment-vrv.onrender.com/",
    },
    {
      title: "Abhi Book Karo (Home Rental Platform)",
      description:
        "A platform similar to Airbnb, allowing users to find affordable homes near their location. Admins can add homes, and users can book, negotiate, and interact with property owners. Payment integration with Razorpay and notifications through WebSocket.IO and Nodemailer.",
      tech: [
        "MERN Stack",
        "WebSocket.IO",
        "Nodemailer",
        "Firebase",
        "JWT Authentication",
        "Razorpay",
      ],
      image: "/abhibookkaro.png",
      gradient: "from-purple-500 to-pink-500",
      link: "https://github.com/sangamesh-Lingshetty",
    },
    {
      title: "Movie Recommendation System using GAN",
      description:
        "A movie recommendation system that utilizes a GAN model for suggesting movies based on user preferences.",
      tech: ["jupyter", "Python", "GAN", "Machine Learning"],
      image: "/132905471-3ef27af4-ecc6-44bf-a47c-5ccf2250410c.jpg",
      gradient: "from-orange-500 to-red-500",
      link: "https://github.com/sangamesh-Lingshetty",
    },
    {
      title: "E-Waste Management System",
      description:
        "A platform for users to report and drop electronic waste items. BBMP collects the waste after receiving details from users.",
      tech: ["HTML", "CSS", "PHP", "Google API"],
      image: "/e-waste-management.png",
      gradient: "from-green-500 to-yellow-500",
      link: "https://github.com/sangamesh-Lingshetty",
    },
    {
      title: "Plant Disease Detection using Machine Learning",
      description:
        "A machine learning-based project that detects plant diseases through image recognition using Convolutional Neural Networks (CNN).",
      tech: ["TensorFlow", "CNN", "Java", "Machine Learning"],
      image: "/plant.jpg", // Make sure the image is correctly placed in the public folder
      gradient: "from-teal-400 to-green-400",
      link: "https://github.com/sangamesh-Lingshetty",
    },
    {
      title: "E-Commerce Website",
      description:
        "An e-commerce website with responsive design, login functionality, and 'Add to Cart' feature. Built using React.js, Bootstrap, and Tailwind CSS.",
      tech: ["React.js", "Bootstrap", "Tailwind CSS", "JavaScript"],
      image: "/e-commerce-logo-with-pointer-and-shopping-bag-free-vector.jpg", // Make sure the image is correctly placed in the public folder
      gradient: "from-purple-500 to-indigo-500",
      link: "https://github.com/sangamesh-Lingshetty/",
    },
  ];

  const testimonials = [
    {
      name: "Abhishek ",
      role: "CEO at DimensionsX",
      content:
        "You brought incredible technical skills and creativity to the table. The final product was not only visually stunning but also functionally robust. Thank you for turning our vision into reality!",
      image: "/mamma_photo.png",
    },
    {
      name: "Vivek",
      role: "Clint",
      content:
        "From the initial consultation to the final delivery, your professionalism and attention to detail were outstanding. The project has already started yielding positive results for our business.",
      image: "/vivek.png",
    },
    {
      name: "Abhishek ",
      role: "Clint",
      content:
        "The solution you provided was both innovative and practical, perfectly aligning with our goals. Your communication and problem-solving skills truly stood out throughout the process.",
      image: "/vivek.png",
    },
    {
      name: "Indian ",
      role: "Clint",
      content:
        "Working with you has been an absolute pleasure. Your ability to understand our requirements and deliver a seamless, user-friendly solution has exceeded our expectations. We’re looking forward to future collaborations!",
      image: "/vivek.png",
    },
  ];

  const navItems = [
    { id: "home", icon: <Home size={16} />, label: "Home" },
    { id: "about", icon: <User size={16} />, label: "About" },
    { id: "projects", icon: <Code size={16} />, label: "Projects" },
    { id: "articles", icon: <FileText size={16} />, label: "Articles" },
    { id: "experience", icon: <Briefcase size={16} />, label: "Experience" },
    { id: "contact", icon: <MessageSquare size={16} />, label: "Contact" },
  ];

  const handleClick = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Enhanced Articles Section
  const articles = [
    {
      title: "Creating an Email OTP System with React.js",
      date: "Jan 2024",
      readTime: "7 min read",
      description:
        "A step-by-step guide to implementing a secure and efficient email OTP system using React.js.",
      tags: ["React", "Authentication", "Security"],
      link: "https://hashnode.com/@SangameshLingshetty",
    },
    {
      title: "Leveraging Firebase Real-Time Database",
      date: "Dec 2023",
      readTime: "6 min read",
      description:
        "Learn how to use Firebase Real-Time Database for building dynamic and responsive web applications.",
      tags: ["Firebase", "Real-Time", "Database"],
      link: "https://hashnode.com/@SangameshLingshetty",
    },
    {
      title: "Connecting to MongoDB: A Beginner's Guide",
      date: "Nov 2023",
      readTime: "5 min read",
      description:
        "A simple walkthrough on setting up your first database connection with MongoDB and understanding its core concepts.",
      tags: ["MongoDB", "Databases", "Backend"],
      link: "https://hashnode.com/@SangameshLingshetty",
    },
  ];

  return (
    <div
      className={`${baseStyles.bg} ${baseStyles.text} min-h-screen transition-colors duration-500`}
    >
      {/* Previous sections remain the same until Articles */}

      {/* Navigation */}
      <nav
        className={`fixed top-0 md:top-6 left-0 md:left-1/2 w-full md:w-auto transform md:-translate-x-1/2 z-50 px-2 md:px-4 py-2 md:rounded-full border ${
          baseStyles.border
        } ${baseStyles.card} backdrop-blur-lg transition-all duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        {/* <div className="flex items-center justify-between md:justify-center gap-2 md:gap-4 overflow-x-auto">
          {navItems.map(({ id, icon, label }) => (
            <button
              key={id}
              onClick={() => handleClick(id)}
              className={`px-2 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-1 md:gap-2
                ${
                  activeSection === id
                    ? `${
                        isDark
                          ? "bg-teal-500/20 text-teal-400"
                          : "bg-teal-500/10 text-teal-600"
                      }`
                    : ""
                }
              `}
            >
              {icon}
              <span className="hidden md:inline">{label}</span>
            </button>
          ))}
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-full ${baseStyles.hover} transition-colors`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div> */}

        <div className="w-full flex items-center justify-between sm:justify-center gap-1 sm:gap-2 md:gap-4 overflow-x-auto px-2 py-1 sm:px-4 sm:py-2 no-scrollbar">
          {navItems.map(({ id, icon, label }) => (
            <button
              key={id}
              onClick={() => handleClick(id)}
              className={`
            min-w-fit
            px-2 sm:px-3 md:px-4 
            py-1.5 sm:py-2
            rounded-full 
            text-[10px] sm:text-xs md:text-sm 
            font-medium 
            transition-all duration-300 
            flex items-center 
            gap-1 sm:gap-1.5 md:gap-2
            whitespace-nowrap
            ${
              activeSection === id
                ? `${
                    isDark
                      ? "bg-teal-500/20 text-teal-400"
                      : "bg-teal-500/10 text-teal-600"
                  }`
                : "hover:bg-gray-100 dark:hover:bg-gray-800"
            }
          `}
            >
              <span className="w-4 sm:w-5">{icon}</span>
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
          <button
            onClick={() => setIsDark(!isDark)}
            className={`
          min-w-fit
          p-1.5 sm:p-2
          rounded-full 
          hover:bg-gray-100 dark:hover:bg-gray-800 
          transition-colors
        `}
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
            href: "https://www.linkedin.com/in/sangamesh-lingshetty-5a6647279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
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
            <span className="absolute left-14 px-2 py-1 text-sm rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              {label}
            </span>
          </a>
        ))}
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-20 md:pt-32 pb-20">
        <section
          id="about"
          data-scroll
          className={`
    py-8 sm:py-12 md:py-20 lg:py-28 
    px-4 sm:px-6 md:px-8
    transform transition-all duration-1000 
    ${
      slideIn.about
        ? "translate-x-0 opacity-100"
        : "-translate-x-full opacity-0"
    }
  `}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start lg:items-center">
            {/* Text Content */}
            <div className="space-y-6 sm:space-y-8 max-w-full lg:max-w-lg">
              {/* Badge */}
              <div
                className={`
          inline-flex items-center 
          px-3 sm:px-4 py-1.5 sm:py-2 
          rounded-full text-xs sm:text-sm 
          ${baseStyles.card} border ${baseStyles.border}
        `}
              >
                <Coffee
                  className={`${baseStyles.accent} w-4 h-4 sm:w-5 sm:h-5`}
                />
                <span className="ml-2">Fueled by Innovation & Dedication</span>
              </div>

              {/* Heading */}
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                  Building Next-Gen
                  <span
                    className={`
              block ${baseStyles.accent} 
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
              mt-2
            `}
                  >
                    Solutions
                  </span>
                </h2>
                <div className="space-y-3 sm:space-y-4 text-base sm:text-lg opacity-80 leading-relaxed">
                  <p>
                    Hi, I'm Sangamesh, a passionate Full Stack Developer with a
                    solid foundation in crafting responsive web applications.
                    Leveraging React, Node.js, and MongoDB, I create seamless
                    user experiences powered by robust backend technologies.
                  </p>
                  <p>
                    My portfolio showcases innovative projects like "RBAC Admin
                    Panel" and "Abhi Book Karo," reflecting a deep commitment to
                    solving real-world problems through clean and efficient
                    code. Let's work together to make ideas come to life!
                  </p>
                </div>
              </div>

              {/* Resume Button */}
              <div className="pt-4 sm:pt-6 flex">
                <a
                  href="/SANGAMESH_RESUME_UPDATED.pdf"
                  target="_blank"
                  className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600 transition-all duration-300 hover:scale-105"
                >
                  Resume
                </a>
              </div>
            </div>

            {/* Code Snippet Card */}
            <div
              className={`
        ${baseStyles.card} 
        rounded-xl sm:rounded-2xl 
        border ${baseStyles.border} 
        p-4 sm:p-6 md:p-8 
        relative group 
        hover:border-teal-500 
        transition-all duration-500
      `}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl sm:rounded-2xl opacity-20 group-hover:opacity-100 transition-opacity duration-500 blur" />
              <div className="relative overflow-hidden">
                <pre className="font-mono text-xs sm:text-sm md:text-base leading-relaxed max-w-full overflow-x-auto">
                  <code
                    className={`block ${baseStyles.accent} whitespace-pre-wrap`}
                  >
                    {codeSnippet}
                  </code>
                </pre>
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex gap-1 sm:gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group relative rounded-xl overflow-hidden border ${baseStyles.border} transform hover:scale-105 transition-all duration-500`}
              >
                <div className="relative h-48 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}
                  />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`${baseStyles.card} p-6`}>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="opacity-80 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-sm ${baseStyles.hover}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    target="_blank"
                    href={project.link}
                    className={`flex items-center ${baseStyles.accent} hover:underline`}
                  >
                    View Project <ArrowRight className="ml-2" size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12">Technical Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className=" p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group"
                >
                  <div
                    className={`mb-4 ${skill.color} transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-600">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="py-20">
          <h2 className="text-3xl font-bold mb-12">Journey So Far</h2>
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-teal-500 to-purple-500" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.title}
                  className={`
            flex items-center gap-8
            ${
              item.side === "left"
                ? "flex-col-reverse md:flex-row-reverse"
                : "flex-col md:flex-row"
            }
          `}
                >
                  {/* Content Section */}
                  <div
                    className={`
              w-full md:w-1/2 
              ${item.side === "left" ? "text-left" : "text-right"}
            `}
                  >
                    <div
                      className={`
                ${baseStyles.card} 
                p-6 rounded-xl border ${baseStyles.border}
                transform hover:scale-105 transition-all duration-300
              `}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        {item.icon}
                        <span className={`text-sm ${baseStyles.accent}`}>
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <div className="text-sm font-medium opacity-80 mb-2">
                        {item.company}
                      </div>
                      <p className="text-sm opacity-60">{item.details}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-teal-500 relative z-10">
                      <div className="absolute inset-0 rounded-full bg-teal-500 animate-ping" />
                    </div>
                  </div>

                  {/* Spacer Section (for layout on larger screens) */}
                  <div className="w-full md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="py-20">
          <h2 className="text-3xl font-bold mb-12">Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert) => (
              <div
                key={cert.title}
                className={`${baseStyles.card} p-6 rounded-xl border ${baseStyles.border} transform hover:scale-105 transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Award className={baseStyles.accent} size={24} />
                  <div className="text-sm opacity-60">{cert.date}</div>
                </div>
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <div className="text-sm font-medium mb-3">{cert.issuer}</div>
                <p className="text-sm opacity-80 mb-4">{cert.description}</p>
                <a
                target="_blank"
                  href={cert.link}
                  className="inline-flex items-center gap-2 text-sm hover:underline"
                >
                  View Certificate <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="testimonials" className="py-20">
          <h2 className="text-3xl font-bold mb-12">Testimonials</h2>
          <div
            ref={testimonialsRef}
            className="flex space-x-6 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth"
            style={{
              msOverflowStyle: "none" /* IE and Edge */,
              scrollbarWidth: "none" /* Firefox */,
              WebkitOverflowScrolling: "touch",
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className={`flex-shrink-0 w-full md:w-96 snap-center ${baseStyles.card} p-6 rounded-xl border ${baseStyles.border}`}
              >
                <Quote className={baseStyles.accent} size={24} />
                <p className="opacity-80 mb-6">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm opacity-60">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Articles Section */}
        <section id="articles" className="py-20">
          <h2 className="text-3xl font-bold mb-12">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div
                key={article.title}
                className={`${baseStyles.card} p-6 rounded-xl border ${baseStyles.border} transform hover:scale-105 transition-all duration-300`}
              >
                <div className="flex items-center gap-2 text-sm opacity-60 mb-4">
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
                      className={`px-2 py-1 rounded-full text-xs ${baseStyles.accent} bg-teal-500/10`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={article.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm hover:underline"
                >
                  Read More <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div
            className={`max-w-2xl mx-auto ${baseStyles.card} rounded-xl border ${baseStyles.border} p-8`}
          >
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Heart className={baseStyles.accent} />
              Get in Touch
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 rounded-lg bg-transparent border ${baseStyles.border} focus:border-teal-500 transition-colors`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className={`w-full px-4 py-3 rounded-lg bg-transparent border ${baseStyles.border} focus:border-teal-500 transition-colors`}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg bg-transparent border ${baseStyles.border} focus:border-teal-500 transition-colors`}
                />
              </div>
              <button
                type="submit"
                className={`w-full px-6 py-3 rounded-lg ${
                  isDark
                    ? "bg-teal-500 hover:bg-teal-600"
                    : "bg-teal-600 hover:bg-teal-700"
                } text-white transition-colors`}
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center border-t border-gray-800">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} All Rights Reserved. Developed with{" "}
            <Heart size={14} className="inline text-red-500" /> by SANGAMESH
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Port;

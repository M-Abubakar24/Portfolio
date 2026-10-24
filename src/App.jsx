
import { useState, useEffect } from "react";
import {
  ArrowDown,
  ArrowRight,
  Mail,
  Menu,
  X,
  Moon,
  Sun,
  Phone,
  ExternalLink,
  Code2,
  ShieldCheck,
  BriefcaseBusiness,
  GraduationCap,
  MapPin,
} from "lucide-react";
import "./App.css";
const projects = [
  {
    number: "01",
    name: "SecureBank",
    category: "CYBERSECURITY",
    description:
      "A Django-based banking API security lab exploring OWASP vulnerabilities and comparing vulnerable implementations with secure alternatives.",
    stack: ["Python", "Django", "DRF", "OWASP"],
    icon: ShieldCheck,
    theme: "blue",
    github:
      "https://github.com/M-Abubakar24/SecureBank-OWASP-Vulnerability-Lab",
  },
  {
    number: "02",
    name: "ProjectHub",
    category: "FULL-STACK DEVELOPMENT",
    description:
      "A project management platform with role-based access, project and task workflows, and a REST API.",
    stack: ["React", "Django", "JWT", "REST API"],
    icon: BriefcaseBusiness,
    theme: "purple",
    github: "https://github.com/M-Abubakar24/ProjectHub",
  },
  {
    number: "03",
    name: "Smart ATS Job Portal",
    category: "WEB DEVELOPMENT",
    description:
      "A recruitment platform connecting job seekers and recruiters through job listings, dashboards, authentication, and CV uploads.",
    stack: ["React", "Node.js", "MongoDB", "Express"],
    icon: Code2,
    theme: "green",
    github: "https://github.com/M-Abubakar24/Smart-ATS-Job-Portal",
  },
  {
    number: "04",
    name: "Personal Finance Manager",
    category: "FULL-STACK DEVELOPMENT",
    description:
      "A finance management application for tracking transactions, organizing personal finances, and visualizing spending.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    icon: Code2,
    theme: "orange",
    github: "https://github.com/M-Abubakar24/personal-finance-manager",
    demo:
      "https://personal-finance-manager-production-362a.up.railway.app",
  },
];

const skills = [
  {
    title: "Frontend",
    items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Python", "Django", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Databases & Tools",
    items: ["MongoDB", "PostgreSQL", "Git", "GitHub","VS Code", "Postman"],
  },
  {
    title: "Project Management",
    items: ["SDLC", "Requirements gathering","Task Coordination",
"Team Collaboration" ,"Analysis"],
  },
  {
    title: "Quality & Security",
    items: ["Manual Testing", "API Testing","Test Case Design", "JWT", "OWASP Basics"],
  },
  {
    title: "Additional Skills",
    items: ["JSON",
"API Integration",
"Debugging",
"Problem Solving",
"Technical Documentation"],
  },
];
function App() {
  
const [menuOpen, setMenuOpen] = useState(false);
const [darkMode, setDarkMode] = useState(false);
const [activeTheme, setActiveTheme] = useState("ocean");
 const [cursorPosition, setCursorPosition] = useState({
    x: -1000,
    y: -1000,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const themes = [
    { id: "ocean", name: "Ocean Blue", color: "#4169e1" },
    { id: "violet", name: "Violet", color: "#805ad5" },
    { id: "forest", name: "Forest Green", color: "#ed9e0b" },
    { id: "midnight", name: "Midnight", color: "#70a126" },
  ];

  const selectedTheme =
    themes.find((theme) => theme.id === activeTheme) || themes[0];

  const closeMenu = () => setMenuOpen(false);

  return (
    
<div
  className={`portfolio-app ${darkMode ? "dark-mode" : ""}`}
  style={{ "--blue": selectedTheme.color }}
  data-theme={activeTheme}
>
   <div
      className="cursor-glow"
      style={{
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
      }}
    />

      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">MA</span>
          <span>Muhammad Abubakar<span className="brand-dot"></span></span>
        </a>

<button
  type="button"
  className="dark-mode-toggle"
  onClick={() => setDarkMode(!darkMode)}
  aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
  title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
>
  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
</button>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          
{[
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Resume", "/Resume.pdf"],
].map(([label, href]) => (
  <a
    key={label}
    href={href}
    onClick={label === "Resume" ? undefined : closeMenu}
    target={label === "Resume" ? "_blank" : undefined}
    rel={label === "Resume" ? "noreferrer" : undefined}
  >
    {label}
  </a>
))}

          <a
            className="nav-contact"
            href="#contact"
            onClick={closeMenu}
          >
            Let's talk <ArrowRight size={15} />
          </a>
        </nav>
        <div className="theme-switcher" aria-label="Choose website theme">
  <span className="theme-label">Theme</span>

  {themes.map((theme) => (
    <button
      key={theme.id}
      type="button"
      className={`theme-option ${
        activeTheme === theme.id ? "active" : ""
      }`}
      style={{ "--swatch-color": theme.color }}
      onClick={() => setActiveTheme(theme.id)}
      aria-label={`Switch to ${theme.name} theme`}
      aria-pressed={activeTheme === theme.id}
      title={theme.name}
    />
  ))}
</div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" />
              SOFTWARE ENGINEER
            </div>

            <h1>
              Building digital
              <br />
              experiences with
              <br />
              <span>purpose & precision.</span>
            </h1>

           
<p>
  I'm <span className="text-highlight">Muhammad Abubakar</span>, a Software
  Engineer specializing in full-stack web development, backend API design,
  and application security. I build scalable, user-focused applications that
  solve real-world problems, with a strong focus on quality, security, and
  continuous improvement.
</p>


            <div className="hero-actions">
              <a className="button-primary" href="#projects">
                Explore my work <ArrowRight size={17} />
              </a>
              <a
                className="button-secondary"
                href="https://github.com/M-Abubakar24"
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={18} /> GitHub
              </a>
            </div>

            <div className="hero-location">
              <MapPin size={15} />
              Lahore, Pakistan
              <span className="location-divider">/</span>
              Open to opportunities
            </div>
          </div>

          <div className="hero-visual" aria-label="Developer profile graphic">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />

            <div className="code-window">
              <div className="window-bar">
                <div className="window-dots">
                  <i />
                  <i />
                  <i />
                </div>
                <span>developer.js</span>
              </div>
              <div className="code-content">
                <div><span className="code-muted">01</span> <span className="code-purple">const</span> developer = {"{"}</div>
                <div><span className="code-muted">02</span> &nbsp; name: <span className="code-green">"Abubakar"</span>,</div>
                <div><span className="code-muted">03</span> &nbsp; role: <span className="code-green">"Software Engineer"</span>,</div>
                <div><span className="code-muted">04</span> &nbsp; skills: [</div>
                <div><span className="code-muted">05</span> &nbsp;&nbsp; <span className="code-green">"React"</span>, <span className="code-green">"Django"</span>,</div>
                <div><span className="code-muted">06</span> &nbsp;&nbsp; <span className="code-green">"Node.js"</span>, <span className="code-green">"C++"</span></div>
                <div><span className="code-muted">07</span> &nbsp; ],</div>
                <div><span className="code-muted">08</span> &nbsp; learning: <span className="code-green">true</span>,</div>
                <div><span className="code-muted">09</span> {"};"}</div>
                <div className="code-cursor-line">
                  <span className="code-muted">10</span> <span className="code-purple">export default</span> developer;
                </div>
              </div>
            </div>

            <div className="floating-card floating-top">
              <Code2 size={19} />
              <div>
                <strong>Full-Stack</strong>
                <span>Development</span>
              </div>
            </div>

            <div className="floating-card floating-bottom">
              <ShieldCheck size={20} />
              <div>
                <strong>Security-minded</strong>
                <span>Building safer apps</span>
              </div>
            </div>
          </div>

          <a className="scroll-indicator" href="#about">
            <ArrowDown size={15} /> SCROLL TO DISCOVER
          </a>
        </section>

        <section className="about section-wrap section-block" id="about">
          <div className="section-heading">
            <h2>Building with purpose.<br /><span>Engineering with curiosity.</span></h2>
          </div>

          <div className="about-content">
            <p>
              I am a Software Engineering graduate from PUCIT (2025) with a strong interest in full-stack development, backend API design, software quality assurance, and application security.
            </p>
            <p>
              Through personal projects, internships, and project coordination experience, I have developed a well-rounded understanding of both software development and team collaboration. I enjoy building practical solutions, improving software reliability, and working with teams to turn ideas into effective products. I am continuously seeking opportunities to strengthen my technical skills, contribute to meaningful projects, and grow as a software engineer.
            </p>

            <div className="about-facts">
              <div>
                <GraduationCap size={19} />
                <span>Software Engineer</span>
              </div>
              <div>
                <BriefcaseBusiness size={19} />
                <span>Software Engineering & Project Management</span>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section section-block" id="skills">
          <div className="section-wrap">
            <div className="section-heading">
              <h2>Technologies I <span>work with.</span></h2>
              <p className="section-description">
                Tools and technologies I've worked with through projects,
                development, and testing.
              </p>
            </div>

            <div className="skills-grid">
              {skills.map((group, index) => (
                <article className="skill-card" key={group.title}>
                  <span className="skill-number">0{index + 1}</span>
                  <h3>{group.title}</h3>
                  <div className="skill-tags">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects-section section-wrap section-block" id="projects">
          <div className="projects-heading">
            <div className="section-heading">
              <h2>Things I've <span>built.</span></h2>
              <p className="section-description">
                Building practical solutions, solving real-world problems, and continuously evolving as an engineer.
              </p>
            </div>
           <a
  href="https://github.com/M-Abubakar24"
  target="_blank"
  rel="noopener noreferrer"
  className="button-secondary"
>
  All repositories
</a>
          </div>

          <div className="projects-grid">
            {projects.map((project) => {
              const ProjectIcon = project.icon;

              return (
                <article className="project-card" key={project.number}>
                  <div className={`project-art ${project.theme}`}>
                    <span className="project-art-number">{project.number}</span>
                    <div className="project-icon">
                      <ProjectIcon size={36} strokeWidth={1.5} />
                    </div>
                    <span className="project-art-label">
                      {project.category}
                    </span>
                  </div>

                  <div className="project-body">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>

                    <div className="project-tags">
                      {project.stack.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                    <div className="project-links">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Code2 size={16} /> Source code
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <ExternalLink size={15} /> Live demo
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="experience-section section-block" id="experience">
          <div className="section-wrap">
            <div className="section-heading">
              <h2>Learning through <span>experience.</span></h2>
            </div>

            <div className="timeline">
              <article className="timeline-item">
                <span className="timeline-marker" />
                <div className="timeline-content">
                  <span className="eyebrow">2021 - 2025</span>
                  <h3>Software Engineering Graduate</h3>
                  <p className="timeline-place">Punjab University College of Information Technology (PUCIT)</p>
                  <p>
  I graduated in Software Engineering from PUCIT in 2025 and collaborated
  on a MERN-stack final-year project focused on neighborhood sharing.
  The project earned
  <span className="text-highlight"> second place among 35 projects </span>
  at a university job fair.
</p>
                </div>
              </article>

              
<article className="timeline-item">
  <span className="timeline-marker" />
  <div className="timeline-content">
    <h2>My professional journey</h2>

    <div className="job-entry">
      <h4>Project Coordinator</h4>
      <p><strong>DATATECH PAK PRIVATE LIMITED</strong></p>
      <p>July 2025 – March 2026</p>
      <a href="/datatech.pdf" target="_blank" rel="noreferrer">
        View Experience Certificate ↗
      </a>
    </div>

    <div className="job-entry">
      <h4>Software Developer Intern</h4>
      <p><strong>SYSTEMS LIMITED</strong></p>
      <p>January 2025 – March 2025</p>
      <a href="/Systems.pdf" target="_blank" rel="noreferrer">
        View Experience Certificate ↗
      </a>
    </div>

    <div className="job-entry">
      <h4>Java Software Engineer</h4>
      <p><strong>HiSkyTech</strong></p>
      <p>July 2024 – August 2024</p>
      <a href="/HiSkyTech.pdf" target="_blank" rel="noreferrer">
        View Experience Certificate ↗
      </a>
    </div>

    <div className="job-entry">
      <h4>Trainee Software Engineer</h4>
      <p><strong>INVOZONE</strong></p>
      <p>September 2023 – December 2023</p>
      <a href="/invozone .pdf" target="_blank" rel="noreferrer">
        View Experience Certificate ↗
      </a>
    </div>
  </div>
</article>
            </div>
          </div>
        </section>
        <section className="resume-section section-wrap section-block" id="resume">
          <div className="resume-content">
            <h2>My experience, <span>on paper.</span></h2>
            <p>
              Explore my professional background, technical skills,
              projects, and experience in software development.
            </p>

            <div className="resume-actions">
              <a
                className="button-primary"
                href="/Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink size={17} />
                View Resume
              </a>

              <a
                className="button-secondary"
                href="/resume.pdf"
                download="Muhammad-Abubakar-Resume.pdf"
              >
                Download PDF <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>
        <section className="contact-section section-wrap section-block" id="contact">
          <h2>Have a project in mind?<br /><span>Let's build something.</span></h2>
          <p>
            I'm interested in software development opportunities,
            meaningful projects, and connecting with people in tech.
          </p>

          <a className="button-primary" href="mailto:m.abubakar2496@gmail.com">
            <Mail size={17} /> Get in touch <ArrowRight size={17} />
          </a>

          <div className="social-links">
            <a href="https://github.com/M-Abubakar24" target="_blank" rel="noreferrer">
              <Code2 size={17} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/mabubakar2492/" target="_blank" rel="noreferrer">
              <Code2 size={17} /> LinkedIn
            </a>
             <a href="mailto:m.abubakar2496@gmail.com">
    <Mail size={17} /> m.abubakar2496@gmail.com
  </a>

  <a href="tel:+92 333-4150299">
    <Phone size={17} /> +92 333-4150299
  </a>
          </div>
        </section>
      </main>
      <footer className="footer">
        <a className="brand" href="#home">
          <span className="brand-mark">A.</span>
          <span>Muhammad Abubakar<span className="brand-dot">.</span></span>
        </a>
        <p>Designed with intention. Built with code.</p>
        <span>© {new Date().getFullYear()} Muhammad Abubakar</span>
            </footer>
    </div>
  );
}
export default App;

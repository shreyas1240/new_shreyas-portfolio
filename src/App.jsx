import { useState } from "react";
import "./App.css";

const projects = [
  {
    number: "01",
    name: "Smart Class and Timetable Scheduler",
    type: "Full-stack web application",
    description:
      "A Django-based academic scheduling platform designed to organize classroom timetables and provide role-based experiences for students, faculty and administrators.",
    stack: ["Python", "Django", "Tailwind CSS", "PostgreSQL"],
    link: "#contact",
  },
  {
    number: "02",
    name: "Crime Hotspot Identification — Namma Suraksha",
    type: "Data science project",
    description:
      "A data-driven project that applies analysis and machine-learning techniques to identify crime-prone locations and support safer, evidence-based decisions. Recognized among the Top 30 teams out of 450+.",
    stack: ["Python", "Pandas", "Scikit-learn", "Feature Engineering"],
    link: "#contact",
  },
  {
    number: "03",
    name: "AI-powered Elder Care Robot",
    type: "AI / IoT project",
    description:
      "A prototype concept combining Python, Raspberry Pi and intelligent assistance to support elderly-care use cases.",
    stack: ["Python", "Raspberry Pi", "AI", "IoT"],
    link: "#contact",
  },
];

const skillGroups = [
  { title: "Programming", skills: ["Python", "Java", "C / C++", "JavaScript", "SQL", "R"] },
  { title: "Web development", skills: ["Django", "Node.js", "Express", "REST APIs", "HTML", "CSS", "Tailwind CSS"] },
  { title: "Data & analytics", skills: ["Pandas", "Scikit-learn", "Feature Engineering", "Power BI"] },
  { title: "Databases & tools", skills: ["PostgreSQL", "MySQL", "MongoDB", "Git", "GitHub", "Linux", "Postman"] },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#home" onClick={closeMenu}>SG<span>.</span></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? "✕" : "☰"}
          </button>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
            ))}
            <a className="nav-cta" href="mailto:shreyasg492@gmail.com">Let's talk <Arrow /></a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO OPPORTUNITIES</div>
            <p className="intro">Hello, I'm</p>
            <h1>Shreyas <span>G.</span></h1>
            <h2>Building useful things with <em>code & data.</em></h2>
            <p className="hero-text">
              Computer Science graduate focused on Data Science, Python development
              and full-stack web applications. I enjoy turning ideas and data into
              practical digital experiences.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <Arrow /></a>
              <a className="button button-quiet" href="mailto:shreyasg492@gmail.com">Get in touch</a>
            </div>
            <div className="hero-meta">
              <span>📍 Bengaluru, Karnataka</span>
              <span>🎓 Presidency University · 2022—2026</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Shreyas G profile photo">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="profile-photo-frame">
              <img
                className="profile-photo"
                src="/profile.jpg"
                alt="Shreyas G GitHub profile picture"
                referrerPolicy="no-referrer"
              />
              <span className="photo-caption">SHREYAS G · DEVELOPER</span>
            </div>
            <div className="floating-chip chip-python">Python <b>Py</b></div>
            <div className="floating-chip chip-data">Data <b>↗</b></div>
            <div className="hero-glow" />
          </div>
          <a className="scroll-cue" href="#about">SCROLL TO EXPLORE <span>↓</span></a>
        </section>

        <section className="section container" id="about">
          <div className="section-label">01 / ABOUT</div>
          <div className="about-grid">
            <h2 className="section-heading">Curious mind.<br /><em>Practical builder.</em></h2>
            <div className="about-copy">
              <p>
                I'm Shreyas, a Computer Science and Engineering graduate specializing
                in Data Science from Presidency University, Bengaluru. My interests
                sit at the intersection of software development, machine learning
                and data-driven problem solving.
              </p>
              <p>
                I have worked on academic and practical projects involving Django,
                Python, analytics and connected devices. I value clean implementation,
                continuous learning and building technology that solves real problems.
              </p>
              <div className="about-facts">
                <div><strong>2022—26</strong><span>B.Tech · CSE (Data Science)</span></div>
                <div><strong>Top 30</strong><span>Namma Suraksha · 450+ teams</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container">
            <div className="section-label">02 / TOOLKIT</div>
            <div className="section-title-row">
              <h2 className="section-heading">Skills & <em>technologies.</em></h2>
              <p className="muted">Tools I use to explore ideas and build solutions.</p>
            </div>
            <div className="skills-grid">
              {skillGroups.map((group, index) => (
                <article className="skill-card" key={group.title}>
                  <span className="skill-index">0{index + 1}</span>
                  <h3>{group.title}</h3>
                  <div className="tags">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section container" id="experience">
          <div className="section-label">03 / EXPERIENCE</div>
          <div className="experience-card">
            <div className="experience-date">MAR 2026 — JUL 2026</div>
            <div>
              <p className="eyebrow">INTERNSHIP</p>
              <h3>Full-Stack Web Development Intern</h3>
              <p className="company">SkillCraft Technology Pvt. Ltd.</p>
              <p className="muted">Worked in a full-stack development environment, strengthening practical skills in web application development and implementation.</p>
            </div>
            <span className="experience-arrow"><Arrow /></span>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="container">
            <div className="section-label">04 / SELECTED WORK</div>
            <div className="section-title-row">
              <h2 className="section-heading">Things I've <em>built.</em></h2>
              <p className="muted">A selection of academic and applied projects.</p>
            </div>
            <div className="project-list">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-number">{project.number}</div>
                  <div className="project-content">
                    <p className="eyebrow">{project.type}</p>
                    <h3>{project.name}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                  <a className="project-link" href={project.link} aria-label={`Ask about ${project.name}`}><Arrow /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section container" id="achievements">
          <div className="section-label">05 / MILESTONES</div>
          <div className="achievement-grid">
            <div><span className="achievement-mark">✳</span><h3>Top 30 — Namma Suraksha 2025</h3><p className="muted">Selected among 450+ participating teams.</p></div>
            <div><span className="achievement-mark">⌘</span><h3>Google IT Automation with Python</h3><p className="muted">Professional learning certificate.</p></div>
            <div><span className="achievement-mark">▦</span><h3>Power BI — Simplilearn</h3><p className="muted">Data visualization and business intelligence.</p></div>
            <div><span className="achievement-mark">↗</span><h3>Deloitte Data Analytics Simulation</h3><p className="muted">Practical data analytics experience.</p></div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner">
            <div className="section-label">06 / CONTACT</div>
            <h2>Have an idea?<br /><em>Let's build it.</em></h2>
            <p>I'm open to entry-level opportunities and conversations around software development, data and technology.</p>
            <a className="button button-primary" href="mailto:shreyasg492@gmail.com">Say hello <Arrow /></a>
            <div className="contact-details">
              <a href="mailto:shreyasg492@gmail.com">shreyasg492@gmail.com</a>
              <a href="tel:+919606181646">+91 96061 81646</a>
              <a href="https://github.com/shreyas1240" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
              <a href="https://www.linkedin.com/in/shreyas-g-a9a6a1260/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <a className="brand" href="#home">SG<span>.</span></a>
        <p>Designed & built by Shreyas G. · © {new Date().getFullYear()}</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

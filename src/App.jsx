import React from "react";
import { useEffect, useState } from "react";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin, Mail,
  Menu, X, Code2, Sparkles, Layers3, Coffee, Heart, ExternalLink,
  CircleDot, Braces, Database, Monitor, Send, MoveUpRight, Sun, Moon, Download
} from "lucide-react";

const GITHUB = "https://github.com/Ziya-7777";
const projects = [
  {
    number: "01", name: "GlowEssence", type: "TEAM PROJECT · E-COMMERCE",
    description: "A beauty and skincare shopping experience built with a MERN-stack team. I contributed on the frontend, focusing on an inviting, user-friendly shopping interface.",
    stack: ["React", "JavaScript", "CSS", "MERN"],
    tone: "rose", mark: "GE", icon: "✳",
    live: "https://glow-essence-ten.vercel.app/",
    repo: "https://github.com/Ziya-7777",
    liveLabel: "Live website"
  },
  {
    number: "02", name: "Ziya MERN E-commerce", type: "FULL-STACK PROJECT",
    description: "An e-commerce project exploring the flow from a polished product interface to the building blocks of a full-stack shopping application.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    tone: "sage", mark: "shop.", icon: "↗",
    repo: "https://github.com/Ziya-7777/Ziya-MERN-Ecommerce"
  },
  {
    number: "03", name: "Blog PR", type: "WEB APPLICATION",
    description: "A blog project built to practise structuring content, creating reusable interface patterns, and making a clean reading experience.",
    stack: ["JavaScript", "HTML", "CSS"],
    tone: "cream", mark: "the\njournal", icon: "✎",
    repo: "https://github.com/Ziya-7777/Blog-PR-Final-Project"
  },
  {
    number: "04", name: "JavaScript Quiz", type: "INTERACTIVE APP",
    description: "A quiz application designed around interactive questions and immediate feedback—practice turning logic into a clear user experience.",
    stack: ["JavaScript", "HTML", "CSS"],
    tone: "lilac", mark: "Q.", icon: "?"
    ,repo: "https://github.com/Ziya-7777/PR-JS-Quiz-Application"
  },
  {
    number: "05", name: "Weather API App", type: "API INTEGRATION",
    description: "A weather interface that practises connecting a frontend to an external API and presenting data in a readable, useful format.",
    stack: ["JavaScript", "REST API", "CSS"],
    tone: "blue", mark: "24°", icon: "☼",
    repo: "https://github.com/Ziya-7777/Weather-API-APP"
  },
  {
    number: "06", name: "Personal Portfolio", type: "PERSONAL BRAND",
    description: "A portfolio built to bring my projects, technical growth, and design sensibility into one place—with room to keep evolving.",
    stack: ["HTML", "CSS", "JavaScript"],
    tone: "burgundy", mark: "ZM.", icon: "✦",
    repo: "https://github.com/Ziya-7777/Portfolio-PR-2-Ziya"
  }
];

const strengths = [
  { title: "Full-stack toolkit", items: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git & GitHub", "C", "C++"], status: "solid" },
  { title: "Currently in progress", items: ["PHP", "Backend practice", "Building and refining projects"], status: "learning" }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All work");
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll);
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
    return () => {
      window.removeEventListener("scroll", onScroll);
      revealObserver.disconnect();
    };
  }, []);

  const filters = ["All work", "Web apps", "Interactive"];
  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "Web apps") return ["TEAM PROJECT · E-COMMERCE", "FULL-STACK PROJECT", "WEB APPLICATION", "PERSONAL BRAND"].includes(project.type);
    if (activeFilter === "Interactive") return ["INTERACTIVE APP", "API INTEGRATION"].includes(project.type);
    return true;
  });

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("ziya.malkani@example.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = "mailto:ziya.malkani@example.com";
    }
  }

  return (
    <div className={`site-shell ${darkMode ? "theme-dark" : "theme-light"}`}>
      <div className="grain" aria-hidden="true" />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className={`nav-wrap ${scrolled ? "nav-scrolled" : ""}`}>
        <nav className="nav container">
          <a className="wordmark" href="#home" aria-label="Ziya Malkani home"><span className="wordmark-icon">z.</span><span>ziya malkani<span className="wordmark-dot">✳</span></span></a>
          <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#work" onClick={() => setMenuOpen(false)}>Selected work</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Toolkit</a>
            <a href="#resume" onClick={() => setMenuOpen(false)}>Résumé</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
          <div className="nav-tools"><button className="theme-toggle" onClick={() => setDarkMode(!darkMode)} aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"} title={darkMode ? "Light mode" : "Dark mode"}>{darkMode ? <Sun size={17} /> : <Moon size={17} />}</button><a className="nav-cta" href="#contact">Let’s talk <ArrowUpRight size={15} /></a></div>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X /> : <Menu />}</button>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="eyebrow reveal"><span className="eyebrow-line" /> SOFTWARE ENGINEER IN THE MAKING <span className="eyebrow-spark">✳</span></div>
            <h1 className="hero-title reveal">Thoughtful code.<br /><em>Meaningful</em> experiences.</h1>
            <p className="hero-description reveal">Hey, I’m <strong>Ziya</strong> — an aspiring full-stack software engineer who loves turning curious ideas into clean, considered digital experiences.</p>
            <div className="hero-actions reveal">
              <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17} /></a>
              <a className="text-link resume-quick" href="/ziya-malkani-resume.pdf" download>Download résumé <Download size={15} /></a>
              <a className="text-link" href="#about">A little about me <ArrowRight size={16} /></a>
            </div>
            <div className="hero-meta reveal"><span className="status-dot" /> Open to learning, collaboration & opportunities <span className="meta-divider">/</span> <span className="mono">INDIA · AVAILABLE REMOTELY</span></div>
          </div>

          <div className="hero-art reveal" aria-label="Decorative abstract portfolio illustration">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="art-star star-a">✳</div><div className="art-star star-b">✦</div><div className="art-star star-c">✳</div>
            <div className="art-note note-top"><span className="note-dot" /> currently building <strong>my next chapter</strong></div>
            <div className="art-card photo-card">
              <img src="/ziya-profile.jpg" alt="Portrait of Ziya Malkani wearing a taupe hijab" className="profile-photo" />
              <div className="photo-caption"><span>ZIYA MALKANI</span><span>FULL-STACK DEVELOPER ✳</span></div>
            </div>
            <div className="floating-chip chip-code"><Code2 size={15} /> <span>building with purpose</span></div>
            <div className="floating-chip chip-stack"><Layers3 size={15} /> <span>frontend → full stack</span></div>
            <div className="art-note note-bottom">a work in progress <span>♡</span></div>
          </div>
          <a href="#about" className="scroll-cue"><span className="scroll-line" /> SCROLL TO EXPLORE <ArrowDownRight size={13} /></a>
        </section>

        <div className="ticker" aria-label="Areas of interest"><div className="ticker-track">
          {Array.from({ length: 2 }).map((_, i) => <div className="ticker-group" key={i}><span>FRONTEND DEVELOPMENT</span><i>✳</i><span>THOUGHTFUL UI</span><i>✳</i><span>FULL-STACK JOURNEY</span><i>✳</i><span>ALWAYS LEARNING</span><i>✳</i></div>)}
        </div></div>

        <section className="about section container" id="about">
          <div className="section-kicker reveal"><span>01 / THE PERSON BEHIND THE PIXELS</span><span className="kicker-flower">✳</span></div>
          <div className="about-grid">
            <div className="about-heading reveal"><h2>Equal parts<br /><em>logic</em> & feeling.</h2><div className="handwritten">a little heart in every detail <span>↗</span></div></div>
            <div className="about-copy reveal"><p className="large-copy">I believe great software should feel as thoughtful as it is functional.</p><p>I’m an Information Technology student who has completed full-stack development training and enjoys turning ideas into responsive, practical web experiences. PHP is the technology I’m currently continuing to learn.</p><p>My goal is to grow into an engineer who can connect the dots across the stack, collaborate with kind people, and build products that make everyday things a little easier.</p><a href="#skills" className="inline-link">What I’m learning <ArrowUpRight size={15} /></a></div>
          </div>
          <div className="values-row reveal"><div className="value-item"><span className="value-number">01</span><span>Curiosity first</span></div><div className="value-item"><span className="value-number">02</span><span>Details matter</span></div><div className="value-item"><span className="value-number">03</span><span>Progress over perfection</span></div><div className="value-note">still growing, always building <span>♡</span></div></div>
        </section>

        <section className="work section" id="work">
          <div className="container">
            <div className="section-kicker reveal"><span>02 / A FEW THINGS I’VE MADE</span><span className="kicker-flower">✳</span></div>
            <div className="work-heading reveal"><div><h2>Selected <em>work.</em></h2><p>A collection of experiments, projects, and progress.</p></div><span className="project-count">06 PROJECTS <span>↘</span></span></div>
            <div className="filter-row reveal" role="group" aria-label="Filter projects">{filters.map(filter => <button key={filter} className={`filter-button ${activeFilter === filter ? "active" : ""}`} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div>
            <div className="project-grid">
              {filteredProjects.map((project, index) => <article className={`project-card reveal ${project.tone}`} key={project.number} style={{ transitionDelay: `${index * 70}ms` }}>
                <div className="project-visual">
                  <div className="visual-top"><span>{project.number} / 06</span><span>{project.type}</span></div>
                  <div className={`project-art art-${project.tone}`}><span className="project-art-mark">{project.mark.split("\n").map((line, i) => <span key={i}>{line}</span>)}</span><span className="project-art-icon">{project.icon}</span><span className="project-art-ring" /></div>
                  <span className="visual-caption">DESIGNED WITH INTENTION <Sparkles size={12} /></span>
                </div>
                <div className="project-info"><div className="project-title-line"><h3>{project.name}</h3><span className="project-index">{project.number}</span></div><p>{project.description}</p><div className="tag-row">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-links">{project.live && <a href={project.live} target="_blank" rel="noreferrer">{project.liveLabel || "Live demo"} <ExternalLink size={13} /></a>}<a href={project.repo} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a></div>
                </div>
              </article>)}
            </div>
            <p className="projects-footnote"><CircleDot size={13} /> Project descriptions reflect learning goals and contributions; links open the corresponding live site or GitHub profile/repository.</p>
          </div>
        </section>

        <section className="skills section container" id="skills">
          <div className="section-kicker reveal"><span>03 / MY FULL-STACK TOOLKIT</span><span className="kicker-flower">✳</span></div>
          <div className="skills-heading reveal"><h2>Building across<br /><em>the stack.</em></h2><p>Full-stack development completed; currently expanding my toolkit with PHP.</p></div>
          <div className="skills-layout">
            <div className="skills-note reveal"><div className="skills-note-icon"><Braces size={24} /></div><p className="note-serif">Good engineering is a practice, not a finish line.</p><span>MY APPROACH / 2026</span><div className="note-doodle">✳</div></div>
            <div className="skill-groups">{strengths.map((group, i) => <div className={`skill-group reveal ${group.status}`} key={group.title}><div className="skill-group-head"><span className="skill-status"><i /> {group.status === "solid" ? "FOUNDATION" : "IN PROGRESS"}</span><span>0{i + 1}</span></div><h3>{group.title}</h3><div className="skill-chips">{group.items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div>
          </div>
          <div className="learning-strip reveal"><span className="learning-icon"><Coffee size={18} /></span><p>Currently focused on <strong>PHP</strong> and applying my full-stack skills through projects, iteration, and hands-on practice.</p><span className="learning-spark">✳</span></div>
        </section>

        <section className="resume-section section container" id="resume">
          <div className="section-kicker reveal"><span>04 / RÉSUMÉ</span><span className="kicker-flower">✳</span></div>
          <div className="resume-card reveal"><div><span className="resume-label">THE QUICK OVERVIEW</span><h2>My next chapter<br /><em>starts here.</em></h2><p>Explore my full-stack development background, technical toolkit, and selected projects in a concise résumé.</p></div><div className="resume-details"><div><span>01</span><strong>Full-stack web development</strong></div><div><span>02</span><strong>Project-based experience</strong></div><div><span>03</span><strong>PHP currently in progress</strong></div><a className="button button-primary" href="/ziya-malkani-resume.pdf" download>Download résumé PDF <Download size={16} /></a></div></div>
        </section>

        <section className="contact section" id="contact">
          <div className="container">
            <div className="section-kicker reveal"><span>05 / YOUR TURN</span><span className="kicker-flower">✳</span></div>
            <div className="contact-panel reveal">
              <div className="contact-decoration deco-left">✳</div><div className="contact-decoration deco-right">✦</div>
              <span className="contact-overline"><span className="status-dot" /> OPEN TO CONNECTIONS</span>
              <h2>Have a good idea?<br /><em>Let’s make it real.</em></h2>
              <p>I’m always happy to connect with fellow builders, learn from experienced engineers, or explore a meaningful opportunity.</p>
              <div className="contact-actions"><a className="button button-light" href="mailto:ziya.malkani@example.com">Say hello <Send size={16} /></a><button className="button button-outline" onClick={copyEmail}>{copied ? "Email copied ✓" : "Copy email"} <Mail size={15} /></button></div>
              <span className="contact-small">For the fastest response, email me directly. Update the contact address in the source before publishing.</span>
            </div>
            <footer className="footer"><a className="wordmark footer-brand" href="#home"><span className="wordmark-icon">z.</span><span>ziya malkani<span className="wordmark-dot">✳</span></span></a><span className="footer-made">MADE WITH <Heart size={12} fill="currentColor" /> & A LITTLE TOO MUCH COFFEE</span><div className="social-links"><a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile placeholder"><Linkedin size={17} /></a><a href="mailto:ziya.malkani@example.com" aria-label="Email"><Mail size={17} /></a></div><span className="copyright">© {new Date().getFullYear()} ZM</span></footer>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
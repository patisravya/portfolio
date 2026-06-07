import { createFileRoute } from "@tanstack/react-router";
import {
  Code2, Cpu, Database, GitBranch, Globe, Layers, Sparkles, Brain,
  Mail, Phone, MapPin, Github, Linkedin, ArrowRight, GraduationCap,
  Briefcase, CheckCircle2, Award, Rocket, Zap, Target, Users
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pati Sravya — CSE (AI & ML) Student & Developer" },
      { name: "description", content: "Portfolio of Pati Sravya — Computer Science Engineering student specializing in AI & ML, building full-stack web applications." },
      { property: "og:title", content: "Pati Sravya — Building Future with Code" },
      { property: "og:description", content: "CSE (AI & ML) student passionate about Full Stack Development, AI, and impactful software." },
    ],
  }),
  component: Portfolio,
});

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const highlights = [
  "Fresher", "B.Tech – CSE (AI & ML)", "CGPA: 7.0/10",
  "Graduation 2027", "Fast Learner", "Team Player", "Problem Solver",
];

const skillGroups = [
  { icon: Code2, title: "Programming Languages", items: ["Python", "JavaScript", "PHP"] },
  { icon: Globe, title: "Frontend Development", items: ["HTML5", "CSS3", "JavaScript"] },
  { icon: Layers, title: "Backend Development", items: ["PHP", "REST API Development"] },
  { icon: Database, title: "Database", items: ["MySQL"] },
  { icon: GitBranch, title: "Tools & Platforms", items: ["Git", "GitHub", "VS Code"] },
  { icon: Brain, title: "Concepts", items: ["AI", "IoT Systems", "Agile", "Product Thinking", "KPI Analysis", "Responsive Design"] },
];

const projects = [
  {
    title: "College Task Management System",
    description: "A role-based web application supporting Principals, HODs, Staff, and Students. Enables task assignment, monitoring, progress tracking, and dashboard analytics for efficient academic workflow management.",
    features: ["Role-Based Authentication", "Task Creation & Assignment", "Progress Tracking", "Dashboard Analytics", "MySQL Database Integration"],
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    icon: Layers,
  },
  {
    title: "Bonafide Certificate Generator",
    description: "Web-based automation that generates bonafide certificates digitally — reducing manual work by enabling staff to produce formatted certificates instantly from student records.",
    features: ["Student Record Management", "Automated Certificate Generation", "Secure Data Storage", "Staff Dashboard"],
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    icon: Sparkles,
  },
];

const internships = [
  { year: "2026", title: "Software Engineering Job Simulation", org: "Forage", points: ["Project Setup", "Apache Kafka Integration", "REST API Development"] },
  { year: "2025", title: "Product Management Job Simulation", org: "Forage", points: ["KPI Analysis", "Product Roadmaps", "Data-Driven Decision Making"] },
  { year: "2025", title: "Software Engineering Job Simulation", org: "Forage", points: ["Software Architecture", "Unit Testing", "Agile Workflows"] },
  { year: "2025", title: "Data Analytics Job Simulation", org: "Deloitte / Forage", points: ["Data Analysis", "Forensic Technology Applications"] },
  { year: "2025", title: "Technology Job Simulation", org: "Deloitte / Forage", points: ["Structured Coding Exercises", "Software Development Best Practices"] },
];

const education = [
  { title: "Bachelor of Technology (B.Tech)", sub: "Computer Science Engineering", org: "Sumathi Reddy Institute of Technology for Women", meta: "2023 – 2027 · CGPA 7.0 / 10" },
  { title: "Intermediate Education", sub: "MPC", org: "—", meta: "Percentage: 85.1%" },
];

const strengths = [
  { icon: Brain, label: "Analytical Thinking" },
  { icon: Target, label: "Problem Solving" },
  { icon: Zap, label: "Fast Learning" },
  { icon: Users, label: "Communication" },
  { icon: Users, label: "Team Collaboration" },
  { icon: Rocket, label: "Adaptability" },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 glass">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-display font-bold text-lg tracking-tight">
            <span className="text-gradient">Pati Sravya</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-foreground transition-smooth">{l.label}</a>
            ))}
          </nav>
          <a href="#contact">
            <Button size="sm" className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-smooth">
              Hire Me
            </Button>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative pt-32 pb-24 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-40 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-10 -right-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-glow-pulse" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary animate-glow-pulse" />
              Available for opportunities
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
            Pati <span className="text-gradient">Sravya</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-2xl">
            Building Future with Code — CSE student specializing in <span className="text-foreground font-medium">Artificial Intelligence & Machine Learning</span>.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects">
              <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow transition-smooth">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline" className="glass border-border hover:bg-secondary transition-smooth">
                Contact Me
              </Button>
            </a>
          </div>

          {/* Highlights */}
          <div className="mt-14 flex flex-wrap gap-2">
            {highlights.map((h) => (
              <span key={h} className="px-3 py-1.5 rounded-full glass text-xs text-muted-foreground">
                <CheckCircle2 className="inline h-3.5 w-3.5 mr-1.5 text-primary" />{h}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="About" title="Hello, I'm Sravya" />
        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2 space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a Computer Science Engineering student specializing in <span className="text-foreground">Artificial Intelligence and Machine Learning</span>. I'm passionate about building innovative web applications, solving real-world problems, and exploring emerging technologies.
            </p>
            <p>
              My interests span Full Stack Development, Artificial Intelligence, Software Engineering, and Product Management. Through academic projects, virtual internships, and hands-on learning, I've developed strong problem-solving, analytical, and teamwork skills.
            </p>
            <p>
              I continuously strive to expand my technical expertise and aim to build impactful software solutions while growing as a skilled software professional.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 shadow-card">
            <h3 className="font-display font-semibold mb-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" /> Career Objective
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Seeking opportunities to apply technical skills, gain industry experience, and contribute to innovative software products — leveraging Python, JavaScript, PHP, MySQL, and modern web stacks to build impactful digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 bg-card/30">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Technical Skills" title="Tools of the trade" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {skillGroups.map(({ icon: Icon, title, items }) => (
              <div key={title} className="glass rounded-2xl p-6 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth">
                <div className="h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-glow">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold mb-3">{title}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-mono">{i}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Featured Projects" title="Things I've built" />
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {projects.map(({ icon: Icon, ...p }) => (
            <article key={p.title} className="glass rounded-2xl p-8 shadow-card hover:shadow-elegant transition-smooth group">
              <div className="flex items-start justify-between mb-5">
                <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-smooth">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <Cpu className="h-5 w-5 text-muted-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{p.description}</p>
              <ul className="space-y-2 mb-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-5 border-t border-border">
                {p.stack.map((s) => (
                  <span key={s} className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono">{s}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 bg-card/30">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Virtual Internships & Simulations" title="Hands-on experience" />
          <div className="mt-12 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-8">
              {internships.map((i, idx) => (
                <div key={idx} className={`relative md:flex md:items-center ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="md:w-1/2 md:px-8">
                    <div className="glass rounded-2xl p-6 shadow-card hover:shadow-elegant transition-smooth ml-12 md:ml-0">
                      <div className="flex items-center gap-2 text-xs text-primary font-mono mb-2">
                        <Briefcase className="h-3.5 w-3.5" /> {i.org} · {i.year}
                      </div>
                      <h3 className="font-display font-semibold mb-3">{i.title}</h3>
                      <ul className="space-y-1.5">
                        {i.points.map((pt) => (
                          <li key={pt} className="text-sm text-muted-foreground flex gap-2">
                            <span className="text-primary">▹</span>{pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-gradient-primary shadow-glow" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION + STRENGTHS */}
      <section className="py-24 mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <SectionHeading eyebrow="Education" title="Academic journey" />
          <div className="mt-10 space-y-4">
            {education.map((e) => (
              <div key={e.title} className="glass rounded-2xl p-6 shadow-card">
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0 shadow-glow">
                    <GraduationCap className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold">{e.title}</h3>
                    <p className="text-sm text-muted-foreground">{e.sub}</p>
                    {e.org !== "—" && <p className="text-sm text-muted-foreground mt-1">{e.org}</p>}
                    <p className="text-xs text-primary font-mono mt-2">{e.meta}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <SectionHeading eyebrow="Strengths" title="What I bring" />
          <div className="mt-10 grid grid-cols-2 gap-4">
            {strengths.map(({ icon: Icon, label }) => (
              <div key={label} className="glass rounded-2xl p-5 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-primary/15 flex items-center justify-center">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <SectionHeading eyebrow="Contact" title="Let's build something together" center />
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Open to internships, full-time roles, and collaborations. Reach out — I'd love to hear from you.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-12 text-left">
            <ContactCard icon={Mail} label="Email" value="patisravya@gmail.com" href="mailto:patisravya@gmail.com" />
            <ContactCard icon={Phone} label="Phone" value="+91 7780251267" href="tel:+917780251267" />
            <ContactCard icon={MapPin} label="Location" value="Hanamkonda, Telangana, India" />
            <ContactCard icon={Github} label="GitHub" value="github.com/patisravya" href="https://github.com/patisravya" />
            <ContactCard icon={Linkedin} label="LinkedIn" value="linkedin.com/in/pati-sravya-ba02562ab" href="https://linkedin.com/in/pati-sravya-ba02562ab" />
          </div>

          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <a href="mailto:patisravya@gmail.com">
              <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow transition-smooth">
                Send Message <Mail className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="mailto:patisravya@gmail.com?subject=Hiring Opportunity">
              <Button size="lg" variant="outline" className="glass hover:bg-secondary transition-smooth">
                Hire Me
              </Button>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-border">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 Pati Sravya · Building Future with Code</p>
          <div className="flex gap-4">
            <a href="https://github.com/patisravya" className="hover:text-foreground transition-smooth"><Github className="h-4 w-4" /></a>
            <a href="https://linkedin.com/in/pati-sravya-ba02562ab" className="hover:text-foreground transition-smooth"><Linkedin className="h-4 w-4" /></a>
            <a href="mailto:patisravya@gmail.com" className="hover:text-foreground transition-smooth"><Mail className="h-4 w-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({ eyebrow, title, center }: { eyebrow: string; title: string; center?: boolean }) {
  return (
    <div className={center ? "text-center" : ""}>
      <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-3">{eyebrow}</p>
      <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>
    </div>
  );
}

function ContactCard({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const content = (
    <div className="glass rounded-2xl p-5 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth flex items-center gap-4 h-full">
      <div className="h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0 shadow-glow">
        <Icon className="h-5 w-5 text-primary-foreground" />
      </div>
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
        <p className="text-sm font-medium truncate">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer">{content}</a> : content;
}

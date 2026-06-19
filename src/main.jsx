import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Activity,
  Award,
  BarChart3,
  Brain,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Download,
  GraduationCap,
  Home,
  Mail,
  Menu,
  Moon,
  Search,
  Sun,
  Table2,
  TrendingUp,
  UserRound,
  X,
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./styles.css";

const profile = {
  name: "Wajiha Babar",
  role: "Junior Data Scientist",
  location: "Islamabad, Pakistan",
  email: "thaheemwajeeha@gmail.com",
  phone: "03247744113",
  portfolio: "https://linktr.ee/thaheemwajeeha",
  linkedin: "https://www.linkedin.com/in/wajiha-babar-12731a2bb/",
  github: "https://github.com/Wajiha-Babar?tab=repositories",
  image: "/profile.jpg",
  summary:
    "Junior Data Scientist and Machine Learning enthusiast building classification models, forecasting pipelines, EDA notebooks, analytics dashboards, and deployed Streamlit apps.",
};

const metrics = [
  {
    label: "ML Accuracy",
    value: "95.67%",
    change: "EfficientNet-B2 + TTA",
    icon: Brain,
    tone: "violet",
  },
  {
    label: "Best ROC-AUC",
    value: "0.8896",
    change: "Churn model",
    icon: TrendingUp,
    tone: "green",
  },
  {
    label: "Forecast Window",
    value: "72 hrs",
    change: "AQI pipeline",
    icon: Activity,
    tone: "red",
  },
  {
    label: "Dashboards",
    value: "5+",
    change: "BI + ML apps",
    icon: BarChart3,
    tone: "blue",
  },
];

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: Home },
  { id: "about", label: "About", icon: UserRound },
  { id: "projects", label: "Projects", icon: BriefcaseBusiness },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "experience", label: "Experience", icon: Award },
  { id: "contact", label: "Contact", icon: Mail },
];

const accuracyTrend = [
  { month: "Jan", score: 72 },
  { month: "Feb", score: 78 },
  { month: "Mar", score: 84 },
  { month: "Apr", score: 88 },
  { month: "May", score: 91 },
  { month: "Jun", score: 96 },
];

const projectScores = [
  { name: "Churn", score: 88.96 },
  { name: "Credit", score: 84 },
  { name: "AQI", score: 91 },
  { name: "Disease", score: 95.67 },
  { name: "BI", score: 89 },
];

const skillMix = [
  { name: "Machine Learning", value: 34 },
  { name: "Data Analytics", value: 28 },
  { name: "BI Dashboards", value: 22 },
  { name: "Deployment", value: 16 },
];

const projects = [
  {
    title: "Customer Churn Prediction Dashboard",
    type: "ML App",
    stack: "Python • scikit-learn • Plotly • Streamlit",
    result: "ROC-AUC 0.8896",
    text:
      "Bank churn classification system with preprocessing, encoding, scaling, model comparison, threshold tuning, feature importance, single prediction, batch CSV upload, and export-ready results.",
  },
  {
    title: "Credit Risk Prediction Dashboard",
    type: "Risk Analytics",
    stack: "Python • SMOTE • Streamlit",
    result: "Default risk scoring",
    text:
      "Loan default prediction workflow with imputation, outlier capping, class balancing, Logistic Regression, Decision Tree, ROC curve, confusion matrix, and applicant risk categories.",
  },
  {
    title: "AQI Islamabad Forecasting System",
    type: "Forecasting",
    stack: "Python • APIs • Hopsworks • GitHub Actions",
    result: "72-hour forecast",
    text:
      "End-to-end AQI pipeline with hourly ingestion, feature store integration, model training, best-model selection by RMSE, automated daily inference, alerts, and historical insights.",
  },
  {
    title: "Potato Leaf Disease Classification",
    type: "Deep Learning",
    stack: "PyTorch • EfficientNet • Transfer Learning",
    result: "95.67% test accuracy",
    text:
      "Real-field plant disease image workflow with preprocessing, augmentation, CNN model comparison, transfer learning, and test-time augmentation for Healthy vs Diseased screening.",
  },
  {
    title: "Business Intelligence Dashboards",
    type: "BI Portfolio",
    stack: "Power BI • Excel • DAX • Pivot Tables",
    result: "KPI-ready reporting",
    text:
      "Sales Power BI and Hospital ER Excel dashboards with KPI cards, slicers, trend analysis, category breakdowns, regional insights, and professional reporting visuals.",
  },
];

const skills = [
  "Python",
  "SQL",
  "Pandas",
  "NumPy",
  "scikit-learn",
  "Random Forest",
  "Logistic Regression",
  "Decision Tree",
  "SMOTE",
  "Power BI",
  "Excel Dashboards",
  "Power Query",
  "DAX",
  "Tableau",
  "Plotly",
  "Streamlit",
  "GitHub Actions",
  "APIs",
];

const experience = [
  {
    role: "Data Science Intern",
    company: "Developers Hub Corporation",
    period: "Apr 2026 – Present",
    detail:
      "Completed Iris EDA, Credit Risk Prediction, and Customer Churn Prediction projects with clean notebooks, documentation, repositories, Streamlit dashboards, prediction forms, batch CSV prediction, feature importance visuals, and downloadable reports.",
  },
  {
    role: "Software / Data Science Intern",
    company: "10Pearls",
    period: "Dec 2025 – Mar 2026",
    detail:
      "Supported data cleaning, validation, reporting, backend tasks, API-based integrations, project documentation, Git/GitHub workflows, agile collaboration, and production-focused development practices.",
  },
];

const COLORS = ["#6d5dfc", "#27d17f", "#ff4d61", "#2da8ff"];

function MetricCard({ metric }) {
  const Icon = metric.icon;

  return (
    <article className={`metric-card ${metric.tone}`}>
      <div className="metric-icon">
        <Icon size={22} />
      </div>

      <div>
        <p>{metric.label}</p>
        <h3>{metric.value}</h3>
        <span>{metric.change}</span>
      </div>
    </article>
  );
}

function Sidebar({ active, setActive, open, setOpen }) {
  return (
    <aside className={`sidebar ${open ? "show" : ""}`}>
      <div className="brand">
        <div className="logo-mark">WB</div>
        <span>Datafolio</span>

        <button
          className="close-menu"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          <X size={18} />
        </button>
      </div>

      <label className="search-box">
        <Search size={15} />
        <input placeholder="Search portfolio" />
      </label>

      <nav className="side-nav">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              className={active === item.id ? "active" : ""}
              onClick={() => {
                setActive(item.id);
                setOpen(false);
              }}
            >
              <Icon size={16} />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="sidebar-profile">
        <AvatarDisplay size="mini" />

        <div>
          <b>{profile.name}</b>
          <small>{profile.email}</small>
        </div>
      </div>
    </aside>
  );
}

function Header({ setOpen, theme, setTheme }) {
  const isLight = theme === "light";

  return (
    <header className="topbar">
      <button
        className="menu-btn"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <Menu size={21} />
      </button>

      <div>
        <h1>Good Afternoon, Wajiha!</h1>
        <p>Data Science • Machine Learning • Data Analytics Dashboard Portfolio</p>
      </div>

      <div className="top-actions">
        <button
          className="theme-toggle"
          onClick={() => setTheme(isLight ? "dark" : "light")}
          aria-label="Toggle light and dark mode"
        >
          {isLight ? <Moon size={16} /> : <Sun size={16} />}
          {isLight ? "Dark" : "Light"}
        </button>

        <a href="/Wajiha-Babar-Resume.pdf" download className="resume-btn">
          <Download size={16} />
          Resume
        </a>
      </div>
    </header>
  );
}

function DashboardHome() {
  return (
    <>
      <section className="metrics-grid">
        {metrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </section>

      <section className="dashboard-grid">
        <article className="panel wide">
          <div className="panel-head">
            <div>
              <h2>Model Performance Trend</h2>
              <span>Accuracy and scoring progress across recent portfolio builds</span>
            </div>

            <div className="tabs">
              <b>Day</b>
              <span>Week</span>
              <span>Month</span>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={accuracyTrend}>
              <defs>
                <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2da8ff" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#2da8ff" stopOpacity={0.04} />
                </linearGradient>
              </defs>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,.08)"
              />
              <XAxis dataKey="month" stroke="#8b90a4" />
              <YAxis stroke="#8b90a4" />
              <Tooltip
                contentStyle={{
                  background: "#20212a",
                  border: "1px solid #343647",
                  color: "#fff",
                }}
              />
              <Area
                type="monotone"
                dataKey="score"
                stroke="#2da8ff"
                strokeWidth={3}
                fill="url(#scoreGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </article>

        <article className="panel details-panel">
          <div className="panel-head compact">
            <h2>Profile Details</h2>
          </div>

          <dl>
            <div>
              <dt>Location</dt>
              <dd>{profile.location}</dd>
            </div>

            <div>
              <dt>Education</dt>
              <dd>BS Software Engineering</dd>
            </div>

            <div>
              <dt>CGPA</dt>
              <dd>3.5 / 4.0</dd>
            </div>

            <div>
              <dt>Focus</dt>
              <dd>ML + Analytics</dd>
            </div>

            <div>
              <dt>Availability</dt>
              <dd>Intern / Junior Role</dd>
            </div>
          </dl>
        </article>

        <article className="panel project-table">
          <div className="panel-head compact">
            <h2>Latest Projects</h2>
            <a href="#projects">View all</a>
          </div>

          {projects.slice(0, 4).map((project) => (
            <div className="project-row" key={project.title}>
              <div className="row-icon">
                <Database size={17} />
              </div>

              <div>
                <b>{project.title}</b>
                <span>{project.stack}</span>
              </div>

              <small>{project.result}</small>
            </div>
          ))}
        </article>

        <article className="panel status-panel">
          <div className="panel-head compact">
            <h2>Professional Status</h2>
          </div>

          <div className="gauge">
            <div className="gauge-ring">
              <span>86%</span>
              <small>Portfolio Ready</small>
            </div>
          </div>

          <div className="status-lines">
            <span>ML Workflow</span>
            <b>Advanced Beginner</b>

            <span>Dashboarding</span>
            <b>Strong</b>

            <span>Deployment</span>
            <b>Streamlit Ready</b>
          </div>
        </article>
      </section>
    </>
  );
}

function AboutSection() {
  return (
    <section className="content-section two-col" id="about">
      <article className="panel story-card">
        <span className="eyebrow">Professional Summary</span>
        <h2>Data Scientist</h2>

        <p>{profile.summary}</p>

        <p>
          Her portfolio combines machine learning, business intelligence,
          forecasting, dashboards, and clean documentation. The work style is
          project-focused: understand the data, clean it, build reliable models,
          evaluate them properly, and present results through dashboards that
          non-technical users can understand.
        </p>
      </article>

      <article className="panel education-card">
        <GraduationCap size={32} />

        <h3>Government College University Faisalabad</h3>
        <p>BS Software Engineering • 2022 – 2026</p>
        <strong>CGPA: 3.5 / 4.0</strong>

        <div className="cert-list">
          <span>Google Data Analytics Specialization</span>
          <span>Data Science Real World Projects in Python</span>
          <span>SQL, Tableau, Power BI & Excel Projects</span>
          <span>Google Prompting Essentials</span>
        </div>
      </article>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="content-section" id="projects">
      <div className="section-heading">
        <span className="eyebrow">Selected Work</span>
        <h2>Machine learning, forecasting, and BI dashboards</h2>
      </div>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <article className="portfolio-card" key={project.title}>
            <div className="card-top">
              <span>{project.type}</span>
              <b>{project.result}</b>
            </div>

            <h3>{project.title}</h3>
            <p>{project.text}</p>
            <div className="stack-line">{project.stack}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="content-section two-col" id="skills">
      <article className="panel">
        <div className="panel-head compact">
          <h2>Skill Mix</h2>
        </div>

        <ResponsiveContainer width="100%" height={260}>
          <PieChart>
            <Pie
              data={skillMix}
              dataKey="value"
              nameKey="name"
              outerRadius={92}
              innerRadius={58}
              paddingAngle={4}
            >
              {skillMix.map((entry, index) => (
                <Cell key={entry.name} fill={COLORS[index]} />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                background: "#20212a",
                border: "1px solid #343647",
                color: "#fff",
              }}
            />
          </PieChart>
        </ResponsiveContainer>

        <div className="legend-list">
          {skillMix.map((item, index) => (
            <span key={item.name}>
              <i style={{ background: COLORS[index] }} />
              {item.name}
            </span>
          ))}
        </div>
      </article>

      <article className="panel">
        <div className="panel-head compact">
          <h2>Project Benchmarks</h2>
        </div>

        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={projectScores}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,.08)"
            />
            <XAxis dataKey="name" stroke="#8b90a4" />
            <YAxis stroke="#8b90a4" />
            <Tooltip
              contentStyle={{
                background: "#20212a",
                border: "1px solid #343647",
                color: "#fff",
              }}
            />
            <Bar dataKey="score" fill="#27d17f" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </article>

      <article className="panel full-row skill-cloud">
        <h2>Technical Toolkit</h2>

        <div>
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </article>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="content-section" id="experience">
      <div className="section-heading">
        <span className="eyebrow">Experience</span>
        <h2>Internship and project-based learning</h2>
      </div>

      <div className="timeline">
        {experience.map((item) => (
          <article className="timeline-card" key={item.role}>
            <div className="timeline-dot">
              <CheckCircle2 size={18} />
            </div>

            <div>
              <span>{item.period}</span>
              <h3>{item.role}</h3>
              <b>{item.company}</b>
              <p>{item.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="content-section contact-section" id="contact">
      <article className="panel contact-card-large">
        <span className="eyebrow">Contact</span>

        <h2>
          Let’s discuss a data science, analytics, or dashboard opportunity.
        </h2>

        <p>
          Available for junior data science roles, internships, machine learning
          dashboards, Excel/Power BI reporting, and Streamlit-based data
          products.
        </p>

        <div className="contact-actions">
          <a
            className="contact-btn"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            IN LinkedIn
          </a>

          <a
            className="contact-btn"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GH GitHub
          </a>

          <a
            className="contact-btn"
            href={profile.portfolio}
            target="_blank"
            rel="noreferrer"
          >
            Portfolio Hub
          </a>
        </div>
      </article>
    </section>
  );
}

function AvatarDisplay({ size = "large" }) {
  const [hasImage, setHasImage] = useState(true);

  return (
    <div
      className={
        size === "mini"
          ? "mini-avatar avatar-photo-wrap"
          : "avatar avatar-photo-wrap"
      }
    >
      {hasImage && (
        <img
          src={profile.image}
          alt={`${profile.name} profile`}
          onError={() => setHasImage(false)}
        />
      )}

      <span className={hasImage ? "fallback hidden" : "fallback"}>WB</span>
    </div>
  );
}

function RightRail() {
  return (
    <aside className="right-rail">
      <article className="profile-card">
        <div className="avatar-ring">
          <AvatarDisplay />
        </div>

        <h2>{profile.name}</h2>
        <p>{profile.role}</p>

        <div className="profile-stats">
          <div>
            <b>5+</b>
            <span>Projects</span>
          </div>

          <div>
            <b>2</b>
            <span>Internships</span>
          </div>

          <div>
            <b>4</b>
            <span>Certs</span>
          </div>
        </div>
      </article>

      <article className="quick-panel">
        <h3>Specializations</h3>

        <div className="quick-item">
          <Brain size={17} />
          <span>Machine Learning</span>
          <b>›</b>
        </div>

        <div className="quick-item">
          <BarChart3 size={17} />
          <span>Power BI / Excel</span>
          <b>›</b>
        </div>

        <div className="quick-item">
          <Table2 size={17} />
          <span>EDA & Reporting</span>
          <b>›</b>
        </div>

        <div className="quick-item">
          <Activity size={17} />
          <span>Forecasting</span>
          <b>›</b>
        </div>
      </article>

      <article className="success-card">
        <div>
          <span>Portfolio Strength</span>
          <b>86%</b>
        </div>

        <div className="success-bar">
          <i />
        </div>
      </article>
    </aside>
  );
}

function MainContent({ active }) {
  const section = useMemo(() => {
    switch (active) {
      case "about":
        return <AboutSection />;
      case "projects":
        return <ProjectsSection />;
      case "skills":
        return <SkillsSection />;
      case "experience":
        return <ExperienceSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <DashboardHome />;
    }
  }, [active]);

  return <main className="main-content">{section}</main>;
}

function App() {
  const [active, setActive] = useState("dashboard");
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  return (
    <div className={`portfolio-page theme-${theme}`}>
      <div className="animated-bg" aria-hidden="true">
        <span className="float-shape shape-one" />
        <span className="float-shape shape-two" />
        <span className="float-shape shape-three" />
        <span className="grid-wave" />
      </div>

      <div className="app-shell">
        <Sidebar
          active={active}
          setActive={setActive}
          open={open}
          setOpen={setOpen}
        />

        <div className="workspace">
          <Header setOpen={setOpen} theme={theme} setTheme={setTheme} />
          <MainContent active={active} />
        </div>

        <RightRail />

        {open && (
          <button
            className="overlay"
            onClick={() => setOpen(false)}
            aria-label="Close sidebar"
          />
        )}
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
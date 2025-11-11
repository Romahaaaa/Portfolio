import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import helmet from "helmet";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'"]
    }
  }
}));

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const portfolioData = {
  name: "Kostiyk Roman",
  role: "Software Engineering Student",
  specialization: "Full-Stack Development",
  
  hero: {
    badge: "Looking for Opportunities in 2025",
    title: "Building My Future in Tech",
    subtitle: "Student • Developer • Learner",
    description: "Software engineering student passionate about web development. Currently learning and building my first projects to master web technologies.",
    stats: [
      { number: "2024", label: "Started Coding" },
      { number: "Now", label: "Learning" },
      { number: "2025", label: "Building Skills" }
    ]
  },

  bio: "I'm a software engineering student beginning my journey in web development. I'm passionate about learning new technologies and currently focused on building my foundational skills through hands-on projects and coursework.",
  
  education: "Software Engineering Student at State University of Trade and Economics",
  location: "Ukraine",
  
  experience: [
    {
      role: "Student Developer",
      company: "Learning Projects",
      period: "2024 - Present",
      description: "Building foundational skills in web development through online courses, university projects, and self-directed learning."
    }
  ],

  skills: [
    { 
      name: "Frontend Development", 
      description: "Creating responsive and interactive user interfaces",
      technologies: ["HTML5", "CSS3", "JavaScript", "EJS"],
      level: "Proficient"
    },
    { 
      name: "Backend Development", 
      description: "Building server-side applications and APIs",
      technologies: ["Node.js", "Express.js"],
      level: "Proficient"
    },
    { 
      name: "Tools & Development", 
      description: "Development tools and workflow management",
      technologies: ["Git", "GitHub", "VS Code", "Postman"],
      level: "Proficient"
    },
    { 
      name: "Currently Learning", 
      description: "Expanding my skill set with modern technologies",
      technologies: ["React", "Next.js", "TypeScript", "MongoDB"],
      level: "Learning"
    }
  ],

  socialLinks: {
    github: "https://github.com/Romahaaaa",
    linkedin: "https://www.linkedin.com/in/роман-костюк-528835398"
  }
};

// Routes
app.get("/", (req, res) => {
  res.render("index", { ...portfolioData, page: 'home' });
});

app.get("/projects-page", (req, res) => {
  res.render("projects-page", { ...portfolioData, page: 'projects-page' });
});

app.get("/skills", (req, res) => {
  res.render("skills", { 
    ...portfolioData, 
    page: 'skills'
  });
});

app.get("/about", (req, res) => {
  res.render("about", { ...portfolioData, page: 'about' });
});

app.get("/contact", (req, res) => {
  res.render("contact", { ...portfolioData, page: 'contact' });
});

app.post("/contact", (req, res) => {
  console.log("Contact form submission:", req.body);
  res.render("contact-confirm", { ...portfolioData, formData: req.body });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Error:', error);
  res.status(500).render("500", { 
    ...portfolioData,
    error: process.env.NODE_ENV === 'development' ? error : {}
  });
});

// 404 handler - must be last
app.use((req, res) => {
  res.status(404).render("404", { ...portfolioData });
});

app.listen(port, () => {
  console.log(`🎯 Portfolio server running at http://localhost:${port}`);
});
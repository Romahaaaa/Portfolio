import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

// Create dist folder if not exists
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy public folder to dist
function copyPublicFolder() {
  const publicPath = path.join(__dirname, 'public');
  const distPublicPath = path.join(__dirname, 'dist');
  
  if (fs.existsSync(publicPath)) {
    fs.cpSync(publicPath, distPublicPath, { recursive: true });
    console.log('✅ Public folder copied to dist');
  }
}

// Generate basic HTML pages
function generateBasicPages() {
  // Generate index.html
  const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kostiyk Roman - Software Engineer</title>
    <link rel="stylesheet" href="./css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="cosmic-bg"></div>
    
    <header class="header">
        <nav class="nav container">
            <a href="index.html" class="logo">
                <span class="logo-accent">K</span>ostiyk
            </a>
            <ul class="nav-links">
                <li><a href="index.html" class="active">Home</a></li>
                <li><a href="projects-page.html">Projects</a></li>
                <li><a href="skills.html">Skills</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><button class="theme-toggle">🌙</button></li>
            </ul>
            <button class="burger-menu">
                <div class="burger-line"></div>
                <div class="burger-line"></div>
                <div class="burger-line"></div>
            </button>
        </nav>
    </header>

    <main>
        <section class="hero">
            <div class="container">
                <div class="hero-content fade-in">
                    <span class="hero-badge">${portfolioData.hero.badge}</span>
                    <h1 class="hero-title">${portfolioData.hero.title}</h1>
                    <p class="hero-subtitle">${portfolioData.hero.subtitle}</p>
                    <p class="hero-description">${portfolioData.hero.description}</p>
                    
                    <div class="hero-stats">
                        ${portfolioData.hero.stats.map(stat => `
                        <div class="stat-item">
                            <span class="stat-number">${stat.number}</span>
                            <span class="stat-label">${stat.label}</span>
                        </div>
                        `).join('')}
                    </div>
                    
                    <div class="hero-buttons">
                        <a href="projects-page.html" class="btn btn-primary">View My Projects</a>
                        <a href="./files/Roman_Kostyuk_CV.pdf" download class="btn btn-outline">Download CV</a>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <a href="index.html" class="logo">
                        <span class="logo-accent">K</span>ostiyk Roman
                    </a>
                    <p class="footer-description">Software engineering student building modern web development skills.</p>
                </div>
                
                <div class="footer-links">
                    <h3>Navigation</h3>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="projects-page.html">Projects</a></li>
                        <li><a href="skills.html">Skills</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                
                <div class="footer-links">
                    <h3>Connect</h3>
                    <ul>
                        <li><a href="${portfolioData.socialLinks.github}" target="_blank">GitHub</a></li>
                        <li><a href="${portfolioData.socialLinks.linkedin}" target="_blank">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

    <script src="./js/script.js"></script>
</body>
</html>`;

  fs.writeFileSync(path.join(distDir, 'index.html'), indexHtml);
  console.log('✅ Generated index.html');

  // Generate skills.html
  const skillsHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Skills - Kostiyk Roman</title>
    <link rel="stylesheet" href="./css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="cosmic-bg"></div>
    
    <header class="header">
        <nav class="nav container">
            <a href="index.html" class="logo">
                <span class="logo-accent">K</span>ostiyk
            </a>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="projects-page.html">Projects</a></li>
                <li><a href="skills.html" class="active">Skills</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><button class="theme-toggle">🌙</button></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="section">
            <div class="container">
                <div class="section-header">
                    <span class="section-subtitle">My Tech Stack</span>
                    <h2 class="section-title">Skills & Technologies</h2>
                </div>
                
                <div class="skills-grid">
                    ${portfolioData.skills.map(skill => `
                    <div class="skill-category fade-in">
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                            <h3 style="color: var(--accent-primary); margin: 0; font-size: 1.4rem;">${skill.name}</h3>
                            <span class="skill-level-${skill.level.toLowerCase()}">${skill.level}</span>
                        </div>
                        <p style="color: var(--text-secondary); margin-bottom: 1.5rem; line-height: 1.6; font-size: 1.1rem;">
                            ${skill.description}
                        </p>
                        <div class="skill-items">
                            ${skill.technologies.map(tech => `<span class="skill-item-tag ${skill.level === 'Learning' ? 'learning' : ''}">${tech}</span>`).join('')}
                        </div>
                    </div>
                    `).join('')}
                </div>
            </div>
        </section>
    </main>

    <script src="./js/script.js"></script>
</body>
</html>`;

  fs.writeFileSync(path.join(distDir, 'skills.html'), skillsHtml);
  console.log('✅ Generated skills.html');

  // Generate other pages similarly...
  // For now, create simple placeholder pages
  const simplePages = [
    { name: 'projects-page', title: 'Projects - Kostiyk Roman' },
    { name: 'about', title: 'About - Kostiyk Roman' },
    { name: 'contact', title: 'Contact - Kostiyk Roman' }
  ];

  simplePages.forEach(page => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${page.title}</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <div class="cosmic-bg"></div>
    <div style="text-align: center; padding: 100px;">
        <h1>${page.title}</h1>
        <p>Page coming soon...</p>
        <a href="index.html">Back to Home</a>
    </div>
    <script src="./js/script.js"></script>
</body>
</html>`;
    fs.writeFileSync(path.join(distDir, `${page.name}.html`), html);
    console.log(`✅ Generated ${page.name}.html`);
  });
}

// Execute
console.log('🚀 Generating static site...');
copyPublicFolder();
generateBasicPages();
console.log('🎉 All pages generated in dist/ folder!');
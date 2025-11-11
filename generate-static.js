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

// Generate complete HTML pages
function generateCompletePages() {
  // ==================== INDEX.HTML ====================
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

    <!-- Mobile Navigation -->
    <div class="mobile-nav">
        <button class="close-menu">×</button>
        <ul class="mobile-nav-links">
            <li><a href="index.html" class="active">Home</a></li>
            <li><a href="projects-page.html">Projects</a></li>
            <li><a href="skills.html">Skills</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
        <button class="mobile-theme-toggle">🌙 Switch to Light</button>
    </div>

    <main>
        <!-- Hero Section -->
        <section class="hero">
            <div class="container">
                <div class="hero-content fade-in">
                    <!-- Profile Photo -->
                    <div class="photo-container">
                        <img src="./images/photo.jpg" alt="${portfolioData.name}" class="profile-photo">
                    </div>
                    
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

        <!-- Projects Section -->
        <section class="section">
            <div class="container">
                <div class="section-header">
                    <span class="section-subtitle">My Focus in 2025</span>
                    <h2 class="section-title">Projects & Learning</h2>
                </div>
                
                <div style="max-width: 800px; margin: 0 auto; text-align: center;">
                    <div class="project-card">
                        <h3 style="color: var(--accent-primary); margin-bottom: 1.5rem;">Starting My Journey in 2025</h3>
                        <p style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 2rem; color: var(--text-secondary);">
                            I'm at the beginning of my web development journey, focused on learning the fundamentals and building my first projects. 
                            Every day brings new challenges and opportunities to grow as a developer.
                        </p>
                        
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
                            <div style="text-align: center;">
                                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🎯</div>
                                <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">Foundation First</h4>
                                <p style="color: var(--text-muted); font-size: 0.9rem;">Mastering HTML, CSS, and JavaScript basics</p>
                            </div>
                            
                            <div style="text-align: center;">
                                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🚀</div>
                                <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">First Projects</h4>
                                <p style="color: var(--text-muted); font-size: 0.9rem;">Building initial applications and websites</p>
                            </div>
                            
                            <div style="text-align: center;">
                                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">📚</div>
                                <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">Continuous Learning</h4>
                                <p style="color: var(--text-muted); font-size: 0.9rem;">Expanding knowledge daily</p>
                            </div>
                        </div>
                        
                        <div class="hero-buttons" style="justify-content: center; margin-top: 2rem;">
                            <a href="skills.html" class="btn btn-primary">View My Skills</a>
                            <a href="projects-page.html" class="btn btn-outline">View All Projects</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Skills Section -->
        <section class="section">
            <div class="container">
                <div class="section-header">
                    <span class="section-subtitle">My Current Skills</span>
                    <h2 class="section-title">Skills & Technologies</h2>
                </div>
                
                <div class="skills-grid">
                    ${portfolioData.skills.map(skill => `
                    <div class="skill-category fade-in">
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                            <h3 style="color: var(--accent-primary); margin: 0; font-size: 1.3rem;">${skill.name}</h3>
                            <span class="skill-level-${skill.level.toLowerCase()}">${skill.level}</span>
                        </div>
                        <p style="color: var(--text-secondary); margin-bottom: 1.5rem; line-height: 1.6; font-size: 1rem;">
                            ${skill.description}
                        </p>
                        <div class="skill-items">
                            ${skill.technologies.map(tech => `<span class="skill-item-tag ${skill.level === 'Learning' ? 'learning' : ''}">${tech}</span>`).join('')}
                        </div>
                    </div>
                    `).join('')}
                </div>

                <div style="text-align: center; margin-top: 4rem;">
                    <p style="color: var(--text-secondary); font-size: 1.1rem; max-width: 600px; margin: 0 auto 2rem;">
                        Building my skills step by step. Focused on learning fundamentals before moving to advanced concepts.
                    </p>
                    <a href="skills.html" class="btn btn-outline">View Detailed Skills</a>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <a href="index.html" class="logo">
                        <span class="logo-accent">K</span>ostiyk Roman
                    </a>
                    <p class="footer-description">
                        Software engineering student beginning the web development journey in 2025.
                    </p>
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
            
            <div class="footer-bottom">
                <p>&copy; 2025 Kostiyk Roman. Crafted with passion.</p>
            </div>
        </div>
    </footer>

    <script src="./js/script.js"></script>
</body>
</html>`;

  fs.writeFileSync(path.join(distDir, 'index.html'), indexHtml);
  console.log('✅ Generated index.html');

  // ==================== SKILLS.HTML ====================
  const skillsHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Skills - ${portfolioData.name}</title>
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
            <button class="burger-menu">
                <div class="burger-line"></div>
                <div class="burger-line"></div>
                <div class="burger-line"></div>
            </button>
        </nav>
    </header>

    <!-- Mobile Navigation -->
    <div class="mobile-nav">
        <button class="close-menu">×</button>
        <ul class="mobile-nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="projects-page.html">Projects</a></li>
            <li><a href="skills.html" class="active">Skills</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
        <button class="mobile-theme-toggle">🌙 Switch to Light</button>
    </div>

    <main>
        <section class="section">
            <div class="container">
                <div class="section-header">
                    <span class="section-subtitle">My 2025 Tech Stack</span>
                    <h2 class="section-title">Skills & Expertise</h2>
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

                <div style="text-align: center; margin-top: 4rem;">
                    <div style="background: var(--bg-card); padding: 2rem; border-radius: 15px; border: 1px solid var(--border-color); max-width: 600px; margin: 0 auto;">
                        <h3 style="color: var(--accent-primary); margin-bottom: 1rem;">🎯 My Learning Philosophy</h3>
                        <p style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 0;">
                            I believe in continuous learning and practical application. Rather than focusing on arbitrary percentages, 
                            I measure my skills by what I can build and the problems I can solve. Each technology I learn is a tool 
                            to create better solutions and deliver value.
                        </p>
                    </div>
                    
                    <div class="hero-buttons" style="justify-content: center; margin-top: 3rem;">
                        <a href="projects-page.html" class="btn btn-primary">See My Projects</a>
                        <a href="contact.html" class="btn btn-outline">Get In Touch</a>
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
                    <p class="footer-description">
                        Software engineering student building modern web development skills in 2025.
                    </p>
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
            
            <div class="footer-bottom">
                <p>&copy; 2025 Kostiyk Roman. Crafted with passion.</p>
            </div>
        </div>
    </footer>

    <script src="./js/script.js"></script>
</body>
</html>`;

  fs.writeFileSync(path.join(distDir, 'skills.html'), skillsHtml);
  console.log('✅ Generated skills.html');

  // ==================== PROJECTS-PAGE.HTML ====================
  const projectsHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projects - ${portfolioData.name}</title>
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
                <li><a href="projects-page.html" class="active">Projects</a></li>
                <li><a href="skills.html">Skills</a></li>
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
                    <span class="section-subtitle">My Learning Journey</span>
                    <h2 class="section-title">All Projects</h2>
                </div>
                
                <div style="max-width: 800px; margin: 0 auto; text-align: center;">
                    <div class="project-card" style="margin-bottom: 3rem;">
                        <h3 style="color: var(--accent-primary); margin-bottom: 1.5rem;">🚧 Building My First Projects</h3>
                        <p style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 2rem; color: var(--text-secondary);">
                            I'm currently working on my first web development projects as part of my learning journey. 
                            Each project helps me understand new concepts and improve my coding skills.
                        </p>
                        
                        <div style="background: var(--bg-secondary); padding: 2rem; border-radius: 15px; margin-bottom: 2rem;">
                            <h4 style="color: var(--accent-primary); margin-bottom: 1rem;">🎯 Current Focus:</h4>
                            <ul style="text-align: left; color: var(--text-secondary); line-height: 1.8;">
                                <li>Learning HTML, CSS, and JavaScript fundamentals</li>
                                <li>Building simple responsive websites</li>
                                <li>Practicing with Node.js and Express</li>
                                <li>Understanding version control with Git</li>
                                <li>Exploring frontend frameworks</li>
                            </ul>
                        </div>
                    </div>

                    <div class="project-card">
                        <h3 style="color: var(--accent-primary); margin-bottom: 1.5rem;">📚 Learning Through Practice</h3>
                        <p style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 2rem; color: var(--text-secondary);">
                            As I continue learning, I'm building small projects to apply my knowledge. 
                            Check back soon to see my progress and completed projects!
                        </p>
                        
                        <div class="hero-buttons">
                            <a href="${portfolioData.socialLinks.github}" class="btn btn-primary" target="_blank">
                                Follow My Progress
                            </a>
                            <a href="skills.html" class="btn btn-outline">
                                View My Skills
                            </a>
                        </div>
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
                    <p class="footer-description">
                        Software engineering student building foundational skills in 2025.
                    </p>
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
            
            <div class="footer-bottom">
                <p>&copy; 2025 Kostiyk Roman. Crafted with passion.</p>
            </div>
        </div>
    </footer>

    <script src="./js/script.js"></script>
</body>
</html>`;

  fs.writeFileSync(path.join(distDir, 'projects-page.html'), projectsHtml);
  console.log('✅ Generated projects-page.html');

  // ==================== ABOUT.HTML ====================
  const aboutHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About - ${portfolioData.name}</title>
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
                <li><a href="skills.html">Skills</a></li>
                <li><a href="about.html" class="active">About</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><button class="theme-toggle">🌙</button></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="section">
            <div class="container">
                <div style="max-width: 800px; margin: 0 auto;">
                    <div class="section-header">
                        <span class="section-subtitle">Get to Know Me</span>
                        <h2 class="section-title">About Me</h2>
                    </div>
                    
                    <div class="project-card">
                        <!-- Profile Photo -->
                        <div class="photo-container">
                            <img src="./images/photo.jpg" alt="${portfolioData.name}" class="profile-photo">
                        </div>
                        
                        <h3 style="color: var(--accent-primary); margin-bottom: 1.5rem;">Hello! I'm ${portfolioData.name}</h3>
                        <p style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 1.5rem; color: var(--text-secondary);">
                            ${portfolioData.bio}
                        </p>
                        
                        <div style="display: grid; gap: 2rem;">
                            <div>
                                <h4 style="color: var(--accent-primary); margin-bottom: 1rem;">Education</h4>
                                <p style="color: var(--text-secondary);">${portfolioData.education}</p>
                            </div>
                            
                            <div>
                                <h4 style="color: var(--accent-primary); margin-bottom: 1rem;">Location</h4>
                                <p style="color: var(--text-secondary);">${portfolioData.location}</p>
                            </div>
                            
                            <div>
                                <h4 style="color: var(--accent-primary); margin-bottom: 1.5rem;">Experience</h4>
                                ${portfolioData.experience.map(exp => `
                                <div style="margin-bottom: 1.5rem; padding: 1.5rem; background: var(--bg-secondary); border-radius: 10px;">
                                    <h5 style="color: var(--text-primary); margin-bottom: 0.5rem;">
                                        ${exp.role} at ${exp.company}
                                    </h5>
                                    <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 0.75rem;">
                                        ${exp.period}
                                    </p>
                                    <p style="color: var(--text-secondary); line-height: 1.6;">
                                        ${exp.description}
                                    </p>
                                </div>
                                `).join('')}
                            </div>
                        </div>
                        
                        <div class="hero-buttons" style="justify-content: center; margin-top: 2rem;">
                            <a href="./files/Roman_Kostyuk_CV.pdf" download class="btn btn-primary">
                                Download My CV
                            </a>
                        </div>
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
                    <p class="footer-description">
                        Software engineering student building foundational skills in 2025.
                    </p>
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
            
            <div class="footer-bottom">
                <p>&copy; 2025 Kostiyk Roman. Crafted with passion.</p>
            </div>
        </div>
    </footer>

    <script src="./js/script.js"></script>
</body>
</html>`;

  fs.writeFileSync(path.join(distDir, 'about.html'), aboutHtml);
  console.log('✅ Generated about.html');

  // ==================== CONTACT.HTML ====================
  const contactHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact - ${portfolioData.name}</title>
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
                <li><a href="skills.html">Skills</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html" class="active">Contact</a></li>
                <li><button class="theme-toggle">🌙</button></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="section">
            <div class="container">
                <div class="contact-grid">
                    <!-- Contact Form -->
                    <div class="contact-form">
                        <h2 style="margin-bottom: 2rem; color: var(--text-primary);">Send Me a Message</h2>
                        <form action="#" method="POST">
                            <div class="form-group">
                                <label class="form-label">Name *</label>
                                <input type="text" name="name" class="form-input" required>
                            </div>
                            
                            <div class="form-group">
                                <label class="form-label">Email *</label>
                                <input type="email" name="email" class="form-input" required>
                            </div>
                            
                            <div class="form-group">
                                <label class="form-label">Message *</label>
                                <textarea name="message" class="form-input" rows="5" required></textarea>
                            </div>
                            
                            <button type="submit" class="btn btn-primary" style="width: 100%;">
                                Send Message
                            </button>
                        </form>
                    </div>
                    
                    <!-- Contact Info -->
                    <div class="contact-info">
                        <div class="contact-card">
                            <h3>Get In Touch</h3>
                            <p style="color: var(--text-secondary); line-height: 1.6;">
                                I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and programming.
                            </p>
                        </div>
                        
                        <div class="contact-card">
                            <h3>Connect With Me</h3>
                            <div style="display: flex; flex-direction: column; gap: 1rem;">
                                <a href="${portfolioData.socialLinks.github}" target="_blank" 
                                   class="btn btn-outline" style="justify-content: center;">
                                    GitHub
                                </a>
                                
                                <a href="${portfolioData.socialLinks.linkedin}" target="_blank" 
                                   class="btn btn-outline" style="justify-content: center;">
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                        
                        <div class="contact-card">
                            <h3>Response Time</h3>
                            <p style="color: var(--text-secondary);">
                                I typically respond to messages within 24-48 hours. Looking forward to connecting with you!
                            </p>
                        </div>
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
                    <p class="footer-description">
                        Software engineering student passionate about creating digital solutions that make a difference.
                    </p>
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
            
            <div class="footer-bottom">
                <p>&copy; 2025 Kostiyk Roman. Crafted with passion.</p>
            </div>
        </div>
    </footer>

    <script src="./js/script.js"></script>
</body>
</html>`;

  fs.writeFileSync(path.join(distDir, 'contact.html'), contactHtml);
  console.log('✅ Generated contact.html');
}

// Execute
console.log('🚀 Generating complete static site...');
copyPublicFolder();
generateCompletePages();
console.log('🎉 All complete pages generated in dist/ folder!');
console.log('📁 Ready for Netlify deployment');
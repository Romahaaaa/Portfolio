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

// Generate HTML from EJS template
function generateHTML(templateName, outputName, data) {
  try {
    const ejsContent = fs.readFileSync(path.join(__dirname, 'views', `${templateName}.ejs`), 'utf8');
    
    // Simple EJS variable replacement
    let htmlContent = ejsContent
      .replace(/<%= name %>/g, data.name)
      .replace(/<%= role %>/g, data.role)
      .replace(/<%= hero\.badge %>/g, data.hero.badge)
      .replace(/<%= hero\.title %>/g, data.hero.title)
      .replace(/<%= hero\.subtitle %>/g, data.hero.subtitle)
      .replace(/<%= hero\.description %>/g, data.hero.description)
      .replace(/<%= bio %>/g, data.bio)
      .replace(/<%= education %>/g, data.education)
      .replace(/<%= location %>/g, data.location)
      .replace(/<%= socialLinks\.github %>/g, data.socialLinks.github)
      .replace(/<%= socialLinks\.linkedin %>/g, data.socialLinks.linkedin);

    // Handle skills
    htmlContent = htmlContent.replace(/<% skills\.forEach\(skill => { %>[\s\S]*?<% }) %>/g, 
      data.skills.map(skill => `
        <div class="skill-category">
          <h3>${skill.name}</h3>
          <span class="skill-level-${skill.level.toLowerCase()}">${skill.level}</span>
          <p>${skill.description}</p>
          <div class="skill-items">
            ${skill.technologies.map(tech => `<span class="skill-item-tag">${tech}</span>`).join('')}
          </div>
        </div>
      `).join(''));

    // Handle experience
    htmlContent = htmlContent.replace(/<% experience\.forEach\(exp => { %>[\s\S]*?<% }) %>/g,
      data.experience.map(exp => `
        <div class="experience-item">
          <h4>${exp.role} at ${exp.company}</h4>
          <p class="period">${exp.period}</p>
          <p>${exp.description}</p>
        </div>
      `).join(''));

    // Handle hero stats
    htmlContent = htmlContent.replace(/<% hero\.stats\.forEach\(stat => { %>[\s\S]*?<% }) %>/g,
      data.hero.stats.map(stat => `
        <div class="stat-item">
          <span class="stat-number">${stat.number}</span>
          <span class="stat-label">${stat.label}</span>
        </div>
      `).join(''));

    const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${outputName} - ${data.name}</title>
    <meta name="description" content="${data.hero.description}">
    <link rel="stylesheet" href="./css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    ${htmlContent}
    <script src="./js/script.js"></script>
</body>
</html>`;
    
    fs.writeFileSync(path.join(distDir, `${outputName}.html`), fullHtml);
    console.log(`✅ Generated ${outputName}.html`);
  } catch (error) {
    console.log(`❌ Error generating ${outputName}.html:`, error.message);
  }
}

// Generate all pages
function generateAllPages() {
  const pages = [
    { template: 'index', output: 'index' },
    { template: 'projects-page', output: 'projects-page' },
    { template: 'skills', output: 'skills' },
    { template: 'about', output: 'about' },
    { template: 'contact', output: 'contact' }
  ];

  pages.forEach(page => {
    generateHTML(page.template, page.output, portfolioData);
  });
}

// Execute
console.log('🚀 Generating static site...');
copyPublicFolder();
generateAllPages();
console.log('🎉 All pages generated in dist/ folder!');
console.log('📁 Ready for Netlify deployment');
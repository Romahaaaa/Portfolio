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

// Створюємо папку dist якщо не існує
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Копіюємо public папку
function copyPublicFolder() {
  const publicPath = path.join(__dirname, 'public');
  const distPublicPath = path.join(__dirname, 'dist');
  
  if (fs.existsSync(publicPath)) {
    // Копіюємо вміст public в dist
    const files = fs.readdirSync(publicPath);
    files.forEach(file => {
      const srcPath = path.join(publicPath, file);
      const destPath = path.join(distPublicPath, file);
      
      if (fs.statSync(srcPath).isDirectory()) {
        fs.cpSync(srcPath, destPath, { recursive: true });
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    });
    console.log('✅ Public folder copied to dist');
  }
}

// Генеруємо HTML для головної сторінки
function generateIndexPage() {
  const ejsContent = fs.readFileSync(path.join(__dirname, 'views', 'index.ejs'), 'utf8');
  
  // Проста заміна EJS змінних
  let htmlContent = ejsContent
    .replace(/<%= name %>/g, portfolioData.name)
    .replace(/<%= hero\.title %>/g, portfolioData.hero.title)
    .replace(/<%= hero\.subtitle %>/g, portfolioData.hero.subtitle)
    .replace(/<%= hero\.description %>/g, portfolioData.hero.description)
    .replace(/<%= socialLinks\.github %>/g, portfolioData.socialLinks.github)
    .replace(/<%= socialLinks\.linkedin %>/g, portfolioData.socialLinks.linkedin);

  const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${portfolioData.name} - Software Engineer</title>
    <meta name="description" content="${portfolioData.hero.description}">
    <link rel="stylesheet" href="./css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    ${htmlContent}
    <script src="./js/script.js"></script>
</body>
</html>`;
  
  fs.writeFileSync(path.join(distDir, 'index.html'), fullHtml);
  console.log('✅ Generated index.html');
}

// Виконуємо
copyPublicFolder();
generateIndexPage();
console.log('🎉 Static site generated in dist/ folder!');
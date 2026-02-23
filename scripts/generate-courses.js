import fs from 'fs';
import path from 'path';

const pdfDir = path.join(process.cwd(), 'public', 'pdf');
const outputFile = path.join(process.cwd(), 'src', 'content', 'courses.json');

// Helper to provide a rich description based on keywords
function generateDescription(baseName) {
    const nameMap = {
        'bootstrap': 'Learn how to rapidly build responsive websites and mobile-first projects using Bootstrap.',
        'css': 'Master the visual language of the web. Cover flexbox, grid, and modern styling techniques.',
        'designpatterns': 'Explore battle-tested software design patterns to write cleaner, more maintainable code.',
        'docker': 'Containerize your applications. Learn everything from Dockerfiles to orchestrating containers.',
        'git': 'Version control essentials. Stop losing code and start collaborating like a professional.',
        'html5': 'The foundation of the internet. Learn semantics, accessibility, and structural markup.',
        'jquery': 'Understand the legacy library that shaped the modern web and basic DOM manipulation.',
        'js-essentials': 'From variables to async/await. Your complete guide to modern JavaScript fundamentals.',
        'js-essentials2': 'Deep dive into advanced JavaScript concepts, closures, and the event loop.',
        'js-essentials3': 'Mastering modern ES6+ syntax, modules, and functional programming patterns in JS.',
        'js-solids': 'Writing robust object-oriented JavaScript using the S.O.L.I.D. design principles.',
        'mvc': 'Understanding the Model-View-Controller architecture pattern for scalable web applications.',
        'node': 'Take JavaScript to the server. Build fast, scalable network applications and REST APIs.',
        'orm': 'Object-Relational Mapping. Learn how to securely bridge the gap between your code and database.',
        'php': 'Dive into server-side scripting and dynamic page generation with classic PHP essentials.',
        'python': 'The ultimate beginner-friendly language. Learn Python for web, automation, and data.',
        'regex': 'Regular Expressions. Demystify the dark art of ultimate string matching and parsing.',
        'sql': 'Relational databases demystified. Write powerful queries to manage and analyze data.',
        'strapi': 'Headless CMS architecture. Build APIs rapidly and manage content without building a custom dashboard.',
        'tdd': 'Test-Driven Development. Learn how to write tests first to guarantee reliable, bug-free applications.',
        'wireframes': 'UI/UX basics. Learn how to map out user journeys and sketch applications before writing code.'
    };

    const lowerName = baseName.toLowerCase();

    for (const [key, desc] of Object.entries(nameMap)) {
        if (lowerName.includes(key)) {
            return desc;
        }
    }

    // Fallback description
    return `Comprehensive lecture slides covering the core concepts and fundamental knowledge of ${baseName.replace(/-/g, ' ')}.`;
}

// Helper to categorize courses
function categorizeCourse(baseName) {
    const categories = {
        'frontend': ['bootstrap', 'css', 'html5', 'jquery'],
        'language': ['js-essentials', 'python', 'js-solids'],
        'backend': ['node', 'orm', 'php', 'strapi'],
        'architecture': ['designpatterns', 'mvc'],
        'tools': ['git', 'regex', 'docker'],
        'methodology': ['tdd'],
        'design': ['wireframes']
    };

    const lowerName = baseName.toLowerCase();
    for (const [category, keywords] of Object.entries(categories)) {
        if (keywords.some(keyword => lowerName.includes(keyword))) {
            return category.toUpperCase();
        }
    }
    return 'FULL STACK';
}

// Read all pdf files
const files = fs.readdirSync(pdfDir).filter(f => f.endsWith('.pdf'));

const allCourses = files.map(file => {
    const baseName = file.replace('.pdf', '');

    // Format the title (e.g., BootStrap-Essentials -> BootStrap Essentials)
    const title = baseName
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return {
        id: baseName.toLowerCase(),
        title: title,
        description: generateDescription(baseName),
        category: categorizeCourse(baseName),
        pdfPath: `/pdf/${file}`,
        htmlPath: `/embeded/${baseName}.html`,
        imagePath: `/img/${baseName}.png`
    };
});

// Write the global courses.json file
fs.writeFileSync(
    outputFile,
    JSON.stringify(allCourses, null, 2)
);

console.log(`Generated ${allCourses.length} courses perfectly formatted into courses.json!`);

// src/components/ProjectsSection.tsx
const projects = [
    {
        title: "Committee Management System",
        description: "Meet Hive is a user-friendly Committee Management System designed to simplify the management of committee members 👥, meetings 🗓️, and roles 🧑‍💼. ",
        tags: ["SpringBoot", "MySQL", "HTML", "CSS", "JS"],
        image: "https://private-user-images.githubusercontent.com/138601788/434055506-68385153-4f69-4dc1-beea-949beefb4330.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDczMzc5NDksIm5iZiI6MTc0NzMzNzY0OSwicGF0aCI6Ii8xMzg2MDE3ODgvNDM0MDU1NTA2LTY4Mzg1MTUzLTRmNjktNGRjMS1iZWVhLTk0OWJlZWZiNDMzMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTE1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUxNVQxOTM0MDlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04ZWUzNmYzODE4NTgxOTRjMmExM2M3Y2NhNmM1MTRmYzIwMzBlNDY3NGY4ODg5ZDdkNmIwNmZiZDlmYmQ0M2I2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.lly_8YWhf0AWgVIhKv4wVM1uAJE28CFz9frl4fLOoAY",
        link: "#"
    },
    {
        title: "Portfolio Template",
        description: "A customizable portfolio template for creatives and developers.",
        tags: ["React", "Tailwind CSS"],
        image: "src/assets/images/Screenshot 2025-05-16 000756.png",
        link: "#"
    },
    // Add more projects
];

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-40 px-4 max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
                My <span className="text-purple-600">Projects</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">
                    {tag}
                  </span>
                                ))}
                            </div>
                            <a
                                href={project.link}
                                className="text-purple-600 font-medium hover:text-purple-800 transition"
                            >
                                View Project →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
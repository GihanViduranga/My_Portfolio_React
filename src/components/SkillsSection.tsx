// src/components/SkillsSection.tsx
const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS/Tailwind", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "UI/UX Design", level: 75 },
];

const SkillsSection = () => {
    return (
        <section id="skills" className="py-20 bg-white px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">
                    My <span className="text-purple-600">Skills</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map((skill, index) => (
                        <div key={index}>
                            <div className="flex justify-between mb-2">
                                <span className="font-medium">{skill.name}</span>
                                <span>{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div
                                    className="bg-purple-600 h-2.5 rounded-full"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
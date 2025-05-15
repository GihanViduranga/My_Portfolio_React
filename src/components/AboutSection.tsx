// src/components/AboutSection.tsx
const AboutSection = () => {
    return (
        <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
                About <span className="text-purple-600">Me</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/3">
                    <img
                        src="../../src/assets/images/AB.jpg"
                        alt="Profile"
                        className="rounded-full w-64 h-64 object-cover mx-auto"
                    />
                </div>
                <div className="md:w-2/3">
                    <p className="text-lg mb-6">
                        I'm a passionate frontend developer with expertise in React, TypeScript,
                        and modern CSS frameworks. I love creating beautiful, responsive,
                        and user-friendly web applications.
                    </p>
                    <p className="text-lg mb-6">
                        With 3 years of experience in web development, I've worked on various
                        projects ranging from small business websites to complex web applications.
                    </p>
                    <div className="flex gap-4">
                        <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition">
                            Download CV
                        </button>
                        <button className="border border-purple-600 text-purple-600 px-6 py-2 rounded-full hover:bg-purple-50 transition">
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
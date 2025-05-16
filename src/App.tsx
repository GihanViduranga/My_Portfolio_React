import './App.css'
import "tailwindcss";
import { Routes, Route } from 'react-router-dom';
import MainLayout from "./MainLayout.tsx";
import HeroMain from "./components/HeroSection/HeroMain.tsx";
import AboutSection from "./components/AboutSection.tsx";
import SkillsSection from "./components/SkillsSection.tsx";
import ProjectsSection from "./components/ProjectsSection.tsx";
import ContactSection from "./components/ContactSection.tsx";

function App() {
    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<HeroMain />} />
                <Route path="/about" element={<AboutSection />} />
                <Route path="/skills" element={<SkillsSection />} />
                <Route path="/projects" element={<ProjectsSection />} />
                <Route path="/contact" element={<ContactSection />} />
            </Routes>
        </MainLayout>
    )
}

export default App
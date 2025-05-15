
import './App.css'

import "tailwindcss";
import HeroMain from "./components/HeroSection/HeroMain.tsx";
import MainLayout from "./MainLayout.tsx";
import AboutSection from "./components/AboutSection.tsx";
import SkillsSection from "./components/SkillsSection.tsx";
import ProjectsSection from "./components/ProjectsSection.tsx";
import ContactSection from "./components/ContactSection.tsx";

function App() {

  return (
      <MainLayout>
          <HeroMain />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
      </MainLayout>
  )
}

export default App

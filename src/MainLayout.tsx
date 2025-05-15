// src/layouts/MainLayout.tsx
import Navbar from "../src/components/NavBar";
import Footer from "../components/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen flex flex-col bg-[#f5f6fa]">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;
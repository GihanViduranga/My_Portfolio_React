// src/layouts/MainLayout.tsx
import NavBar from "../src/components/NavBar.tsx";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen flex flex-col bg-[#f5f6fa]">
            <NavBar />
            <main className="flex-grow">{children}</main>
            {/*<Footer />*/}
        </div>
    );
};

export default MainLayout;
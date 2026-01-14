import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { AchievementsSection } from "@/components/AchievementsSection";
import { Footer } from "@/components/Footer";

const Certificates = () => {
    // Scroll to certificates section on page load
    useEffect(() => {
        const certificatesSection = document.getElementById('certificates');
        if (certificatesSection) {
            certificatesSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main>
                <AchievementsSection />
            </main>
            <Footer />
        </div>
    );
};

export default Certificates;

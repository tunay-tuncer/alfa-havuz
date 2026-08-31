import ServicesHero from "./components/ServicesHero";
import ServicesGrid from "./components/ServicesGrid";
import ServiceDetail from "./components/ServiceDetail";
import ArchitectureApproach from "./components/ArchitectureApproach";
import FeaturedProjects from "./components/FeaturedProjects";

const ServicesPage = () => {
    return (
        <main>
            <ServicesHero />

            <ServicesGrid />

            <ServiceDetail />

            <ArchitectureApproach />

            <FeaturedProjects />
        </main>
    );
};

export default ServicesPage;
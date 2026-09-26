import styles from "./SampleProjects.module.css";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import ProjectCarousel from "./ProjectCarousel";
import { Reveal } from "@/components/Reveal";

export interface Project {
    id: number;
    title: string;
    category: string;
    image: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Bodrum Villa Projesi",
        category: "VİLLA",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    },
    {
        id: 2,
        title: "Sapanca Villa Projesi",
        category: "VİLLA",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    },
    {
        id: 3,
        title: "Çeşme Otel Projesi",
        category: "OTEL",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=85",
    },
    {
        id: 4,
        title: "Marmaris Resort Projesi",
        category: "OTEL",
        image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=85",
    },
    {
        id: 5,
        title: "Marmaris Resort Projesi",
        category: "OTEL",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85",
    },
];

const SampleProjects = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* HEADER */}
                <div className={styles.topContainer}>

                    <div className={styles.headerContainer}>
                        <Reveal variant="fade-down" delay={0.1} distance={15}>
                            <span className={styles.subHeading}>
                                PORTFOLYO
                            </span>
                        </Reveal>

                        <Reveal variant="fade-up" delay={0.2} distance={22}>
                            <h2 className={styles.heading}>
                                Seçkin Projelerimizden Bazıları
                            </h2>
                        </Reveal>
                    </div>

                    <Reveal variant="fade-left" delay={0.3} distance={20}>
                        <Link
                            href="/portfolyo"
                            className={styles.portfolioButton}
                        >
                            <span>TÜM PROJELERİ GÖR</span>
                            <FaArrowRightLong />
                        </Link>
                    </Reveal>

                </div>


                {/* CLIENT COMPONENT */}
                <Reveal variant="fade-up" delay={0.35} duration={0.8} distance={30}>
                    <ProjectCarousel projects={projects} variant="dark" />
                </Reveal>

            </div>
        </section>
    );
};

export default SampleProjects;

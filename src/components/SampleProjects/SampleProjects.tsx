import styles from "./SampleProjects.module.css";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import ProjectCarousel from "./ProjectCarousel";

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
        image: "/images/projects/bodrum-villa.jpg",
    },
    {
        id: 2,
        title: "Sapanca Villa Projesi",
        category: "VİLLA",
        image: "/images/projects/sapanca-villa.jpg",
    },
    {
        id: 3,
        title: "Çeşme Otel Projesi",
        category: "OTEL",
        image: "/images/projects/cesme-hotel.jpg",
    },
    {
        id: 4,
        title: "Marmaris Resort Projesi",
        category: "OTEL",
        image: "/images/projects/marmaris-resort.jpg",
    },
    {
        id: 5,
        title: "Marmaris Resort Projesi",
        category: "OTEL",
        image: "/images/projects/marmaris-resort.jpg",
    },
];

const SampleProjects = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* HEADER */}
                <div className={styles.topContainer}>

                    <div className={styles.headerContainer}>
                        <span className={styles.subHeading}>
                            PORTFOLYO
                        </span>

                        <h2 className={styles.heading}>
                            Seçkin Projelerimizden Bazıları
                        </h2>
                    </div>

                    <Link
                        href="/portfolyo"
                        className={styles.portfolioButton}
                    >
                        <span>TÜM PROJELERİ GÖR</span>
                        <FaArrowRightLong />
                    </Link>

                </div>


                {/* CLIENT COMPONENT */}
                <ProjectCarousel projects={projects} />

            </div>
        </section>
    );
};

export default SampleProjects;
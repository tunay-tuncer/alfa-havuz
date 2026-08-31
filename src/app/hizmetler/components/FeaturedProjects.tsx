import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import styles from "./FeaturedProjects.module.css";
import ProjectCarousel from "@/components/SampleProjects/ProjectCarousel";

const projects = [
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
];

const FeaturedProjects = () => {
    return (
        <section className={styles.section}>

            <div className={styles.container}>

                <div className={styles.header}>

                    <div>
                        <span>
                            PROJELERİMİZ
                        </span>

                        <h2>
                            Hizmetlerimizi
                            <br />
                            projelerde görün.
                        </h2>
                    </div>

                    <Link
                        href="/portfolyo"
                        className={styles.button}
                    >
                        <span>
                            TÜM PROJELERİ GÖR
                        </span>

                        <FaArrowRightLong />
                    </Link>

                </div>


                <ProjectCarousel projects={projects} variant="light" />

            </div>

        </section>
    );
};

export default FeaturedProjects;

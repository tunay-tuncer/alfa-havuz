"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Project } from "./SampleProjects";
import styles from "./SampleProjects.module.css";

interface ProjectCarouselProps {
    projects: Project[];
}

const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const [activeIndex, setActiveIndex] = useState(0);


    /* =====================================================
       FIND ACTIVE PROJECT
       ===================================================== */

    useEffect(() => {
        const container = containerRef.current;

        if (!container) return;

        const handleScroll = () => {
            const cards = Array.from(
                container.children
            ) as HTMLElement[];

            if (!cards.length) return;

            const scrollLeft = container.scrollLeft;

            let closestIndex = 0;
            let closestDistance = Infinity;

            cards.forEach((card, index) => {
                const distance = Math.abs(
                    card.offsetLeft - scrollLeft
                );

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = index;
                }
            });

            setActiveIndex(closestIndex);
        };


        container.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );


        return () => {
            container.removeEventListener(
                "scroll",
                handleScroll
            );
        };
    }, []);


    /* =====================================================
       GO TO PROJECT
       ===================================================== */

    const goToProject = (index: number) => {
        const container = containerRef.current;

        if (!container) return;

        const card = container.children[index] as HTMLElement;

        if (!card) return;

        container.scrollTo({
            left: card.offsetLeft,
            behavior: "smooth",
        });

        setActiveIndex(index);
    };


    if (!projects.length) {
        return null;
    }


    return (
        <>
            {/* =================================================
                CAROUSEL
               ================================================= */}

            <div className={styles.projectsWrapper}>

                <div
                    ref={containerRef}
                    className={styles.projectsContainer}
                >

                    {projects.map((project) => (
                        <Link
                            key={project.id}
                            href={`/portfolyo/${project.id}`}
                            className={styles.projectCard}
                        >

                            <div className={styles.imageContainer}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                />
                            </div>


                            <div className={styles.cardContent}>
                                <h3>
                                    {project.title}
                                </h3>

                                <span>
                                    {project.category}
                                </span>
                            </div>

                        </Link>
                    ))}

                </div>

            </div>


            {/* =================================================
                PAGINATION
               ================================================= */}

            {projects.length > 1 && (
                <div className={styles.pagination}>

                    {projects.map((project, index) => (
                        <button
                            key={project.id}
                            type="button"
                            aria-label={`Projeye geç: ${project.title}`}
                            aria-current={
                                activeIndex === index
                                    ? "true"
                                    : undefined
                            }
                            className={`${styles.dot} ${activeIndex === index
                                    ? styles.active
                                    : ""
                                }`}
                            onClick={() => goToProject(index)}
                        />
                    ))}

                </div>
            )}
        </>
    );
};

export default ProjectCarousel;
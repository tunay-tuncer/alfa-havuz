"use client";

import {
    useEffect,
    useRef,
    useState,
} from "react";

import Link from "next/link";

import {
    FaArrowLeft,
    FaArrowRight,
} from "react-icons/fa6";

import type { Project } from "./SampleProjects";

import styles from "./SampleProjects.module.css";


interface ProjectCarouselProps {
    projects: Project[];
    variant?: "dark" | "light";
}

const ProjectCarousel = ({
    projects,
    variant = "dark",
}: ProjectCarouselProps) => {

    const containerRef =
        useRef<HTMLDivElement>(null);


    const [activeIndex, setActiveIndex] =
        useState(0);


    const [visibleCount, setVisibleCount] =
        useState(4);


    useEffect(() => {

        const updateVisibleCount = () => {

            const width = window.innerWidth;

            if (width <= 600) {
                setVisibleCount(1);
            }
            else if (width <= 900) {
                setVisibleCount(2);
            }
            else {
                setVisibleCount(4);
            }
        };


        updateVisibleCount();

        window.addEventListener(
            "resize",
            updateVisibleCount
        );


        return () => {
            window.removeEventListener(
                "resize",
                updateVisibleCount
            );
        };

    }, []);


    useEffect(() => {

        const container =
            containerRef.current;

        if (!container) return;


        const handleScroll = () => {

            const card =
                container.children[0] as HTMLElement;

            if (!card) return;


            const gap = parseFloat(
                getComputedStyle(container).columnGap ||
                getComputedStyle(container).gap
            );


            const step =
                card.offsetWidth + gap;


            const index =
                Math.round(
                    container.scrollLeft / step
                );


            setActiveIndex(index);
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

    const maxIndex = Math.max(
        0,
        projects.length - visibleCount
    );


    const scrollToIndex = (index: number) => {

        const container =
            containerRef.current;

        if (!container) return;


        const card =
            container.children[index] as HTMLElement;

        if (!card) return;


        container.scrollTo({
            left: card.offsetLeft,
            behavior: "smooth",
        });


        setActiveIndex(index);
    };

    const next = () => {

        const nextIndex =
            Math.min(
                activeIndex + 1,
                maxIndex
            );


        scrollToIndex(nextIndex);
    };

    const previous = () => {

        const previousIndex =
            Math.max(
                activeIndex - 1,
                0
            );


        scrollToIndex(previousIndex);
    };


    if (!projects.length) {
        return null;
    }


    return (
        <>

            {/* =================================================
                CAROUSEL
               ================================================= */}

            <div className={`${styles.carouselWrapper} ${variant === "light"
                    ? styles.light
                    : ""
                }`}>

                <button
                    type="button"
                    className={`${styles.carouselArrow} ${styles.leftArrow}`}
                    onClick={previous}
                    disabled={activeIndex === 0}
                    aria-label="Önceki proje"
                >
                    <FaArrowLeft />
                </button>


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


                <button
                    type="button"
                    className={`${styles.carouselArrow} ${styles.rightArrow}`}
                    onClick={next}
                    disabled={activeIndex >= maxIndex}
                    aria-label="Sonraki proje"
                >
                    <FaArrowRight />
                </button>

            </div>


            {/* =================================================
                PAGINATION
               ================================================= */}

            {maxIndex > 0 && (

                <div className={styles.pagination}>

                    {Array.from({
                        length: maxIndex + 1,
                    }).map((_, index) => (

                        <button
                            key={index}
                            type="button"
                            className={`${styles.dot} ${activeIndex === index
                                ? styles.active
                                : ""
                                }`}
                            aria-label={`Proje ${index + 1
                                }`}
                            aria-current={
                                activeIndex === index
                                    ? "true"
                                    : undefined
                            }
                            onClick={() =>
                                scrollToIndex(index)
                            }
                        />

                    ))}

                </div>

            )}

        </>
    );
};


export default ProjectCarousel;
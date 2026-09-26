import styles from "./ServiceDetail.module.css";
import { services } from "../data/services";
import { FaCheck } from "react-icons/fa6";
import { Reveal, Stagger } from "@/components/Reveal";

const ServiceDetail = () => {
    return (
        <>
            {services.map((service, index) => {
                const isReversed = index % 2 === 1;
                const imageVariant = isReversed ? "fade-right" : "fade-left";
                const contentVariant = isReversed ? "fade-left" : "fade-right";

                return (
                    <section
                        id={service.slug}
                        key={service.id}
                        className={styles.section}
                    >
                        <div className={`${styles.container} ${isReversed ? styles.reverse : ""}`}>

                            <Reveal
                                as="div"
                                variant={imageVariant}
                                duration={0.85}
                                delay={0.15}
                                distance={35}
                                className={styles.imageContainer}
                            >
                                <img
                                    src={service.image}
                                    alt={`${service.title} hizmeti`}
                                />
                            </Reveal>


                            <Reveal
                                as="div"
                                variant={contentVariant}
                                duration={0.85}
                                delay={0.25}
                                distance={35}
                                className={styles.content}
                            >
                                <span className={styles.number}>
                                    {service.number}
                                </span>

                                <span className={styles.eyebrow}>
                                    HİZMET DETAYI
                                </span>

                                <h2>
                                    {service.title}
                                </h2>

                                <p className={styles.description}>
                                    {service.description}
                                </p>

                                <Stagger
                                    as="div"
                                    className={styles.features}
                                    variant="fade-up"
                                    baseDelay={0.35}
                                    delayStep={0.08}
                                    duration={0.6}
                                >
                                    {service.features.map((feature) => (
                                        <div
                                            key={feature}
                                            className={styles.feature}
                                        >
                                            <FaCheck />

                                            <span>
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </Stagger>
                            </Reveal>

                        </div>

                    </section>
                );
            })}
        </>
    );
};

export default ServiceDetail;

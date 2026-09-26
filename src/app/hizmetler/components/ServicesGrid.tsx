import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import styles from "./ServicesGrid.module.css";
import { services } from "../data/services";
import { Reveal, Stagger } from "@/components/Reveal";

const ServicesGrid = () => {
    return (
        <section className={styles.section}>

            <div className={styles.container}>

                <div className={styles.header}>
                    <Reveal variant="fade-down" delay={0.1} distance={15}>
                        <span>HİZMETLERİMİZ</span>
                    </Reveal>

                    <Reveal variant="fade-up" delay={0.22} distance={22}>
                        <h2>
                            Projeniz için doğru çözüm,
                            <br />
                            doğru mühendislikle başlar.
                        </h2>
                    </Reveal>
                </div>


                <Stagger
                    as="div"
                    className={styles.grid}
                    variant="fade-up"
                    baseDelay={0.2}
                    delayStep={0.12}
                    duration={0.75}
                >
                    {services.map((service) => (
                        <Link
                            key={service.id}
                            href={`/hizmetler#${service.slug}`}
                            className={styles.card}
                        >

                            <div className={styles.image}>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                />
                            </div>


                            <div className={styles.content}>

                                <span className={styles.number}>
                                    {service.number}
                                </span>

                                <div className={styles.cardBottom}>

                                    <div>
                                        <h3>
                                            {service.title}
                                        </h3>

                                        <p>
                                            {service.shortDescription}
                                        </p>
                                    </div>

                                    <FaArrowRightLong />

                                </div>

                            </div>

                        </Link>
                    ))}
                </Stagger>

            </div>

        </section>
    );
};

export default ServicesGrid;
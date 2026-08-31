import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import styles from "./ServicesGrid.module.css";
import { services } from "../data/services";

const ServicesGrid = () => {
    return (
        <section className={styles.section}>

            <div className={styles.container}>

                <div className={styles.header}>
                    <span>HİZMETLERİMİZ</span>

                    <h2>
                        Projeniz için doğru çözüm,
                        <br />
                        doğru mühendislikle başlar.
                    </h2>
                </div>


                <div className={styles.grid}>

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

                </div>

            </div>

        </section>
    );
};

export default ServicesGrid;
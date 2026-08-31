import styles from "./ServiceDetail.module.css";
import { services } from "../data/services";
import { FaCheck } from "react-icons/fa6";

const ServiceDetail = () => {
    return (
        <>
            {services.map((service, index) => (
                <section
                    id={service.slug}
                    key={service.id}
                    className={styles.section}
                >

                    <div className={`${styles.container} ${index % 2 === 1 ? styles.reverse : ""}`}>

                        <div className={styles.imageContainer}>
                            <img
                                src={service.image}
                                alt={`${service.title} hizmeti`}
                            />
                        </div>


                        <div className={styles.content}>

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


                    <div className={styles.features}>

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

                    </div>

                        </div>

                    </div>

                </section>
            ))}
        </>
    );
};

export default ServiceDetail;

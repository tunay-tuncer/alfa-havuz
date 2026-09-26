import styles from "./ArchitectureApproach.module.css";
import { Reveal, Stagger } from "@/components/Reveal";

const ArchitectureApproach = () => {
    return (
        <section className={styles.section}>

            <div className={styles.container}>

                <Reveal
                    as="div"
                    variant="fade-left"
                    duration={0.85}
                    delay={0.15}
                    distance={35}
                    className={styles.content}
                >

                    <span className={styles.eyebrow}>
                        YAKLAŞIMIMIZ
                    </span>

                    <h2>
                        Mimariyle
                        <br />
                        birlikte tasarlıyoruz.
                    </h2>

                    <p>
                        Havuzu yapının sonradan eklenen bir parçası
                        olarak değil, mimari projenin doğal bir
                        parçası olarak ele alıyoruz.
                    </p>

                    <Stagger
                        as="div"
                        className={styles.points}
                        variant="fade-up"
                        baseDelay={0.3}
                        delayStep={0.1}
                        duration={0.65}
                    >

                        <div>
                            <strong>01</strong>
                            <span>Estetik bütünlük</span>
                        </div>

                        <div>
                            <strong>02</strong>
                            <span>Teknik entegrasyon</span>
                        </div>

                        <div>
                            <strong>03</strong>
                            <span>Uzun ömürlü sistemler</span>
                        </div>

                    </Stagger>

                </Reveal>


                <Reveal
                    as="div"
                    variant="fade-right"
                    duration={0.85}
                    delay={0.25}
                    distance={35}
                    className={styles.imageContainer}
                >
                    <img
                        src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85"
                        alt="Mimari havuz projesi"
                    />
                </Reveal>

            </div>

        </section>
    );
};

export default ArchitectureApproach;

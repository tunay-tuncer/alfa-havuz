import styles from "./ServicesHero.module.css";
import { Reveal } from "@/components/Reveal";

const ServicesHero = () => {
    return (
        <section className={styles.hero}>

            <div className={styles.overlay} />

            <div className={styles.content}>
                <Reveal variant="fade-down" delay={0.1} distance={15}>
                    <span className={styles.eyebrow}>
                        HİZMETLERİMİZ
                    </span>
                </Reveal>

                <Reveal variant="fade-up" delay={0.22} distance={26}>
                    <h1>
                        Estetik, teknoloji ve
                        <br />
                        mühendisliği bir araya getiriyoruz.
                    </h1>
                </Reveal>

                <Reveal variant="fade-up" delay={0.38} distance={20}>
                    <p>
                        Villa, otel ve özel projeler için
                        havuz ve iklimlendirme çözümlerini
                        tasarlıyor ve uyguluyoruz.
                    </p>
                </Reveal>
            </div>

        </section>
    );
};

export default ServicesHero;
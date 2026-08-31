import styles from "./ServicesHero.module.css";

const ServicesHero = () => {
    return (
        <section className={styles.hero}>

            <div className={styles.overlay} />

            <div className={styles.content}>
                <span className={styles.eyebrow}>
                    HİZMETLERİMİZ
                </span>

                <h1>
                    Estetik, teknoloji ve
                    <br />
                    mühendisliği bir araya getiriyoruz.
                </h1>

                <p>
                    Villa, otel ve özel projeler için
                    havuz ve iklimlendirme çözümlerini
                    tasarlıyor ve uyguluyoruz.
                </p>
            </div>

        </section>
    );
};

export default ServicesHero;
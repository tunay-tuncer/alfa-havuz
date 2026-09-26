import styles from "./page.module.css";
import references from "../../config/references.json";
import { Reveal, Stagger } from "@/components/Reveal";

interface ReferenceItem {
    url: string;
    company: string;
}

const page = () => {
    const allReferences: ReferenceItem[] = references;
    return (
        <main className={styles.mainContainer}>
            <div className={styles.header}>
                <Reveal variant="fade-down" delay={0.1} distance={15}>
                    <span className={styles.subHeading}>REFERANSLARIMIZ</span>
                </Reveal>

                <Reveal variant="fade-up" delay={0.2} distance={22}>
                    <h1 className={styles.heading}>Güvenilir Çözüm Ortaklarımız</h1>
                </Reveal>

                <Reveal variant="fade-up" delay={0.3} distance={18}>
                    <p className={styles.description}>
                        Türkiye&apos;nin önde gelen otel, tatil köyü ve kamu projelerinde güvenle tercih edilen havuz ve iklimlendirme sistemleri.
                    </p>
                </Reveal>
            </div>

            <Stagger
                as="ul"
                className={styles.referencesContainer}
                variant="zoom-in"
                baseDelay={0.15}
                delayStep={0.05}
                duration={0.65}
            >
                {allReferences.map((item, id) => (
                    <li key={id} className={styles.referenceItem}>
                        <img src={item.url} alt={`${item.company} logosu`} />
                        <p>{item.company}</p>
                    </li>
                ))}
            </Stagger>
        </main>
    );
};

export default page;
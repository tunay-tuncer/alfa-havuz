import styles from "./About.module.css";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsBuildingCheck } from "react-icons/bs";
import { MdTimeline, MdPeople } from "react-icons/md";
import { IconType } from 'react-icons';
import { Reveal, Stagger } from "@/components/Reveal";

interface StatItem {
    id: number;
    icon: IconType;
    heading: string;
    text: string;
}

const About = () => {
    const landingImageUrl = "https://res.cloudinary.com/dabmjz0xr/image/upload/q_auto/AlfaHavuzLanding_iionyv.png";

    const stats: StatItem[] = [
        { id: 0, icon: MdTimeline, heading: "35+", text: "YILLIK DENEYİM" },
        { id: 1, icon: BsBuildingCheck, heading: "250+", text: "TAMAMLANAN PROJE" },
        { id: 2, icon: MdPeople, heading: "100%", text: "MÜŞTERİ MEMNUNİYETİ" },
        { id: 3, icon: MdTimeline, heading: "7/24", text: "TEKNİK DESTEK" }
    ]

    return (
        <section className={styles.aboutContainer}>
            <div className={styles.headingContainer}>
                <Reveal variant="fade-down" delay={0.1} distance={15}>
                    <span className={styles.subHeading}>HAKKIMIZDA</span>
                </Reveal>

                <Reveal variant="fade-up" delay={0.2} distance={25}>
                    <h1 className={styles.heading}>
                        Estetik Tasarım<br />
                        İleri Teknoloji <br />
                        Kalıcı Konfor
                    </h1>
                </Reveal>

                <Reveal variant="fade-up" delay={0.32} distance={20}>
                    <p>Alfa Havuz & İklimlendirme, lüks villa ve otel projelerine özel havuz, ısıtma, soğutma ve filtrasyon sistemlerinde anahtar teslim çözümler sunar. Her projede kaliteyi, güveni ve sürdürülebilirliği esas alırız.</p>
                </Reveal>

                <Reveal variant="fade-up" delay={0.42} distance={18}>
                    <Link href={"/kurumsal"} className={styles.aboutButton}>
                        <p>HAKKIMIZDA</p>
                        <FaArrowRightLong />
                    </Link>
                </Reveal>
            </div>

            <div className={styles.imageContainer}>
                <Reveal
                    variant="fade-right"
                    duration={0.85}
                    delay={0.2}
                    distance={35}
                    style={{ width: "100%", height: "100%" }}
                >
                    <img src={landingImageUrl} alt="Alfa Havuz Hakkımızda" />
                </Reveal>
            </div>

            <Stagger
                as="ul"
                className={styles.bottomContainer}
                variant="fade-up"
                baseDelay={0.25}
                delayStep={0.1}
                duration={0.7}
            >
                {stats.map((item) => {
                    const IconComponent = item.icon;
                    return (
                        <li key={item.id} className={styles.infoCard}>
                            <IconComponent size={32} />
                            <div className={styles.infoCardText}>
                                <h3>{item.heading}</h3>
                                <p>{item.text}</p>
                            </div>
                        </li>
                    )
                })}
            </Stagger>
        </section>
    )
}

export default About;
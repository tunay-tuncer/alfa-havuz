import styles from "./About.module.css";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsBuildingCheck } from "react-icons/bs";
import { MdTimeline, MdPeople } from "react-icons/md";
import { IconType } from 'react-icons';


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
                <span className={styles.subHeading}>HAKKIMIZDA</span>
                <h1 className={styles.heading}>
                    Estetik Tasarım.<br />
                    İleri Teknoloji.
                    Kalıcı Komfor.
                </h1>
                <p>Alfa Havuz & İklimlendirme, lüks villa ve otel projelerine özel havuz, ısıtma, soğutma ve filtrasyon sistemlerinde anahtar teslim çözümler sunar. Her projede kaliteyi, güveni ve sürdürülebilirliği esas alırız.</p>
                <Link href={"/kurumsal"} className={styles.aboutButton}>
                    <p>HAKKIMIZDA</p>
                    <FaArrowRightLong />
                </Link>
            </div>

            <div className={styles.imageContainer}>
                <img src={landingImageUrl} alt="" />
            </div>



            <div className={styles.bottomContainer}>
                {stats.map((item) => {
                    const IconComponent = item.icon;
                    return (
                        <li className={styles.infoCard}>
                            <IconComponent size={32} />
                            <div className={styles.infoCardText}>
                                <h3>{item.heading}</h3>
                                <p>{item.text}</p>
                            </div>
                        </li>
                    )
                })}
            </div>
        </section>
    )
}

export default About
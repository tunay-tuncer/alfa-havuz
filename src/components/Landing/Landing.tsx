import styles from "./Landing.module.css"
import Link from "next/link"
//REACT ICONS
import { FaArrowRightLong, FaTemperatureHigh } from "react-icons/fa6";
import { FaWater } from "react-icons/fa";
import { IoWaterOutline } from "react-icons/io5";
import { FaRegSnowflake } from "react-icons/fa";
import { IconType } from 'react-icons';
import { Reveal, Stagger } from "@/components/Reveal";

interface ServiceItem {
    id: number;
    icon: IconType;
    heading: string;
    text: string;
}

const Landing = () => {
    const landingImageUrl = "https://res.cloudinary.com/dabmjz0xr/image/upload/q_auto/AlfaHavuzLanding_iionyv.png";

    const serviceItems: ServiceItem[] = [
        { id: 0, icon: FaWater, heading: "ANAHTAR TESLİM HAVUZ", text: "Tasarım, uygulama ve bakım dahil komple çözümler." },
        { id: 1, icon: FaTemperatureHigh, heading: "ISI POMPASI SİSTEMLERİ", text: "Yüksek verimli ısıtma çözümleri ile 4 mevsim konfor." },
        { id: 2, icon: FaRegSnowflake, heading: "SOĞUTMA SİSTEMLERİ", text: "Modern soğutma sistemleri ile ferah ve verimli alanlar." },
        { id: 3, icon: IoWaterOutline, heading: "SU ŞARTLANDIRMA", text: "Kristal berraklığında su için ileri filtrasyon teknolojileri." },
    ]

    return (
        <section className={styles.landingContainer}>
            <img className={styles.landingImage} src={landingImageUrl} alt="Alfa Havuz Villa" />
            
            <div className={styles.textContainer}>
                <Reveal variant="fade-up" delay={0.2} distance={18}>
                    <h1 className={styles.heading}>Hayalinizdeki Havuz, <br />Mükemmel Mühendislik</h1>
                </Reveal>
                
                <Reveal variant="fade-right" delay={0.32} distance={24}>
                    <div className={styles.breakLine}></div>
                </Reveal>

                <Reveal variant="fade-up" delay={0.42} distance={18}>
                    <p className={styles.headingText}>Alfa Havuz & İklimlendirme olarak lüks yaşam alanlarına estetik, konfor ve teknoloji katıyoruz.</p>
                </Reveal>

                <Reveal variant="fade-up" delay={0.52} distance={16}>
                    <Link href={"/portfolyo"} className={styles.porfolioButton}>
                        <p>PROJELERİ İNCELE</p>
                        <FaArrowRightLong />
                    </Link>
                </Reveal>
            </div>

            <Stagger
                as="div"
                className={styles.bottomContainer}
                variant="fade-up"
                baseDelay={0.35}
                delayStep={0.12}
                duration={0.75}
            >
                {serviceItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                        <div key={item.id} className={styles.serviceCard}>
                            <IconComponent size={24} />
                            <h3>{item.heading}</h3>
                            <p>{item.text}</p>
                        </div>
                    );
                })}
            </Stagger>
        </section>
    )
}

export default Landing;
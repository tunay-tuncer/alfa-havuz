import styles from "./Process.module.css";
import { IconType } from 'react-icons';
import { MdOutlineEditNote, MdOutlineDesignServices, MdConstruction } from "react-icons/md";
import { PiExam } from "react-icons/pi";
import { BiSupport } from "react-icons/bi";

interface ProcessItem {
    id: number;
    icon: IconType;
    header: string;
    text: string;
}

const Process = () => {

    const processSteps: ProcessItem[] = [
        { id: 1, icon: MdOutlineEditNote, header: "İHTİYAÇ ANALİZİ", text: "İhtiyaçlarınızı dinliyor, en uygun çözümü belirliyoruz." },
        { id: 2, icon: MdOutlineDesignServices, header: "TASARIM", text: "Estetik ve işlevsel tasarımımızla hayalinizi şekillendiriyoruz." },
        { id: 3, icon: MdConstruction, header: "UYGULAMA", text: "Deneyimli ekibimizle projenizi hayata geçiriyoruz." },
        { id: 4, icon: PiExam, header: "TEST & ONAY", text: "Tüm sistemin kusursuz çalıştığından emin oluyoruz." },
        { id: 5, icon: BiSupport, header: "BAKIM & DESTEK", text: "Uzun ömürlü kullanım için düzenli bakım ve 7/24 destek." }
    ]

    return (
        <section className={styles.processContainer}>

            <div className={styles.headerContainer}>
                <span className={styles.subHeading}>
                    SÜREÇ
                </span>

                <h2 className={styles.heading}>
                    Fikri Gerçeğe Dönüştürüyoruz
                </h2>
            </div>

            <ul className={styles.stepsContainer}>
                {processSteps.map((step) => {
                    const IconComponent = step.icon;
                    return (
                        <li key={step.id} className={styles.stepCard}>
                            <p className={styles.stepNumber}>{step.id}</p>
                            <IconComponent size={24} />
                            <h3 className={styles.stepHeader}>{step.header}</h3>
                            <p className={styles.stepText}>{step.text}</p>
                        </li>)
                })}
            </ul>



        </section>
    )
}

export default Process
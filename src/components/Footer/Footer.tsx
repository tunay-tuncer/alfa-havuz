import Link from "next/link";
import {
    FiArrowRight,
    FiInstagram,
    FiLinkedin,
    FiMapPin,
    FiMail,
    FiPhone,
} from "react-icons/fi";
import Logo from "../Logo";
import styles from "./Footer.module.css";

const quickLinks = [
    { label: "Kurumsal", href: "/kurumsal" },
    { label: "Portfolyo", href: "/portfolyo" },
    { label: "Referanslar", href: "/referanslar" },
    { label: "Hizmetler", href: "/hizmetler" },
    { label: "İletişim", href: "/iletisim" },
];

const services = [
    { label: "Anahtar Teslim Havuz", href: "/hizmetler/anahtar-teslim-havuz" },
    { label: "Isı Pompası Sistemleri", href: "/hizmetler/isi-pompasi" },
    { label: "Soğutma Sistemleri", href: "/hizmetler/sogutma" },
    { label: "Filtrasyon Sistemleri", href: "/hizmetler/filtrasyon" },
    { label: "Bakım & Teknik Servis", href: "/hizmetler/bakim-teknik-servis" },
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            {/* CTA */}
            <section className={styles.cta}>
                <div className={styles.ctaInner}>
                    <div className={styles.ctaContent}>
                        <span className={styles.ctaEyebrow}>ALFA HAVUZ & İKLİMLENDİRME</span>

                        <h2>
                            Hayalinizdeki projeyi
                            <br />
                            birlikte hayata geçirelim.
                        </h2>

                        <p>
                            Size özel çözümlerimiz ve teklifimiz için
                            bizimle iletişime geçin.
                        </p>
                    </div>

                    <Link href="/iletisim" className={styles.ctaButton}>
                        <span>TEKLİF AL</span>
                        <FiArrowRight />
                    </Link>
                </div>
            </section>

            {/* Main Footer */}
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {/* Brand */}
                        <div className={styles.brandColumn}>
                            <Link href="/" className={styles.logoLink} aria-label="Alfa Ana Sayfa">
                                {/* Logo placeholder */}
                                <Logo className={styles.logoSVG} />
                            </Link>

                            <p className={styles.brandDescription}>
                                Lüks yaşam alanlarına estetik, konfor
                                <br />
                                ve teknoloji katıyoruz.
                            </p>

                            <div className={styles.socials}>
                                <a
                                    href="#"
                                    aria-label="Instagram"
                                    className={styles.socialLink}
                                >
                                    <FiInstagram />
                                </a>

                                <a
                                    href="#"
                                    aria-label="LinkedIn"
                                    className={styles.socialLink}
                                >
                                    <FiLinkedin />
                                </a>

                                <a
                                    href="#"
                                    aria-label="Facebook"
                                    className={styles.socialLink}
                                >
                                    <span className={styles.facebookIcon}>f</span>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className={styles.column}>
                            <h3>HIZLI LİNKLER</h3>

                            <nav className={styles.links}>
                                {quickLinks.map((link) => (
                                    <Link key={link.label} href={link.href}>
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Services */}
                        <div className={styles.column}>
                            <h3>HİZMETLERİMİZ</h3>

                            <nav className={styles.links}>
                                {services.map((service) => (
                                    <Link key={service.label} href={service.href}>
                                        {service.label}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Contact */}
                        <div className={`${styles.column} ${styles.contactColumn}`}>
                            <h3>İLETİŞİM</h3>

                            <div className={styles.contactList}>
                                <a href="#" className={styles.contactItem}>
                                    <FiMapPin />
                                    <span>
                                        Çınarlı Mah. 6101 Sk. No:6/A
                                        <br />
                                        Bornova / İzmir
                                    </span>
                                </a>

                                <a href="tel:+902324567890" className={styles.contactItem}>
                                    <FiPhone />
                                    <span>+90 532 236 75 38</span>
                                </a>

                                <a
                                    href="mailto:info@alfahavuz.com.tr"
                                    className={styles.contactItem}
                                >
                                    <FiMail />
                                    <span>info@alfahavuz.com</span>
                                </a>

                                <a href="/" className={styles.contactItem}>
                                    <span className={styles.webIcon}>◎</span>
                                    <span>www.alfahavuz.com</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className={styles.bottom}>
                        <p>
                            © 2024 Alfa Havuz ve İklimlendirme. Tüm hakları saklıdır.
                        </p>

                        <div className={styles.legalLinks}>
                            <Link href="/gizlilik-politikasi">
                                Gizlilik Politikası
                            </Link>

                            <span className={styles.divider}>|</span>

                            <Link href="/kullanim-sartlari">
                                Kullanım Şartları
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
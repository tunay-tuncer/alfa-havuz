"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Logo from "../Logo";
import { FiMenu, FiX } from "react-icons/fi";

interface NavItem {
    id: number;
    name: string;
    path: string;
}

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems: NavItem[] = [
        { id: 0, name: "HİZMETLER", path: "/hizmetler" },
        { id: 1, name: "KURUMSAL", path: "/kurumsal" },
        { id: 2, name: "REFERANSLAR", path: "/referanslar" },
        { id: 3, name: "PORTFOLYO", path: "/portfolyo" },
        { id: 4, name: "İLETİŞİM", path: "/iletisim" },
    ];

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className={styles.navContainer}>

            {/* LOGO */}
            <Link
                href="/"
                className={styles.logoContainer}
                onClick={closeMenu}
            >
                <Logo className={styles.logoSvg} />
            </Link>


            {/* DESKTOP NAVIGATION */}
            <div className={styles.desktopNav}>
                <ul className={styles.rightContainer}>
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <Link href={item.path}>
                                {item.name}
                            </Link>
                        </li>
                    ))}

                    <li>
                        <Link
                            href="/teklif"
                            className={styles.offerButton}
                        >
                            TEKLİF AL
                        </Link>
                    </li>
                </ul>
            </div>


            {/* MOBILE MENU BUTTON */}
            <button
                type="button"
                className={styles.menuButton}
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
                aria-expanded={menuOpen}
            >
                {menuOpen ? <FiX /> : <FiMenu />}
            </button>


            {/* MOBILE NAVIGATION */}
            <div
                className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""
                    }`}
            >
                <ul>
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <Link
                                href={item.path}
                                onClick={closeMenu}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}

                    <li>
                        <Link
                            href="/teklif"
                            className={styles.mobileOfferButton}
                            onClick={closeMenu}
                        >
                            TEKLİF AL
                        </Link>
                    </li>
                </ul>
            </div>

        </nav>
    );
};

export default Navbar;
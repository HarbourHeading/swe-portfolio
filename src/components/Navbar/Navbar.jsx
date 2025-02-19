import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils";
import {useState} from "react";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">
                Liam
            </a>
            <div className={styles.menu}>
                <button className={styles.mobileMenuButton} onClick={() => setMenuOpen(!menuOpen)}>
                    <img /* Mobile menu. Not displayed on 880px+ screens. */
                        src={
                            menuOpen
                                ? getImageUrl("navbar/close.png")
                                : getImageUrl("navbar/menu.png")
                        }
                        alt="mobile menu button"
                    >
                    </img>
                </button>
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
                    <button className={styles.mobileDropdown} onClick={() => setMenuOpen(false)}/>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

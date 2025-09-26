import { Link } from "react-router-dom"

import CZLogo from "@assets/icons/CZ.svg"
import Logo from "@assets/icons/logo.svg"
import burgerIcon from "@assets/icons/burger-icon.svg"

import styles from "./styles.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link to="/" title="логотип" aria-label="логотип">
                    <img
                        width={164}
                        height={160}
                        src={Logo}
                        alt="логотип" />
                </Link>
                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <Link to="/">Вакансии</Link>
                        </li>
                        <li>
                            <img
                                className={styles.rightSignLogo}
                                width={134}
                                height={55}
                                src={CZLogo}
                                alt="честный знак"
                            />
                        </li>
                        <li>
                            <img
                                className={styles.burgerIcon}
                                width={40}
                                title="Бургер меню"
                                aria-label="Бургер меню"
                                tabIndex={0}
                                height={40}
                                src={burgerIcon}
                                alt="бургер меню"
                            />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
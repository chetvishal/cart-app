import styles from './Navbar.module.css';

export const Navbar = () => {
    return (
        <nav className={`${styles.navbar}`}>
            <span>LOGO</span>
            <ul className={`${styles.navbar__list}`}>
                <li className={`${styles.navbar__list__item}`}>
                    Cart
                </li>
                <li className={`${styles.navbar__list__item}`}>
                    Saved
                </li>
            </ul>
        </nav>
    )
}
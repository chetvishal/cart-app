import styles from './Navbar.module.css';
import { useDataContext } from '../../Context/DataContext';

export const Navbar = () => {

    const { state } = useDataContext();
    const { products, cart } = state;

    return (
        <nav className={`${styles.navbar}`}>
            <span>LOGO</span>
            <ul className={`${styles.navbar__list}`}>
                <li className={`${styles.navbar__list__item}`}>
                    Cart {cart.length !== 0 ? cart.length : ""}
                </li>
                <li className={`${styles.navbar__list__item}`}>
                    Saved
                </li>
            </ul>
        </nav>
    )
}
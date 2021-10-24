import styles from './Navbar.module.css';
import { useDataContext } from '../../Context/DataContext';
import { useNavigate } from 'react-router';

export const Navbar = () => {

    const { state } = useDataContext();
    const { products, cart } = state;
    const navigate = useNavigate();

    return (
        <nav className={`${styles.navbar}`}>
            <span>MyCart</span>
            <ul className={`${styles.navbar__list}`}>
                <li className={`${styles.navbar__list__item}`} onClick={() => navigate('/cart')}>
                    Cart {cart.length !== 0 ? cart.length : ""}
                </li>
            </ul>
        </nav>
    )
}
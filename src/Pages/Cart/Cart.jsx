import { useDataContext } from "../../Context/DataContext";
import { CartCard, ProdCard } from "../../Components";
import styles from './Cart.module.css';


export const Cart = () => {

    const { state } = useDataContext();
    const { cart, saved } = state;
    const TotalPrice = cart.reduce((acc, curr) => {
        acc = acc + curr.productData.price * curr.quantity;
        return acc;
    },0 )

    return (
        <div className={styles.cart}>
            <div className={styles.cart__Total}>
                <div className={styles.cart__TotalSection}>
                    <span>Total Price</span>
                    <span>Rs. {TotalPrice}</span>
                </div>
                <div className={styles.cart__TotalSection}>
                    <span>Total Discount</span>
                    <span>Rs. 0</span>
                </div>
                <hr />
                <div className={styles.cart__TotalSection}>
                    <span>Final Price</span>
                    <span>Rs. {TotalPrice}</span>
                </div>
            </div>
            <h1>Cart</h1>
            {cart.length !== 0 && cart.map(item => {
                return <CartCard data={item} key={item.productData.id} />
            })}
            <h1>Saved</h1>
            {saved.length !== 0 && saved.map(item => {
                return <CartCard data={item} key={item.productData.id} />
            })}
        </div>
    )
}
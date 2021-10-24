import styles from './CartCard.module.css';
import { useDataContext } from '../../Context/DataContext';

export const CartCard = ({ data }) => {

    const { name, image, id, price } = data.productData;
    const { quantity } = data;
    const { dispatch, state } = useDataContext();
    const { cart, saved } = state;
    const includesInSaved = saved.find(item => item.productData.id === id)

    return (
        <div className={styles.productCard}>
            <div className={styles.productCard__imageContainer}>
                <img
                    src={image}
                    alt="productimage"
                    className={styles.productCard__image}
                />
            </div>
            <div className={styles.productCard__details}>
                <span>{name}</span>
                <h3>Rs.{price}</h3>
            </div>
            <div className={styles.productCard__actions}>
                <span
                    className={styles.productCard__actions__item}
                    style={{ display: includesInSaved ? "none" : "" }}
                >
                    <span
                        className={styles.productCard__actions__item}
                        onClick={() => dispatch({ type: 'DECREASE_CART_QUANTITY', payload: { id, quantity } })}
                    >-</span>
                    <span
                        className={styles.productCard__actions__item}
                    >{quantity}</span>
                    <span
                        className={styles.productCard__actions__item}
                        onClick={() => dispatch({ type: 'INCREASE_CART_QUANTITY', payload: id })}
                    >+</span>
                </span>
                <span
                    className={styles.productCard__actions__item}
                    onClick={() => includesInSaved ?
                        dispatch({ type: 'MOVE_TO_CART_FROM_SAVED', payload: data }) :
                        dispatch({ type: 'ADD_TO_SAVED', payload: data })
                    }
                >{includesInSaved ? "ADD TO CART" : 'SAVE'}</span>
                <span
                    className={styles.productCard__actions__item}
                    onClick={() => includesInSaved ?
                        dispatch({ type: 'REMOVE_FROM_SAVED', payload: id })
                        :
                        dispatch({ type: 'REMOVE_FROM_CART', payload: id })}
                >REMOVE</span>
            </div>
        </div>
    )
}
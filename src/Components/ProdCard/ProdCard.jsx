import styles from './ProdCard.module.css';
import { useDataContext } from '../../Context/DataContext';

export const ProdCard = ({ data }) => {

    const { name, image } = data;
    const { dispatch, state } = useDataContext();
    const { cart, saved } = state;
    const includesInCard = cart.find(item => item.productData.id === data.id)
    const includesInSaved = saved.find(item => item.id === data.id)

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
            </div>
            <div className={styles.productCard__actions}>
                <span
                    className={styles.productCard__actions__item}
                    onClick={() => dispatch({ type: 'ADD_TO_CART', payload: data })}
                >{includesInCard ? "GO TO CART" : "ADD TO CART"}</span>
                <span
                    className={styles.productCard__actions__item}
                    // onClick={() => dispatch({ type: 'ADD_TO_SAVED', payload: data })}
                >{includesInSaved ? "SAVED" : "SAVE"}</span>
            </div>
        </div>
    )
}
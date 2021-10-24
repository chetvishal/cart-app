import styles from './ProdCard.module.css';

export const ProdCard = () => {
    return (
        <div className={styles.productCard}>
            <div className={styles.productCard__imageContainer}>
                <img
                    src="https://rukminim1.flixcart.com/image/880/1056/krayqa80/sweatshirt/s/f/s/m-cz2426-010-nike-original-imag54gyexjtszdg.jpeg?q=50"
                    alt="productimage"
                    className={styles.productCard__image}
                />
            </div>
            <div className={styles.productCard__details}>
                <span>Full Sleeve Solid Men Sweatshirt</span>
            </div>
            <div className={styles.productCard__actions}>
                <span className={styles.productCard__actions__item}>ADD TO CART</span>
                <span className={styles.productCard__actions__item}>SAVE</span>
            </div>
        </div>
    )
}
import { useDataContext } from "../../Context/DataContext";
import { CartCard, ProdCard } from "../../Components";



export const Cart = () => {

    const { state } = useDataContext();
    const { cart, saved } = state;


    return (
        <div>
            <button onClick={() => console.log(cart, saved)}>dfsf</button>
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
import { products } from '../../Data/ProductsData.json';
import { ProdCard } from '../../Components';

export const ProductList = () => {
    return (
        <div>
            <h1>Product List</h1>
            <ProdCard />
            <ProdCard />
            <ProdCard />
            <ProdCard />
            <ProdCard />
        </div>
    )
}

import { products } from '../../Data/ProductsData.json';
import { ProdCard } from '../../Components';
import { useDataContext } from '../../Context/DataContext';

export const ProductList = () => {

    const { state, dispatch } = useDataContext();

    return (
        <div>
            <h1>Product List</h1>
            {
                state.products.length !== 0 && state.products.map(item => {
                    return <ProdCard data={item} />
                })
            }
        </div>
    )
}

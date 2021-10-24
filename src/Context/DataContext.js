import { createContext, useContext, useReducer, useEffect } from 'react';
import { ReducerFunction } from '../Reducers/DataReducer';
import { products } from '../Data/ProductsData.json';

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

export const initialDataState = {
    products: [],
    cart: [],
    saved: [],
}


export const DataContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ReducerFunction, initialDataState);

    useEffect(() => {
        console.log(products)
        dispatch({ type: 'ADD_PRODUCTS_FROM_SERVER', payload: products })
    }, [])

    return (
        <DataContext.Provider value={{ state, dispatch }}>
            {children}
        </DataContext.Provider>
    )
}
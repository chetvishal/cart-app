import { initialDataState } from '../Context/DataContext';

export const ReducerFunction = (state, action) => {
    switch (action.type) {
        case 'ADD_PRODUCTS_FROM_SERVER':
            return { ...state, products: action.payload };

        case 'ADD_TO_CART':
            return { ...state, cart: [...state.cart, { productData: action.payload, quantity: 0 }] }

        case 'ADD_TO_SAVED':
            return { ...state, saved: [...state.saved, action.payload] }
        default:
            return state;
    }
}
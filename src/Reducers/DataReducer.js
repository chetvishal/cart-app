import { initialDataState } from '../Context/DataContext';

export const ReducerFunction = (state, action) => {
    switch (action.type) {
        case 'ADD_PRODUCTS_FROM_SERVER':
            return { ...state, products: action.payload };

        case 'ADD_TO_CART':
            return { ...state, cart: [...state.cart, { productData: action.payload, quantity: 1 }] }

        case 'ADD_TO_SAVED':
            return {
                ...state,
                saved: [...state.saved, { productData: action.payload.productData, quantity: action.payload.quantity }],
                cart: state.cart.filter(item => {
                    return item.productData.id !== action.payload.productData.id;
                })
            }
        case 'MOVE_TO_CART_FROM_SAVED':
            return {
                ...state,
                cart: [...state.cart, action.payload],
                saved: state.saved.filter(item => {
                    return item.productData.id !== action.payload.productData.id;
                })
            }
        case 'INCREASE_CART_QUANTITY':
            return {
                ...state,
                cart: state.cart.map(item => item.productData.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item)
            }
        case 'DECREASE_CART_QUANTITY': {

            if (action.payload.quantity === 1) {
                return {
                    ...state,
                    cart: state.cart.filter(item => {
                        return item.productData.id !== action.payload.id;
                    })
                }
            }
            else
                return {
                    ...state,
                    cart: state.cart.map(item => {
                        return item.productData.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item;
                    })
                }
        }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => {
                    return item.productData.id !== action.payload;
                })
            }
        case 'REMOVE_FROM_SAVED':
            return {
                ...state,
                saved: state.saved.filter(item => {
                    return item.productData.id !== action.payload;
                })
            }
        default:
            return state;
    }
}
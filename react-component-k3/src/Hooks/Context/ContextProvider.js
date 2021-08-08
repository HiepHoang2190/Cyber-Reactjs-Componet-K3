import React, { useReducer } from 'react'

export const context = React.createContext();

const initialCart = [
    // { id: 1, name: 'IPhone', price: 1000, quantity: 1 }
]

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'addToCart': {
            // let cartUpdate = [...state, action.item];
            let cartUpdate = [...state];
            let index = cartUpdate.findIndex(itemCart => itemCart.id === action.item.id);
            if (index != -1) {
                cartUpdate[index].quantity += 1;
            } else {
                const itemCart = { ...action.item, quantity: 1 };
                cartUpdate.push(itemCart);
            }
            return cartUpdate;
        }
    }
    return [...state]
}


export default function ContextProvider(props) {
    let [cart, dispatch] = useReducer(cartReducer, initialCart)
    // Dùng context bao bọc tất cả component bên trong(cụ thể là App)

    // store giống như rootReducer
    const store = {
        cartReducer: [cart, dispatch]

    }
    return (
        <context.Provider value={store}>
            {props.children}
        </context.Provider>
    )
}

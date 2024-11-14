'use client'
import { createContext, useEffect, useState } from "react";

const CartContext = createContext({});

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState<any>([]);
    const [totalCart, setTotalCart] = useState<number>(0);

    useEffect(() => {
        let total = 0;
        cartItems.forEach((producto: any) => {
            const subtotal = producto.price * producto.quantity;
            total += subtotal;
        });
        setTotalCart(total)
    }, [cartItems])

    const addItem = (item: any) => {
        const cartDraft = [...cartItems];
        if (!isInCart(item.id)) {
            cartDraft.push({ ...item, quantity: +1 });
            setCartItems(cartDraft);
        } else {
            const newList = cartDraft.map((itemDraft) => {
                if (itemDraft.id === item.id) {
                    const updatedItem = {
                        ...itemDraft,
                        quantity: itemDraft.quantity + 1,
                        price: itemDraft.price,
                    };
                    return updatedItem;
                }
                return itemDraft;
            });

            setCartItems(newList);
        }
    };

    const clear = () => {
        setCartItems([]);
    };

    const removeItem = (itemId: any) => {
        const cartDraft = [...cartItems];
        const filteredCart = cartDraft.filter((item) => item.id !== itemId);
        setCartItems(filteredCart);
    };

    const isInCart = (idItem: any) => {
        if (cartItems.length > 0) {
            const index = cartItems.findIndex((x: any) => x.id === idItem);
            return index > -1;
        }
        return false;
    };

    return (
        <CartContext.Provider value={{ cartItems, addItem, clear, removeItem, isInCart, totalCart }}>
            {children}
        </CartContext.Provider>
    );
}

export { CartContext, CartProvider };

import React, {createContext, useCallback, useContext,  useState} from 'react';
export const CartContext = createContext();

export const HeartProvider = ({ children }) => {

    const [heartCounter, setHeartCounter] = useState(0)
    const updateHeartCounter = (value) => {
        setHeartCounter(heartCounter + value);
    };


    return (
        <CartContext.Provider value={{ heartCounter, updateHeartCounter }}>
            {children}
        </CartContext.Provider>
    );
};

export const useHeart =  () => {
    return useContext(CartContext)
}

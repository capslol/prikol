import React, { createContext, useCallback, useContext, useState } from 'react';

export const HeartContext = createContext();

export const HeartProvider = ({ children }) => {
    const [heartCounter, setHeartCounter] = useState(0);
    const [avatarSrc, setAvatarSrc] = useState('');

    const updateHeartCounter  = useCallback((value) => {
        setHeartCounter((prevCounter) => prevCounter + value);
    }, []);

    const updateAvatarSrc = useCallback((value) => {
        setAvatarSrc( value);
    }, []);
    return (
        <HeartContext.Provider value={{ heartCounter, updateHeartCounter, avatarSrc,  updateAvatarSrc  }}>
            {children}
        </HeartContext.Provider>
    );
};

export const useHeart = () => {
    return useContext(HeartContext);
};

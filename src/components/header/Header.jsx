import React from 'react';
import './Header.css';
import {useHeart} from "../../contexts/HeartProvider";

const Header = () => {
    const {heartCounter} = useHeart()
    return (
        <div className={'header'}>
            <img src="" alt=""/>
            <div className="heart_counter-wrapper">
                <span className={'heart_counter'}>{heartCounter}</span>
                <img className={'heart-icon'} src="/images/heart-icon.png" alt=""/>
            </div>
        </div>
    );
};

export default Header;
import React from 'react';
import './Header.css';
import {useHeart} from "../../contexts/HeartProvider";

const Header = () => {
    const {heartCounter, avatarSrc} = useHeart()
    return (
        <div className={'header'}>
            <div className={'avatar-container'}>
                <img className={'avatar'} src={avatarSrc} alt=""/>
            </div>
            <div className="heart_counter-wrapper">
                <span className={'heart_counter'}>{heartCounter}</span>
                <img className={'heart-icon'} src="/images/heart-icon.png" alt=""/>
            </div>
        </div>
    );
};

export default Header;
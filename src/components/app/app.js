import React, {useState} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';

import './app.css';
import Header from "../header/Header";
import {HeartProvider} from "../../contexts/HeartProvider";

const App = () => {
    const navigane = useNavigate()


    return (
        <div className={'app-container'}>
            <HeartProvider>
                <Header />
                <Outlet />
            </HeartProvider>

        </div>

    );
};

export default App;

import {Route, Routes as BaseRoutes} from "react-router-dom";
import App from "../components/app";

import React from "react";
import LoginPage from "../pages/LoginPage/LoginPage";
import QuizPage from "../pages/QuizPage/QuizPage";
import IndexPage from "../pages/IndexPage/IndexPage";
import FeedDobbyPage from "../pages/FeedDobby/FeedDobbyPage";
import SliderPage from "../pages/sliderPage/SliderPage";
import Valentinka from "../pages/valentinka/Valentinka";
import Intreduce from "../pages/intreduce/Intreduce";


const Routes = () => {
    return (
        <BaseRoutes>

            <Route path={'/'} element={<App/>}>
                <Route index element={<Intreduce/>}/>
                <Route path={'/index'} element={<IndexPage/>}/>
                <Route path={'/login'} element={<LoginPage/>}/>
                <Route path={'/quiz'} element={<QuizPage/>}/>
                <Route path={'/puzzle'} element={<FeedDobbyPage/>}/>
                <Route path={'/slider'} element={<SliderPage/>}/>
                <Route path={'/valentinka'} element={<Valentinka/>}/>
            </Route>

        </BaseRoutes>
    );
};

export default Routes;


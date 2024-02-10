import {Route, Routes as BaseRoutes} from "react-router-dom";
import App from "../components/app";

import React from "react";
import LoginPage from "../pages/LoginPage/LoginPage";
import QuizPage from "../pages/QuizPage/QuizPage";
import IndexPage from "../pages/IndexPage/IndexPage";
import FeedDobbyPage from "../pages/FeedDobby/FeedDobbyPage";


const Routes = () => {
    return (
        <BaseRoutes>

            <Route path={'/'} element={<App/>}>
                <Route index element={<IndexPage/>}/>
                <Route path={'/login'} element={<LoginPage/>}/>
                <Route path={'/quiz'} element={<QuizPage/>}/>
                <Route path={'/puzzle'} element={<FeedDobbyPage/>}/>
            </Route>

        </BaseRoutes>
    );
};

export default Routes;


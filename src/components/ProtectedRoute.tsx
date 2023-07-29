import React from 'react';
import { Navigate } from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {RouteNames} from "../shared/config/routeConfig/routeConfig";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const {isAuth} = useTypedSelector(state => state.auth);

    return isAuth ? children : <Navigate to={RouteNames.LOGIN_LINK} />;
};

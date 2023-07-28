import React, {useEffect} from 'react';
import { Navigate } from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {RouteNames} from "../shared/config/routeConfig/routeConfig";

// @ts-ignore
export const ProtectedRoute = ({ children }) => {
    const {isAuth} = useTypedSelector(state => state.auth);

    return isAuth ? children : <Navigate to={RouteNames.LOGIN_LINK} />;
};

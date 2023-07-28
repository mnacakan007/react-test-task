import {RouteProps} from "react-router-dom";
import {NewsPage} from "../../../pages/NewsPage";
import {HomePage} from "../../../pages/HomePage";

import LoginPage from "../../../pages/LoginPage/ui/LoginPage";

export enum RouteNames {
    HOME_LINK = '/',
    NEWS_LINK = '/news',
    PROFILE_LINK = '/profile',
    LOGIN_LINK = '/login'
}
export enum AppRoutes {
    HOME = 'home',
    NEWS = 'news',
    LOGIN = 'login',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: RouteNames.HOME_LINK,
    [AppRoutes.NEWS]: RouteNames.NEWS_LINK,
    [AppRoutes.LOGIN]: RouteNames.LOGIN_LINK,
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath.home,
        element: <HomePage />
    },
    [AppRoutes.NEWS]: {
        path: RoutePath.news,
        element: <NewsPage />
    },
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        element: <LoginPage />
    },
}

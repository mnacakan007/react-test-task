import {RouteProps} from "react-router-dom";
import {NewsPage} from "../../../pages/NewsPage";
import {HomePage} from "../../../pages/HomePage";

import {ProfilePage} from "../../../pages/ProfilePage";
import LoginPage from "../../../pages/LoginPage/ui/LoginPage";

export enum RouteNames {
    HOME_LINK = '/',
    NEWS_LINK = '/news',
    PROFILE_LINK = '/profile',
    LOGIN_LINK = '/login'
}

export enum PublicRoutes {
    HOME = 'home',
    NEWS = 'news',
    LOGIN = 'login',
}
export enum PrivateRoutes {
    HOME = 'home',
    NEWS = 'news',
    PROFILE = 'profile',
}

export const PublicRoutePath: Record<PublicRoutes, string> = {
    [PublicRoutes.HOME]: RouteNames.HOME_LINK,
    [PublicRoutes.NEWS]: RouteNames.NEWS_LINK,
    [PublicRoutes.LOGIN]: RouteNames.LOGIN_LINK,
}

export const PrivateRoutePath: Record<PrivateRoutes, string> = {
    [PrivateRoutes.HOME]: RouteNames.HOME_LINK,
    [PrivateRoutes.NEWS]: RouteNames.NEWS_LINK,
    [PrivateRoutes.PROFILE]: RouteNames.PROFILE_LINK,
}

export const publicRoutes: Record<PrivateRoutes, RouteProps> = {
    [PrivateRoutes.HOME]: {
        path: PublicRoutePath.home,
        element: <HomePage />
    },
    [PrivateRoutes.NEWS]: {
        path: PublicRoutePath.news,
        element: <NewsPage />
    },
    [PrivateRoutes.PROFILE]: {
        path: PublicRoutePath.login,
        element: <LoginPage />
    },
}

export const privateRoutes: Record<PrivateRoutes, RouteProps> = {
    [PrivateRoutes.HOME]: {
        path: PrivateRoutePath.home,
        element: <HomePage />
    },
    [PrivateRoutes.NEWS]: {
        path: PrivateRoutePath.news,
        element: <NewsPage />
    },
    [PrivateRoutes.PROFILE]: {
        path: PrivateRoutePath.profile,
        element: <ProfilePage />
    },
}


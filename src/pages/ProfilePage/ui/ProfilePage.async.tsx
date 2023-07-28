import {lazy} from "react";

export const ProfilePageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // For testing lazy (temp code)
    setTimeout(() => resolve(import('./ProfilePage')), 1500)
}));

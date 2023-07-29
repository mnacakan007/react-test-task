import React, {Suspense, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import {routeConfig} from "../../shared/config/routeConfig/routeConfig";
import {ProfilePage} from "../../pages/ProfilePage";
import {ProtectedRoute} from "../../components/ProtectedRoute";
import {useActions} from "../../hooks/useActions";
import {IUser} from "../../models/IUser";
import HotFoundPage from "../../pages/HotFoundPage/ui/HotFoundPage";

const AppRouter = () => {
    const {setUser, setIsAuth} = useActions();

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setUser({username: localStorage.getItem('username' || '')} as IUser)
            setIsAuth(true);
        }
    }, [])

    return (
        <Routes>
            {Object.values(routeConfig).map(({element, path}) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<div>Loading...</div>}>
                            {element}
                        </Suspense>
                    )}
                />
            ))}
            <Route
                path="/profile"
                element={
                    <ProtectedRoute>
                        <Suspense fallback={<div>Loading...</div>}>
                            <ProfilePage/>
                        </Suspense>
                    </ProtectedRoute>
                }
            />
            <Route path="*" element={<HotFoundPage/>}/>
        </Routes>
    );
};

export default AppRouter;

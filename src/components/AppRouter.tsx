import React, {Suspense} from 'react';
import {Routes, Route, Await} from 'react-router-dom';
import {routeConfig, RoutePath} from "../shared/config/routeConfig/routeConfig";
import {ProfilePage} from "../pages/ProfilePage";
import {ProtectedRoute} from "./ProtectedRoute";

const AppRouter = () => {
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
        </Routes>
    );
};

export default AppRouter;

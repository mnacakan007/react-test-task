import React, {Suspense, useEffect} from 'react';
import {Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {privateRoutes, publicRoutes, RouteNames} from "../shared/config/routeConfig/routeConfig";


const AppRouter = () => {
    const {isAuth} = useTypedSelector(state => state.auth);
    console.log(isAuth);

    let navigate = useNavigate();

    useEffect(() => {
        if (isAuth){
            return navigate(RouteNames.PROFILE_LINK);
        }
    },[isAuth, navigate]);

    return (
        isAuth ?
            <Routes>
                {Object.values(privateRoutes).map(({element, path}) => (
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
            </Routes>
            :
            <Routes>
                {Object.values(publicRoutes).map(({element, path}) => (
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
                <Route path={RouteNames.PROFILE_LINK} element={<Navigate to={RouteNames.LOGIN_LINK}/>}/>
            </Routes>
    );
};

export default AppRouter;

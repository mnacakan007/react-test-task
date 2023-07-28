import React, {FC, Suspense, useEffect} from 'react';
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar/Navbar";
import {Layout} from "antd";
import './App.css';
import {useActions} from "./hooks/useActions";
import {IUser} from "./models/IUser";
import {RouteNames} from "./shared/config/routeConfig/routeConfig";
import {useTypedSelector} from "./hooks/useTypedSelector";
import {useNavigate} from "react-router-dom";

const App: FC = () => {
    const {isAuth} = useTypedSelector(state => state.auth);
    const {setUser, setIsAuth} = useActions();
    let navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setUser({username: localStorage.getItem('username' || '')} as IUser)
            setIsAuth(true);
        }
    }, [])

    useEffect(() => {
        if (isAuth) {
            navigate(RouteNames.PROFILE_LINK);
        }
    }, [isAuth]);

    return (
        <Layout className="h100">
            <Navbar/>
            <Layout.Content style={{ padding: '20px 50px' }}>
                <Suspense fallback={<div>Loading...</div>}>
                    <AppRouter/>
                </Suspense>
            </Layout.Content>
        </Layout>
    );
};

export default App;

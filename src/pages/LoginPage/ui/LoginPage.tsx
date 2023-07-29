import React, {useEffect} from 'react';
import {Card, Layout, Row} from "antd";
import LoginForm from "../../../components/LoginForm/ui/LoginForm";
import {RouteNames} from "../../../shared/config/routeConfig/routeConfig";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const {isAuth} = useTypedSelector(state => state.auth);
    let navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            navigate(RouteNames.PROFILE_LINK);
        }
    }, [isAuth]);

    return (
        <Layout>
            <Row justify="center" align="middle" className="h100">
                <Card style={{borderRadius: '8px'}}>
                    <LoginForm/>
                </Card>
            </Row>
        </Layout>
    );
};

export default LoginPage;

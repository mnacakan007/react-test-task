import React from 'react';
import {Card, Layout, Row} from "antd";
import LoginForm from "../../../components/LoginForm/ui/LoginForm";

const LoginPage = () => {
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

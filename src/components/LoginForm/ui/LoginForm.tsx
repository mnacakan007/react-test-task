import React, {FC, memo, useState} from 'react';
import {Button, Form, Input} from "antd";

import {UserOutlined} from '@ant-design/icons';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";
import {rules} from "../../../utils/rules";
import {generateAuthToken, sha256} from "../../../utils/sha256";

const LoginForm: FC = () => {
    const {error, isLoading} = useTypedSelector(state => state.auth);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {login, setError} = useActions();

    const handleLogin = async (): Promise<void> => {
        const passwordHash = await sha256(password);
        const authToken = await generateAuthToken(username, passwordHash);
        const storedAuthToken = localStorage.getItem('authToken');

        if (authToken === storedAuthToken) {
            login(username, password);
        } else {
            setError('Login failed. Invalid credentials.');
        }

        setPassword('');
    };

    return (
        <Form
            style={{minWidth: '300px'}}
            onFinish={handleLogin}
        >
            {error && <div style={{color: 'red', marginBottom: 5}}>
                {error}
            </div>}
            <Form.Item
                name="username"
                rules={[rules.required("Please enter your username!"), rules.isEmptySpaces()]}
            >
                <Input
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    size="large"
                    placeholder="User name"
                    prefix={<UserOutlined/>}/>
            </Form.Item>
            <Form.Item
                name="password"
                rules={[rules.required("Please enter password"), rules.isEmptySpaces()]}
            >
                <Input.Password
                    size="large"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Login
                </Button>
            </Form.Item>
        </Form>
    );
};

export default memo(LoginForm);

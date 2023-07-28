import React, {FC, useState} from 'react';
import {Button, Form, Input} from "antd";

import {UserOutlined} from '@ant-design/icons';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";
import {rules} from "../../../utils/rules";


const LoginForm: FC = () => {
    const {error, isLoading} = useTypedSelector(state => state.auth);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {login} = useActions()

    const submit = () => {
        login(username, password)
    }

    return (
        <Form
            style={{minWidth: '300px'}}
            onFinish={submit}
        >
            {error && <div style={{color: 'red'}}>
                {error}
            </div>}
            <Form.Item
                name="username"
                rules={[rules.required("Please enter your username!")]}
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
                rules={[rules.required("Please enter password")]}
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
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;

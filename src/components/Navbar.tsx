import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import {useNavigate} from 'react-router-dom';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {RouteNames} from "../shared/config/routeConfig/routeConfig";


const Navbar: FC = () => {
    const navigate = useNavigate();
    const {isAuth, user} = useTypedSelector(state => state.auth);
    const {logout} = useActions()

    return (
        <Layout.Header>
            <Row justify="end">
                {isAuth
                    ?
                    <>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            items={[
                                {
                                    label: 'Home',
                                    key: 'home',
                                    style: {minWidth: '80px', textAlign: 'center'},
                                    onClick: () => navigate(RouteNames.HOME_LINK)
                                },
                                {
                                    label: 'News',
                                    key: 'news',
                                    style: {minWidth: '80px', textAlign: 'center'},
                                    onClick: () => navigate(RouteNames.NEWS_LINK)
                                },
                                {
                                    label: 'Profile',
                                    key: 'profile',
                                    style: {minWidth: '80px', textAlign: 'center'},
                                    onClick: () => navigate(RouteNames.PROFILE_LINK)
                                },
                                {
                                    label: 'Logout',
                                    key: 'logout',
                                    onClick: () => logout()
                                }
                            ]}
                        />
                        <div style={{color: 'white'}}>
                            {user.username}
                        </div>
                    </>
                    :
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        items={[
                            {
                                label: 'Home',
                                key: 'home',
                                style: {minWidth: '80px', textAlign: 'center'},
                                onClick: () => navigate(RouteNames.HOME_LINK)
                            },
                            {
                                label: 'News',
                                key: 'news',
                                style: {minWidth: '80px', textAlign: 'center'},
                                onClick: () => navigate(RouteNames.NEWS_LINK)
                            },
                            {
                                label: 'Profile',
                                key: 'profile',
                                style: {minWidth: '80px', textAlign: 'center'},
                                onClick: () => navigate(RouteNames.PROFILE_LINK)
                            },
                            {
                                label: 'Login',
                                key: 'login',
                                style: {minWidth: '80px', textAlign: 'center'},
                                onClick: () => navigate(RouteNames.LOGIN_LINK)
                            },
                        ]}
                    />
                }
            </Row>
        </Layout.Header>
    );
};

export default Navbar;

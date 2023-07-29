import React, {FC, Suspense} from 'react';
import AppRouter from "./router/ui/AppRouter";
import Navbar from "./components/Navbar/ui/Navbar";
import {Layout} from "antd";
import './App.scss';

const App: FC = () => {
    return (
        <Layout className="h100">
            <Navbar/>
            <Layout.Content className='layoutPadding'>
                <Suspense fallback={<div>Loading...</div>}>
                    <AppRouter/>
                </Suspense>
            </Layout.Content>
        </Layout>
    );
};

export default App;

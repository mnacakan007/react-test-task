import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";
import {Row} from "antd";
import ListNewsPage from "../../../components/ListNewsPage";

const NewsPage: FC = () => {
    const {isLoading, news: data} = useTypedSelector(state => state.news);
    const {fetchNews} = useActions()

    useEffect(() => {
        fetchNews()
    },[]);

    useEffect(() => {
        console.log(isLoading);
        console.log(data);
    },[data]);

    return (
        <Row gutter={16}>
            <ListNewsPage news={data}/>
        </Row>
    );
};

export default NewsPage;

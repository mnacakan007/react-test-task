import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";
import {Row} from "antd";
import SingleNewsPage from "../../../components/SingleNewsPage/ui/SingleNewsPage";
import {INews} from "../../../models/INews";
import styles from "./NewsPage.module.scss";
import AddNews from "../../../components/AddNews/ui/AddNews";

const NewsPage: FC = () => {
    const {isLoading, news: data} = useTypedSelector(state => state.news);
    const {fetchNews} = useActions()

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <>
            {isLoading && <div>Loading...</div>}
            <div className={styles.addNewsBlock}><AddNews /></div>
            {data.length > 0 &&
                <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                    {data.map((newsItem: INews ) => (
                        <SingleNewsPage key={newsItem.id} news={newsItem}/>
                    ))}
                </Row>}
        </>
    );
};

export default NewsPage;

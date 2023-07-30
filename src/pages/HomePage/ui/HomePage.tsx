import React, {useCallback, useEffect} from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";
import {INews} from "../../../models/INews";
import SingleNewsPage from "../../../components/SingleNewsPage/ui/SingleNewsPage";
import {Row} from "antd";
import {generateNextFibonacci} from "../../../utils/generateNextFibonacci";

const HomePage = () => {
    const {isLoading, news} = useTypedSelector(state => state.news);
    const {fetchNews, setNews} = useActions();

    useEffect(() => {
        if (news.length > 4) {
            setNews(news.slice(0, 4));
        } else {
            fetchNews(1, 4);
        }
    }, []);

    const nextFibonacciNumber = useCallback((index: number) => {
        return generateNextFibonacci(index + 1);
    }, []);

    return (
        <div>
            <h1 className=''> Last news </h1>

            {isLoading && <div className='loader'>Loading...</div>}
            {!isLoading && !news.length && <div className='empty'><h1>No news</h1></div>}

            <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                {news.map((newsItem: INews, index: number) => (
                    <SingleNewsPage
                        key={`${newsItem.id}-${index}`}
                        news={newsItem}
                        nextFibonacciNumber={nextFibonacciNumber(index)}
                    />
                ))}
            </Row>
        </div>
    );
};

export default HomePage;

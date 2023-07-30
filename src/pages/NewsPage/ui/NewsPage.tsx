import React, {ChangeEvent, FC, useEffect, useState, useMemo, useDeferredValue, useCallback} from 'react';
import {Col, Row} from 'antd';
import {useTypedSelector} from '../../../hooks/useTypedSelector';
import {useActions} from '../../../hooks/useActions';
import SingleNewsPage from '../../../components/SingleNewsPage/ui/SingleNewsPage';
import {INews} from '../../../models/INews';
import styles from './NewsPage.module.scss';
import AddNews from '../../../components/AddNews/ui/AddNews';
import {generateNextFibonacci} from "../../../utils/generateNextFibonacci";
import InfiniteScroll from "react-infinite-scroll-component";

const NewsPage: FC = () => {
    const {isLoading, news, currentPage, perPage} = useTypedSelector(state => state.news);
    const [value, setValue] = useState('');
    const defferedValue = useDeferredValue(value);
    const {fetchNews} = useActions();

    useEffect(() => {
        fetchNews(1, 10);
    }, []);


    const filteredItems = useMemo(() => {
        if (value === '') {
            return news;
        } else {
            return news.filter(item =>
                item.title.toLowerCase().includes(value.toLowerCase()) ||
                item.description.toLowerCase().includes(value.toLowerCase())
            );
        }
    }, [news, defferedValue]);

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const nextFibonacciNumber = useCallback((index: number) => {
        return generateNextFibonacci(index + 1);
    }, []);

    const fetchData = () => {
        fetchNews(currentPage + 1, perPage);
    }

    return (
        <>
            <Row>
                <Col span={12}>
                    <input
                        style={{padding: '5px'}}
                        type="text"
                        placeholder="Search"
                        value={value}
                        onChange={onChangeValue}
                    />
                </Col>
                <Col span={12}>
                    <div className={styles.addNewsBlock}><AddNews/></div>
                </Col>
            </Row>

            {isLoading && <div className='loader'>Loading...</div>}
            {!isLoading && !filteredItems.length && <div className='empty'><h1>No news</h1></div>}

            {filteredItems.length > 0 && <InfiniteScroll
                dataLength={filteredItems.length}
                next={fetchData}
                hasMore={true}
                loader={''}
                endMessage={<p>No more data to load.</p>}
                style={{ overflow: 'hidden'}}
            >
                <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                    {filteredItems.map((newsItem: INews, index: number) => (
                        <SingleNewsPage
                            key={`${newsItem.id}-${index}`}
                            news={newsItem}
                            nextFibonacciNumber={nextFibonacciNumber(index)}
                        />
                    ))}
                </Row>
            </InfiniteScroll>}
        </>
    );
};

export default NewsPage;

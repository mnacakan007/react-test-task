import React, {FC, memo, useMemo} from "react";
import {NewsListProps} from "../../../models/INews";
import {Card, Col} from "antd";
import {useActions} from "../../../hooks/useActions";
import {DeleteOutlined} from '@ant-design/icons';
import {isPrime} from "../../../utils/isPrime";

const {Meta} = Card;

const SingleNewsPage: FC<NewsListProps> = ({news, nextFibonacciNumber}) => {
    const {deleteNews} = useActions();

    const isFibonacciPrime = useMemo(() => {
        return isPrime(nextFibonacciNumber);
    }, [nextFibonacciNumber]);

    return (
        <Col className="gutter-row" span={6}>
            <Card
                key={news.id}
                hoverable
                style={{marginBottom: '20px'}}
                cover={<img alt="example" src={news.image} loading={"lazy"}/>}
                actions={[
                    <DeleteOutlined onClick={() => deleteNews(news.id)} key="delete"/>,
                ]}
            >
                <Meta
                    title={`${news.title} ${nextFibonacciNumber} - ${isFibonacciPrime ? 'prime' : 'not a prime'}`}
                    description={news.description}/>
            </Card>
        </Col>
    )
};

export default memo(SingleNewsPage);

import React, {FC} from "react";
import {INews} from "../models/INews";
import {Card, Col} from "antd";

const { Meta } = Card;

interface NewsListProps {
    news: INews;
}

const SingleNewsPage: FC<NewsListProps> = ({ news }) => {
    return (
        <Col span={8}>
            <Card
                key={news.id}
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={news.image} />}
            >
                <Meta title={news.title} description={news.description} />
            </Card>
        </Col>
    )
};

export default SingleNewsPage;

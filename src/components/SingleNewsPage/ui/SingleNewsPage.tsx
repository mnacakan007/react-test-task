import React, {FC} from "react";
import {INews} from "../../../models/INews";
import {Card, Col} from "antd";
import {useActions} from "../../../hooks/useActions";
import { DeleteOutlined } from '@ant-design/icons';

const { Meta } = Card;

interface NewsListProps {
    news: INews;
}

const SingleNewsPage: FC<NewsListProps> = ({ news }) => {
    const {deleteNews} = useActions();

    return (
        <Col className="gutter-row" span={6}>
            <Card
                key={news.id}
                hoverable
                style={{marginBottom: '20px'}}
                cover={<img alt="example" src={news.image} loading={"lazy"}/>}
                actions={[
                    <DeleteOutlined onClick={() => deleteNews(news.id)} key="delete" />,
                ]}
            >
                <Meta title={news.title} description={news.description} />
            </Card>
        </Col>
    )
};

export default SingleNewsPage;

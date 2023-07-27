import React, {FC, useState} from 'react';
import {Button, Form, Input, Row} from "antd";
import {rules} from "../utils/rules";
import {INews} from "../models/INews";

interface NewsFormProps {
    submit: (news: INews) => void
}

const NewsForm: FC<NewsFormProps> = (props) => {
    const [news, setNews] = useState<INews>({
        image: '',
        title: '',
        description: '',
    } as INews);

    const submitForm = () => {
        props.submit({...news })
    }

    return (
        <Form onFinish={submitForm}>
            <Form.Item
                label="Description"
                name="description"
                rules={[rules.required()]}
            >
                <Input
                    onChange={e => setNews({...news, description: e.target.value})}
                    value={news.description}
                />
            </Form.Item>
            <Row justify="end">
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Create
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};

export default NewsForm;

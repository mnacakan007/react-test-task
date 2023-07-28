import React, {FC, useState} from 'react';
import {Button, Form, Input, Row, Space, Upload} from "antd";
import {rules} from "../utils/rules";
import {INews} from "../models/INews";
import {UploadOutlined} from '@ant-design/icons';

interface NewsFormProps {
    submit: (news: INews) => void
}

const NewsForm: FC<NewsFormProps> = (props) => {
    const [news, setNews] = useState<INews>({
        image: '',
        title: '',
        description: '',
    } as INews);

    const normFile = (e: any) => {
        console.log(e);
        if (Array.isArray(e)) {
            return e;
        }
        console.log(e?.fileList);
        return e?.fileList;
    };

    const submitForm = async () => {
        // const usersName = JSON.stringify({ name: 'John Doe' });
        // const customConfig = {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // };
        // const result = await axios.post('./news.json', usersName, customConfig);

        // console.log(result.data.data); // '{"name":"John Doe"}'
        // console.log(result.data.headers['Content-Type']);
        // axios.post<INews[]>('./news.json', {...news, id: 'uui', })
        //     .then((response: AxiosResponse) => {
        //     console.log("Data added successfully:", response.data);
        //     // Do something with the response if needed
        // })
        //     .catch((error: any) => {
        //         console.error("Error adding data:", error);
        //     });
        console.log(news);
        props.submit({...news, id: Date.now().toString(),})
    }

    return (
        <Form onFinish={submitForm}>
            <Form.Item
                label="Title"
                name="title"
                rules={[rules.required()]}
            >
                <Input
                    onChange={e => setNews({...news, title: e.target.value})}
                    value={news.title}
                />
            </Form.Item>
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
            <Form.Item
                label="Image"
                name="image"
                rules={[rules.required()]}
                valuePropName="fileList"
                getValueFromEvent={normFile}
            >
                <Space direction="vertical" style={{width: '100%'}} size="large">
                    <Upload
                        onChange={e => setNews({...news, image: e?.file})}
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture"
                        maxCount={1}
                    >
                        <Button icon={<UploadOutlined/>}>Upload image</Button>
                    </Upload>
                </Space>
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

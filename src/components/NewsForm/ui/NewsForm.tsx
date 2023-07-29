import React, {FC, memo, useState} from 'react';
import {Button, Form, Input, Row, Upload, UploadFile, UploadProps} from "antd";
import {rules} from "../../../utils/rules";
import {INews, NewsFormProps} from "../../../models/INews";
import {PlusOutlined} from '@ant-design/icons';

const NewsForm: FC<NewsFormProps> = (props) => {
    const [form] = Form.useForm();
    const [isUploading, setIsUploading] = useState(false);
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [news, setNews] = useState<INews>({
        image: '',
        title: '',
        description: '',
    } as INews);


    const handleChange: UploadProps['onChange'] = ({fileList: newFileList, file}) => {
        if (file.status === 'uploading') {
            setIsUploading(true);
        }
        if (file.status === 'error' || file.status === 'done') {
            setIsUploading(false);
        }
        if (newFileList[0]?.thumbUrl) {
            setNews({ ...news, image: newFileList[0].thumbUrl});
            setFileList(newFileList);
        }
    }

    const uploadButton = (
        <div>
            <PlusOutlined/>
            <div style={{marginTop: 8}}>Upload</div>
        </div>
    );

    const normFile = (e: any) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    const submitForm = ({ image }: { image: UploadFile[] }) => {
        props.submit({...news, image: image[0].thumbUrl as string })
        onReset();
    }

    const onReset = () => {
        form.resetFields();
    };

    return (
        <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            style={{maxWidth: 600}}
            autoComplete="off"
            onFinish={submitForm}
            form={form}
        >
            <Form.Item
                label="Title"
                name="title"
                rules={[rules.required()]}
            >
                <Input
                    onChange={e => setNews({...news, title: e.target.value.trim()})}
                    value={news.title}
                />
            </Form.Item>
            <Form.Item
                label="Description"
                name="description"
                rules={[rules.required()]}
            >
                <Input
                    onChange={e => setNews({...news, description: e.target.value.trim()})}
                    value={news.description}
                />
            </Form.Item>
            <Form.Item
                label="Image"
                name={"image"}
                rules={[rules.required()]}
                valuePropName="fileList"
                getValueFromEvent={normFile}
            >
                <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    fileList={fileList}
                    onChange={handleChange}
                    maxCount={1}
                >
                    {fileList.length >= 1 ? null : uploadButton}
                </Upload>
            </Form.Item>
            <Row justify="end">
                <Form.Item>
                    <Button disabled={isUploading} type="primary" htmlType="submit">
                        Create
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};

export default memo(NewsForm);


import React, {FC, memo, useMemo, useState} from 'react';
import {Button, Form, Input, message, Row, Upload, UploadFile, UploadProps, Checkbox} from "antd";
import {rules} from "../../../utils/rules";
import {INews} from "../../../models/INews";
import {PlusOutlined} from '@ant-design/icons';
import {RcFile} from "antd/es/upload";
interface NewsFormProps {
    submit: (news: INews) => void
}

const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });


const NewsForm: FC<NewsFormProps> = (props) => {
    const [form] = Form.useForm();
    const [news, setNews] = useState<INews>({
        image: '',
        title: '',
        description: '',
    } as INews);

    const [fileList, setFileList] = useState<UploadFile[]>([]);

    const handleChange: UploadProps['onChange'] = ({fileList: newFileList}) => {
        console.log(fileList);
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

    const beforeUpload = useMemo(() => (file: RcFile) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }, [])

    const submitForm = (values?: any) => {
        console.log(values);
        props.submit({...news})
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
            initialValues={{remember: true}}
            autoComplete="off"
            onFinish={submitForm}>
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
                    beforeUpload={beforeUpload}
                    onChange={handleChange}
                    maxCount={1}
                >
                    {fileList.length >= 1 ? null : uploadButton}
                </Upload>
            </Form.Item>
            <Row justify="end">
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                    >
                        Create
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};

export default memo(NewsForm);


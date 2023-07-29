import React, {FC, memo, useState} from 'react';
import {Button, Layout, Modal, Row} from "antd";
import NewsForm from "../../NewsForm/ui/NewsForm";
import {useActions} from "../../../hooks/useActions";
import {INews} from "../../../models/INews";

const AddNews: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {createNews} = useActions();

    const addNews = (news: INews) => {
        setIsModalOpen(false);
        createNews(news);
    }

    return (
        <Layout>
            <Row justify="end">
                <Button
                    onClick={() => setIsModalOpen(true)}
                >
                    Add event
                </Button>
            </Row>
            <Modal
                title="Add news"
                open={isModalOpen}
                footer={null}
                onCancel={() => setIsModalOpen(false)}
            >
                <NewsForm
                    submit={addNews}
                />
            </Modal>
        </Layout>
    );
};

export default memo(AddNews);

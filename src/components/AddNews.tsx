import React, {FC, useEffect, useState} from 'react';
import {Button, Layout, Modal, Row} from "antd";
import NewsForm from "./NewsForm";
import {useActions} from "../hooks/useActions";
import {INews} from "../models/INews";

const AddNews: FC = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const {fetchNews, createNews} = useActions();

    // useEffect(() => {
    //     fetchNews();
    // }, [])

    const addNews = (news: INews) => {
        setModalVisible(false);
        createNews(news);
    }

    return (
        <Layout>
            <Row justify="end">
                <Button
                    onClick={() => setModalVisible(true)}
                >
                    Add event
                </Button>
            </Row>
            <Modal
                title="Add news"
                visible={modalVisible}
                footer={null}
                onCancel={() => setModalVisible(false)}
            >
                <NewsForm
                    submit={addNews}
                />
            </Modal>
        </Layout>
    );
};

export default AddNews;

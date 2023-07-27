import React, {FC, useEffect, useState} from 'react';
import {Button, Layout, Modal, Row} from "antd";
import NewsForm from "../components/NewsForm";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {INews} from "../models/INews";

const Event: FC = () => {
    const [modalVisible, setModalVisible] = useState(false);
    // const {f, createEvent} = useActions();
    const {user} = useTypedSelector(state => state.auth);

    useEffect(() => {
        // fetchGuests()
        // fetchEvents(user.username);
    }, [])

    const addNewEvent = (event: INews) => {
        setModalVisible(false);
        // createEvent(event);
    }

    return (
        <Layout>
            <Row justify="center">
                <Button
                    onClick={() => setModalVisible(true)}
                >
                    Add event
                </Button>
            </Row>
            <Modal
                title="Добавить событие"
                visible={modalVisible}
                footer={null}
                onCancel={() => setModalVisible(false)}
            >
                <NewsForm
                    submit={addNewEvent}
                />
            </Modal>
        </Layout>
    );
};

export default Event;

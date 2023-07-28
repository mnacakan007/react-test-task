import React from 'react';
import {Card} from "antd";

const { Meta } = Card;

const ProfilePage = () => {
    return (
        <>
            <h1>Welcome to My Profile Page</h1>
            <Card
                hoverable
                style={{ width: 700 }}
                cover={
                <img
                    alt="example"
                    src="https://media.cntraveler.com/photos/57d87670fd86274a1db91acd/4:3/w_2048,h_1536,c_limit/most-beautiful-paris-pont-alexandre-iii-GettyImages-574883771.jpg'" />}
            >
                <Meta title='John Doe' description="Software Engineer | Tech Enthusiast'" />
            </Card>
        </>
    );
};

export default ProfilePage;

import React, {useEffect} from 'react';
import {Card} from "antd";
import Avatar from "antd/es/avatar/avatar";
import styles from './ProfilePage.module.scss';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";

const {Meta} = Card;

const ProfilePage = () => {
    const {isLoading, profile} = useTypedSelector(state => state.profile);

    const { fetchProfile } = useActions();

    useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <>
            <h1>Welcome to My Profile Page</h1>

            {isLoading && !profile.first && <div>Loading...</div>}

            {profile.first &&
                <Card
                    className={styles.profileCard}
                    cover={<img alt="example" src='https://media.cntraveler.com/photos/57d87670fd86274a1db91acd/4:3/w_2048,h_1536,c_limit/most-beautiful-paris-pont-alexandre-iii-GettyImages-574883771.jpg' loading={"lazy"}/>}
            >
                <Avatar
                    size={80}
                    className={styles.profileAvatar}
                    icon={<img alt="example" src={profile.avatar} loading={"lazy"}/> } />
                <Meta
                    className={styles.profileBio}
                    title={`${profile.first} ${profile.lastname}`}
                    description={profile.bio}
                />
            </Card>}
        </>
    );
};

export default ProfilePage;

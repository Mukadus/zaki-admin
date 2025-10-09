import React from 'react';
import classes from "./NotificationTemplate.module.css"
import { Container } from 'react-bootstrap';
import TopHeader from '@/components/atoms/TopHeader/TopHeader';
import NotificationCard from '@/components/atoms/NotificationCard/NotificationCard';
import ShadowWrapper from '@/components/atoms/ShadowWrapper/ShadowWrapper';
import { notificationCardData } from '@/developmentContent/dummyData/dummyData';

const NotificationTemplate = () => {
  return (
    <div className={classes?.notificationTemplate}>
        <Container>
            <TopHeader title="Notification" backButton={false} />
            <ShadowWrapper>
                <div className={classes?.notificationCardContainer}>
                {
                    notificationCardData?.map((item) => {
                        return <NotificationCard item={item} key={item?._id} />
                    })
                }
                </div>
            </ShadowWrapper>
        </Container>
    </div>
  )
}

export default NotificationTemplate
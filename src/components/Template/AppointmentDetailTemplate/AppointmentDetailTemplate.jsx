import React from 'react';
import classes from "./AppointmentDetailTemplate.module.css"
import TopHeader from '@/components/atoms/TopHeader/TopHeader';
import { Container } from 'react-bootstrap';
import PersonalInfo from '@/components/atoms/PersonalInfo/PersonalInfo';
import Wrapper from '@/components/atoms/Wrapper/Wrapper';
import ReviewCard from '@/components/atoms/ReviewCard/ReviewCard';

const AppointmentDetailTemplate = () => {
  return (
    <>
        <Container>
            <TopHeader title="Appointment Detail" route="/appointment" />
            <PersonalInfo isAppointment/>
            <Wrapper className={classes.reviewWrapper}>
              <h4 className={classes.reviewTitle}>Review</h4>
              <ReviewCard />
            </Wrapper>
        </Container>
    </>
  )
}

export default AppointmentDetailTemplate
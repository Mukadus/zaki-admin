'use client';

import React from 'react';
import classes from "./AppointmentDetailTemplate.module.css"
import TopHeader from '@/components/atoms/TopHeader/TopHeader';
import { Col, Container, Row } from 'react-bootstrap';
import PersonalInfo from '@/components/atoms/PersonalInfo/PersonalInfo';
import Wrapper from '@/components/atoms/Wrapper/Wrapper';
import ReviewCard from '@/components/atoms/ReviewCard/ReviewCard';
import { appointmentData } from '@/developmentContent/dummyData/appointment';
import { useState } from 'react';


const AppointmentDetailTemplate = () => {

  const [data, setData] = useState(appointmentData);
  return (
    <>
      <Container>
        <TopHeader title="Appointment Detail" route="/appointment" />
        <PersonalInfo isAppointment data={data} />
        {
          data?.status === "completed" && (
            <Wrapper className={classes.reviewWrapper}>
              <h4 className={classes.reviewTitle}>Review</h4>
              <Row className="gy-4">
                {data?.reviews?.slice(0, 6).map((item, index) => (
                  <Col lg={6} key={index}>
                    <ReviewCard data={item} />
                  </Col>
                ))}
              </Row>
            </Wrapper>
          )
        }
      </Container>
    </>
  )
}

export default AppointmentDetailTemplate
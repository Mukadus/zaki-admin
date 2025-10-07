import React from 'react';
import classes from "./AppointmentDetailTemplate.module.css"
import TopHeader from '@/components/atoms/TopHeader/TopHeader';
import { Container } from 'react-bootstrap';

const AppointmentDetailTemplate = () => {
  return (
    <>
        <Container>
            <TopHeader title="Appointment Detail" route="/appointment" />
        </Container>
    </>
  )
}

export default AppointmentDetailTemplate
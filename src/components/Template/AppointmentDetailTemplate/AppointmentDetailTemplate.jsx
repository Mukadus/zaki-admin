import React from 'react';
import classes from "./AppointmentDetailTemplate.module.css"
import TopHeader from '@/components/atoms/TopHeader/TopHeader';
import { Container } from 'react-bootstrap';
import PersonalInfo from '@/components/atoms/PersonalInfo/PersonalInfo';

const AppointmentDetailTemplate = () => {
  return (
    <>
        <Container>
            <TopHeader title="Appointment Detail" route="/appointment" />
            <PersonalInfo isAppointment/>
        </Container>
    </>
  )
}

export default AppointmentDetailTemplate
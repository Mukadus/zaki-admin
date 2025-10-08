import React from 'react';
import classes from "./AnalyticsTemplate.module.css"
import { Container } from 'react-bootstrap';
import TopHeader from '@/components/atoms/TopHeader/TopHeader';

const AnalyticsTemplate = () => {
  return (
    <div>
      <Container>
        <TopHeader title="Analytics" backButton={false} />
      </Container>
    </div>
  )
}

export default AnalyticsTemplate
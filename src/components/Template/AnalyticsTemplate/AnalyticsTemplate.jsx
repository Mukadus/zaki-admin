import React from 'react';
import classes from "./AnalyticsTemplate.module.css"
import { Col, Container, Row } from 'react-bootstrap';
import TopHeader from '@/components/atoms/TopHeader/TopHeader';
import AnalyticsCard from '@/components/atoms/AnalyticsCard/AnalyticsCard';

const AnalyticsTemplate = () => {
  return (
    <div>
      <Container>
        <TopHeader title="Analytics" backButton={false} />
        <Row>
          <Col lg={6}>  
          <AnalyticsCard />
          </Col>
          <Col lg={6}>  
          2
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AnalyticsTemplate
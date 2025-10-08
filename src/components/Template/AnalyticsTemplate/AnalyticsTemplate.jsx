import React from 'react';
import classes from "./AnalyticsTemplate.module.css"
import { Col, Container, Row } from 'react-bootstrap';
import TopHeader from '@/components/atoms/TopHeader/TopHeader';
import AnalyticsCard from '@/components/atoms/AnalyticsCard/AnalyticsCard';
import { HiMiniUsers, HiMiniUserGroup, HiMiniCalendarDays, HiMiniCurrencyDollar } from 'react-icons/hi2';

const AnalyticsTemplate = () => {
  // Sample analytics data
  const analyticsData = [
    {
      title: "Total Therapists",
      value: "344",
      change: "+36%",
      icon: HiMiniUsers
    },
    {
      title: "Total Clients", 
      value: "344",
      change: "+36%",
      icon: HiMiniUserGroup
    },
    {
      title: "Total Appointments",
      value: "344", 
      change: "+36%",
      icon: HiMiniCalendarDays
    },
    {
      title: "Revenue",
      value: "$344",
      change: "+36%", 
      icon: HiMiniCurrencyDollar
    }
  ];

  return (
    <div>
      <Container>
        <TopHeader title="Analytics" backButton={false} />
        <Row>
          {analyticsData.map((data, index) => (
            <Col key={index} lg={6} md={6} sm={12} className="mb-3">
              <AnalyticsCard 
                title={data.title}
                value={data.value}
                change={data.change}
                icon={data.icon}
              />
            </Col>
          ))}
          <Col md={6}>
          <p>dedew</p></Col>
        </Row>
      </Container>
    </div>
  )
}

export default AnalyticsTemplate

{/* <Row>
          <Col  lg={6} md={6} sm={12} className="mb-3">
          <Row className='gy-4'>
          {analyticsData.map((data, index) => (
            <Col lg={6}>
              <AnalyticsCard 
                title={data.title}
                value={data.value}
                change={data.change}
                icon={data.icon}
                key={index}
                />
                </Col>
          ))}

          </Row>
            </Col>
          <Col md={6}>
          <p>dedew</p></Col>
        </Row> */}
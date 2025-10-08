"use client";
import React from "react";
import classes from "./AnalyticsTemplate.module.css";
import { Col, Container, Row } from "react-bootstrap";
import TopHeader from "@/components/atoms/TopHeader/TopHeader";
import AnalyticsCard from "@/components/atoms/AnalyticsCard/AnalyticsCard";
import {
  HiMiniUsers,
  HiMiniUserGroup,
  HiMiniCalendarDays,
  HiMiniCurrencyDollar,
} from "react-icons/hi2";
import GraphsFilter from "@/components/atoms/GraphsFilter/GraphsFilter";
import BarChart from "@/components/molecules/Chart/BarChart/BarChart";
import ShadowWrapper from "@/components/atoms/ShadowWrapper/ShadowWrapper";

const AnalyticsTemplate = () => {
  // Sample analytics data
  const analyticsData = [
    {
      title: "Total Therapists",
      value: "344",
      change: "+36%",
      icon: HiMiniUsers,
    },
    {
      title: "Total Clients",
      value: "344",
      change: "+36%",
      icon: HiMiniUserGroup,
    },
    {
      title: "Total Appointments",
      value: "344",
      change: "+36%",
      icon: HiMiniCalendarDays,
    },
    {
      title: "Revenue",
      value: "$344",
      change: "+36%",
      icon: HiMiniCurrencyDollar,
    },
  ];

  return (
    <div>
      <Container>
        <TopHeader title="Analytics" backButton={false} />
        <Row>
          <Col lg={6} md={6} sm={12}>
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
            </Row>
          </Col>
          <Col lg={6} md={6} sm={12} className="mb-3">
            <ShadowWrapper className={classes.shadowWrapper}>
              <GraphsFilter startingYear={"2022"} title={"Subscription sales breakdown"} />
              <BarChart className={classes.barChartContainer}/>
            </ShadowWrapper>
          </Col>
        </Row>
        <GraphsFilter startingYear={"2022"} title={"New Sign Ups"} />
      </Container>
    </div>
  );
};

export default AnalyticsTemplate;

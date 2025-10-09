"use client";
import React from "react";
import classes from "./AnalyticsTemplate.module.css";
import { Col, Container, Row } from "react-bootstrap";
import TopHeader from "@/components/atoms/TopHeader/TopHeader";
import AnalyticsCard from "@/components/atoms/AnalyticsCard/AnalyticsCard";
import GraphsFilter from "@/components/atoms/GraphsFilter/GraphsFilter";
import BarChart from "@/components/molecules/Chart/BarChart/BarChart";
import AreaChart from "@/components/molecules/Chart/AreaChart/AreaChart";
import ShadowWrapper from "@/components/atoms/ShadowWrapper/ShadowWrapper";
import SignupChart from "@/components/molecules/Chart/SignupChart/SignupChart";
import { barChartData, signupChartData, areaChartData, analyticsData } from "@/developmentContent/dummyData/dummyData";

const AnalyticsTemplate = () => {


  return (
    <div>
      <Container>
        <TopHeader title="Analytics" backButton={false} />
        <Row>
          <Col lg={6} md={6} sm={12}>
            <div className={classes.analyticsCardsGrid}>
              {analyticsData.map((data, index) => (
                <div key={index} className={classes.analyticsCardWrapper}>
                  <AnalyticsCard
                    title={data.title}
                    value={data.value}
                    change={data.change}
                    icon={data.icon}
                  />
                </div>
              ))}
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} className={classes.colRight}>
            <ShadowWrapper className={classes.shadowWrapper}>
              <GraphsFilter startingYear={"2022"} title={"Subscription sales breakdown"} />
              <BarChart data={barChartData} className={classes.barChartContainer}/>
            </ShadowWrapper>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col lg={8} md={6} sm={12} className="mb-3">
            <ShadowWrapper className={classes.shadowWrapper}>
              <GraphsFilter startingYear={"2022"} title={"New Sign Ups"} />
              <div className={classes.barChartContainer}>
              <SignupChart data={signupChartData} className={classes.barChartContainer}/>
              </div>
            </ShadowWrapper>
          </Col>
          <Col lg={4} md={6} sm={12} className="mb-3">
            <ShadowWrapper className={classes.shadowWrapper}>
              {/* <GraphsFilter startingYear={"2022"} title={"Total Appointments Booked"} /> */}
              <div className={classes?.appoinment}>
                  <div>20<span>Per Day</span></div>
                  <h6>Total Appointments Booked</h6>
                </div>
              <div className={classes.areaChartContainer}>
                <div className={classes.areaChartContainerChild}>
              <AreaChart data={areaChartData} className={classes.areaChartContainer}/>
                </div>
              </div>
            </ShadowWrapper>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AnalyticsTemplate;

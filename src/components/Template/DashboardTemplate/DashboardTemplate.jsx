import React from "react";
import classes from "./DashboardTemplate.module.css";
import TopHeader from "@/components/atoms/TopHeader/TopHeader";
import { Col, Container, Row } from "react-bootstrap";
import Wrapper from "@/components/atoms/Wrapper/Wrapper";
import SeeAll from "@/components/atoms/SeeAll/SeeAll";
import TherapistCard from "@/components/molecules/TherapistCard/TherapistCard";
import {
  notificationCardData,
  recentTherapistData,
} from "@/developmentContent/dummyData/dummyData";
import { GoArrowUpRight } from "react-icons/go";
import NotificationCard from "@/components/atoms/NotificationCard/NotificationCard";
import NoDataFound from "@/components/atoms/NoDataFound/NoDataFound";

const DashboardTemplate = () => {
  return (
    <>
      <div className={classes?.dashboardTemplate}>
        <Container>
          <Row>
            <Col lg={8}>
              <TopHeader title="Dashboard" backButton={false} />
              <Wrapper>
                <Row className="gy-4">
                  {recentTherapistData?.map((item) => {
                    return (
                      <Col lg={4} key={item?._id}>
                        <TherapistCard item={item} />
                      </Col>
                    );
                  })}
                </Row>
                <SeeAll title="See all therapist" link="/therapist" />
              </Wrapper>
            </Col>
            <Col lg={4}>
              <Wrapper className={classes?.wrapper}>
                <div className={classes?.notification}>
                  <h4>Notifications</h4>
                  <div className={classes?.arrow}>
                    <GoArrowUpRight />
                  </div>
                </div>
                <div className={classes?.notificationCardContainer}>
                  { notificationCardData?.length > 0 ? notificationCardData?.map((item) => {
                    return <NotificationCard item={item} key={item?._id} />;
                  }):<NoDataFound className={classes?.noDataFound} />}
                </div>
                {notificationCardData?.length === 2 && (
                  <SeeAll title="See All Notifications" link="/notification" />
                )}
              </Wrapper>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default DashboardTemplate;

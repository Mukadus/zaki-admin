"use client";
import React, { useEffect, useState } from "react";
import classes from "./DashboardTemplate.module.css";
import TopHeader from "@/components/atoms/TopHeader/TopHeader";
import { Col, Container, Row } from "react-bootstrap";
import Wrapper from "@/components/atoms/Wrapper/Wrapper";
import SeeAll from "@/components/atoms/SeeAll/SeeAll";
import TherapistCard from "@/components/molecules/TherapistCard/TherapistCard";
import ResponsiveTable from "@/components/organisms/ResponsiveTable/ResponsiveTable";
import PopOver from "@/components/molecules/PopOver";
import {
  dashboardData,
} from "@/developmentContent/dummyData/dummyData";
import { tableHeader } from "@/developmentContent/tableData/tableHeader";
import { dashboardTableData, tableBodyData } from "@/developmentContent/tableData/tableBody";
import { dashboardPopoverOptions, userRegistrationPopoverOptions } from "@/developmentContent/popoverOptions";
import { useRouter } from "next/navigation";
import { GoArrowUpRight } from "react-icons/go";
import NotificationCard from "@/components/atoms/NotificationCard/NotificationCard";
import NoDataFound from "@/components/atoms/NoDataFound/NoDataFound";
import ShadowWrapper from "@/components/atoms/ShadowWrapper/ShadowWrapper";
import BarChart from "@/components/molecules/Chart/BarChart/BarChart";
import useAxios from "@/interceptor/axios-functions";

const DashboardTemplate = () => {
  const [loading,setLoading] = useState('');
  const [data,setData] = useState(dashboardData);
  const router = useRouter();
  const {Get} = useAxios();

  const onClickPopover = (label, rowItem) => {
    label === 'view'?router.push(`/user-registration/${rowItem?._id}`):null;
  };

  const getStatusClass = (status) => {
    return status === "Completed" ? classes.completedStatus : classes.upcomingStatus;
  };

  const getData = async ()=>{
    setLoading('loading');
    const {response} = await Get({route: "/dashboard"});
    if(response){
      setData(response?.data);
    }
  setLoading('');
  }

  useEffect(()=>{
    // getData();
  },[]);

  return (
    <>
      <div className={classes?.dashboardTemplate}>
        <Container>
          <Row>
            <Col lg={8}>
              <TopHeader title="Dashboard" backButton={false} />
              <Wrapper>
                <Row className="gy-4">
                  {data?.recentTherapistData?.map((item) => {
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
                  <div onClick={() => router.push("/notification")} className={classes?.arrow}>
                    <GoArrowUpRight />
                  </div>
                </div>
                <div className={classes?.notificationCardContainer}>
                  { data?.notificationCardData?.length > 0 ? data?.notificationCardData?.map((item) => {
                    return <NotificationCard item={item} key={item?._id} />;
                  }):<NoDataFound className={classes?.noDataFound} />}
                </div>
                {data?.notificationCardData?.length === 2 && (
                  <SeeAll title="See All Notifications" link="/notification" />
                )}
              </Wrapper>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={7}>
              <Wrapper>
                <h4 className="mb-3">User Management</h4>
                <ResponsiveTable
                  data={data?.dashboardTableData}
                  tableHeader={tableHeader}
                  hasPagination={false}
                  renderItem={({ item, key, rowIndex, renderValue }) => {
                    const rowItem = tableBodyData[rowIndex];
                    if (renderValue) {
                      return renderValue(item, rowItem);
                    }

                    if (key === "status") {
                      return (
                        <span className={`${classes.statusPill} ${getStatusClass(item)}`}>
                          {item}
                        </span>
                      );
                    }

                    if (key === "actions") {
                      return (
                        <div className={classes.actionButtons}>
                          <PopOver
                            popover={userRegistrationPopoverOptions}
                            onClick={(label) => {
                              onClickPopover(label, rowItem);
                            }}
                          />
                        </div>
                      );
                    }

                    return item || "";
                  }}
                />
              </Wrapper>
            </Col>
            <Col lg={5}>
            <ShadowWrapper>
             <div className={classes?.subscription}>
             Subscription sales breakdown
             </div>
             <div className={classes?.mainChart}>
            <BarChart data={data?.barChartData} className={classes.barChartContainer}/>
             </div>
            </ShadowWrapper>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default DashboardTemplate;

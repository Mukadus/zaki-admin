"use client";
import ShadowWrapper from "@/components/atoms/ShadowWrapper/ShadowWrapper";
import TopHeader from "@/components/atoms/TopHeader/TopHeader";
import TableHeader from "@/components/molecules/TableHeader/TableHeader";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./UserRegisterationoDetailTemplate.module.css";
import Wrapper from "@/components/atoms/Wrapper/Wrapper";
import PersonalInfo from "@/components/atoms/PersonalInfo/PersonalInfo";
import { useSearchParams } from "next/navigation";
import { appointmentFilter } from "@/developmentContent/enums/enums";
import {
  recentTherapistData,
  UserRegisterationoDetail,
} from "@/developmentContent/dummyData/dummyData";
import TherapistCard from "@/components/molecules/TherapistCard/TherapistCard";
import useDebounce from "@/resources/hooks/useDebounce";
import useAxios from "@/interceptor/axios-functions";

const UserRegisterationoDetailTemplate = ({ slug }) => {
  const { Get } = useAxios();
  const [SelectedData, setSelectedData] = useState(appointmentFilter[0]);
  const [page, setPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(1);
  const searchParams = useSearchParams();
  const id = searchParams.get("therapist") || "";
  const [data, setData] = useState(UserRegisterationoDetail);
  const [loading, setLoading] = useState("");
  const [userDetail, setUserDetails] = useState({});

  const getData = async (_selectedData) => {
    setLoading("loading");
    const query = {
      page: page,
      status: _selectedData?.value,
    };
    const queryString = new URLSearchParams(query).toString();
    const { response } = await Get({
      route: `/user-registration/${slug}?${queryString}`,
    });
    if (response) {
      setData(response?.data);
      setTotalRecords(response?.totalRecords);
    }
    setLoading("");
  };

  useEffect(() => {
    if (SelectedData) {
      getData(SelectedData);
    }
  }, [SelectedData]);

  console.log("data?.recentTherapistData",data);

  return (
    <>
      <Container>
        <TopHeader title="User Registration" back={true} />
        {/* <ShadowWrapper className={classes?.shadowWrapper}>
                <Wrapper>
                    das
                </Wrapper>
            </ShadowWrapper> */}
        <PersonalInfo user={data?.user} showCertifications={id !== ""} />
        {!id && (
          <div className="mt-4">
            <Wrapper>
              <h4 className={classes?.appointmentTitle}>Appointments</h4>
              <TableHeader
                rightSide={false}
                filterData={appointmentFilter}
                SelectedData={SelectedData}
                setSelectedData={setSelectedData}
              />
              <Row className="gy-4">
                {data?.recentTherapistData?.length > 0 && data?.recentTherapistData?.map((item) => {
                  return (
                    <Col lg={4} key={item?._id}>
                      <TherapistCard item={item} />
                    </Col>
                  );
                })}
              </Row>
            </Wrapper>
          </div>
        )}
      </Container>
    </>
  );
};

export default UserRegisterationoDetailTemplate;

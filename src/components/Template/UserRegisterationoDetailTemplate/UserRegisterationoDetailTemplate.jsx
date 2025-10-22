'use client'
import ShadowWrapper from '@/components/atoms/ShadowWrapper/ShadowWrapper'
import TopHeader from '@/components/atoms/TopHeader/TopHeader'
import TableHeader from '@/components/molecules/TableHeader/TableHeader'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import classes from "./UserRegisterationoDetailTemplate.module.css"
import Wrapper from '@/components/atoms/Wrapper/Wrapper';
import PersonalInfo from '@/components/atoms/PersonalInfo/PersonalInfo';
import { useSearchParams } from 'next/navigation';
import { appointmentFilter } from '@/developmentContent/enums/enums'
import { recentTherapistData } from '@/developmentContent/dummyData/dummyData'
import TherapistCard from '@/components/molecules/TherapistCard/TherapistCard'
import { userRegistrationData } from '@/developmentContent/dummyData/userRegistration'

const UserRegisterationoDetailTemplate = ({slug}) => {
  const [SelectedData, setSelectedData] = useState(appointmentFilter[0]);
  const searchParams = useSearchParams();
  const id = searchParams.get('therapist') || "";

  const [data, setData] = useState(userRegistrationData);

  return (
    <>
        <Container>
            <TopHeader title="User Registration" back={true} />
            {/* <ShadowWrapper className={classes?.shadowWrapper}>
                <Wrapper>
                    das
                </Wrapper>
            </ShadowWrapper> */}
            <PersonalInfo showCertifications={id !== ''} data={data}/>
            {
              !id && (
            <div className='mt-4'>
            <Wrapper>
              <h4 className={classes?.appointmentTitle}>Appointments</h4>
              <TableHeader rightSide={false} filterData={appointmentFilter} SelectedData={SelectedData} setSelectedData={setSelectedData} />
              <Row className="gy-4">
                  {recentTherapistData?.map((item) => {
                    return (
                      <Col lg={4} key={item?._id}>
                        <TherapistCard item={item} />
                      </Col>
                    );
                  })}
                </Row>
            </Wrapper>
            </div>
              )
            }
        </Container>
    </>
  )
}

export default UserRegisterationoDetailTemplate
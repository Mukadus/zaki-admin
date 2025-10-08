'use client'
import ShadowWrapper from '@/components/atoms/ShadowWrapper/ShadowWrapper'
import TopHeader from '@/components/atoms/TopHeader/TopHeader'
import TableHeader from '@/components/molecules/TableHeader/TableHeader'
import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import classes from "./UserRegisterationoDetailTemplate.module.css"
import Wrapper from '@/components/atoms/Wrapper/Wrapper';
import PersonalInfo from '@/components/atoms/PersonalInfo/PersonalInfo';
import { useSearchParams } from 'next/navigation';

const UserRegisterationoDetailTemplate = ({slug}) => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id') || "";

  return (
    <>
        <Container>
            <TopHeader title="User Registration" backButton={false} />
            <ShadowWrapper className={classes?.shadowWrapper}>
                <Wrapper>
                    das
                </Wrapper>
            </ShadowWrapper>
            <PersonalInfo showCertifications={id !== ''}/>
        </Container>
    </>
  )
}

export default UserRegisterationoDetailTemplate
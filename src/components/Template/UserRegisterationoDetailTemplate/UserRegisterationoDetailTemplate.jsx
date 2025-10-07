import ShadowWrapper from '@/components/atoms/ShadowWrapper/ShadowWrapper'
import TopHeader from '@/components/atoms/TopHeader/TopHeader'
import TableHeader from '@/components/molecules/TableHeader/TableHeader'
import React from 'react'
import { Container } from 'react-bootstrap';
import classes from "./UserRegisterationoDetailTemplate.module.css"
import Wrapper from '@/components/atoms/Wrapper/Wrapper';
import PersonalInfo from '@/components/atoms/PersonalInfo/PersonalInfo';

const UserRegisterationoDetailTemplate = ({slug}) => {
  return (
    <>
        <Container>
            <TopHeader title="User Registration" backButton={false} />
            <PersonalInfo/>
        </Container>
    </>
  )
}

export default UserRegisterationoDetailTemplate
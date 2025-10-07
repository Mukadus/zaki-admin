import ShadowWrapper from '@/components/atoms/ShadowWrapper/ShadowWrapper'
import TopHeader from '@/components/atoms/TopHeader/TopHeader'
import TableHeader from '@/components/molecules/TableHeader/TableHeader'
import React from 'react'
import { Container } from 'react-bootstrap';
import classes from "./UserRegisterationoDetailTemplate.module.css"
import Wrapper from '@/components/atoms/Wrapper/Wrapper';
import ResponsiveTable from '@/components/organisms/ResponsiveTable/ResponsiveTable';

const UserRegisterationoDetailTemplate = ({slug}) => {
  return (
    <>
        <Container>
            <TopHeader title="User Registration" backButton={false} />
            <ShadowWrapper className={classes?.shadowWrapper}>
                <Wrapper>
                    das
                </Wrapper>
            </ShadowWrapper>
        </Container>
    </>
  )
}

export default UserRegisterationoDetailTemplate
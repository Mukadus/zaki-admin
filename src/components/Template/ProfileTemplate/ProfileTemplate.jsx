"use client";
import React, { useState } from 'react';
import classes from "./ProfileTemplate.module.css"
import { Container } from 'react-bootstrap';
import TopHeader from '@/components/atoms/TopHeader/TopHeader';
import ContactForm from '@/components/molecules/ContactForm';
import { useFormik } from 'formik';
import UpdatePasswordModal from '@/components/molecules/Modal/UpdatePasswordModal';
import { profileFormValues } from '@/formik/initialValues';
import { ProfileFormSchema } from '@/formik/schema';
import Wrapper from '@/components/atoms/Wrapper/Wrapper';

const ProfileTemplate = () => {
    const [loading, setLoading] = useState("");

    const [showModal, setShowModal] = useState(false);
    const profileFormik = useFormik({
      initialValues: profileFormValues,
      validationSchema: ProfileFormSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <div className={classes.profileTemplate}>
        <Container>
            <TopHeader title="Profile" backButton={false} />
            <Wrapper>
            <ContactForm form={profileFormik} setShowModal={setShowModal} />
            </Wrapper>
        </Container>
    </div>
  )
}

export default ProfileTemplate
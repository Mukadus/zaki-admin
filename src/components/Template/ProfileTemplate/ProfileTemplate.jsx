"use client";
import React, { useState, useEffect } from 'react';
import classes from "./ProfileTemplate.module.css"
import { Container } from 'react-bootstrap';
import TopHeader from '@/components/atoms/TopHeader/TopHeader';
import ContactForm from '@/components/molecules/ContactForm';
import { useFormik } from 'formik';
import UpdatePasswordModal from '@/components/molecules/Modal/UpdatePasswordModal';
import { profileFormValues } from '@/formik/initialValues';
import { ProfileFormSchema } from '@/formik/schema';
import Wrapper from '@/components/atoms/Wrapper/Wrapper';
import { useSelector } from 'react-redux';
import { saveLoginUserData } from '@/store/auth/authSlice';
import RenderToast from '@/components/atoms/RenderToast';
import useAxios from '@/interceptor/axios-functions';
import { useDispatch } from 'react-redux';

const ProfileTemplate = () => {

  const { Post } = useAxios();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer);

  const [loading, setLoading] = useState("");
  const [showModal, setShowModal] = useState(false);


  const profileFormik = useFormik({
    initialValues: profileFormValues(user),
    validationSchema: ProfileFormSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleSubmit = async () => {
    setLoading("loading");
    const payLoad = {
      ...profileFormik.values,
    };
    const { response } = await Post({
      route: "profile/update/me",
      data: payLoad,
    });

    if (response) {
      dispatch(saveLoginUserData(response?.data));
      RenderToast({ type: "success", message: "Profile updated successfully" });
    }
    setLoading("");
  };
  return (
    <div className={classes.profileTemplate}>
      <Container>
        <TopHeader title="Profile" backButton={false} />
        <Wrapper>
          <ContactForm form={profileFormik} setShowModal={setShowModal} user={user} handleSubmit={handleSubmit} loading={loading} />
        </Wrapper>
      </Container>
    </div>
  )
}

export default ProfileTemplate
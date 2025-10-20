"use client";

import { verifyOtpValues } from "@/formik/initialValues";
import { VerifyOtpSchema } from "@/formik/schema";
import { useFormik } from "formik";
import React, { useState } from "react";
import Input from "@/components/atoms/Input/Input";
import Button from "@/components/atoms/Button";
import classes from "../LoginTemplate/LoginTemplate.module.css";
import Link from "next/link";
import useAxios from "@/interceptor/axios-functions";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Cookies from "js-cookie";
import RenderToast from "@/components/atoms/RenderToast";

export default function VerifyOtpTemplate() {
  const [loading, setLoading] = useState("");
  const { Post } = useAxios();

  const form = useFormik({
    initialValues: verifyOtpValues,
    validationSchema: VerifyOtpSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = async () => {
    setLoading("loading");
    const obj = {
      email: userEmail || Cookies.get("email"),
      code: otp,
    };
    const { response } = await Post({route: "auth/verify/otp", data: obj});
    if(response){
      setCodeCookie(obj.code);
      router.push("/reset-password");
      RenderToast({ type: "success", message: "OTP verified successfully" });
    }
    setLoading("");
  };

  return (
    <div className={classes.wrapper}>
      <Container>
        <Row className={classes.rowCenter}>
          <Col xs={12} md={8} lg={5} xl={4}>
            <div className={classes.card}>
              <div className={classes.header}>
                <div className={classes.logo}>
                  <Image src="/app-images/logo.png" alt="Logo" fill priority />
                </div>
                <div className={classes.titleContainer}>
                  <h1 className={classes.title}>Verify code</h1>
                  <p className={classes.subtitle}>
                    Enter the code we sent to your email
                  </p>
                </div>
              </div>

              <div className={classes.form}>
                <Input
                  label="One-time code"
                  type="text"
                  placeholder="Enter 6-digit code"
                  value={form.values.otp}
                  setValue={(val) => {
                    // Only allow digits and limit to 6 characters
                    const numericValue = val.replace(/\D/g, "").slice(0, 6);
                    form.setFieldValue("otp", numericValue);
                    // Trigger validation on change
                    form.validateField("otp");
                  }}
                  onBlur={() => {
                    form.handleBlur("otp");
                    form.validateField("otp");
                  }}
                  error={form.touched.otp && form.errors.otp}
                  onEnterClick={() => {
                    form.handleSubmit();
                  }}
                  maxLength={6}
                />

                <Button
                  type="submit"
                  variant="primary"
                  className={classes.submitBtn}
                  buttonStyles={{ height: 44 }}
                  label="Verify"
                  onClick={() => {
                    form.handleSubmit();
                  }}
                  disabled={loading === "submit-form"}
                  loading={loading === "submit-form"}
                />

                <div className={classes.footerNote}>
                  <span>Didn’t receive it?</span>
                  <Link href="/forgot-password" className={classes.signUpLink}>
                    Resend code
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

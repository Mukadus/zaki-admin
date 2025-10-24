"use client";

import { verifyOtpValues } from "@/formik/initialValues";
import { VerifyOtpSchema } from "@/formik/schema";
import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import Input from "@/components/atoms/Input/Input";
import Button from "@/components/atoms/Button";
import classes from "../LoginTemplate/LoginTemplate.module.css";
import Link from "next/link";
import useAxios from "@/interceptor/axios-functions";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Cookies from "js-cookie";
import RenderToast from "@/components/atoms/RenderToast";
import { getEmailCookie, setCodeCookie } from "@/resources/utils/cookie";
import { useRouter } from "next/navigation";

export default function VerifyOtpTemplate() {

  const router = useRouter();

  const [loading, setLoading] = useState("");
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const { Post } = useAxios();

  const form = useFormik({
    initialValues: verifyOtpValues,
    validationSchema: VerifyOtpSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = async (values) => {
    setLoading("submit-form");
    const email = getEmailCookie() || Cookies.get("email");
    const obj = {
      email: email,
      code: values?.code,
      fromForgotPassword: true,
    };
    const { response } = await Post({ route: "auth/verify/otp", data: obj });
    if (response) {
      setCodeCookie(obj.code);
      router.push("/reset-password");
      RenderToast({ type: "success", message: "OTP verified successfully" });
    }
    setLoading("");
  };

  const handleResendOTP = async () => {
    if (loading) return;

    const email = getEmailCookie() || Cookies.get("email");
    if (!email) {
      RenderToast({ type: "error", message: "Email not found. Please try the forgot password process again." });
      return;
    }

    const obj = {
      email: email,
    };
    setLoading("otp");
    const { response } = await Post({ route: "auth/resend/otp", data: obj });
    setLoading("");
    if (response) {
      form.setFieldValue("code", "");
      RenderToast({ type: "info", message: "OTP resent successfully" });
      setTimer(60);
      setCanResend(false);
    }
  };

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [timer]);

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
                  value={form.values.code}
                  setValue={(val) => {
                    // Only allow digits and limit to 6 characters
                    const numericValue = val.replace(/\D/g, "").slice(0, 6);
                    form.setFieldValue("code", numericValue);
                    // Trigger validation on change
                    form.validateField("code");
                  }}
                  onBlur={() => {
                    form.handleBlur("code");
                    form.validateField("code");
                  }}
                  error={form.touched.code && form.errors.code}
                  onEnterClick={() => {
                    form.handleSubmit();
                  }}
                  maxLength={6}
                  disabled={loading === "submit-form"}
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
                  {timer > 0 ? (
                    <span>Resend code in {timer} seconds</span>
                  ) : (
                    <span
                      onClick={canResend ? handleResendOTP : undefined}
                      style={{ cursor: canResend ? 'pointer' : 'default', color: canResend ? '#007bff' : '#6c757d' }}
                    >
                      {loading === "otp" ? "Sending..." : "Didn't receive it? Resend code"}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

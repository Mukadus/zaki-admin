"use client";

import { resetPasswordValues } from "@/formik/initialValues";
import { ResetPasswordSchema } from "@/formik/schema";
import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import Input from "@/components/atoms/Input/Input";
import Button from "@/components/atoms/Button";
import classes from "../LoginTemplate/LoginTemplate.module.css";
import Link from "next/link";
import { FiLock } from "react-icons/fi";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import useAxios from "@/interceptor/axios-functions";
import { useRouter } from "next/navigation";
import RenderToast from "@/components/atoms/RenderToast";
import Cookies from "js-cookie";
import { handleDecrypt } from "@/interceptor/encryption";
import { getEmailCookie, getCodeCookie, removeEmailCookie, removeCodeCookie } from "@/resources/utils/cookie";


export default function ResetPasswordTemplate() {
  const router = useRouter();
  const { Post } = useAxios();
  const [loading, setLoading] = useState("");

  // Get email and code from cookies
  const emailFromCookie = getEmailCookie();
  const codeFromCookie = getCodeCookie();

  const form = useFormik({
    initialValues: resetPasswordValues,
    validationSchema: ResetPasswordSchema,
    onSubmit: (values) => {
      handleRecoverPassword(values);
    },
  });

  const handleRecoverPassword = async (values) => {
    // Combine form values with cookie data
    setLoading("loading");
    const payload = {
      email: emailFromCookie,
      code: codeFromCookie,
      password: values?.password,
      confirmPassword: values?.confirmPassword,
    };
    const { response } = await Post({
      route: "auth/reset/password",
      data: payload,
    });
    if (response?.status === "success") {
      // Clear cookies after successful password reset
      RenderToast({ type: "success", message: "Password Reset Successfully" });
      router.push("/login");
      removeEmailCookie();
      removeCodeCookie();
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
                  <h1 className={classes.title}>Set new password</h1>
                  <p className={classes.subtitle}>
                    Choose a strong password you remember
                  </p>
                </div>
              </div>

              <div className={classes.form}>
                <Input
                  leftIcon={<FiLock size={18} />}
                  label="New password"
                  type="password"
                  placeholder="Enter new password"
                  value={form.values.password}
                  setValue={(val) => form.setFieldValue("password", val)}
                  onBlur={form.handleBlur}
                  error={form.touched.password && form.errors.password}
                  onEnterClick={() => {
                    form.handleSubmit();
                  }}
                  disabled={loading === "loading"}
                />

                <Input
                  leftIcon={<FiLock size={18} />}
                  label="Confirm password"
                  type="password"
                  placeholder="Re-enter new password"
                  value={form.values.confirmPassword}
                  setValue={(val) => form.setFieldValue("confirmPassword", val)}
                  onBlur={form.handleBlur}
                  error={
                    form.touched.confirmPassword && form.errors.confirmPassword
                  }
                  onEnterClick={() => {
                    form.handleSubmit();
                  }}
                  disabled={loading === "loading"}
                />

                <Button
                  type="submit"
                  variant="primary"
                  className={classes.submitBtn}
                  label={loading === "loading" ? "Loading..." : "Update password"}
                  onClick={() => {
                    form.handleSubmit();
                  }}
                  disabled={loading === "loading"}
                  loading={loading === "loading"}
                />

                <div className={classes.footerNote}>
                  <span>Changed your mind?</span>
                  <Link href="/login" className={classes.signUpLink}>
                    Go back to login
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

"use client";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import ModalSkeleton from "../ModalSkeleton/ModalSkeleton";
import Input from "@/components/atoms/Input/Input";
import Button from "@/components/atoms/Button";
import StatusToggle from "@/components/atoms/StatusToggle/StatusToggle";
import { faqValues } from "@/formik/initialValues";
import { faqSchema } from "@/formik/schema";
import classes from "./AddorEditFaqModal.module.css";
import { TextArea } from "@/components/atoms/TextArea/TextArea";
import useAxios from "@/interceptor/axios-functions";
import RenderToast from "@/components/atoms/RenderToast";
import { Container, Row, Col } from "react-bootstrap";

const AddorEditFaqModal = ({ show, setShow, selectedData, getData }) => {

  const { Post, Patch } = useAxios();
  const [loading, setLoading] = useState("");
  // Formik hook
  const formik = useFormik({
    initialValues: selectedData ? selectedData : faqValues,
    validationSchema: faqSchema,
    onSubmit: async (values) => {
      handleSubmit(values);
    }
  });

  const handleInputChange = (field, value) => {
    formik.setFieldValue(field, value);
  };

  const handleStatusChange = (isActive) => {
    formik.setFieldValue("status", isActive ? "active" : "inactive");
  };



  const handleCancel = () => {
    formik.resetForm();
    setShow(false);
  };

  const handleSubmit = async (values) => {
    setLoading("loading");
    const payLoad = {
      ...values,
      status: values.status,
    }
    console.log("payLoad", payLoad);

    const slug = selectedData?.slug;
    const { response } = await (slug ? Patch : Post)({
      route: slug ? `admin/faq/update/${slug}` : "admin/faq/create",
      data: payLoad,
    });

    if (response) {
      RenderToast({ type: "success", message: slug ? "FAQ updated successfully" : "FAQ added successfully" });
      setShow(false);
      getData({ page: 1 });
    }
    setLoading("");
  };

  return (
    <ModalSkeleton
      show={show}
      setShow={setShow}
      variant="primary"
      heading={selectedData?.slug ? "Edit FAQ" : "Add FAQ"}
      showCloseIcon={true}
      footerData={
        <div className={classes.footerContainer}>
          <Button
            variant="secondary"
            label="Cancel"
            onClick={handleCancel}
            className={classes.cancelButton}
            disabled={loading === "loading"}
            loading={loading === "loading"}
          />
          <Button
            variant="primary"
            label="Submit"
            onClick={() => formik.submitForm()}
            className={classes.submitButton}
            disabled={loading === "loading"}
            loading={loading === "loading"}
          />
        </div>
      }
    >
      <Container fluid>
        <Row className={classes.rowGap}>
          <Col md={12}>
            <Input
              label="Question"
              placeholder="Question"
              value={formik.values.question}
              setValue={(value) => handleInputChange("question", value)}
              error={formik.touched.question && formik.errors.question}
            />
          </Col>
          <Col md={12}>
            <TextArea
              label="Answer"
              placeholder="Answer"
              value={formik.values.answer}
              setValue={(value) => handleInputChange("answer", value)}
              error={formik.touched.answer && formik.errors.answer}
            />
          </Col>
          <Col md={12}>
            <StatusToggle
              isActive={formik.values.status === "active"}
              onChange={handleStatusChange}
              label="Status"
              size="small"
            />
          </Col>
        </Row>
      </Container>
    </ModalSkeleton>
  );
};

export default AddorEditFaqModal;

"use client";
import React from "react";
import { useFormik } from "formik";
import ModalSkeleton from "../ModalSkeleton/ModalSkeleton";
import Input from "@/components/atoms/Input/Input";
import Button from "@/components/atoms/Button";
import { reasonForRejectionValues } from "@/formik/initialValues";
import { ReasonForRejectionSchema } from "@/formik/schema";
import classes from "./ReasonForRejectionModal.module.css";

const ReasonForRejectionModal = ({ show, setShow }) => {
  // Formik hook
  const formik = useFormik({
    initialValues: reasonForRejectionValues,
    validationSchema: ReasonForRejectionSchema,
    onSubmit: async (values) => {
      onSubmit(values);
    }
  });

  const onSubmit = (values) => {
    console.log("Reason for rejection:", values);
  };

  const handleCancel = () => {
    formik.resetForm();
    setShow(false);
  };

  const handleSubmit = async () => {
    await formik.submitForm();
  };

  return (
    <ModalSkeleton
      show={show}
      setShow={setShow}
      header="Reason For Rejection"
      slideFromRight={true}
      modalClass={classes.modal}
    >
      <div className={classes.modalContent}>
        <div className={classes.formContainer}>
          <div className={classes.formHeader}>
            <Input 
              label="Reason" 
              placeholder="Write a reason"
              value={formik.values.reason}
              setValue={(value) => formik.setFieldValue("reason", value)}
              error={formik.touched.reason && formik.errors.reason}
            />
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <Button
            variant="secondary"
            label="Cancel"
            onClick={handleCancel}
            className={classes.cancelButton}
          />
          <Button
            variant="primary"
            label="Submit"
            onClick={handleSubmit}
            loading={formik.isSubmitting}
            className={classes.submitButton}
          />
        </div>
      </div>
    </ModalSkeleton>
  );
};

export default ReasonForRejectionModal;

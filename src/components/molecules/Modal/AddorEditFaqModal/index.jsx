"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import ModalSkeleton from "../ModalSkeleton/ModalSkeleton";
import Input from "@/components/atoms/Input/Input";
import Button from "@/components/atoms/Button";
import StatusToggle from "@/components/atoms/StatusToggle/StatusToggle";
import { faqValues } from "@/formik/initialValues";
import { faqSchema } from "@/formik/schema";
import classes from "./AddorEditFaqModal.module.css";
import { TextArea } from "@/components/atoms/TextArea/TextArea";

const AddorEditFaqModal = ({ show, setShow, selectedData }) => {

    console.log("selectedData", selectedData);
  // Formik hook
  const formik = useFormik({
    initialValues: selectedData ? selectedData : faqValues,
    validationSchema: faqSchema,
    onSubmit: async (values) => {
      onSubmit(values);
    }
  });

  const handleInputChange = (field, value) => {
    formik.setFieldValue(field, value);
  };

  const handleStatusChange = (isActive) => {
    formik.setFieldValue("status", isActive ? "Active" : "In-Active");
  };

  const handleSubmit = async () => {
    await formik.submitForm();
  };

  const handleCancel = () => {
    formik.resetForm();
    setShow(false);
  };

  const onSubmit = (values) => {
    console.log("Adding category:", values);
  };

  return (
    <ModalSkeleton
      show={show}
      setShow={setShow}
      header={selectedData?.slug ? "Edit FAQ" : "Add FAQ"}
      slideFromRight={true}
      modalClass={classes.modal}
    >
       <div className={classes.modalContent}>
         <div className={classes.formContainer}>
             <div className={classes.formHeader}>
                 <Input 
                   label="Question" 
                   placeholder="Question"
                   value={formik.values.question}
                   setValue={(value) => handleInputChange("question", value)}
                   error={formik.touched.question && formik.errors.question}
                 />
             </div>
             <div className={classes.formHeader}>
                 <TextArea 
                   label="Answer" 
                   placeholder="Answer"
                   value={formik.values.answer}
                   setValue={(value) => handleInputChange("answer", value)}
                   error={formik.touched.answer && formik.errors.answer}
                 />
             </div>
             <div className={classes.statusSection}>
                 <StatusToggle
                   isActive={formik.values.status === "Active"}
                   onChange={handleStatusChange}
                   label="Status"
                   size="small"
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

export default AddorEditFaqModal;

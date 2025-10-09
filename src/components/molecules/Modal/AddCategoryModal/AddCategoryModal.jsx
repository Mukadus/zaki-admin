"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import ModalSkeleton from "../ModalSkeleton/ModalSkeleton";
import Input from "@/components/atoms/Input/Input";
import Button from "@/components/atoms/Button";
import StatusToggle from "@/components/atoms/StatusToggle/StatusToggle";
import { addCategoryValues } from "@/formik/initialValues";
import { AddCategorySchema } from "@/formik/schema";
import classes from "./AddCategoryModal.module.css";

const AddCategoryModal = ({ show, setShow }) => {
  // Formik hook
  const formik = useFormik({
    initialValues: addCategoryValues,
    validationSchema: AddCategorySchema,
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
      header="Add Category"
      slideFromRight={true}
      modalClass={classes.modal}
    >
       <div className={classes.modalContent}>
         <div className={classes.formContainer}>
             <div className={classes.formHeader}>
                 <Input 
                   label="Category Name" 
                   placeholder="Psychological Therapies"
                   value={formik.values.categoryName}
                   setValue={(value) => handleInputChange("categoryName", value)}
                   error={formik.touched.categoryName && formik.errors.categoryName}
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

export default AddCategoryModal;

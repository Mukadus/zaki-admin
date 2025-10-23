"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import ModalSkeleton from "../ModalSkeleton/ModalSkeleton";
import Input from "@/components/atoms/Input/Input";
import Button from "@/components/atoms/Button";
import StatusToggle from "@/components/atoms/StatusToggle/StatusToggle";
import { blogValues } from "@/formik/initialValues";
import { blogSchema } from "@/formik/schema";
import classes from "./AddorEditBlogModal.module.css";
import { TextArea } from "@/components/atoms/TextArea/TextArea";
import UploadImageBoxNew from "@/components/molecules/UploadImageBoxNew";
import DropDown from "@/components/molecules/DropDown/DropDown";

const AddorEditBlogModal = ({ show, setShow, selectedData }) => {

    console.log("selectedData", selectedData);
    // Formik hook
    const formik = useFormik({
        initialValues: selectedData ? selectedData : blogValues,
        validationSchema: blogSchema,
        onSubmit: async (values) => {
            onSubmit(values);
        }
    });
    console.log("formik.errors", formik.values);


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
        console.log("Adding blog:", values);
    };

    const categories = [
        {
            label: "Psychodynamic Therapy",
            value: "psychodynamic-therapy",
        },
        {
            label: "Cognitive Behavioral Therapy",
            value: "cognitive-behavioral-therapy",
        },
    ];

    return (
        <ModalSkeleton
            show={show}
            setShow={setShow}
            header={selectedData?.slug ? "Edit Blog" : "Add Blog"}
            slideFromRight={true}
            modalClass={classes.modal}
        >
            <div className={classes.modalContent}>
                <div className={classes.formContainer}>
                    <div className={classes.formHeader}>

                        <UploadImageBoxNew
                            state={formik.values.photo}
                            setValue={(val) => formik.setFieldValue("photo", val)}
                            error={formik.touched.photo && formik.errors.photo}
                            label="Blog Image"
                            edit={false}
                        />
                    </div>
                    <div className={classes.formHeader}>
                        <Input
                            label="Blog Title"
                            placeholder="Question"
                            value={formik.values.blogTitle}
                            setValue={(value) => handleInputChange("blogTitle", value)}
                            error={formik.touched.blogTitle && formik.errors.blogTitle}
                        />
                    </div>
                    <div className={classes.formHeader}>
                        <TextArea
                            label="Blog Content"
                            placeholder="Blog Content"
                            value={formik.values.blogContent}
                            setValue={(value) => handleInputChange("blogContent", value)}
                            error={formik.touched.blogContent && formik.errors.blogContent}
                        />
                    </div>
                    <div className={classes.formHeader}>
                        <DropDown
                            label="Category"
                            options={categories}
                            value={
                                categories.find((option) => option.value === formik?.category?.value)
                            }
                            onChange={(option) => {
                                formik.setFieldValue("category", option);
                            }}
                            error={formik.touched.category && formik.errors.category}
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

export default AddorEditBlogModal;

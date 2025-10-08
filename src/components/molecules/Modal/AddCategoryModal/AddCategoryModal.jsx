"use client";
import React, { useState } from "react";
import ModalSkeleton from "../ModalSkeleton/ModalSkeleton";
import Input from "@/components/atoms/Input/Input";
import Button from "@/components/atoms/Button";
import StatusToggle from "@/components/atoms/StatusToggle/StatusToggle";
import classes from "./AddCategoryModal.module.css";

const AddCategoryModal = ({ show, setShow, onSubmit }) => {
  const [formData, setFormData] = useState({
    categoryName: "",
    status: "Active"
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleStatusChange = (isActive) => {
    setFormData(prev => ({
      ...prev,
      status: isActive ? "Active" : "In-Active"
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await onSubmit(formData);
      setFormData({
        categoryName: "",
        status: "Active"
      });
      setShow(false);
    } catch (error) {
      console.error("Error submitting category:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      categoryName: "",
      status: "Active"
    });
    setShow(false);
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
                  value={formData.categoryName}
                  onChange={(e) => handleInputChange("categoryName", e.target.value)}
                />
            </div>
            <div className={classes.statusSection}>
                <StatusToggle
                  isActive={formData.status === "Active"}
                  onChange={handleStatusChange}
                  label="Status"
                  size="medium"
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
            loading={loading}
            className={classes.submitButton}
          />
        </div>
      </div>
    </ModalSkeleton>
  );
};

export default AddCategoryModal;

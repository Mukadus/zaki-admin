import classes from "./ContactForm.module.css";
import React from "react";
import clsx from "clsx";
import Input from "@/components/atoms/Input/Input";
import Button from "@/components/atoms/Button";
import { HiArrowRightCircle } from "react-icons/hi2";
import UploadImageBoxNew from "@/components/molecules/UploadImageBoxNew";

export default function ContactForm({ form = {}, handleSubmit, loading }) {
  return (
    <div className={classes.contactForm}>
      <UploadImageBoxNew
        state={form?.values?.photo}
        setValue={(val) => form.setFieldValue("photo", val)}
        error={form.touched.photo && form.errors.photo}
        label="Profile Picture"
      />
      <Input
        label="Name"
        placeholder="Enter your name"
        value={form?.values?.fullName}
        setValue={(val) => form.setFieldValue("fullName", val)}
        error={form?.touched?.fullName && form?.errors?.fullName}
        className={classes.inputContainer}
        containerClass={classes.input}
      />
      <Input
        label="Email address*"
        placeholder="Enter your email"
        value={form?.values?.email}
        setValue={(val) => form.setFieldValue("email", val)}
        error={form?.touched?.email && form?.errors?.email}
        className={classes.inputContainer}
        containerClass={classes.input}
        disabled={true}
      />
      {/* <Input
        label="Message"
        placeholder="Enter your message"
        value={form.values.message}
        setValue={(val) => form.setFieldValue("message", val)}
        error={form.touched.message && form.errors.message}
        className={classes.inputContainer}
        containerClass={classes.input}
      /> */}
      <div className={classes.buttonContainer}>
        <Button
          label="Save Profile"
          variant="primary"
          onClick={handleSubmit}
          className={classes.button}
          loading={loading==="loading"}
          disabled={loading==="loading"}
        />

        <Button
          label="Change Password"
          variant="secondary"
          onClick={() => {
            setShowModal(true);
          }}
          className={classes.button}
          loading={loading==="loading"}
          disabled={loading==="loading"}
        />
      </div>
    </div>
  );
}

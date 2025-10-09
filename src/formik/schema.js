import { emailRegex } from "@/resources/utils/regex";
import * as Yup from "yup";

export const LoginSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .test(
      "no-special-chars",
      "Email contains invalid characters",
      (value) => !value || emailRegex.test(value)
    ),
  password: Yup.string().required("Password is required"),
});


export const ForgotPasswordSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .test(
      "no-special-chars",
      "Email contains invalid characters",
      (value) => !value || emailRegex.test(value)
    ),
});

export const VerifyOtpSchema = Yup.object({
  code: Yup.string()
    .required("OTP is required")
    .matches(/^\d{4,6}$/, "Enter a valid 4-6 digit code"),
});


export const ResetPasswordSchema = Yup.object({
  password: Yup.string()
    .min(6, "At least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm your password"),
});


export const AddCategorySchema = Yup.object({
  categoryName: Yup.string()
    .required("Category name is required")
    .min(2, "Category name must be at least 2 characters")
    .max(50, "Category name must be less than 50 characters"),
  status: Yup.string()
    .oneOf(["Active", "In-Active"], "Status must be either Active or In-Active")
    .required("Status is required"),
});


export const ProfileFormSchema = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .test(
      "no-special-chars",
      "Email contains invalid characters",
      (value) => !value || emailRegex.test(value)
    ),
  phoneNumber: Yup.string().required("Phone number is required"),
  callingCode: Yup.string(),
  location: Yup.string().required("Location is required"),
  language: Yup.object().required("Language is required"),
  photo: Yup.mixed().required("Photo is required"),
});

export const ReasonForRejectionSchema = Yup.object({
  reason: Yup.string()
    .required("Reason is required")
    .min(5, "Reason must be at least 5 characters")
    .max(500, "Reason must be less than 500 characters"),
});


export const ChangePasswordFormSchema = Yup.object({
  currentPassword: Yup.string().required("Current password is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string().required("Confirm password is required"),
});

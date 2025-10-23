import { statusOptions } from "@/developmentContent/enums/enums";
export const loginFormValues = {
  email: "",
  password: "",
};

export const changePasswordFormValues = {
  currentPassword: "",
  password: "",
  confirmPassword: "",
};

export const profileFormValues = {
  fullName: "",
  email: "",
  phoneNumber: "",
  callingCode: "",
  location: "",
  language: "",
  photo: null,
};



export const forgotPasswordValues = {
  email: "",
};

export const verifyOtpValues = {
  otp: "",
};

export const resetPasswordValues = {
  password: "",
  confirmPassword: "",
};


export const updatePasswordValues = {
  currentPassword: "",
  password: "",
  confirmPassword: "",
};

export const addCategoryValues = {
  categoryName: "",
  status: "Active",
};

export const reasonForRejectionValues = {
  reason: "",
};


export const faqValues = {
  question: "",
  answer: "",
  status: statusOptions[0]?.value || "",
};

export const blogValues = {
  blogTitle: "",
  blogContent: "",
  photo: null,
  category: null,
  status: statusOptions[0]?.value || "",
};
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

export const profileFormValues = (user) => {
  return {
  fullName: user?.fullName || "",
  email: user?.email || "",
  phoneNumber: user?.phoneNumber || "",
  callingCode: user?.callingCode || "",
  location: user?.location || "",
  language: user?.language || "",
  photo: user?.photo || null,
};
}



export const forgotPasswordValues = {
  email: "",
};

export const verifyOtpValues = {
  code: "",
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
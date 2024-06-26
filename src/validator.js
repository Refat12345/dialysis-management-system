/* eslint-disable no-unused-vars */

const validateNationaltyNumber = (number) => {
  if (!number.trim()) {
    return "الرقم الوطني مطلوب";
  } else if (number.length < 8) {
    return "يجب أن يكون الرقم الوطني على الأقل 8 أرقام";
  }
  return null;
};

const validateUsername = (username) => {
  if (!username.trim()) {
    return "اسم المستخدم مطلوب";
  }
  return null;
};

const validateEmail = (email) => {
  if (!email.trim()) {
    return "البريد الإلكتروني مطلوب";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    return "البريد الإلكتروني غير صالح";
  }
  return null;
};

const validatePassword = (password) => {
  if (!password.trim()) {
    return "كلمة المرور مطلوبة";
  } else if (password.length < 8) {
    return "يجب أن تكون كلمة المرور على الأقل 8 أحرف";
  } else if (!/[A-Z]/.test(password)) {
    return "يجب أن تحتوي كلمة المرور على حرف كبير واحد على الأقل";
  } else if (!/[a-z]/.test(password)) {
    return "يجب أن تحتوي كلمة المرور على حرف صغير واحد على الأقل";
  } else if (!/[0-9]/.test(password)) {
    return "يجب أن تحتوي كلمة المرور على رقم واحد على الأقل";
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return "يجب أن تحتوي كلمة المرور على رمز خاص واحد على الأقل";
  }
  return null;
};

const validateConfirmPassword = (password, confirmPassword) => {
  if (confirmPassword !== password) {
    return "كلمة المرور غير متطابقة";
  }
  return null;
};

export const validateLoginForm = (formData) => {
  const validationErrors = {};

  const numberError = validateNationaltyNumber(formData.nationaltyNumber);
  if (numberError) {
    validationErrors.nationaltyNumber = numberError;
  }

  const passwordError = validatePassword(formData.password);
  if (passwordError) {
    validationErrors.password = passwordError;
  }

  return validationErrors;
};

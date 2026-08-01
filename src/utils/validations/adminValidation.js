export function validateLogin(data) {
  const errors = {};

  const username = data.username.trim();
  const password = data.password;

  if (!username) {
    errors.username = "Username is required.";
  }

  if (!password) {
    errors.password = "Password is required.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateForgotPassword(data) {
  const errors = {};

  const username = data.username.trim();

  if (!username) {
    errors.username = "Username is required.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateOtp(data) {
  const errors = {};

  const otp = data.otp.trim();

  if (!otp) {
    errors.otp = "OTP is required.";
  } else if (!/^\d{6}$/.test(otp)) {
    errors.otp = "OTP must be exactly 6 digits.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateResetPassword(data) {
  const errors = {};

  const password = data.password;
  const confirmPassword = data.confirmPassword;

  if (!password) {
    errors.password = "New password is required.";
  } else if (password.length < 8) {
    errors.password = "Password must be at least 8 characters.";
  }

  if (!confirmPassword) {
    errors.confirmPassword = "Confirm password is required.";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "Passwords do not match.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
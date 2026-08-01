const EMAIL_REGEX =
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const PHONE_REGEX = /^\d{10}$/;

const NAME_REGEX =
  /^[A-Za-z\s]+$/;

function validateFullName(fullName) {
  if (typeof fullName !== "string") {
    return "Full name is required.";
  }

  const value = fullName.trim();

  if (!value) {
    return "Full name is required.";
  }

  if (value.length < 3) {
    return "Full name must be at least 3 characters.";
  }

  if (value.length > 100) {
    return "Full name cannot exceed 100 characters.";
  }

  if (!NAME_REGEX.test(value)) {
    return "Full name can only contain letters and spaces.";
  }

  return "";
}

function validateOrganization(organization) {
  if (organization == null) {
    return "";
  }

  if (typeof organization !== "string") {
    return "Organization is invalid.";
  }

  if (organization.trim().length > 100) {
    return "Organization cannot exceed 100 characters.";
  }

  return "";
}

function validateEmail(email) {
  if (typeof email !== "string") {
    return "Email address is required.";
  }

  const value = email.trim();

  if (!value) {
    return "Email address is required.";
  }

  if (!EMAIL_REGEX.test(value)) {
    return "Enter a valid email address.";
  }

  return "";
}

function validatePhone(phone) {
  if (typeof phone !== "string") {
    return "Phone number is required.";
  }

  const value = phone.trim();

  if (!value) {
    return "Phone number is required.";
  }

  if (!PHONE_REGEX.test(value)) {
    return "Phone number must contain exactly 10 digits.";
  }

  return "";
}

function validateService(service) {
  if (typeof service !== "string") {
    return "Please select a service.";
  }

  if (!service.trim()) {
    return "Please select a service.";
  }

  return "";
}

function validateMessage(message) {
  if (typeof message !== "string") {
    return "Message is required.";
  }

  const value = message.trim();

  if (!value) {
    return "Message is required.";
  }

  if (value.length < 10) {
    return "Message must be at least 10 characters.";
  }

  if (value.length > 1000) {
    return "Message cannot exceed 1000 characters.";
  }

  return "";
}

export function validateContact(data) {
  const errors = {};

  const fullNameError = validateFullName(data.fullName);
    if (fullNameError) errors.fullName = fullNameError;

    const organizationError = validateOrganization(data.organization);
    if (organizationError) errors.organization = organizationError;

    const emailError = validateEmail(data.email);
    if (emailError) errors.email = emailError;

    const phoneError = validatePhone(data.phone);
    if (phoneError) errors.phone = phoneError;

    const serviceError = validateService(data.service);
    if (serviceError) errors.service = serviceError;

    const messageError = validateMessage(data.message);
    if (messageError) errors.message = messageError;

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

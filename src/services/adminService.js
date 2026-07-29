const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function loginAdmin(credentials) {
  try {
    const response = await fetch(`${API_URL}/admin/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    throw error;
  }
}

export async function forgotPassword(username) {
  try {
    const response = await fetch(`${API_URL}/admin/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    throw error;
  }
}

export async function verifyOtp(payload) {
  try {
    const response = await fetch(`${API_URL}/admin/verify-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    throw error;
  }
}


export async function resetPassword(newPassword) {
  try {
    const resetToken = sessionStorage.getItem("reset_token");

    if (!resetToken) {
      throw new Error("Reset session expired. Please request a new OTP.");
    }

    const response = await fetch(`${API_URL}/admin/reset-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resetToken}`,
      },
      body: JSON.stringify({
        newPassword,
      }),
    });

    const data = await response.json();

   if (!response.ok) {
    const error = new Error(data.message);
    error.status = response.status;
    throw error;
  }

    return data;
  } catch (error) {
    throw error;
  }
}
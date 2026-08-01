export default function otpTemplate(username, otp) {
  return `
    <div style="font-family:Arial,sans-serif;padding:20px">
      <h2>Air Care Admin Password Reset</h2>

      <p>Hello <strong>${username}</strong>,</p>

      <p>Your OTP is:</p>

      <div
        style="
          font-size:32px;
          font-weight:bold;
          letter-spacing:6px;
          color:#0f766e;
          margin:20px 0;
        "
      >
        ${otp}
      </div>

      <p>This OTP is valid for <strong>5 minutes</strong>.</p>

      <p>If you didn't request this password reset, you can safely ignore this email.</p>

      <br/>

      <p>Regards,</p>
      <p><strong>Air Care Team</strong></p>
    </div>
  `;
}
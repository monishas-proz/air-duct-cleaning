export default function customerInquiryTemplate(data) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 650px; margin: auto; border: 1px solid #e5e5e5; border-radius: 8px; overflow: hidden;">
      
      <div style="background:#0F766E; color:white; padding:20px; text-align:center;">
        <h2 style="margin:0;">Adhi Robotic Services</h2>
        <p style="margin:8px 0 0;">Thank You for Contacting Us</p>
      </div>

      <div style="padding:30px; color:#333;">
        <p>Dear <strong>${data.fullName}</strong>,</p>

        <p>
          Thank you for contacting <strong>Adhi Robotic Services</strong>.
          We have successfully received your inquiry.
        </p>

        <p>
          Our team will review your request and get back to you as soon as possible.
        </p>

        <h3>Inquiry Summary</h3>

        <table style="width:100%; border-collapse:collapse;">
          <tr>
            <td><strong>Name</strong></td>
            <td>${data.fullName}</td>
          </tr>

          <tr>
            <td><strong>Organization</strong></td>
            <td>${data.organization || "-"}</td>
          </tr>

          <tr>
            <td><strong>Email</strong></td>
            <td>${data.email}</td>
          </tr>

          <tr>
            <td><strong>Phone</strong></td>
            <td>${data.phone}</td>
          </tr>

          <tr>
            <td><strong>Service</strong></td>
            <td>${data.service}</td>
          </tr>
        </table>

        <h3>Your Message</h3>

        <div style="background:#f5f5f5; padding:15px; border-radius:6px;">
          ${data.message}
        </div>

        <p style="margin-top:30px;">
          If your request is urgent, please contact us directly.
        </p>

        <p>
          Regards,<br/>
          <strong>Adhi Robotic Services</strong>
        </p>
      </div>

    </div>
  `;
}
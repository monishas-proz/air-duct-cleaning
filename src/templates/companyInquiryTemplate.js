export default function companyInquiryTemplate(data) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 650px; margin: auto; border:1px solid #e5e5e5;">

      <div style="background:#0F766E; color:#fff; padding:20px;">
        <h2 style="margin:0;">New Contact Inquiry</h2>
      </div>

      <div style="padding:25px;">

        <p><strong>Name:</strong> ${data.fullName}</p>

        <p><strong>Organization:</strong> ${data.organization || "-"}</p>

        <p><strong>Email:</strong> ${data.email}</p>

        <p><strong>Phone:</strong> ${data.phone}</p>

        <p><strong>Service:</strong> ${data.service}</p>

        <p><strong>Message:</strong></p>

        <div style="background:#f5f5f5;padding:15px;border-radius:6px;">
          ${data.message}
        </div>

      </div>

    </div>
  `;
}
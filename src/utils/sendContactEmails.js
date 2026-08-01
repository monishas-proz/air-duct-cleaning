import transporter from "@/config/mail";
import customerInquiryTemplate from "@/templates/customerInquiryTemplate";
import companyInquiryTemplate from "@/templates/companyInquiryTemplate";

export default async function sendContactEmails(data) {
  // Customer confirmation email
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: data.email,
    subject: "Thank You for Contacting Adhi Robotic Services",
    html: customerInquiryTemplate(data),
  });

  // Company notification email
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "New Contact Inquiry Received",
    html: companyInquiryTemplate(data),
  });
}
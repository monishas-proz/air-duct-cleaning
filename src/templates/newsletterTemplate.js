const newsletterTemplate = () => {
  return `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>Welcome to Air Care Management</title>
</head>

<body style="margin:0;padding:0;background:#f4f7f9;font-family:Arial,sans-serif;">

<table width="100%" cellspacing="0" cellpadding="0" style="padding:40px 0;">
<tr>
<td align="center">

<table width="600" cellspacing="0" cellpadding="0" style="background:#ffffff;border-radius:12px;overflow:hidden;">

<tr>
<td style="background:#0F766E;padding:32px;text-align:center;">
<h1 style="margin:0;color:#ffffff;">
Air Care Management
</h1>

<p style="margin-top:10px;color:#d1fae5;font-size:16px;">
Professional HVAC & Indoor Air Quality Specialists
</p>
</td>
</tr>

<tr>
<td style="padding:40px;">

<h2 style="margin-top:0;color:#1f2937;">
Welcome!
</h2>

<p style="color:#4b5563;line-height:1.8;">
Thank you for subscribing to the Air Care Management newsletter.
</p>

<p style="color:#4b5563;line-height:1.8;">
You'll now receive:
</p>

<ul style="color:#4b5563;line-height:2;">
<li>HVAC maintenance tips</li>
<li>Indoor air quality insights</li>
<li>Seasonal maintenance reminders</li>
<li>Exclusive service offers</li>
<li>Latest company updates</li>
</ul>

<p style="color:#4b5563;line-height:1.8;">
We're excited to help you create a cleaner, healthier, and more comfortable environment.
</p>

<table cellspacing="0" cellpadding="0" style="margin-top:30px;">
<tr>
<td style="background:#0F766E;border-radius:6px;">
<a
href="https://yourwebsite.com"
style="
display:inline-block;
padding:14px 24px;
color:#ffffff;
text-decoration:none;
font-weight:bold;
">
Visit Our Website
</a>
</td>
</tr>
</table>

</td>
</tr>

<tr>
<td style="background:#f3f4f6;padding:24px;text-align:center;font-size:13px;color:#6b7280;">

<p style="margin:0;">
© 2026 Air Care Management
</p>

<p style="margin-top:10px;">
Professional HVAC & Indoor Air Quality Specialists
</p>

</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`;
};

module.exports = { newsletterTemplate };
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false });
  }

  const { firstName, lastName, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  // HTML email template
  const htmlContent = `
  <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
    <div style="text-align: center; margin-bottom: 20px;">
      <img src="https://www.anspect-technologies.com/logo.png" alt="Anspect Technologies Logo" style="height: 60px;">
    </div>

    <h2 style="color: #0d47a1; text-align: center;">New Contact Form Message</h2>

    <p style="margin-bottom: 10px;"><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p style="margin-bottom: 10px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #0d47a1;">${email}</a></p>
    <p style="margin-bottom: 10px;"><strong>Phone:</strong> ${phone}</p>

    <hr style="border-top: 1px solid #ddd; margin: 20px 0;">

    <p style="margin-bottom: 10px;"><strong>Message:</strong></p>
    <div style="background: #f9f9f9; border-left: 4px solid #0d47a1; padding: 12px; margin-bottom: 20px;">
      ${message.replace(/\n/g, "<br>")}
    </div>

    <hr style="border-top: 1px solid #ddd; margin: 20px 0;">

    <p style="font-size: 12px; color: #555; text-align: center;">
      This message was submitted via the Anspect Technologies website contact form.
    </p>
  </div>
`;

    try {
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `New message from ${firstName} ${lastName}`,
      html: htmlContent,
    });

    return res.json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false });
  }
}
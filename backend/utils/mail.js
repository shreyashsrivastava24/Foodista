import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

  export const sendOtpMail = async (to, otp) => {
  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to,
    subject: "Password Reset OTP - Foodista",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e5e5e5; border-radius: 8px;">
        <h2 style="color: #ff4d2d; text-align: center;">Foodista</h2>

        <p>Dear User,</p>

        <p>
          We received a request to reset the password for your Foodista account.
          Please use the One-Time Password (OTP) below to proceed:
        </p>

        <div style="text-align: center; margin: 25px 0;">
          <span style="font-size: 28px; font-weight: bold; letter-spacing: 6px; color: #ff4d2d;">
            ${otp}
          </span>
        </div>

        <p>
          This OTP is valid for <strong>5 minutes</strong>. Please do not share this code with anyone.
        </p>

        <p>
          If you did not request a password reset, you can safely ignore this email.
        </p>

        <br>

        <p>Best Regards,</p>
        <p><strong>Foodista Team</strong></p>

        <hr>

        <p style="font-size: 12px; color: #777;">
          This is an automated email. Please do not reply to this message.
        </p>
      </div>
    `,
  })
}
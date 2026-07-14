import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, type } = req.body;

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({
        message:
          "Missing required fields: name, email, and message are required",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Invalid email format",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "siawedsupport@gmail.com",
        pass: process.env.APP_PASSWORD, // Gmail App Password
      },
    });

    const getPayload = () => {
      if (type === "donation") {
        return {
          subject: "Thank You for Your Donation",
          message: `
        <h2>Dear ${name},</h2>

        <p>Thank you for your generous donation to <strong>SIAWED</strong>.</p>

        <p>
          Your support helps us empower women through learning, networking,
          leadership and community initiatives.
        </p>

        <p>
          We truly appreciate your kindness and commitment to our mission.
          Together, let's <strong>Learn, Connect, Grow and Unleash Women Power.</strong>
        </p>

        <br>

        <p>With sincere gratitude,</p>

        <strong>SIAWED Team</strong>
      `,
        };
      }

      if (type === "membership") {
        return {
          subject: "Welcome to SIAWED",
          message: `
        <h2>Dear ${name},</h2>

        <p>Welcome to the <strong>SIAWED</strong> family!</p>

        <p>Your membership has been successfully activated.</p>

        <p>
          We're excited to have you as part of our growing community of women
          who inspire, support and empower one another.
        </p>

        <p>
          Together, let's <strong>Learn, Connect, Grow and Unleash Women Power.</strong>
        </p>

        <br>

        <p>We look forward to your active participation.</p>

        <strong>SIAWED Team</strong>
      `,
        };
      }

      return {
        subject: "",
        message: "",
      };
    };

    const payload = getPayload();

    const mailRes = await transporter.sendMail({
      from: "siawedsupport@gmail.com",
      to: email,
      subject: payload.subject,
      html: payload.message,
    });

    return res.status(200).json({
      success: true,
      //   message: "Message sent successfully. We'll get back to you soon!",
    });
  } catch (error) {
    console.error("Contact API Error:", error);
    return res.status(500).json({
      message:
        "Internal server error. Failed to send message. Please try again later.",
    });
  }
}

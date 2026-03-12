import { Hono } from 'hono';
import { Resend } from 'resend';

type Bindings = {
  RESEND_API_KEY: string;
};

const contact = new Hono<{ Bindings: Bindings }>();

interface ContactFormData {
  name: string;
  email: string;
}

contact.post('/', async (c) => {
  try {
    const body = await c.req.json<ContactFormData>();

    // Validate required fields
    if (!body.name || !body.email) {
      return c.json(
        { error: 'Missing required fields' },
        400
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return c.json(
        { error: 'Invalid email address' },
        400
      );
    }

    // Get Resend API key from environment
    const resendApiKey = c.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not configured');
      return c.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        500
      );
    }

    // Initialize Resend client
    const resend = new Resend(resendApiKey);

    // Build email content
    const emailContent = `
New waitlist request from Hayyat website:

Name: ${body.name}
Email: ${body.email}

---
Sent from Hayyat Waitlist Form
    `.trim();

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Hayyat Waitlist <contact@hayyat.ai>', // This will be updated once domain is verified
      to: ['info@hayyat.ai'],
      replyTo: body.email,
      subject: `Hayyat Waitlist: ${body.name}`,
      text: emailContent,
    });

    console.log('Email sent successfully:', data);

    return c.json({
      success: true,
      message: 'Your message has been sent successfully!'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return c.json(
      {
        error: 'Failed to send message. Please try again later or contact us at info@hayyat.ai',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      500
    );
  }
});

export default contact;

import nodemailer from 'nodemailer';
import { formatFormDataForEmail } from '@/utils/emailService';

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
};

export async function POST(request) {
  try {
    const { formType, subject, recipient, sender, formData } = await request.json();

    // Validate required fields
    if (!formData || !recipient) {
      return Response.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Create transporter
    const transporter = createTransporter();

    // Verify transporter
    try {
      await transporter.verify();
    } catch (error) {
      console.error('Email transporter verification failed:', error);
      return Response.json({ message: 'Email service configuration error' }, { status: 500 });
    }

    // Format email content
    const htmlContent = formatFormDataForEmail(formData, formType);

    // Email options
    const mailOptions = {
      from: sender || process.env.GMAIL_USER,
      to: recipient,
      subject: subject || `New ${formType}`,
      html: htmlContent,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully:', info.messageId);
    
    return Response.json({ 
      success: true, 
      messageId: info.messageId,
      message: 'Email sent successfully' 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    return Response.json({ 
      success: false, 
      message: 'Failed to send email',
      error: error.message 
    }, { status: 500 });
  }
}
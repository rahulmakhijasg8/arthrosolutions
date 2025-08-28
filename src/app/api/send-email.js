// pages/api/send-email.js (if using Pages Router)
// OR
// app/api/send-email/route.js (if using App Router)

import nodemailer from 'nodemailer';
import { formatFormDataForEmail } from '../../utils/emailService';

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
};

// For Pages Router (pages/api/send-email.js)
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { formType, subject, recipient, sender, formData } = req.body;

    // Validate required fields
    if (!formData || !recipient) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Create transporter
    const transporter = createTransporter();

    // Verify transporter
    try {
      await transporter.verify();
    } catch (error) {
      console.error('Email transporter verification failed:', error);
      return res.status(500).json({ message: 'Email service configuration error' });
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
    
    res.status(200).json({ 
      success: true, 
      messageId: info.messageId,
      message: 'Email sent successfully' 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email',
      error: error.message 
    });
  }
}
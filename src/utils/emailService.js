// utils/emailService.js

/**
 * Creates a form submission handler that sends emails
 * @param {Object} config - Configuration object
 * @returns {Function} Form handler function
 */
export const createEmailFormHandler = (config = {}) => {
  const {
    formType = 'Form Submission',
    subject,
    recipient,
    sender,
    onSubmitting,
    onEmailSending,
    onSuccess,
    onError
  } = config;

  return async (formData) => {
    try {
      // Call submitting callback
      if (onSubmitting) onSubmitting();

      // Call email sending callback
      if (onEmailSending) onEmailSending();

      // Prepare email data
      const emailData = {
        formType,
        subject: subject || `New ${formType}`,
        recipient: recipient || process.env.NEXT_PUBLIC_DEFAULT_EMAIL,
        sender: sender || process.env.NEXT_PUBLIC_DEFAULT_SENDER,
        formData
      };

      // Send email via API route
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData)
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(`Email sending failed: ${error}`);
      }

      const result = await response.json();
      
      // Call success callback
      if (onSuccess) onSuccess(result);
      
      return result;

    } catch (error) {
      console.error('Email sending error:', error);
      
      // Call error callback
      if (onError) onError(error);
      
      throw error;
    }
  };
};

/**
 * Formats form data into a readable email format
 * @param {Object} formData - The form data to format
 * @param {string} formType - Type of form for the email header
 * @returns {string} Formatted HTML email content
 */
export const formatFormDataForEmail = (formData, formType = 'Form Submission') => {
  const formatFieldName = (key) => {
    return key
      .replace(/([A-Z])/g, ' $1') // Add space before capital letters
      .replace(/^./, str => str.toUpperCase()) // Capitalize first letter
      .trim();
  };

  const formatFieldValue = (value) => {
    if (value === null || value === undefined || value === '') {
      return '<em>Not provided</em>';
    }
    
    if (typeof value === 'object') {
      return JSON.stringify(value, null, 2);
    }
    
    return String(value);
  };

  // Create the main form data section
  let formDataHtml = '';
  
  Object.entries(formData).forEach(([key, value]) => {
    // Skip empty values
    if (value === null || value === undefined || value === '') {
      return;
    }

    formDataHtml += `
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold; color: #333; width: 200px;">
          ${formatFieldName(key)}:
        </td>
        <td style="padding: 12px; border-bottom: 1px solid #eee; color: #666;">
          ${formatFieldValue(value)}
        </td>
      </tr>
    `;
  });

  // Generate complete HTML email
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>${formType}</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      
      <div style="background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">
          ${formType}
        </h1>
      </div>
      
      <div style="background: white; padding: 30px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 10px 10px;">
        
        <div style="margin-bottom: 30px;">
          <p style="font-size: 16px; color: #666; margin: 0;">
            You have received a new ${formType.toLowerCase()} with the following details:
          </p>
        </div>

        <table style="width: 100%; border-collapse: collapse; background: #f9f9f9; border-radius: 8px; overflow: hidden;">
          ${formDataHtml}
        </table>

        <div style="margin-top: 30px; padding: 20px; background: #f0f8ff; border-radius: 8px; border-left: 4px solid #4CAF50;">
          <p style="margin: 0; color: #666; font-size: 14px;">
            <strong>Timestamp:</strong> ${new Date().toLocaleString()}
          </p>
        </div>
        
      </div>
      
    </body>
    </html>
  `;
};
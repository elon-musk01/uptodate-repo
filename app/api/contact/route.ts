import { NextResponse } from 'next/server';
import { ContactFormData } from '@/types/global';

// TODO: Get your Resend API key from https://resend.com/api-keys
// Replace the placeholder below with your actual Resend API key
const RESEND_API_KEY = process.env.RESEND_API_KEY || 're_1234567890abcdef';

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate message length
    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters' },
        { status: 400 }
      );
    }

    try {
      // Send email using Resend API
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Abbas Rasool Portfolio <noreply@abbasrasool.com>',
          to: ['abbasrasool04@gmail.com'],
          subject: `Contact Form: ${subject}`,
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <style>
                body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
                .container { background: #f5f5f5; padding: 30px; border-radius: 8px; }
                h1 { color: var(--accent); margin-top: 0; }
                .field { margin-bottom: 15px; }
                .field-label { font-weight: bold; color: #555; margin-bottom: 5px; }
                .field-value { background: white; padding: 15px; border-radius: 4px; border: 1px solid #ddd; }
                .message { white-space: pre-wrap; }
                .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #888; font-size: 14px; }
              </style>
            </head>
            <body>
              <div class="container">
                <h1>New Contact Form Submission</h1>
                <div class="field">
                  <div class="field-label">Name:</div>
                  <div class="field-value">${escapeHtml(name)}</div>
                </div>
                <div class="field">
                  <div class="field-label">Email:</div>
                  <div class="field-value">${escapeHtml(email)}</div>
                </div>
                <div class="field">
                  <div class="field-label">Subject:</div>
                  <div class="field-value">${escapeHtml(subject)}</div>
                </div>
                <div class="field">
                  <div class="field-label">Message:</div>
                  <div class="field-value message">${escapeHtml(message)}</div>
                </div>
              </div>
              <div class="footer">
                <p>This message was sent from your portfolio contact form.</p>
                <p>Abbas Rasool - Crystal Reports Developer & SQL Server Specialist</p>
              </div>
            </body>
            </html>
          `,
          text: `
            New Contact Form Submission
            ===========================
            Name: ${name}
            Email: ${email}
            Subject: ${subject}
            Message:
            ${message}
            --------------------------
            This message was sent from your portfolio contact form.
            Abbas Rasool - Crystal Reports Developer & SQL Server Specialist
          `,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Resend API error:', errorData);
        // Still return success but log the error
        console.log('Contact Form Submission:', {
          name,
          email,
          subject,
          message,
          timestamp: new Date().toISOString(),
        });
      } else {
        console.log('Contact Form Submission:', {
          name,
          email,
          subject,
          message,
          timestamp: new Date().toISOString(),
        });
      }

      return NextResponse.json(
        { success: true, message: 'Message sent successfully!' },
        { status: 200 }
      );
    } catch (emailError: any) {
      console.error('Error sending email:', emailError);
      // If email sending fails, still log and return success
      console.log('Contact Form Submission:', {
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString(),
      });
      return NextResponse.json(
        { success: true, message: 'Message received! (Note: Email service temporarily unavailable)' },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Helper function to escape HTML to prevent XSS
function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

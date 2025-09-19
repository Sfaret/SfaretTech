
'use server';

import { z } from 'zod';
import { Resend } from 'resend';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  service: z.string(),
  message: z.string(),
});

export async function sendContactEmail(formData: z.infer<typeof formSchema>) {
    
    const parsed = formSchema.safeParse(formData);
    
    if (!parsed.success) {
        console.error("Invalid form data.", parsed.error.flatten().fieldErrors);
        return { success: false, error: "Invalid form data." };
    }
    
    const { name, email, phone, service, message } = parsed.data;

    if (!process.env.RESEND_API_KEY) {
        console.error("Resend API key is not configured.");
        return { success: false, error: "Server configuration error." };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        // 1. Send email to HR
        await resend.emails.send({
          from: 'noreply@sfarettech.com.ng',
          to: ['hr@sfarettech.com.ng'],
          subject: `New Contact Form Submission: ${service}`,
          html: `
            <h1>New Contact Message</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Service:</strong> ${service}</p>
            <hr />
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
        });
        
        // 2. Send confirmation email to user
        await resend.emails.send({
          from: 'noreply@sfarettech.com.ng',
          to: email,
          subject: "We've Received Your Message",
          html: `<p>Hi ${name},</p><p>Thank you for contacting us. We have received your message regarding "${service}" and will get back to you as soon as possible.</p><p>Best regards,<br/>The SFARET Team</p>`,
        });

        return { success: true };

    } catch (error) {
        console.error("Failed to send email:", error);
        return { success: false, error: "Failed to send contact email." };
    }
}

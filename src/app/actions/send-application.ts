
'use server';

import { z } from 'zod';
import { Resend } from 'resend';

const formSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
    resume: z.instanceof(File),
    jobTitle: z.string(),
});

export async function sendApplicationEmail(formData: FormData) {
    
    const rawFormData = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        resume: formData.get('resume'),
        jobTitle: formData.get('jobTitle'),
    };
    
    const parsed = formSchema.safeParse(rawFormData);
    
    if (!parsed.success) {
        console.error("Invalid form data.", parsed.error.flatten().fieldErrors);
        return { success: false, error: "Invalid form data." };
    }
    
    const { name, email, phone, jobTitle, resume } = parsed.data;

    if (!process.env.RESEND_API_KEY) {
        console.error("Resend API key is not configured.");
        return { success: false, error: "Server configuration error." };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const resumeBuffer = Buffer.from(await resume.arrayBuffer());

    try {
        // 1. Send email to HR
        await resend.emails.send({
          from: 'noreply@sfarettech.com.ng',
          to: ['hr@sfarettech.com.ng'],
          subject: `New Application for ${jobTitle}: ${name}`,
          html: `
            <h1>New Job Application</h1>
            <p><strong>Position:</strong> ${jobTitle}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p>The candidate's resume is attached to this email.</p>
          `,
          attachments: [
             {
                 filename: resume.name,
                 content: resumeBuffer,
             }
          ]
        });
        
        // 2. Send confirmation email to applicant
        await resend.emails.send({
          from: 'noreply@sfarettech.com.ng',
          to: email,
          subject: 'Application Received',
          html: `<p>Hi ${name},</p><p>Thank you for applying for the ${jobTitle} position at SFARET Technologies. We have received your application and will review it shortly.</p><p>Best regards,<br/>The SFARET Team</p>`,
        });

        return { success: true };

    } catch (error) {
        console.error("Failed to send email:", error);
        return { success: false, error: "Failed to send application email." };
    }
}

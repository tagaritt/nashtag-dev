"use server";

import { z } from "zod";
import { contactSchema } from "@/lib/schemas";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (emailFormData: z.infer<typeof contactSchema>) => {
    try {
        const { data, error } = await resend.emails.send({
            from: `A reader from your Dev Portfolio <${process.env.RESEND_FROM_EMAIL}>`,
            to: emailFormData.email,
            subject: `${emailFormData.firstName} saw your work and wants to get in touch!`,
            react: EmailTemplate({ firstName: emailFormData.firstName, lastName: emailFormData.lastName, email: emailFormData.email, message: emailFormData.message }),
        });
    
        if (error) {
            throw error;
            /*return res.status(400).json(error);*/
        }
    } catch (e) {
        throw e;
    }
}
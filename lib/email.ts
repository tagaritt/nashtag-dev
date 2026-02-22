{/*"use server";

import { z } from "zod";
import { contactSchema } from "@/lib/schemas";
import { Resend } from "resend";
import { NextResponse } from "next/server";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

function capitalizeFirstLetter(word: string): string {
    if (!word) return word;
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export const POST = async (req: Request) => {
    try {
        const { firstName, lastName, email, message } = await req.json();
        
        if (!firstName || !lastName|| !email || !message) {
            return NextResponse.json({ error: "All fields are required." }, { status: 400 });
        }
        
        await resend.emails.send({
            from: `A Portfolio Reader <onboarding@resend.dev>`,
            to: 'tagaritt@gmail.com',
            subject: `${capitalizeFirstLetter(firstName)} saw your work and wants to get in touch!`,
            react: EmailTemplate({ firstName: capitalizeFirstLetter(firstName), lastName: capitalizeFirstLetter(lastName), email, message }),
        });
    
        return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
    } catch (e) {
        return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }
}*/}

import { Resend } from "resend";
import { NextResponse } from "next/server";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

function capitalizeFirstLetter(word: string): string {
    if (!word) return word;
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

const contactSchema = z.object({
  firstName: z.string().min(1).max(50),
  lastName: z.string().min(1).max(50),
  email: z.email(),
  message: z.string().min(1).max(1000),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data" },
        { status: 400 }
      );
    }

    const { firstName, lastName, email, message } = parsed.data;
    const fullName = `${capitalizeFirstLetter(firstName)} ${capitalizeFirstLetter(lastName)}`;

    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "tagaritt@gmail.com",
      subject: `${fullName} viewed your portfolio and would like to chat!`,
      replyTo: email,
      text: `Name: ${fullName}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Email failed to send" },
      { status: 500 }
    );
  }
}
"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Loader2, CheckCircle2, AlertCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FloatingInput } from "@/components/ui/floating-inputs"
import { FloatingTextarea } from "@/components/ui/floating-labels"
import { cn } from "@/lib/utils"

const contactSchema = z.object({
  firstName: z.string().min(1, "I'm gonna need that name. Give me SOMETHING.").max(50, "I said a name, not a novel. Let's cut that down to less than 50 characters."),
  lastName: z.string().min(1, "Even Beyoncé has Knowles. I need the last name too.").max(50, "...I'm not reading all that. Keep it under 50 characters, please."),
  email: z.email().min(1, "I promise I won't spam you. I just need a way to get back to you.").max(100, "Now, you KNOW that should get flagged. Let's try again with something less than 100 characters."),
  message: z.string().min(1, "Don't be shy, I won't judge. Let me hear you!").max(1000, "OKAY, okay, chill. Let's start smaller. Try to keep it under 1000 characters, please. Ipromise you I'll read it AND get back to you"),
})

type ContactFormData = z.infer<typeof contactSchema>

type FormStatus = "idle" | "submitting" | "success" | "error"

export function ContactForm() {
  const [status, setStatus] = React.useState<FormStatus>("idle")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus("submitting")

    try {
      // Simulate API call
      await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          // Simulate success (90% chance) or error (10% chance)
          if (Math.random() > 0.1) {
            resolve()
          } else {
            reject(new Error("Submission falied: Message could not be sent."))
          }
        }, 1500)
      })

      console.log("Message sent:", data)
      setStatus("success")
      reset()

      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000)
    } catch {
      setStatus("error")

      // Reset error message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-5"
    >
      {/* Status Messages */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          status === "success" || status === "error"
            ? "max-h-20 opacity-100"
            : "max-h-0 opacity-0"
        )}
      >
        {status === "success" && (
          <div
            className="flex items-center gap-3 rounded-lg bg-success/10 px-4 py-3 text-sm text-success"
            role="status"
            aria-live="polite"
          >
            <CheckCircle2 className="h-5 w-5 shrink-0" />
            <span>
              Your message went through. Chat soon!
            </span>
          </div>
        )}
        {status === "error" && (
          <div
            className="flex items-center gap-3 rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive"
            role="alert"
            aria-live="assertive"
          >
            <AlertCircle className="h-5 w-5 shrink-0" />
            <span>
              Something went wrong. Please try again later.
            </span>
          </div>
        )}
      </div>

      {/* Name Fields */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FloatingInput
          label="First Name"
          {...register("firstName")}
          error={errors.firstName?.message}
          autoComplete="given-name"
        />
        <FloatingInput
          label="Last Name"
          {...register("lastName")}
          error={errors.lastName?.message}
          autoComplete="family-name"
        />
      </div>

      {/* Email Field */}
      <FloatingInput
        label="Email Address"
        type="email"
        {...register("email")}
        error={errors.email?.message}
        autoComplete="email"
      />

      {/* Message Field */}
      <FloatingTextarea
        label="Your Message"
        {...register("message")}
        error={errors.message?.message}
      />

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="mt-2 h-12 w-full text-sm font-medium tracking-wide uppercase sm:w-auto sm:min-w-[200px] sm:self-end"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  )
}

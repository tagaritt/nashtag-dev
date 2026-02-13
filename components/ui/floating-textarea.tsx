"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

export interface FloatingTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
}

const FloatingTextarea = React.forwardRef<
  HTMLTextAreaElement,
  FloatingTextareaProps
>(({ label, error, className, id, ...props }, ref) => {
  const textareaId = id || label.toLowerCase().replace(/\s+/g, "-")

  return (
    <div className="relative">
      <textarea
        ref={ref}
        id={textareaId}
        placeholder=" "
        className={cn(
          "peer flex min-h-[140px] w-full resize-none rounded-md border bg-background px-4 pt-7 pb-3 text-sm text-foreground shadow-none ring-offset-background transition-colors duration-200",
          "placeholder:text-transparent",
          "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-foreground",
          "disabled:cursor-not-allowed disabled:opacity-50",
          error
            ? "border-destructive focus-visible:border-destructive"
            : "border-input",
          className
        )}
        aria-invalid={!!error}
        aria-describedby={error ? `${textareaId}-error` : undefined}
        {...props}
      />
      <Label
        htmlFor={textareaId}
        className={cn(
          "pointer-events-none absolute start-4 top-5 z-10 origin-[0] scale-100 transform cursor-text text-sm text-muted-foreground duration-200",
          "peer-focus:top-2.5 peer-focus:scale-75 peer-focus:text-foreground",
          "peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:scale-75",
          error && "text-destructive peer-focus:text-destructive"
        )}
      >
        {label}
      </Label>
      {error && (
        <p
          id={`${textareaId}-error`}
          className="mt-1.5 text-xs text-destructive"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  )
})
FloatingTextarea.displayName = "FloatingTextarea"

export { FloatingTextarea }

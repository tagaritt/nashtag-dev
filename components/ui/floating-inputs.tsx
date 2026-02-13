"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export interface FloatingInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

const FloatingInput = React.forwardRef<HTMLInputElement, FloatingInputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-")

    return (
      <div className="relative">
        <Input
          ref={ref}
          id={inputId}
          placeholder=" "
          className={cn(
            "peer h-14 rounded-none border-0 border-b bg-transparent px-4 pt-5 pb-2 text-sm shadow-none ring-0 ring-offset-0 transition-colors duration-200",
            "placeholder:text-transparent",
            "focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-b-foreground",
            error
              ? "border-b-destructive focus-visible:border-b-destructive"
              : "border-b-input",
            className
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        <Label
          htmlFor={inputId}
          className={cn(
            "pointer-events-none absolute start-4 top-1/2 z-10 origin-[0] -translate-y-1/2 scale-100 transform cursor-text text-sm text-muted-foreground duration-200",
            "peer-focus:top-3.5 peer-focus:-translate-y-1/2 peer-focus:scale-75 peer-focus:text-foreground",
            "peer-[:not(:placeholder-shown)]:top-3.5 peer-[:not(:placeholder-shown)]:-translate-y-1/2 peer-[:not(:placeholder-shown)]:scale-75",
            error && "text-destructive peer-focus:text-destructive"
          )}
        >
          {label}
        </Label>
        {error && (
          <p
            id={`${inputId}-error`}
            className="mt-1.5 text-xs text-destructive"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    )
  }
)
FloatingInput.displayName = "FloatingInput"

export { FloatingInput }

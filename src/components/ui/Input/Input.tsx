import React, { InputHTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge"
import { inputContainerVariants, inputHelperTextVariants, inputLabelVariants, inputVariants } from "./Input.variants"
import { Label } from "../Label"

export interface InputVariants {
  disabled?: boolean
  endIcon?: boolean
  error?: boolean
  size?: "medium" | "large"
  startIcon?: boolean
}

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "id">,
    Required<Pick<InputHTMLAttributes<HTMLInputElement>, "id">>,
    Omit<InputVariants, "startIcon" | "endIcon"> {
  containerClassName?: string
  disabled?: boolean
  endIcon?: ReactNode
  helperText?: string
  label?: string
  placeholder?: string
  startIcon?: ReactNode
  type?: "text" | "password" | "email" | "number" | "tel" | "url" | "date"
}

export const Input: React.FC<InputProps> = ({
  size = "medium",
  error = false,
  disabled = false,
  className,
  containerClassName,
  label,
  startIcon,
  endIcon,
  helperText,
  type = "text",
  ...props
}) => {
  return (
    <div className={twMerge(inputContainerVariants({ error, disabled }), containerClassName)}>
      {label && (
        <Label
          htmlFor={props.id}
          size="small"
          className={twMerge(inputLabelVariants({ disabled }))}
          required={props.required}
        >
          {label}
        </Label>
      )}
      <div className="relative w-full">
        {startIcon && (
          <div className="pointer-events-none absolute left-6 top-1/2 w-5 -translate-x-1/2 -translate-y-1/2">
            {startIcon}
          </div>
        )}

        <input
          type={type}
          className={twMerge(
            inputVariants({ error, size, startIcon: Boolean(startIcon), endIcon: Boolean(endIcon) }),
            className
          )}
          disabled={disabled}
          name={props.name ?? props.id}
          {...props}
        />

        {endIcon && <div className="absolute right-0 top-1/2 w-5 -translate-x-1/2 -translate-y-1/2">{endIcon}</div>}
      </div>
      {helperText && <p className={twMerge(inputHelperTextVariants({ error }))}>{helperText}</p>}
    </div>
  )
}

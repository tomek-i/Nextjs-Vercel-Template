import React, {  ReactNode, TextareaHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"
import { inputContainerVariants, inputHelperTextVariants, inputLabelVariants, inputVariants } from "./Input.variants"
import { Label } from "../Label"

export interface TextareaVariants {
  disabled?: boolean
  endIcon?: boolean
  error?: boolean
  size?: "medium" | "large"
  startIcon?: boolean
}

export interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size" | "id">,
    Required<Pick<TextareaHTMLAttributes<HTMLTextAreaElement>, "id">>,
    Omit<TextareaVariants, "startIcon" | "endIcon"> {
  containerClassName?: string
  disabled?: boolean
  endIcon?: ReactNode
  helperText?: string
  label?: string
  placeholder?: string
  startIcon?: ReactNode
}

export const Textarea: React.FC<TextareaProps> = ({
  size = "medium",
  error = false,
  disabled = false,
  className,
  containerClassName,
  label,
  startIcon,
  endIcon,
  helperText,
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
          <div className="absolute w-5 -translate-x-1/2 -translate-y-1/2 pointer-events-none left-6 top-1/2">
            {startIcon}
          </div>
        )}

        <textarea
          className={twMerge(
            inputVariants({ error, size, startIcon: Boolean(startIcon), endIcon: Boolean(endIcon) }),
            className
          )}
          disabled={disabled}
          {...props}
        />

        {endIcon && <div className="absolute right-0 w-5 -translate-x-1/2 -translate-y-1/2 top-1/2">{endIcon}</div>}
      </div>
      {helperText && <p className={twMerge(inputHelperTextVariants({ error }))}>{helperText}</p>}
    </div>
  )
}

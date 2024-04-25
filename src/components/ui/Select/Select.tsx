import React, { SelectHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"
import {
  selectContainerVariants,
  selectHelperTextVariants,
  selectLabelVariants,
  selectVariants,
} from "./Select.variants"
import { Label } from "../Label"

export interface SelectVariants {
  disabled?: boolean
  error?: boolean
  size?: "medium" | "large"
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size" | "id">,
    Required<Pick<SelectHTMLAttributes<HTMLSelectElement>, "id">>,
    SelectVariants {
  containerClassName?: string
  disabled?: boolean
  helperText?: string
  label?: string
  //TODO: plaveholder has a different font color then input placeholders
  placeholder?: string
  options: { value: string; label: string }[] | null
}

export const Select: React.FC<SelectProps> = ({
  size = "medium",
  error = false,
  disabled = false,
  className,
  containerClassName,
  label,
  helperText,
  onChange,
  ...props
}) => {
  // <label>
  //           Frequency:
  //           <select name="frequency">
  //             <option value="">Select Frequency</option>
  //             <option value="weekly">Weekly</option>
  //             <option value="fortnightly">Fortnightly</option>
  //             <option value="monthly">Monthly</option>
  //             <option value="yearly">Yearly</option>
  //           </select>
  //         </label>

  return (
    <div className={twMerge(selectContainerVariants({ error, disabled }), containerClassName)}>
      {label && (
        <Label
          htmlFor={props.id}
          size="small"
          className={twMerge(selectLabelVariants({ disabled }))}
          required={props.required}
        >
          {label}
        </Label>
      )}
      <div className="relative w-full">
        <select
          name={props.id}
          className={twMerge(selectVariants({ error, size }), className)}
          disabled={disabled}
          onChange={onChange}
          {...props}
        >
          <option value="">{props.placeholder}</option>
          {props.options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {helperText && <p className={twMerge(selectHelperTextVariants({ error }))}>{helperText}</p>}
    </div>
  )
}

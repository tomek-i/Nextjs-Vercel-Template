import { type VariantProps } from "class-variance-authority"
import { clsx } from "clsx"
import React, { LabelHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"
import { LabelVariants } from "./Label.variants"

type LabelProps = { size?: "small" | "medium" | "large"; required?: boolean } & LabelHTMLAttributes<HTMLLabelElement> &
  VariantProps<typeof LabelVariants>

export const Label: React.FC<LabelProps> = ({ size = "medium", className, htmlFor, ...props }) => {
  return (
    <label className={twMerge(clsx(LabelVariants({ size, className })))} htmlFor={htmlFor} {...props}>
      {props.children}
      {props.required && <span className="text-red-500">*</span>}
    </label>
  )
}

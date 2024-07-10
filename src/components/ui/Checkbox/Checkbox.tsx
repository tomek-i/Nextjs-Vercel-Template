import { clsx } from "clsx"
import React from "react"
import { twMerge } from "tailwind-merge"
import { checkbox, type CheckboxVariants } from "./Checkbox.variants"

export type CheckboxProps = { disabled?: boolean } & React.HTMLAttributes<HTMLDivElement> & CheckboxVariants

export const Checkbox: React.FC<CheckboxProps> = ({
  className = "",
  size = "default",
  variant = "default",
  disabled = false,
  ...props
}) => {
  const style = clsx(checkbox({ variant, disabled, size }))

  return <div className={twMerge(style, className)} {...props}></div>
}

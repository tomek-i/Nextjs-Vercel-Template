import { type VariantProps } from "class-variance-authority"
import { clsx } from "clsx"
import React from "react"
import { twMerge } from "tailwind-merge"
import { SwitchVariants } from "./Switch.variants"

type SwitchProps = { disabled?: false } & React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof SwitchVariants>

export const Switch: React.FC<SwitchProps> = ({
  className = "",
  size = "default",
  variant = "default",
  ...props
}) => {
  return <div className={twMerge(clsx(SwitchVariants({ variant, size, className })))} {...props}></div>
}
import { type VariantProps } from "class-variance-authority"
import { clsx } from "clsx"
import React from "react"
import { twMerge } from "tailwind-merge"
import { RadioVariants } from "./Radio.variants"

type RadioProps = { disabled?: false } & React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof RadioVariants>

export const Radio: React.FC<RadioProps> = ({
  className = "",
  size = "default",
  variant = "default",
  ...props
}) => {
  return <div className={twMerge(clsx(RadioVariants({ variant, size, className })))} {...props}></div>
}
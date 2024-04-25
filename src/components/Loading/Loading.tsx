import { type VariantProps } from "class-variance-authority"
import { clsx } from "clsx"
import React from "react"
import { twMerge } from "tailwind-merge"
import { LoadingVariants } from "./Loading.variants"

type LoadingProps = { disabled?: boolean } & React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof LoadingVariants>

export const Loading: React.FC<LoadingProps> = ({
  className = "",
  size = "default",
  variant = "default",
  ...props
}) => {
  return (
    <div className={twMerge(clsx(LoadingVariants({ variant, size, className })))} {...props}>
      Loading ...
    </div>
  )
}

import { clsx } from "clsx"
import React, { ReactNode } from "react"
import { twMerge } from "tailwind-merge"
import { TagVariants } from "./Tag.variants"

type TagProps = {
  variant?: "primary" | "secondary" | "outlined" | "success" | "error" | "warning"
  startIcon?: ReactNode
  endIcon?: ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export const Tag: React.FC<TagProps> = ({ variant = "primary", className, startIcon, endIcon, children }) => {
  return (
    <div
      className={twMerge(
        clsx(TagVariants({ variant, startIcon: Boolean(startIcon), endIcon: Boolean(endIcon) })),
        className
      )}
    >
      {startIcon && <div className="inline-flex h-4 w-4 items-center justify-start overflow-hidden">{startIcon}</div>}
      <span>{children}</span>
      {endIcon && <div className="inline-flex h-4 w-4 items-center justify-end overflow-hidden">{endIcon}</div>}
    </div>
  )
}

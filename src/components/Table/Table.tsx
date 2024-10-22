import { type VariantProps } from "class-variance-authority"
import { clsx } from "clsx"
import React from "react"
import { twMerge } from "tailwind-merge"
import { TableVariants } from "./Table.variants"

type TableProps = { disabled?: boolean } & React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof TableVariants>

export const Table: React.FC<TableProps> = ({
  className = "",
  size = "default",
  variant = "default",
  ...props
}) => {
  return <div className={twMerge(clsx(TableVariants({ variant, size, className })))} {...props}></div>
}
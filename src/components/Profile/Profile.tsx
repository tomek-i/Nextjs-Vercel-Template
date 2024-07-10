import { type VariantProps } from "class-variance-authority"
import { clsx } from "clsx"
import React from "react"
import { twMerge } from "tailwind-merge"
import { ProfileVariants } from "./Profile.variants"

type ProfileProps = { disabled?: boolean } & React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof ProfileVariants>

export const Profile: React.FC<ProfileProps> = ({
  className = "",
  size = "default",
  variant = "default",
  ...props
}) => {
  return <div className={twMerge(clsx(ProfileVariants({ variant, size, className })))} {...props}></div>
}
import { type VariantProps } from "class-variance-authority"
// import { clsx } from "clsx"
import React from "react"
// import { twMerge } from "tailwind-merge"
import { OverlayVariants } from "./Overlay.variants"

type OverlayProps = {} & React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof OverlayVariants>

export const Overlay: React.FC<OverlayProps> = () => {
  return <div className="absolute inset-0 bg-black/60 opacity-75"></div>
  // return <div className={twMerge(clsx(OverlayVariants({ variant, size, className })))} {...props}></div>
}

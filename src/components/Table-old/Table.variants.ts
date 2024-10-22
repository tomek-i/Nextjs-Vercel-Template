import { cva } from "class-variance-authority"

export const TableVariants = cva("", {
  variants: {
    variant: {
      default: "bg-white text-left text-sm font-light",
    },
    size: {
      default: "w-full min-w-full",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

import { cva } from "class-variance-authority"
import { tv } from "tailwind-variants"

export const SwitchVariants = cva("", {
  variants: {
    variant: {
      default: "text-white bg-blue-600 border-blue-700  hover:bg-blue-700 focus:ring-blue-500",
      disabled: "text-gray-400 bg-gray-100 hover:bg-gray-100 cursor-not-allowed",
    },
    size: {
      default: "w-full px-6 py-3",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

export const SwitchVariantsTv = tv({
  base: "justify-center inline-flex items-center rounded-xl text-center border border-blue-400 transition-colors delay-50",
  variants: {
    intent: {
      primary: "bg-blue-500 text-white",
      secondary: "bg-purple-500 text-white",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "px-4 py-3 text-lg",
    },
    underline: { true: ["underline"], false: [] },
  },
  compoundVariants: [
    {
      size: ["sm", "md"],
      class: "px-3 py-1",
    },
  ],
  defaultVariants: {
    intent: "primary",
    size: "lg",
  },
})

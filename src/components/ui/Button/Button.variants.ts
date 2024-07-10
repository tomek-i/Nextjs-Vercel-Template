import { cva, type VariantProps } from "class-variance-authority"

export const button = cva("px-4 py-2 font-semibold transition duration-200 ease-in-out", {
  variants: {
    variant: {
      primary: "bg-blue-500 text-white",
      secondary: "bg-purple-500 text-white",
      outlined: "border border-blue-500 text-blue-500",
    },
    disabled: {
      true: "cursor-not-allowed bg-slate-200 !text-slate-300",
      false: "",
    },
    icon: {
      true: "inline-flex items-center justify-center gap-2",
      false: "",
    },
    width: {
      default: "w-max",
      full: "w-full",
      auto: "w-auto",
      sm: "w-24",
      md: "w-32",
      lg: "w-40",
      xl: "w-48",
    },
    rounded: {
      none: "rounded-none",
      default: "rounded",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
  },
  compoundVariants: [
    // Apply hover styles for primary and secondary variants when not disabled
    {
      variant: "primary",
      disabled: false,
      class: "hover:bg-blue-600 active:bg-blue-700 focus:ring-2 focus:ring-blue-300",
    },
    {
      variant: "secondary",
      disabled: false,
      class: "hover:bg-purple-600  active:bg-purple-700 focus:ring-2 focus:ring-purple-300",
    },
    // Apply hover styles for outlined variant when not disabled
    {
      variant: "outlined",
      disabled: false,
      class:
        "hover:border-blue-800 hover:text-blue-800 active:text-blue-900 focus:border-blue-900 focus:ring-2 focus:ring-blue-300",
    },
    // Adjusted compound variant for outlined + disabled
    {
      variant: "outlined",
      disabled: true,
      class: " !bg-white !border-slate-300 ",
    },
  ],
  defaultVariants: {
    variant: "primary",
    disabled: false,
    icon: false,
    rounded: "default",
    width: "full",
  },
})

export type ButtonVariants = VariantProps<typeof button>

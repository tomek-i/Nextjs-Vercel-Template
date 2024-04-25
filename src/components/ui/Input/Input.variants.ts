import { cva } from "class-variance-authority"
import { tv } from "tailwind-variants"

export const inputContainerVariants = cva(
  [
    "inline-flex",
    "w-full",
    // "max-w-sm",
    "flex-col",
    "items-start",
    "gap-2",
    "stroke-black",
    "transition-colors",
    "duration-300",
    "ease-in-out",
    "focus-within:stroke-blue-700",
  ],
  {
    variants: {
      error: {
        true: "stroke-red-500 focus-within:stroke-red-500",
        false: "",
      },
      disabled: {
        true: "stroke-slate-400 text-slate-400",
        false: "",
      },
    },
  }
)

export const inputVariants = cva(
  [
    "w-full",
    "rounded",
    "border",
    "border-slate-300",
    "px-3",
    "text-sm",
    "font-medium",
    "placeholder:text-slate-400",
    "outline-none",
    "transition-all",
    "duration-300",
    "ease-in-out",
    "disabled:cursor-not-allowed",
    "disabled:bg-slate-50",
    "disabled:text-slate-400",
    "disabled:placeholder:text-slate-400",
    "focus:border-blue-600",
  ],
  {
    variants: {
      size: {
        large: "py-2.5",
        medium: "py-2",
      },
      error: {
        true: "border-red-500 text-red-500 ring-1 ring-red-500 focus:border-red-500 focus:text-black focus:ring-red-500 focus:ring-offset-0",
        false: "",
      },
      startIcon: {
        true: "pl-10",
        false: "",
      },
      endIcon: {
        true: "pr-10",
        false: "",
      },
    },
  }
)

export const inputHelperTextVariants = cva(
  [
    "max-w-full",
    "text-xs",
    "font-medium",
    "leading-none",
    "text-slate-400",
    "transition-colors",
    "duration-300",
    "ease-in-out",
  ],
  {
    variants: {
      error: {
        true: "text-red-500",
        false: "",
      },
    },
  }
)

export const inputLabelVariants = cva("whitespace-nowrap", {
  variants: {
    disabled: {
      true: "text-slate-400",
      false: "text-black",
    },
  },
})

//TODO: add tv variants based on the above example
export const InputVariantsTv = tv({
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

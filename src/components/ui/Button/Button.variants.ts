import { cva } from "class-variance-authority"
import { tv } from "tailwind-variants"

export const button = cva(
  [
    "group",
    "inline-flex",
    "items-center",
    "justify-center",
    "whitespace-nowrap",
    "rounded",
    "py-2",
    "align-middle",
    "text-sm",
    "font-semibold",
    "leading-none",
    "transition-all",
    "duration-300",
    "ease-in-out",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        primary: "bg-blue-700 stroke-white px-6 text-white hover:bg-blue-950",
        secondary: "bg-blue-50 stroke-blue-700 px-6 text-blue-700 hover:bg-blue-100",
        outlined: "border border-blue-700 bg-transparent stroke-blue-700 px-6 text-blue-700 hover:bg-blue-50",
        text: "stroke-blue-700 px-2 text-blue-700",
        "text-default": "stroke-slate-500 px-2 text-black",
      },
      size: {
        large: "h-10 min-w-10 gap-2",
        medium: "h-9 min-w-9 gap-2",
        small: "h-8 min-w-8 gap-1.5 text-xs",
        xsmall: "h-6 min-w-6 gap-1.5 rounded-md text-xs",
      },
      disabled: {
        true: "",
        false: "",
      },
      href: {
        true: "cursor-pointer",
        false: "",
      },
      iconOnly: {
        true: "p-0",
        false: "",
      },
      startIcon: {
        true: "",
        false: "",
      },
      endIcon: {
        true: "",
        false: "",
      },
      fullWidth: {
        true: "w-full",
        false: "w-min",
      },
    },
    compoundVariants: [
      {
        variant: ["primary", "secondary"],
        class: "disabled:bg-slate-100 disabled:stroke-slate-400 disabled:text-slate-400 disabled:hover:bg-slate-100",
      },
      {
        variant: ["outlined"],
        class:
          "disabled:border-slate-100 disabled:bg-white disabled:stroke-slate-400 disabled:text-slate-400 disabled:hover:bg-white",
      },
      {
        variant: ["primary", "secondary", "outlined"],
        iconOnly: false,
        startIcon: true,
        class: "px-4",
      },
      {
        variant: ["primary", "secondary", "outlined"],
        iconOnly: false,
        endIcon: true,
        class: "px-4",
      },
      {
        variant: ["primary", "secondary", "outlined"],
        iconOnly: false,
        size: ["small", "xsmall"],
        class: "px-2",
      },
      {
        variant: ["text", "text-default"],
        class: "disabled:stroke-slate-400 disabled:text-slate-400",
      },
      {
        variant: ["text"],
        disabled: false,
        class: "hover:stroke-blue-950 hover:text-blue-950",
      },
      {
        variant: ["text-default"],
        disabled: false,
        class: "hover:opacity-80",
      },
    ],
  }
)

export const ButtonVariants = tv({
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

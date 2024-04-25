import { cva } from "class-variance-authority"

export const TagVariants = cva(
  [
    "inline-flex",
    "h-6",
    "max-w-max",
    "cursor-default",
    "items-center",
    "justify-start",
    "gap-1",
    "rounded-full",
    "px-2",
    "py-1",
    "text-center",
    "text-xs",
    "font-semibold",
    // "leading-relaxed",
    "whitespace-nowrap",
  ],
  {
    variants: {
      variant: {
        primary: "bg-blue-700 text-white [&>div>svg]:stroke-white",
        secondary: "bg-blue-50 text-blue-700 [&>div>svg]:stroke-blue-700",
        outlined: "border border-blue-700 text-blue-700 [&>div>svg]:stroke-blue-700",
        success: "border border-green-600 bg-green-50 text-green-700 [&>div>svg]:stroke-green-700",
        error: "border border-red-600 bg-red-50 text-red-700 [&>div>svg]:stroke-red-700",
        warning: "border border-amber-600 bg-amber-50 text-amber-600 [&>div>svg]:stroke-amber-600",
      },
      startIcon: {
        true: "",
        false: "",
      },
      endIcon: {
        true: "",
        false: "",
      },
    },
  }
)

import { cva, type VariantProps } from "class-variance-authority"

export const checkbox = cva("form-checkbox transition duration-200 ease-in-out cursor-pointer", {
  variants: {
    disabled: {
      true: "cursor-not-allowed opacity-50",
      false: "",
    },
    color: {
      // NOTE: due to `appearance-none` it removed the checkbox look and a bunch of others
      // border-orange-200 is visible when unchecked
      // peer is required to make it work so that the TICK svg icon gets visible when this element is checked
      test: "relative rounded-sm size-5 peer appearance-none border border-orange-200 transition-all checked:border-amber-500 checked:bg-amber-500 checked:before:bg-amber-500 hover:before:opacity-10",
      primary: "text-blue-500",
      secondary: "text-purple-500",
      neutral: "text-gray-400",
    },
    size: {
      sm: "size-4",
      md: "size-6",
      lg: "size-8",
    },
  },
  compoundVariants: [
    // Compound variant for checked + disabled
    {
      // checked: true,
      disabled: true,
      class: "checked:bg-slate-200 checked:border-transparent",
    },
    // Compound variant for checked + primary color
    {
      // checked: true,
      color: "primary",
      class: "checked:bg-blue-500 checked:border-transparent",
    },
    // Compound variant for checked + secondary color
    {
      // checked: true,
      color: "secondary",
      class: "checked:bg-purple-500 checked:border-transparent",
    },
    // Compound variant for checked + neutral color
    {
      // checked: true,
      color: "neutral",
      class: "checked:bg-gray-400 checked:border-transparent",
    },
  ],
  defaultVariants: {
    color: "primary",
    size: "md",
    disabled: false,
  },
})

export type CheckboxVariants = VariantProps<typeof checkbox>

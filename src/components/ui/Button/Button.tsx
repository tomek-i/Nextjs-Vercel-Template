import { type VariantProps } from "class-variance-authority"

import { twMerge } from "tailwind-merge"
import { button } from "./Button.variants"

type x = VariantProps<typeof button>
type ButtonVariants = Omit<x, "href">

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement>,
    // VariantProps<typeof button>,
    ButtonVariants,
    Partial<Pick<HTMLAnchorElement, "target">> {
  href?: string
  disabled?: boolean
  fullWidth?: boolean
  iconOnly?: boolean
  icon?: React.ReactNode
  size?: "xsmall" | "small" | "medium" | "large"
  variant?: "primary" | "secondary" | "outlined" | "text" | "text-default"
}

export function Button({
  className,
  href,
  variant = "primary",
  size = "medium",
  iconOnly = false,
  fullWidth = false,
  icon,
  children,
  startIcon,
  endIcon,
  ...props
}: ButtonProps) {
  const Component = href && !props.disabled ? "a" : "button"
  return (
    <Component
      type="button"
      {...(href ? { href: String(href) } : {})}
      className={twMerge(
        button({
          href: Boolean(href),
          variant,
          size,
          iconOnly,
          startIcon: Boolean(startIcon),
          endIcon: Boolean(endIcon),
          disabled: Boolean(props?.disabled),
          fullWidth,
          className,
        })
      )}
      {...props}
    >
      {startIcon && icon}
      <span>{children}</span>
      {endIcon && icon}
    </Component>
  )
}

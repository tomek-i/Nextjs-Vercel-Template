import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { button, type ButtonVariants } from "./Button.variants"

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//     Omit<ButtonVariants, "disabled" | "icon"> {
//   icon?: React.ReactNode
//   iconPosition?: "left" | "right"
// }

export interface ButtonPropsBase
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<ButtonVariants, "disabled" | "icon"> {}

export interface ButtonPropsWithIcon extends ButtonPropsBase {
  icon: React.ReactNode
  iconPosition: "left" | "right"
}

export interface ButtonPropsWithoutIcon extends ButtonPropsBase {
  icon?: never
  iconPosition?: never
}

export type ButtonProps = ButtonPropsWithIcon | ButtonPropsWithoutIcon

export function Button({ variant, disabled, children, icon, rounded, className, ...props }: ButtonProps) {
  const style = clsx(button({ variant, disabled, icon: !!icon, rounded }))
  return (
    <button className={twMerge(style, className)} disabled={disabled} type={props.type ?? "button"} {...props}>
      {icon && props.iconPosition === "left" && <span>{icon}</span>}
      {children ?? "Button"}
      {icon && props.iconPosition === "right" && <span>{icon}</span>}
    </button>
  )
}

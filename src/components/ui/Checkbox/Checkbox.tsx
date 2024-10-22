"use client"
import { clsx } from "clsx"
import React from "react"
import { twMerge } from "tailwind-merge"
import { checkbox, type CheckboxVariants } from "./Checkbox.variants"

export type CheckboxProps = { label: string; checked?: boolean } & React.HTMLAttributes<HTMLInputElement> &
  CheckboxVariants

export const Checkbox: React.FC<CheckboxProps> = ({
  className = "",
  size = "sm",
  color,
  disabled = false,
  label,
  ...props
}) => {
  const style = clsx(checkbox({ disabled, size, color }))

  const tickIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="size-3.5"
      viewBox="0 0 20 20"
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
    >
      <path
        fill-rule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clip-rule="evenodd"
      ></path>
    </svg>
  )
  return (
    // TODO: with the variants I think we can control the label classes as well with kind of compound styles

    <>
      <label className={`flex items-center gap-2 ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}>
        <div className="relative flex">
          <input name={label} type="checkbox" className={twMerge(style, className)} {...props}></input>
          <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  text-white opacity-0 transition-opacity peer-checked:opacity-100">
            {tickIcon}
          </span>
        </div>
        <span className={`${disabled ? "text-gray-400" : ""}`}>{label}</span>
      </label>
    </>
  )
}

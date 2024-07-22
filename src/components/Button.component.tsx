import React, { ComponentProps } from "react"

interface ButtonI extends ComponentProps<"button"> {
  type: "button" | "submit"
  variant: "primary" | "secondary"
  size: "sm" | "md" | "lg"
  children: React.ReactNode
}

export default function Button({
  type,
  variant,
  size,
  children,
  ...rest
}: ButtonI) {
  const variantsTheme = {
    primary:
      "text-white gradient bg-[length:200%_auto] hover:bg-right  ",
    secondary: "bg-white dark:bg-slate-300  text-pink-500  border-pink-500 border-2 dark:border-black dark:text-black",
  }

  const sizesTheme = {
    sm: "px-4 py-1 text-sm",
    md: "px-6 py-2 text-sm",
    lg: "px-8 py-4 text-md",
  }
  return (
    <button
      {...rest}
      className={`z-20 transition-all duration-300 ease-in-out hover:scale-105 flex justify-center ${
        variantsTheme[variant]
      } ${
        sizesTheme[size as keyof typeof sizesTheme]
      } gap-5 items-center rounded-lg text-2xl `}
    >
      {children}
    </button>
  )
}

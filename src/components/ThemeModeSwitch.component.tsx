"use client"
import { useTheme } from "next-themes"
import React from "react"
import { CiLight } from "react-icons/ci"
import { MdOutlineDarkMode } from "react-icons/md"
export default function ThemeModeSwitch() {
  const { theme, setTheme } = useTheme()
  return (
    <div className=" gap-2 items-center flex">
      {theme === "light" ? (
        <MdOutlineDarkMode
          className="text-2xl text-pink-500 dark:text-white hover:scale-105 cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      ) : (
        <CiLight
          className="text-2xl text-pink-500 dark:text-white hover:scale-105 cursor-pointer"
          size="30px"
          onClick={() => setTheme("light")}
        />
      )}
    </div>
  )
}

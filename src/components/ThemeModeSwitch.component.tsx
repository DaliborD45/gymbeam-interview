"use client"
import { useTheme } from "next-themes"
import React from "react"
import { CiLight } from "react-icons/ci"
import { MdOutlineDarkMode } from "react-icons/md"
export default function ThemeModeSwitch() {
  const { setTheme } = useTheme()
  return (
    <div className="flex gap-2 items-center">
      <CiLight
        className="text-2xl text-pink-500 dark:text-white hover:scale-105 cursor-pointer"
        size="30px"
        onClick={() => setTheme("light")}
      />

      <MdOutlineDarkMode
        className="text-2xl text-pink-500 dark:text-white hover:scale-105 cursor-pointer"
        onClick={() => setTheme("dark")}
      />
    </div>
  )
}

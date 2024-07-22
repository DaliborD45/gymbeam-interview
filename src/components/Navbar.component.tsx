"use client"
import React from "react"
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"
import Button from "./Button.component"
import Image from "next/image"
import ThemeModeSwitch from "./ThemeModeSwitch.component"
export default function Navbar() {
  const router = useRouter()
  const { theme } = useTheme()
  return (
    <nav className="z-50 sticky w-full top-0 h-7 flex items-center justify-between px-3 sm:px-5 py-8 bg-blue-200 dark:bg-gray-700">
      <h1
        className="font-bold text-pink-500 hover:cursor-pointer  sm:text-2xl"
        onClick={() => router.push("/")}
      >
        <Image
          src={
            theme === "light"
              ? "/gymbeam-logo-light.svg"
              : "/gymbeam-logo-white.svg"
          }
          alt="Gymbeam"
          className="max-w-24 sm:max-w-full"
          width={150}
          height={150}
        />
      </h1>
      <div className="flex items-center gap-3 sm:gap-5">
        <Button
          variant="primary"
          size="md"
          type="button"
          onClick={() => router.push("/todolist/create")}
        >
          Create Todo List
        </Button>
      </div>
    </nav>
  )
}

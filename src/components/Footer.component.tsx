import React from "react"
import ThemeModeSwitch from "@/components/ThemeModeSwitch.component"

export default function Footer() {
  return (
    <footer>
      <div className="px-3 sm:px-5 flex justify-between items-center h-16 bg-blue-200 dark:bg-gray-700 text-white absolute bottom-0 left-0 w-full max-h-10">
        <p className="text-sm">made by Dalibor Detko</p>
        <div className="">
          <ThemeModeSwitch />
        </div>
      </div>
    </footer>
  )
}

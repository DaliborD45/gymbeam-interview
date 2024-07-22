import React from "react"
import { HiOutlineMenuAlt3 } from "react-icons/hi"

export default function Loading() {
  return (
    <div className="p-3 sm:p-5">
      <div className=" md:max-w-4xl bg-slate-100 dark:bg-slate-400 rounded-lg p-5 mx-auto">
        <div className="max-w-[50%] h-2 bg-gray-400 rounded-full dark:bg-gray-700  mb-2.5 animate-pulse"></div>

        <div className="flex flex-col md:flex-row justify-between gap-5 w-full">
          <div className="flex flex-col  break-words">

            <div className="flex gap-2 items-center mt-4 w-full">
              <HiOutlineMenuAlt3 className="text-md text-black" />
              <p className="text-md dark:text-black">Description</p>
            </div>
            <div className="mt-2 min-w-[50%] h-2 bg-gray-400 rounded-full dark:bg-gray-700  mb-2.5 animate-pulse"></div>
          </div>

          <div className="md:min-w-[10rem]">
            <h3 className="text-sm mb-2 text-black">Settings</h3>
            <div className="flex flex-col gap-2">
              <div className="h-2 bg-gray-400 rounded-full dark:bg-gray-700  mb-2.5 animate-pulse"></div>
              <div className="h-2 bg-gray-400 rounded-full dark:bg-gray-700  mb-2.5 animate-pulse"></div>

              <div className="h-2 bg-gray-400 rounded-full dark:bg-gray-700  mb-2.5 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

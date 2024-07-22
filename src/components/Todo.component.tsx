"use client"
import { TodoT } from "@/types/todo.type"
import React from "react"
import { useRouter } from "next/navigation"
import { MdOutlineDone } from "react-icons/md"
import { IoCreateOutline } from "react-icons/io5"
import { RiProgress3Line } from "react-icons/ri"
import { priorityTagDesign } from "@/helpers/priorityTagDesign"
interface TodoI {
  data: TodoT
}

export default function Todo({ data }: TodoI) {
  const router = useRouter()
  const handleRedirectToTodo = () => {
    router.push(`/todolist/${data.todolistId}/todo/${data.id}`)
  }

  const selectedDesign = priorityTagDesign[data.priority as keyof typeof priorityTagDesign]

  // Now you can use the selected design in your component
  return (
    <div
      className=" relative group w-full bg-slate-100 dark:bg-slate-500 border-2 border-slate-300 shadow-sm rounded-lg p-2 hover:border-pink-500 dark:hover:border-black hover:cursor-pointer ease-linear duration-100"
      onClick={handleRedirectToTodo}
    >
      <IoCreateOutline className="absolute top-1 right-2  group-hover:block hidden  text-pink-500 dark:text-black " />
      <div className="flex gap-2 items-center">
        {data.completed ? (
          <MdOutlineDone className="text-pink-500 dark:text-black" />
        ) : (
          <RiProgress3Line className="text-pink-500 dark:text-black" />
        )}
        <div className="flex flex-col items-start gap-1">
          <div
            className={`${selectedDesign} rounded-xl px-4 py-[3px] text-white  `}
          />

          <h3>{data.title}</h3>
        </div>
      </div>
    </div>
  )
}

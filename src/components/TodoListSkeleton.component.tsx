
import { FiPlusCircle } from "react-icons/fi"

export default function TodoListSkeleton() {
  return (
    <div className="bg-slate-200 rounded-lg  pt-4 pb-2 w-full sm:min-w-[25rem] sm:mx-auto ">
      <div className="flex w-full justify-between px-4 items-center">
        <div className="h-2 bg-gray-400 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5 animate-pulse"></div>
        <div className="relative">
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        </div>
      </div>
      <div className="mx-4 my-2">
        <input
          className="rounded-md w-full py-1 px-3 text-sm focus:outline-pink-500"
          placeholder="Search for a todo"
        />
      </div>
      <div className="mt-4 flex flex-col gap-3 px-2 max-h-[22rem] overflow-scroll mx-2">
        <div className="h-2 bg-gray-400 rounded-full dark:bg-gray-700  mb-2.5 animate-pulse"></div>
        <div className="h-2 bg-gray-400 rounded-full dark:bg-gray-700  mb-2.5 animate-pulse"></div>
        <div className="h-2 bg-gray-400 rounded-full dark:bg-gray-700  mb-2.5 animate-pulse"></div>
        <div className="h-2 bg-gray-400 rounded-full dark:bg-gray-700  mb-2.5 animate-pulse"></div>
        <div className="h-2 bg-gray-400 rounded-full dark:bg-gray-700  animate-pulse"></div>
      </div>
      <div
        className="flex mx-2 mt-2 pt-2 pb-2 pl-2 mb-4  gap-3 hover:bg-slate-300 rounded-lg hover:cursor-pointer"
      >
        <FiPlusCircle className="text-slate-800 text-2xl " />
        <p>Add a todo</p>
      </div>{" "}
    </div>
  )
}

import { getTodos } from "@/api/todo.api"
import { getTodoLists } from "@/api/todoList.api"
import TodoList, { TodoListSkeleton } from "@/components/TodoList.component"
import { TodoListT } from "@/types/todoList.type"
import { Suspense, useState } from "react"

interface TodolistScreenI {
  todolistId: string
  heading: string
}

async function TodolistScreen({ todolistId, heading }: TodolistScreenI) {
  const data = await getTodos(todolistId)
  return <TodoList todos={data} id={todolistId} heading={heading} />
}

export default async function HomePage() {
  const todoLists: TodoListT[] = await getTodoLists()

  return (
    <div className="flex flex-col sm:flex-row gap-5 pr-3 sm:pr-0 pl-3 sm:pl-0   pb-24 sm:pb-5 pt-12 sm:pt-24">
      <div className="flex flex-col sm:flex-row sm: gap-5 w-full  overflow-scroll first:sm:pl-5 last:sm:pr-5 ">
        {todoLists.map((todoList, index) => (
          <div key={index}>
            <Suspense fallback={<TodoListSkeleton />}>
              <TodolistScreen
                todolistId={todoList.id}
                heading={todoList.name}
              />
            </Suspense>
          </div>
        ))}
      </div>
    </div>
  )
}

import { getTodo } from "@/api/todo.api"
import TodoLarge from "@/components/TodoLarge.component"
import React from "react"

export default async function TodoPage({
  params,
}: {
  params: { todolistid: string,id: string }
}) {
  const data = await getTodo(params.todolistid,params.id)
  return (
    <div className="p-3">
      <TodoLarge data={data} />
    </div>
  )
}

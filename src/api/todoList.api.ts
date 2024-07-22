"use server"
import { TodoListT } from "@/types/todoList.type"
import { revalidatePath } from "next/cache"
import { BASE_API_URL } from "./baseApiUrl"

export const getTodoLists = async () => {
  try {
    const response = await fetch(`${BASE_API_URL}/todolist`,{
      cache: "no-cache"
    })
    return response.json()
  } catch (error) {
    console.log(error)
  }
}

export const addTodoList = async (todoList: TodoListT) => {
  try {
    const response = await fetch(`${BASE_API_URL}/todolist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoList),
    })
    revalidatePath("/")
    return response.json()
  } catch (error) {
    console.log(error)
  }
}
